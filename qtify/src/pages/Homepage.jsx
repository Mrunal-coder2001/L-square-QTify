import React, { useState } from "react";
import { Box, Grid, Typography, Tabs, Tab } from "@mui/material";
import Hero from "../components/hero/Hero";
import Card from "../components/card/Card";
import Carousel from "../components/carousel/Carousel";
import FAQPage from "../components/faqpages/FaqPage";
import SongbottomPage from "../components/songbottom/SongbottomPage";
import Divider from '@mui/material/Divider';



export default function Homepage({ topAlbums, newAlbums, songs, filters, searchText }) {
  const [showAllTopAlbums, setShowAllTopAlbums] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("all");

  const toggleTopAlbums = () => {
    setShowAllTopAlbums((prev) => !prev);
  };

  const handleGenreChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const allAlbums = [...topAlbums, ...newAlbums];

  const filteredAlbums = allAlbums.filter((album) =>
    album.title?.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  return (
    <Box
      sx={{
        mt: { xs: '183px', sm: '80px', md: '60px' }, // Responsive top margin
        px: { xs: 2, sm: 4, md: 6 },
        backgroundColor: "var(--black-bg)", // Custom black background
      }}
    >
      <Hero />

      {searchText ? (
        <Box>
          <Typography variant="h5" sx={{ color: "white", mb: 2 }}>
            Search Results
          </Typography>
          <Grid container spacing={2}>
            {filteredAlbums.length > 0 ? (
              filteredAlbums.map((album, index) => (
                <Grid item xs={6} sm={4} md={3} lg={2} key={`search-${index}`}>
                  <Card data={album} type="album" />
                </Grid>
              ))
            ) : (
              <Typography sx={{ color: "white" }}>No albums found.</Typography>
            )}
          </Grid>
        </Box>
      ) : (
        <>
          {/* Top Albums */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 5,
              mb: 2,
            }}
          >
            <Typography variant="h5" sx={{ color: "white" }}>
              Top Albums
            </Typography>
            <Typography
              onClick={toggleTopAlbums}
              sx={{
                color: "#34C94B",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {showAllTopAlbums ? "Collapse" : "Show all"}
            </Typography>
          </Box>
          {showAllTopAlbums ? (
            <Grid container spacing={2}>
              {topAlbums.map((album, index) => (
                <Grid item xs={6} sm={4} md={3} lg={2} key={`top-${index}`}>
                  <Card data={album} type="album" />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Carousel
              data={topAlbums}
              renderComponent={(album) => (
                <Card data={album} type="album" />
              )}
            />
          )}
 <Divider
  sx={{
    borderColor: "#34C94B",      // lime green border
    borderBottomWidth: "2px",    // thickness
    my: 4                         // vertical spacing (margin top & bottom)
  }}
/>
          {/* New Albums */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 5,
              mb: 2,
            }}
          >
            <Typography variant="h5" sx={{ color: "white" }}>
              New Albums
            </Typography>
            <Typography
              sx={{
                color: "#34C94B",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Show all
            </Typography>
          </Box>
          <Carousel
            data={newAlbums}
            renderComponent={(album) => (
              <Card data={album} type="album" />
            )}
          />
        </>
      )}
 <Divider
  sx={{
    borderColor: "#34C94B",      // lime green border
    borderBottomWidth: "2px",    // thickness
    my: 4                         // vertical spacing (margin top & bottom)
  }}
/>
      {/* Songs Section */}
      <Box sx={{ mt: 5, mb: 2 }}>
        <Typography variant="h5" sx={{ color: "white" }}>
          Songs
        </Typography>
      </Box>
      <Tabs
        value={selectedGenre}
        onChange={handleGenreChange}
        TabIndicatorProps={{
          style: { backgroundColor: "#34C94B", height: 3 },
        }}
        textColor="inherit"
        sx={{ mb: 3 }}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
      >
        <Tab
          key="all"
          label="All"
          value="all"
          sx={{
            color: "#FFFFFF",
            fontWeight: 600,
            textTransform: "capitalize",
          }}
        />
        {Array.isArray(filters?.data) &&
          filters.data.map((genre) => (
            <Tab
              key={genre.key}
              label={genre.label}
              value={genre.key}
              sx={{
                color: "#FFFFFF",
                fontWeight: 600,
                textTransform: "capitalize",
              }}
            />
          ))}
      </Tabs>
      <Carousel
        data={filteredSongs}
        renderComponent={(song) => <Card data={song} type="song" />}
      />
 <Divider
  sx={{
    borderColor: "#34C94B",      // lime green border
    borderBottomWidth: "2px",    // thickness
    my: 4                         // vertical spacing (margin top & bottom)
  }}
/>
      <FAQPage />
 <Divider
  sx={{
    borderColor: "white",      // lime green border
    borderBottomWidth: "2px",    // thickness
    my: 4                         // vertical spacing (margin top & bottom)
  }}
/>
 <SongbottomPage/>
      
    </Box>
  );
}
