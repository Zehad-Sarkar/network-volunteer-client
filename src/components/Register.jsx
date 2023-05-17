import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "./AuthProvider";

const Register = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const { user } = useContext(AuthContext);
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/regVolunteer", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  useEffect(() => {
    if (user) {
      setValue("name", user?.displayName);
      setValue("email", user?.email);
      setName(user?.displayName)
      setEmail(user?.email)
   }
  },[user])

  return (
    <div className="w-1/2 p-6 mx-auto border rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
        <label className="mb-2 text-lg">Full Name</label> <br />
        <input
          className="w-full border-b-2 rounded-md "
          {...register("name")}
          // defaultValue={user?.displayName}
          value={name}
          disabled
          readOnly
        />
        <label className="mb-2 text-lg">Your Email</label> <br />
        <input
          className="w-full border-b-2 rounded-md "
          {...register("email")}
          type="email"
          // defaultValue={user?.email}
          value={email}
          disabled
          readOnly
        />
        <label className="mb-2 text-lg">Date </label> <br />
        <input
          className="w-full border-b-2 rounded-md "
          {...register("date")}
          type="date"
        />
        <label className="mb-2 text-lg">Description</label> <br />
        <input
          className="w-full border-b-2 rounded-md "
          {...register("description")}
        />
        <label className="mb-2 text-lg">Organize books at the library.</label>{" "}
        <br />
        <input
          className="w-full border-b-2 rounded-md "
          {...register("organize")}
        />
        <input className="w-full mt-2 btn btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default Register;
