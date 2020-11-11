import React from "react";
function Snake(props) {
  return (
    <>
      {props.snakeBlocks.map((block, i) => {
        const style = {
          left: `${block[0]}%`,
          top: `${block[1]}%`
        };
        return <div className="snake block" key={i} style={style}></div>;
      })}
    </>
  );
}
export default Snake;
