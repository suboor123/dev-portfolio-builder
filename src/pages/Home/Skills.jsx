import React, { useEffect, useState } from "react";
import reponseParser from "../../API/reponse-parser";
import { SkillModel } from "../../API/skill-model";
import { UserModel } from "../../API/user-model";
import AdminButton from "../../components/AdminButton";
import Popup from "../../components/Modal";
import SkillForm from "../../components/SkillForm";
import { BsFillTrashFill } from "react-icons/bs";
import swal from "sweetalert";

const Skills = () => {
  const [showSkillForm, setShowSkillForm] = useState(false);
  const [skills, setSkills] = useState([]);

  const handleCloseSkillsForm = () => {
    setShowSkillForm(false);
  };

  const handleOpenSkillForm = () => {
    setShowSkillForm(true);
  };

  const fetchUserSkills = async () => {
    SkillModel.syncSkills().then((snapshot) => {
      if (snapshot) {
        const userSkills = reponseParser(snapshot.val());
        setSkills(userSkills);
      }
    });
  };

  const handleDeleteSkill = (skillId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        SkillModel.deleteSkill(skillId).then(() => fetchUserSkills());
      }
    });
  };

  const renderSkills = () => {
    return skills.map((skill, index) => (
      <div className="col-md-6" key={skill.id}>
        <div>
          <p className="h6 mb-1">
            {skill.name}
            <AdminButton
              onClick={() => handleDeleteSkill(skill.id)}
              className="ml-3"
              appeareance="light"
              size="sm"
            >
              <BsFillTrashFill className="text-danger" />
            </AdminButton>
          </p>
          <div className="progress mb-6 rounded-0" style={{ height: 5 }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: skill.percent + "%" }}
              aria-valuenow={85}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    fetchUserSkills();
  }, []);

  return (
    <div className="row">
      {UserModel.isAdmin && (
        <div className="col-12 mb-5">
          <AdminButton onClick={handleOpenSkillForm}>Add Skills</AdminButton>
        </div>
      )}
      {renderSkills()}
      <Popup
        heading="Add Skills"
        show={showSkillForm}
        handleClose={handleCloseSkillsForm}
        description="Add your programming skills to showcase them"
      >
        <SkillForm
          refreshSkills={fetchUserSkills}
          handleCloseSkillsForm={handleCloseSkillsForm}
        />
      </Popup>
    </div>
  );
};

export default Skills;
