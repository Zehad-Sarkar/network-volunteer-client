import React from "react";
import { useForm } from "react-hook-form";

const AddEvent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-9/12 p-8 mx-auto border rounded-md"
    >
      <div className="grid grid-cols-2">
        <div className="">
          <label htmlFor="Event-Title">Event-Title</label> <br />
          <input
            className="p-2 border-2 w-80"
         
            {...register("title")}
          />
        </div>
        <div className="">
          <label htmlFor="Event-Date">Event-Date</label> <br />
          <input
            className="p-2 border-2 w-80"
            type="date"
            {...register("date")}
          />
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="">
          <label htmlFor="Event-Description">Event-Description</label> <br />
          <input
            className="h-32 p-2 border-2 w-80"
            {...register("description")}
          />
        </div>
        <div className="">
          <label htmlFor="Event-Bannar">Event-Bannar</label> <br />
          <input className="p-2 border-2 w-80" {...register("bannar")} />
        </div>
      </div>
      <input className="flex btn btn-primary end-0" type="submit" />
    </form>
  );
};

export default AddEvent;
