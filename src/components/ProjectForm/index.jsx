import React, { useState } from "react";
import { ProjectModel } from "../../API/project-model";
import LoadingSpinner from "../../lib/loadingSpinner";
import { toastr } from "../../lib/toastr";
import AdminButton from "../AdminButton";
import InputField from "../InputField";

const ProjectForm = ({ handleCloseProjectForm, fetchProjects }) => {
  const [projectVal, setProjectVal] = useState({
    name: "",
    description: "",
    imageUrl: "",
    createdAt: "",
  });

  const [imageFile, setImageFile] = useState();

  const handleSelectFile = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleFormValChange = (e) => {
    setProjectVal({
      ...projectVal,
      [e.target.name]: e.target.value,
    });
  };

  //Upload the image file
  //get image file url
  //attach image url to form val
  //add current date to form val
  //insert formVal to firebase database
  const handleSubmit = async () => {
    if (!imageFile) return;
    LoadingSpinner.show();
    ProjectModel.uploadProjectImage(imageFile, async (imageUrl) => {
      projectVal.imageUrl = imageUrl;
      projectVal.createdAt = new Date().toDateString();
      await ProjectModel.createProject(projectVal);
      LoadingSpinner.hide();
      toastr.success(
        "Created Successfully!",
        "Your project created successfully..."
      );
      fetchProjects()
      handleCloseProjectForm();
    });
  };

  return (
    <div className="p-2">
      <div className="row">
        <div className="col-md-12 mb-3">
          <input
            type="file"
            onChange={handleSelectFile}
            accept=".png,.jpg,.jpeg,.webp,.gif"
          />
        </div>

        <div className="col-md-12 mb-3">
          <InputField
            onChange={handleFormValChange}
            placeholder="Enter your project name"
            name="name"
          />
        </div>

        <div className="col-md-12 mb-3">
          <InputField
            onChange={handleFormValChange}
            placeholder="Enter your project description"
            name="description"
          />
        </div>

        <div className="col-md-12 mb-3">
          <AdminButton className="w-100 mt-4" onClick={handleSubmit}>
            Submit
          </AdminButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
