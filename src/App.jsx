import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header/header";
// import Aside from "./components/aside/aside";
import Main from "./components/main/main";
import Video from "./components/video/video";
import {useState } from "react";


function App() {

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main searchQuery={searchQuery} />,
    },
    {
      path: "/video/:videoId",
      element: <Video />,
    },
  ]);

  return (
    <>
      <Header onSearchSubmit={handleSearchSubmit} />
      {/* <Aside /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
