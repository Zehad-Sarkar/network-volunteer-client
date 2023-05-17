import React, { useEffect, useState } from "react";

const VolunteerCard = ({ volunteer }) => {
  const { image, category } = volunteer;
  // console.log(volunteer);
  
  const colors = ["red", "green", "violet", "purple", "skyblue", "tomato"];
  const [randomColor, setRandomColor] = useState("");
  useEffect(() => {
    const generateColor = Math.floor(Math.random() * colors.length);
    setRandomColor(colors[generateColor]);
  }, []);

  const btnColor = {
    backgroundColor: randomColor,
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  };
  return (
    <div className="shadow-xl card w-96 bg-base-100">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="items-center text-center card-body">
        <div className="w-full card-actions">
          <button className="w-full btn" style={btnColor}>
            {category}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
