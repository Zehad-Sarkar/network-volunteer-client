import React, { useEffect, useState } from "react";
import VolunteerCard from "./VolunteerCard";

const Home = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services/")
      .then((res) => res.json())
      .then((data) => setVolunteers(data));
  }, []);
  return (
    <div>
      <div className="w-1/2 mx-auto">
        <h1 className="text-4xl font-bold">
          I Grow By Helping People In Need.{" "}
        </h1>{" "}
        <br />
        <div className="">
          <div className=" form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="w-full input input-bordered"
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {volunteers.map((volunteer) => (
          <VolunteerCard
            volunteer={volunteer}
            key={volunteer?._id}
          ></VolunteerCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
