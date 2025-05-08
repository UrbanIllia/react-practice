import clsx from "clsx";
import css from "./LoginForm.module.css";
import { useId } from "react";

const LoginForm = ({ handleLogin }) => {
  const id = useId();
  const id2 = useId();
  const handleSubmit = (event) => {
    event.preventDefault();
    // const form = event.target;
    const { login, password } = event.target.elements;
    handleLogin({
      login: login.value,
      password: password.value,
    });
    event.target.reset();
  };
  return (
    <div>
      <form className={clsx("flexRow")} onSubmit={handleSubmit}>
        <input type="text" name="login" />
        <input type="text" name="password" />

        <label htmlFor={id}>Text field label</label>
        <input type="text" id={id} />

        <label htmlFor={id2}>Text field label2</label>
        <input type="text" id={id2} />

        <button className={clsx("button")} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
