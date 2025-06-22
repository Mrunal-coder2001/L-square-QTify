import React from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import albumCover from "../../assets/album.png";
import line from "../../assets/line.png";

export default function SongBottomPage() {
  const currentTime = "0:38";
  const totalTime = "3:28";

  return (
    <Box
      sx={{
        top: "1710px", // Optional, if you're following Figma
        width: "60%",
        maxWidth: "1440px",
        color: "#fff",
        px: { xs: 2, sm: 6 },
        py: 0,
        zIndex: 1300,
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        wrap="nowrap"
      >
        {/* Left: Album image + text */}
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          sx={{
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={albumCover}
            alt="Album Art"
            sx={{
              width: 50,
              height: 50,
              borderRadius: 1,
              mr: 2,
              flexShrink: 0,
            }}
          />
          <Box sx={{ overflow: "hidden" }}>
            <Typography
              variant="body1"
              fontWeight="bold"
              noWrap
              sx={{ fontSize: "0.95rem" }}
            >
              Song name
            </Typography>
            <Typography
              variant="body2"
              color="gray"
              noWrap
              sx={{ fontSize: "0.8rem" }}
            >
              Album name
            </Typography>
          </Box>
        </Grid>

        {/* Center: Pause + Time-Line-Time */}
        <Grid
          item
          xs={12}
          sm={4}
          md={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            mt: { xs: 2, sm: 0 },
          }}
        >
          <IconButton sx={{ bgcolor: "#fff", p: 0.5, borderRadius: "50%" }}>
            <PauseCircleIcon sx={{ fontSize: 50, color: "#000" }} />
          </IconButton>

          {/* Time + Line + Time */}
          <Box display="flex" alignItems="center" gap={1} width="100%" justifyContent="center">
            <Typography variant="caption" sx={{ minWidth: 34 }}>
              {currentTime}
            </Typography>

            <Box
              component="img"
              src={line}
              alt="line"
              sx={{
                height: 4,
                width: { xs: 150, sm: 250, md: 300 },
                objectFit: "contain",
              }}
            />

            <Typography variant="caption" sx={{ minWidth: 34 }}>
              {totalTime}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
