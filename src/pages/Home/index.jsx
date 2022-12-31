import React, { useEffect, useState } from "react";
import { UserModel } from "../../API/user-model";
import { GlobalConstants } from "../../constants";

const Home = ({user}) => {
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
    <h1 className="mb-2 mb-lg-3">{user.username}</h1>
    <p className="lead mb-0">{user.designation}</p>
    <span className="cover-letter letter-xl text-dark opacity-5">
      A
    </span>
  </div>
  );
};

export default Home;
