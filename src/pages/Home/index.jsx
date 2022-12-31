import React, { useEffect, useState } from "react";
import { UserModel } from "../../API/user-model";
import AdminButton from "../../components/AdminButton";
import Popup from "../../components/Modal";
import { GlobalConstants } from "../../constants";

const Home = ({ user, refreshUser }) => {
  const [showProfilePicModal, setShowProfilePicModal] = useState(false);
  const [imageFile, setImageFile] = useState();

  const handleSelectFile = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleUpload = async () => {
    if (!imageFile) return;
    await UserModel.setUserProfilePicture(imageFile, () => {
      refreshUser();
      setShowProfilePicModal(false);
    });
  };

  return (
    <div className="container align-self-center text-center">
      <div className="avatar avatar-xxl mb-6">
        <div className="avatar-shape avatar-shape-rounded bg-white mt-n2 mb-n2 mr-n2" />
        <img
          src={user.imageUrl || GlobalConstants.profilePicture}
          alt
          className="avatar-img rounded-circle shadow-light"
        />
      </div>
      <br />
      <AdminButton onClick={() => setShowProfilePicModal(true)}>
        Change Profile
      </AdminButton>
      <h1 className="mb-2 mb-lg-3">{user.username}</h1>
      <p className="lead mb-0">{user.designation}</p>
      <span className="cover-letter letter-xl text-dark opacity-5">A</span>
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
    </div>
  );
};

export default Home;
