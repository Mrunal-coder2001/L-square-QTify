import { AppBar, Toolbar, Box } from "@mui/material";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import Buttons from "../button/ButtonCode";

function Navbar({ topAlbums, newAlbums, onSearchChange }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#34C94B",
        width: "100%",
        boxShadow: "none",
        padding: {
          xs: "8px 12px",
          sm: "10px 20px",
          md: "10px 22px",
        },
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1440px",
          mx: "auto",
          px: 0,
          gap: {
            xs: 1,
            sm: 0,
          },
        }}
      >
        {/* Logo left - Fixed: vertical center + left space */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            ml: { xs: 0, sm: 1.5, md: 2 }, // Add space on the left
          }}
        >
          <Logo />
        </Box>

        {/* Search center */}
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "60%",
              md: "50%",
              lg: "40%",
            },
            mt: {
              xs: 1,
              sm: 0,
            },
          }}
        >
          <Search
            topAlbums={topAlbums}
            newAlbums={newAlbums}
            onSearchChange={onSearchChange}
          />
        </Box>

        {/* Buttons right */}
        <Box
          sx={{
            mt: {
              xs: 1,
              sm: 0,
            },
          }}
        >
          <Buttons />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
