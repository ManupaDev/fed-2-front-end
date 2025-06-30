import { Outlet } from "react-router";
import Navigation from "../components/Navigation";

function RootLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default RootLayout;
