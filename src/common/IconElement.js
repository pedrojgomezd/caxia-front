import React from "react";
import * as Icons from "react-feather";

const IconElement = ({ icon, size, ...props }) => {
  const IconRender = Icons[icon];
  return <IconRender {...{ size }} {...props} />;
};

export default IconElement;
