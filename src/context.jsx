import { useState, createContext } from "react";

const DataContext = createContext();

const DataProvider = function ({ children }) {
  const [videos, setVideos] = useState([]);
  const [searchVideos, setSearchVideos] = useState([]);

  return (
    <DataContext.Provider
      value={{ videos, setVideos, searchVideos, setSearchVideos }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
export { DataContext };
