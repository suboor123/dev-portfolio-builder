import React, { useEffect, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { ProjectModel } from "../../API/project-model";
import reponseParser from "../../API/reponse-parser";
import { UserModel } from "../../API/user-model";
import AdminButton from "../../components/AdminButton";
import Card from "../../components/Card";
import Popup from "../../components/Modal";
import Panel from "../../components/Panel";
import ProjectForm from "../../components/ProjectForm";
import './style.css'

const Portfolio = () => {
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [projects, setProjects] = useState([]);

  const handleOpenProjectForm = () => {
    setShowProjectForm(true);
  };

  const handleCloseProjectForm = () => {
    setShowProjectForm(false);
  };

  const fetchProjects = async () => {
    ProjectModel.syncProjects().then((snapshot) => {
      if (snapshot) {
        const userProjects = reponseParser(snapshot.val());
        setProjects(userProjects);
      }
    });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDeleteProject = async(projectId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        ProjectModel.deleteProject(projectId).then(() => fetchProjects());
      }
    });
  }

  const renderProjects = () => {
    return projects.map((project) => (
      <div className="col-md-4 card-container" key={project.id}>
        <Link to={`/portfolio/${project.id}`}>
        <Card
          title={project.name}
          description={project.description}
          date={project.createdAt}
          imageUrl={project.imageUrl}
        ></Card>
        </Link>
        <AdminButton className="w-100" onClick={() => handleDeleteProject(project.id)} size="sm" appeareance="danger">
          <BsFillTrashFill className="" />
          </AdminButton> 
      </div>
    ));
  };

  return (
    <Panel heading="Portfolio">
      {UserModel.isAdmin && (
        <div className="text-center mb-4">
          <AdminButton onClick={handleOpenProjectForm}>Add Project</AdminButton>
        </div>
      )}
      <div className="row">
        {renderProjects()}
      </div>
      <Popup
        show={showProjectForm}
        handleClose={handleCloseProjectForm}
        heading="Create Project"
        description="Add your recent project here..."
      >
        <ProjectForm handleCloseProjectForm={handleCloseProjectForm} fetchProjects={fetchProjects} />
      </Popup>
    </Panel>
  );
};

export default Portfolio;
