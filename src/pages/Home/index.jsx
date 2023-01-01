import React, { useEffect, useState } from "react";
import { UserModel } from "../../API/user-model";
import AdminButton from "../../components/AdminButton";
import Popup from "../../components/Modal";
import Panel from "../../components/Panel";
import { GlobalConstants } from "../../constants";
import LoadingSpinner from "../../lib/loadingSpinner";
import { toastr } from "../../lib/toastr";
import Skills from "./Skills";

const Home = ({ user, refreshUser }) => {
  const [showProfilePicModal, setShowProfilePicModal] = useState(false);
  const [imageFile, setImageFile] = useState();

  const handleSelectFile = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleUpload = async () => {
    if (!imageFile) return;
    LoadingSpinner.show()
    await UserModel.setUserProfilePicture(imageFile, () => {
      refreshUser();
      setShowProfilePicModal(false);
      LoadingSpinner.hide();
      toastr.success('Uplaoded successfully!', 'You have changed your profile picture successfully.')
    });
  };

  return (
    <Panel heading="About Me">
      <div className="row">
        <div className="col-md-6 col-lg-4 d-none d-lg-block">
          <img
            className="img-fluid w-100 rounded"
            style={{height: '350px', objectFit: 'cover'}}
            src={user.imageUrl || GlobalConstants.profilePicture}
            alt
          />
          <AdminButton className="w-100" onClick={() => setShowProfilePicModal(true)}>
            Upload Image
          </AdminButton>
        </div>
        <div className="col-lg-8">
          <h3>{user.username}</h3>
          <p className="lead">{user.designation}</p>
          <p className="mb-5">{user.aboutMe}</p>
          <Skills />
        <hr/>

        <a href="./resume.pdf" className="btn btn-primary">
            Download CV
          </a>
          <a
            href="home-1-light-background.html#contact"
            className="btn btn-light scrollto"
          >
            Send Message
          </a>
        </div>
      </div>
      <Popup
        show={showProfilePicModal}
        heading="Profile Picture"
        handleClose={() => setShowProfilePicModal(false)}
        description={`Looking good ${user.username}`}
      >
        <div className="p-3">
          <input
            type="file"
            accept=".png,.jpg,.jpeg,.webp,.gif"
            onChange={handleSelectFile}
            className="form-control my-4"
          />
          <AdminButton onClick={handleUpload}>Upload</AdminButton>
        </div>
      </Popup>
    </Panel>
  );

};

export default Home;
