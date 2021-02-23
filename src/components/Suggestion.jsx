import React from "react";

function Suggestion({ title }) {
  return (
    <div>
      <span
        className="recommended__suggestion"
        style={
          title === "All" ? { backgroundColor: "#606060", color: "#fff" } : null
        }
      >
        {title}
      </span>
    </div>
  );
}

export default Suggestion;
