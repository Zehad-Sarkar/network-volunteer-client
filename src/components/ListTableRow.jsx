import React from "react";
import { Link } from "react-router-dom";

const ListTableRow = ({ volunteer, handleDelete }) => {
  console.log(volunteer);
  const { _id, name, email, date, organize } = volunteer;

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>{organize}</td>
      <td>
        <button onClick={() => handleDelete(_id)} className="mr-3 btn">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ListTableRow;
