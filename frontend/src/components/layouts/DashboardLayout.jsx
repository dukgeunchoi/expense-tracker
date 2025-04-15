import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import { Navigate } from "react-router-dom";

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="">
      <Navbar activeMenu={activeMenu}></Navbar>

      {user && (
        <div className="flex">
          <div className="max-[1080px]:hidden">
            <SideMenu activeMenu={activeMenu} />
          </div>

          <div className="grow mx-5">{children}</div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
