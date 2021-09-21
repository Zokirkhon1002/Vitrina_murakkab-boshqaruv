import React from "react";

function Loader() {
  return (
    <div className="forButton">
        <button className="btn btn-success forLoader" disabled type="button" style={{cursor: "not-allowed", transform: "scale(2)"}}>
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span> Loading...
    </button>
    </div>
  );
}

export default Loader;
