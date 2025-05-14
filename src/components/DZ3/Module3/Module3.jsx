import clsx from "clsx";
import LoginForm from "../LoginForm";
import css from "./Module3.module.css";
import SearchBar from "../SearchBar";
import LangSwitcher from "../LangSwitcher";
import { useState } from "react";
import RadioBtn from "../RadioBtn";
import CheckBox from "../CheckBox";
import FormTest from "../FormTest/FormTest";
import UncontroledForm from "../UncontroledForm/UncontroledForm";
import ApplyForm from "./ApplyForm/ApplyForm";
import FormFormik from "./FormFormik/FormFormik";

const Module3 = () => {
  const [select, setSelect] = useState("uk");
  const handleLogin = (userData) => {
    console.log(userData);
  };
  // ...................................................
  const register = (data) => {
    setTimeout(() => {
      console.log("Register is running");
    }, 2000);
    setTimeout(() => {
      console.log("Register is complete");
    }, 5000);
  };
  // ...................................................

  return (
    <>
      <div className={clsx("flexColumn")}>
        <h2>Please login to your account</h2>
        <LoginForm handleLogin={handleLogin} />
      </div>
      <div>
        <SearchBar />
      </div>
      <div className={clsx("flexColumn")} style={{ marginTop: "30px" }}>
        <p>Language: {select}</p>
        <LangSwitcher onSelect={setSelect} value={select} />
      </div>
      <div className={clsx("flexColumn")} style={{ marginTop: "30px" }}>
        <RadioBtn />
      </div>
      <div className={clsx("flexColumn")} style={{ marginTop: "30px" }}>
        <CheckBox />
      </div>
      <div
        className={clsx("flexColumn")}
        style={{ marginTop: "30px", marginBottom: "40px" }}
      >
        <FormTest />
      </div>
      <div>
        <UncontroledForm register={register} />
      </div>
      <div>
        <ApplyForm />
      </div>
      <div>
        <FormFormik />
      </div>
    </>
  );
};

export default Module3;
