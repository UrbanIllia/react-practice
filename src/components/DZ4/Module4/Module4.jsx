import { ToastContainer } from "react-toastify/unstyled";
import Articles from "../Articles";
import Articles2 from "../Articles2/Articles2";
import Fetch2 from "../Fetch2/Fetch2";
import Photos from "../Photos/Photos";
import UseMemo from "../UseMemoAndUseRef/UseMemo";
import UseRef from "../UseMemoAndUseRef/UseRef";
import Player from "../UseMemoAndUseRef/Player";
import ComponentA from "../useToggle/ComponentA";
import ComponentB from "../useToggle/ComponentB";
import ReactDOM from "react-dom/client";
import UseMemo2 from "../UseMemoAndUseRef/UseMemo2";
import UseRef2 from "../UseMemoAndUseRef/UseRef2";
import UseContextExample from "../Context/UseContextExample";
import Heading from "../../Heading/Heading";
import { useContext } from "react";
import css from "./Module4.module.css";
import { authContext } from "../../../providers/AuthProvider";
import Login from "../../login/Login";
import { CgHello } from "react-icons/cg";
import ImageSearchDZ from "../ImageSearchDZ/ImageSearchDZ";

const Module4 = () => {
  const { user } = useContext(authContext);
  const { logout } = useContext(authContext);
  if (!user) {
    return <Login />;
  }
  return (
    <div>
      <CgHello size={100} className={css.iconHello} />
      <h2 className={css.loginWelcom}>
        Hello <span style={{ color: "blue" }}>{user}</span> !
        &nbsp;&nbsp;&nbsp;This is Module{" "}
        <span style={{ color: "blue" }}>#4</span> !
      </h2>
      <button className={css.out} onClick={logout}>
        Log OUT
      </button>
      <h3 className="text-8xl text-center text-blue-600 my-20">Hello</h3>
      <div
        className="bg-amber-600 w-30 rounded-4xl text-center 
      mx-auto h-10 border-4 flex flex-col items-center justify-center"
      >
        Block
      </div>
      {/* <div>
        <Articles />
      </div> */}
      {/* <div>
        <Fetch2 />
      </div> */}
      {/* <div>
        <Photos />
      </div> */}
      {/* <div>
        <Articles2 />
      </div> */}
      {/* <div>
        <UseMemo />
        <UseMemo2 />
        <UseRef />
        <UseRef2 />
        <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
        <Player source="https://www.w3schools.com/html/mov_bbb.mp4" />
      </div> */}
      {/* <div style={{ padding: "0 300px 0 300px" }}>
        <ComponentA />
        <ComponentB />
      </div> */}
      {/* <div
        className={css.contextWrap}
        style={{ padding: "20px 200px 20px 200px" }}
      >
        <Heading text="UseContext" variant="error" />
        <UseContextExample />
      </div> */}
      <div>
        <ImageSearchDZ />
      </div>
    </div>
  );
};

export default Module4;
