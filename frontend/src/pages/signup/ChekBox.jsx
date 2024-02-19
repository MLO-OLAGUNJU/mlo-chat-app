import React from "react";

const ChekBox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-blue-600 ">Male</span>
          <input type="checkbox" className="checkbox border-blue-600 " />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-blue-600 ">Female</span>
          <input type="checkbox" className="checkbox border-blue-600" />
        </label>
      </div>
    </div>
  );
};

export default ChekBox;