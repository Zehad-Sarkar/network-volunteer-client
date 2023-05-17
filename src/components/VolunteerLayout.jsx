import React from "react";
import VolunteerList from "./VolunteerList";

const VolunteerLayout = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold text-center">
        Volunteer Register List
      </h1>
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <button className="p-4 rounded-lg btn-primary btn-outline">
            + Add Event
          </button>
        </div>
        <div className="col-span-4">
          <VolunteerList></VolunteerList>
        </div>
      </div>
    </div>
  );
};

export default VolunteerLayout;
