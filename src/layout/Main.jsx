import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Main;
