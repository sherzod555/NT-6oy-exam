import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
import Aside from "./components/aside/aside";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Aside />
      <main className="container mx-auto px-4 sm:pl-52 md:pl-64 md:pr-16">
        <Outlet />
      </main>
    </>
  );
}
