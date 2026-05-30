import React from "react";

function AddTO() {
  return (
    <>
      <div className="container text-center">
        <div className="row kg-row">

          <div className="col-4">
            <input
              type="text"
              placeholder="Enter To-Do HERE"
            />
          </div>

          <div className="col-4">
            <input type="date" />
          </div>

          <div className="col-2">
            <button
              type="button"
              className="btn kg-button btn-success mb-3 "
            >
              +ADD
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default AddTO;