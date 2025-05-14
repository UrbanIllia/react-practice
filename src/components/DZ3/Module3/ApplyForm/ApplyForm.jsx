import clsx from "clsx";
const INITIAL_DATA = {
  userName: "",
  userEmail: "",
  userAge: "",
  userAbout: "",
  userEvent: "",
  userLevel: "junior",
  agree: false,
};
import css from "./ApplyForm.module.css";
import { useState } from "react";

const ApplyForm = () => {
  const [applyFormData, setApplyFormData] = useState(INITIAL_DATA);
  const handleOnChange = (event) => {
    const { name, value, type } = event.target;
    if (type === "checkbox") {
      return setApplyFormData({
        ...applyFormData,
        [name]: event.target.checked,
      });
    }
    setApplyFormData({ ...applyFormData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(applyFormData);
    setApplyFormData(INITIAL_DATA);
  };
  return (
    <div className={css.formWrap}>
      <h2>Controlled Form</h2>
      <form action="" className={css.form} onSubmit={handleSubmit}>
        <label htmlFor="">
          <span>Name:</span>
          <input
            value={applyFormData.userName}
            type="text"
            name="userName"
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor="">
          <span>Email:</span>
          <input
            value={applyFormData.userEmail}
            type="text"
            name="userEmail"
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor="">
          <span>Age:</span>
          <input
            value={applyFormData.userAge}
            type="number"
            name="userAge"
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor="">
          <span>Event:</span>
          <select
            value={applyFormData.userEvent}
            name="userEvent"
            onChange={handleOnChange}
          >
            <option disabled value="">
              Choose event please
            </option>
            <option value="fora">Fora</option>
            <option value="silpo">Silpo</option>
            <option value="atb">ATB</option>
            <option value="trash">Trash</option>
          </select>
        </label>
        <div className={css.radioDiv}>
          <label htmlFor="">
            <input
              type="radio"
              name="userLevel"
              value="junior"
              onChange={handleOnChange}
              checked={applyFormData.userLevel === "junior"}
            />
            <span>Junior</span>
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="userLevel"
              value="middle"
              onChange={handleOnChange}
              checked={applyFormData.userLevel === "middle"}
            />
            <span>Middle</span>
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="userLevel"
              value="senior"
              onChange={handleOnChange}
              checked={applyFormData.userLevel === "senior"}
            />
            <span>Senior</span>
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="userLevel"
              value="seniorXL"
              onChange={handleOnChange}
              checked={applyFormData.userLevel === "seniorXL"}
            />
            <span>SeniorXL</span>
          </label>
        </div>

        <label htmlFor="">
          <span>About:</span>
          <textarea
            value={applyFormData.userAbout}
            type="text"
            name="userAbout"
            rows={5}
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor="" className={css.checkbox}>
          <input
            type="checkbox"
            onChange={handleOnChange}
            name="agree"
            checked={applyFormData.agree}
          />
          <span>Are you agree with us?</span>
        </label>

        <button className={clsx("button")} disabled={!applyFormData.agree}>
          Apply
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
