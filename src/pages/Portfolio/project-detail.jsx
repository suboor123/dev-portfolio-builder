import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectModel } from "../../API/project-model";
import LoadingSpinner from "../../lib/loadingSpinner";
import { toastr } from "../../lib/toastr";

const ProjectDetail = ({user}) => {

    const params = useParams();
    const [project, setProject] = useState();
    
    const fetchProjectDetail = async() => {
        LoadingSpinner.show()
        ProjectModel.syncProjectById(params.id).then((snapshot) => {
            if(snapshot) {
                const p = snapshot.val();
                setProject(p)
                LoadingSpinner.hide()
            }
        })
    };

    useEffect(() => {
        fetchProjectDetail()
    }, [])

  return (
    <section>
     {project && <div className="container">
        <div className="row text-center mb-8">
          <div className="col-lg-9 mx-lg-auto">
            <h2 className="mb-3">{project.name}</h2>
            <p className="text-muted">
             {project.createdAt} by <a className="text-link" >{user.username}</a>
            </p>
          </div>
        </div>
        <img
          className="img-fluid rounded mb-8"
          src={project.imageUrl}
        />
        <div className="row mb-8">
          <div className="col-lg-9 mx-lg-auto">
            <p className="lead">{project.description}</p>
          </div>
        </div>
      </div>}
    </section>
  );
};

export default ProjectDetail;
