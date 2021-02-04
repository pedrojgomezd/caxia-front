import React, { ReactNode } from "react";
import { Menu } from "react-feather";

const Header = ({
  childrenLeft,
  childrenRight,
  childrenAvatar,
  handleButtonMenu,
}) => {
  return (
    <div className="sm:flex sm:justify-between sm:items-center sm:py-1 bg-blue-900 text-white">
      <div className="container mx-auto w-4/5">
        <div className="flex justify-between w-full items-center">
          <div className="w-6/12 flex items-center space-x-2">
            <div className="w-full">{childrenLeft}</div>
          </div>

          {/**Icon y profiles */}
          <nav className="pt-2 pb-4 sm:flex sm:p-0 items-center space-x-2 ">
            <div className="flex space-x-6 mr-4 items-center">
              {childrenRight}
            </div>

            {childrenAvatar}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
