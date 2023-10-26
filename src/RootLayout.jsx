import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
import Aside from "./components/aside/aside";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Aside />
      <main className="container mx-auto pl-64 pr-16">
        <Outlet />
      </main>
    </>
  );
}
