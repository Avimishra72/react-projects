import React from "react";

function Dropdown({ name, id }) {
  return (
    <>
      {/* Dropdown Starts */}
      <div className="w-[400px]">
        <select
          name={name}
          id={id}
          className="w-full h-[50px] bg-[var(--bl)] text-white px-2 text-xl"
        >
          <option value="someOption">Some option</option>
          <option value="otherOption">Other option</option>
        </select>
      </div>
      {/* Dropdown Ends */}
    </>
  );
}

export default Dropdown;
