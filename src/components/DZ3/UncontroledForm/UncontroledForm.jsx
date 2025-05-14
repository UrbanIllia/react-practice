import clsx from "clsx";
import css from "./UncontroledForm.module.css";
import { useState } from "react";
const INITIAL_STATE = {
  userName: "",
  userMail: "",
  userPass: "",
  userAge: "",
};
const UncontroledForm = ({ register }) => {
  const [registration, setRegistration] = useState(INITIAL_STATE);
  const handleSubmit = (event) => {
    event.preventDefault();
    setRegistration(INITIAL_STATE);
  };
  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    const { name, value } = event.target;
    // setRegistration((previous) => ({
    //   ...previous,
    //   [name]: value,
    // }));
    // setRegistration({
    //   ...registration,
    //   [event.target.name]: event.target.value,
    // });
    setRegistration({ ...registration, [name]: value });
  };
  return (
    <div className={css.formWrap}>
      <h3
        style={{
          alignSelf: "center",
          width: "270px",
          margin: "10px auto",
          fontSize: "28px",
        }}
      >
        Uncontrolled Form
      </h3>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor="">
          <h3>Name</h3>
          <input
            value={registration.userName}
            type="text"
            name="userName"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          <h3>Mail</h3>
          <input
            value={registration.userMail}
            type="text"
            name="userMail"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          <h3>Age</h3>
          <input
            value={registration.userAge}
            type="text"
            name="userAge"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          <h3>Country:</h3>
          <select
            value={registration.userCountry}
            name="userCountry"
            onChange={handleChange}
          >
            <option disabled value="">
              Choose country
            </option>
            <option value="uk">Ukraine</option>
            <option value="cd">Canada</option>
          </select>
        </label>
        <label htmlFor="">
          <h3>Password</h3>
          <input
            value={registration.userPass}
            type="text"
            name="userPass"
            onChange={handleChange}
          />
        </label>
        <button
          className={clsx("button")}
          style={{ width: "100%", fontSize: "26px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UncontroledForm;
