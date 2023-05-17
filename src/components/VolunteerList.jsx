import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import ListTableRow from "./ListTableRow";

const VolunteerList = () => {
  const [volunteers, setVolunteers] = useState([]);
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/volunteer?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setVolunteers(data);
      });
  }, [user]);
  if (loading) {
    return <div>loading...</div>;
  }

  const handleDelete = (id) => {
    console.log("deleted id", id);
    fetch(`http://localhost:5000/deletedItem/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = volunteers.filter(
            (volunter) => volunter._id !== id
          );
          setVolunteers(remaining);
        }
      });
  };

  return (
    <div className="p-4 overflow-x-auto">
      <p className="mt-8 mb-8 mr-3 font-bold text-center">
        Volunteer Count:{volunteers.length}
      </p>
      <table className="table w-full table-compact">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email-Id</th>
            <th>Register-Date</th>
            <th>Volunteer-List</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map((volunteer) => (
            <ListTableRow
              key={volunteer._id}
              volunteer={volunteer}
              handleDelete={handleDelete}
            ></ListTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VolunteerList;
