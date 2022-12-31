import React, { useState } from 'react'

//TODO: USER `FORMIK` FOR FORM HANDLING

const UserForm = () => {

    const [userForm, setUserForm] = useState({
        username: '',
        email: '',
        designation: '',
        aboutMe: '',
        phoneNumber: '',
        location: '',
    });

    const [userSocialAccount, setUserSocialAccount] = useState({
        linkedIn: '',
        github: '',
        twitter: '',
    })

  return (
    <div>UserForm</div>
  )
}

export default UserForm