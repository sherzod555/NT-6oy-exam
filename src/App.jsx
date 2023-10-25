import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header/header";
// import Aside from "./components/aside/aside";
import Main from "./components/main/main";
import Video from "./components/video/video";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/video/:videoId",
      element: <Video />,
    },
  ]);

  return (
    <>
      <Header />
      {/* <Aside /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
