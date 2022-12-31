import React, { useState } from "react";
import { UserModel } from "../../API/user-model";
import Button from "../Button";
import InputField from "../InputField";
//TODO: USER `FORMIK` FOR FORM HANDLING

const UserForm = () => {
  const [userForm, setUserForm] = useState({
    username: "",
    email: "",
    designation: "",
    aboutMe: "",
    phoneNumber: "",
    location: "",
  });

  const [userSocialAccount, setUserSocialAccount] = useState({
    linkedIn: "",
    github: "",
    twitter: "",
  });

  const handleUserFormChange = (e) => {
    setUserForm({
        ...userForm,
        [e.target.name]: e.target.value
    })
  }

  const handleUserSocialAccountChange = (e) => {
    setUserSocialAccount({
        ...userSocialAccount,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async() => {
    const user = {...userForm, socialAccounts: {
        ...userSocialAccount
    }};

    await UserModel.createUser(user);
    window.location.reload();
  }

  return (
    <div className="p-3">
      <div className="row">
        <div className="col-md-6 mb-4">
          <InputField onChange={handleUserFormChange} placeholder="Enter your name" name="username" />
        </div>
        <div className="col-md-6 mb-4">
          <InputField onChange={handleUserFormChange} placeholder="Enter your email address" name="email" />
        </div>
        <div className="col-md-6 mb-4">
          <InputField onChange={handleUserFormChange} placeholder="Enter your designation" name="designation" />
        </div>
        <div className="col-md-6 mb-4">
          <InputField onChange={handleUserFormChange}
            placeholder="Enter your email phone number"
            name="phoneNumber"
          />
        </div>

        <div className="col-md-12 mb-4">
          <InputField onChange={handleUserFormChange} placeholder="Enter your location" name="location" />
        </div>
        <div className="col-md-12 mb-4">
          <InputField onChange={handleUserFormChange} placeholder="Enter about me" name="aboutMe" />
        </div>

        <hr />

        <div className="col-md-6 mb-4">
          <InputField onChange={handleUserSocialAccountChange} placeholder="LinkedIn Url" name="linkedIn" />
        </div>
        <div className="col-md-6 mb-4">
          <InputField onChange={handleUserSocialAccountChange} placeholder="Github Url" name="github" />
        </div>
        <div className="col-md-6 mb-4">
          <InputField onChange={handleUserSocialAccountChange} placeholder="Twitter Url" name="twitter" />
        </div>
      </div>
      <div className="mt-3">
        <Button className="w-100" onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default UserForm;
