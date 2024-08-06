import React from "react";

const TileContent = ({ date, tileClassName }) => {
  return <div className={`currentMonthTile ${tileClassName({ date })}`} />;
};

export default TileContent;
