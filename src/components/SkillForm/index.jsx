import React, { useState } from "react";
import { Slider, toaster } from "rsuite";
import { SkillModel } from "../../API/skill-model";
import LoadingSpinner from "../../lib/loadingSpinner";
import { toastr } from "../../lib/toastr";
import AdminButton from "../AdminButton";
import InputField from "../InputField";

const SkillForm = ({ handleCloseSkillsForm, refreshSkills }) => {
  const [skillVal, setSkillVal] = useState({
    name: "",
    percent: 0,
  });

  const handleSkillNameChange = (e) => {
    setSkillVal({
      ...skillVal,
      name: e.target.value,
    });
  };

  const handleSkillPercentChange = (percent) => {
    setSkillVal({
      ...skillVal,
      percent: percent,
    });
  };

  const handleSubmit = async () => {
    LoadingSpinner.show();
    await SkillModel.createSkill(skillVal);
    await refreshSkills();
    toastr.success('Created Successfully!', 'Your new skill is added')
    handleCloseSkillsForm();
    LoadingSpinner.hide();
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <InputField
          onChange={handleSkillNameChange}
          placeholder="Enter your skill name"
        />
      </div>
      <div className="col-md-12 mt-4">
        <div className="p-3">
          <p className="lead mb-2">Select percentage</p>
          <Slider onChange={handleSkillPercentChange} />
        </div>
      </div>
      <div className="col-md-12">
        <AdminButton onClick={handleSubmit} className="w-100 mt-4">
          Submit
        </AdminButton>
      </div>
    </div>
  );
};

export default SkillForm;
