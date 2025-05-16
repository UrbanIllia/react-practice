import { useEffect, useState } from "react";
import Heading from "../../../Heading/Heading";
import css from "./FormikLogin.module.css";
import Login from "./Login";
import clsx from "clsx";
import AddPost from "./AddPost";

const FormikLogin = () => {
  const [user, setUser] = useState(
    () => localStorage.getItem("user-auth") ?? ""
  );
  const [posts, setPosts] = useState([]);
  const handleAddPost = (post) => {
    const newPost = { ...post, id: crypto.randomUUID(), author: user };
    setPosts([...posts, newPost]);
  };
  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser("");
  };

  useEffect(() => {
    localStorage.setItem("user-auth", user);
  }, [user]);

  if (!user) {
    return (
      <section className={css.formikLogin}>
        <Heading text="Formik Login" />
        <Login handleLogin={handleLogin} />
      </section>
    );
  }
  return (
    <div className={css.inWrap}>
      <Heading text="Formik Login" />
      {user && <h2 className={css.welcome}>Welcome, {user}</h2>}
      <button className={clsx("button", css.btn)} onClick={handleLogout}>
        Log out
      </button>
      <AddPost handleAddPost={handleAddPost} author={user} />
    </div>
  );
};

export default FormikLogin;
