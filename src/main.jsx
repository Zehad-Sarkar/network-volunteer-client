import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import VolunteerList from "./components/VolunteerList";
import VolunteerLayout from "./components/VolunteerLayout";
import AuthProvider from "./components/AuthProvider";
import AddEvent from "./components/AddEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/volunteerPage",
        element: <VolunteerLayout></VolunteerLayout>
      },
      {
        path: "/volunteer",
        element: <VolunteerList></VolunteerList>
      },
      {
        path: "/events",
        element: <AddEvent></AddEvent>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
