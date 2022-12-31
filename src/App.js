import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import { UserModel } from "./API/user-model";
import Popup from "./components/Modal";
import UserForm from "./components/UserForm";
import "rsuite/dist/rsuite.min.css";


function App() {
  const [user, setUser] = useState();
  const [showUserForm, setShowUserForm] = useState(false);

  const fetchUser = async () => {
    const user = await (await UserModel.syncUser()).val();
    if (user) setUser(user);
    else setShowUserForm(true);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const renderUserForm = () => {
    return <>
      <Popup size="full" heading="User Form" show={showUserForm} handleClose={() => {}}>
        <UserForm />
      </Popup>
    </>;
  };

  return (
    <>
      <BrowserRouter>
        {user && (
          <>
            <Sidebar user={user} />
            <Main>
              <Routes>
                <Route path="/"  element={<Home refreshUser={fetchUser} user={user} />} />
                <Route path="/about" element={<About user={user} />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Main>
          </>
        )}
        {renderUserForm()}
      </BrowserRouter>
    </>
  );
}

export default App;
