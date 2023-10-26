import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DataProvider from "./context";
import Main from "./pages/main/main";
import Video from "./pages/video/video";
import Search from "./pages/search/search";
import RootLayout from "./RootLayout";
import Header from "./components/header/header";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: "/search",
          element: <Search />,
        },
      ],
    },
    {
      path: "/video/:videoId",
      element: (
        <>
          <Header />
          <Video />
        </>
      ),
    },
  ]);

  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  );
}

export default App;
