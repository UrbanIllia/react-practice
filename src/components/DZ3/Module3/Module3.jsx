import clsx from "clsx";
import LoginForm from "../LoginForm";
import css from "./Module3.module.css";
import SearchBar from "../SearchBar";
import LangSwitcher from "../LangSwitcher";
import { useState } from "react";
import RadioBtn from "../RadioBtn";
import CheckBox from "../CheckBox";
import FormTest from "../FormTest/FormTest";

const Module3 = () => {
  const [select, setSelect] = useState("uk");
  const handleLogin = (userData) => {
    console.log(userData);
  };
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
      <div className={clsx("flexColumn")} style={{ marginTop: "30px" }}>
        <FormTest />
      </div>
    </>
  );
};

export default Module3;
