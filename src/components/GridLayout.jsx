import React from "react";
import "./GridLayout.css";

function GridLayout({ children, columns = 3 }) {
  return (
    <div
      className="grid-layout"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
}

export default GridLayout;
