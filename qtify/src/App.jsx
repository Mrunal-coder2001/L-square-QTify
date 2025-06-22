// App.js
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/Homepage";
import AlbumDetailPage from "./pages/AlbumDetailPage"; // 👈 Create this page
import {
  fetchTopAlbums,
  fetchNewAlbums,
  fetchSongs,
  fetchFilters
} from "./api/api";
import "./App.css";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [filters, setFilters] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getTopAlbums = async () => setTopAlbums(await fetchTopAlbums());
    const getNewAlbums = async () => setNewAlbums(await fetchNewAlbums());
    const getSongs = async () => setSongs(await fetchSongs());
    const getFilters = async () => setFilters(await fetchFilters());

    getTopAlbums();
    getNewAlbums();
    getSongs();
    getFilters();
  }, []);

  return (
    <Router>
      <Navbar
        topAlbums={topAlbums}
        newAlbums={newAlbums}
        onSearchChange={setSearchText}
      />
      <div className="myCSS">
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                topAlbums={topAlbums}
                newAlbums={newAlbums}
                songs={songs}
                filters={filters}
                searchText={searchText}
              />
            }
          />
          <Route path="/album/:id" element={<AlbumDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
