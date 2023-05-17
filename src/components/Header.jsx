import React, { useContext } from "react";
import logo from "../assets/logos/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const navItem = (
    <>
      <Link className="ml-4 text-lg font-medium" to="/">
        Home
      </Link>
      <Link className="ml-4 text-lg font-medium" to="/">
        Donation
      </Link>

      <Link className="ml-4 text-lg font-medium" to="/events">
        Events
      </Link>
      <Link className="ml-4 mr-4 text-lg font-medium" to="/volunteer">
        Volunteers
      </Link>
    </>
  );
  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        alert('sign out successfull')
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  return (
    <div className="navbar">
      <div className="navbar-start">
        <img className="w-28" src={logo} alt="" />
      </div>
      <div className="navbar-center">
        {navItem}
        <div className="text-3xl font-bold text-orange-600">
          {user && user ? (
            <>
              <span>{user?.displayName || user?.email}</span>
              <button className="ml-3 text-blue-900" onClick={handleSignOut}>
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
      <div className="navbar-end">
        <div className="flex gap-3">
          <Link to="/register">
            <button className="btn">Register</button>
          </Link>
          <Link to="/">
            <button className="btn">Admin</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
