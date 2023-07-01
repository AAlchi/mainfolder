import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BsCameraVideo } from "react-icons/bs";
import { GiShadowFollower } from "react-icons/gi";
import { MdFollowTheSigns } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-5">
        <ul
          style={{ height: "600px" }}
          className="hidden lg:flex md:flex justify-evenly flex-col"
        >
          <h2 className="text-2xl">HSS</h2>

          <li className="text-lg font-bold-10000 flex flex-row items-center gap-1">
            <BiHomeAlt size={30} />{" "}
            <div className="hidden font-bold lg:block">Home</div>
          </li>
          <li className="text-lg font-bold-10000 flex flex-row items-center gap-1">
            <CgProfile size={30} />
            <div className="hidden font-bold lg:block">Profile</div>
          </li>
          <li className="text-lg font-bold-10000 flex flex-row items-center gap-1">
            <BsCameraVideo size={30} />
            <div className="hidden font-bold lg:block">HS Video</div>
          </li>
          <li className="text-lg font-bold-10000 flex flex-row items-center gap-1">
            <GiShadowFollower size={30} />
            <div className="hidden font-bold lg:block">Followers</div>
          </li>
          <li className="text-lg font-bold-10000 flex flex-row items-center gap-1">
            <MdFollowTheSigns size={30} />
            <div className="hidden font-bold lg:block">Following</div>
          </li>
          <li className="text-lg font-bold-10000 flex flex-row items-center gap-1">
            <AiOutlineArrowLeft size={30} />
            <div className="hidden font-bold lg:block">Log Out</div>
          </li>
        </ul>
      </div>

      <ul
        style={{ position: "absolute", bottom: "0", width: "100%" }}
        className="flex md:hidden lg:hidden  justify-evenly mb-3"
      >
        <li className="text-lg font-bold-10000 flex flex-row items-center gap-1">
          <BiHomeAlt size={30} />{" "}
        </li>
        <li className="text-lg font-bold-10000 flex flex-row items-center gap-1">
          <CgProfile size={30} />
        </li>
        <li className="text-lg font-bold-10000 flex flex-row items-center gap-1">
          <BsCameraVideo size={30} />
        </li>
        <li className="text-lg font-bold-10000 flex flex-row items-center gap-1">
          <FiSettings size={30} />
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
