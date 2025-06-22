import React,{useState} from "react";
import { useLocation} from "react-router-dom";
import { Box, Typography, Chip, Grid,Divider,Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell} from "@mui/material";
import Pagination from '@mui/material/Pagination';

function AlbumDetailPage() {
  
  const { state } = useLocation();
  const album = state?.album;

  if (!album) {
    return (
      <Box sx={{ p: 4, color: "white" }}>
        <Typography variant="h5">Album not found.</Typography>
      </Box>
    );
  }
const [page, setPage] = useState(1);
const songsPerPage = 5;

// Calculate paginated songs
const startIndex = (page - 1) * songsPerPage;
const endIndex = startIndex + songsPerPage;
const paginatedSongs = album.songs.slice(startIndex, endIndex);

// Handle page change
const handleChangePage = (event, value) => {
  setPage(value);
};


  return (
        <Box
            sx={{
              mt: { xs: '183px', sm: '80px', md: '60px' }, // Responsive top margin
              px: { xs: 2, sm: 4, md: 6 },
              backgroundColor: "var(--black-bg)", 
              color:"white"// Custom black background
            }}
          >

  <Grid container  spacing={10}>
  {/* Image */}
  <Grid item xs={12} sm={3} md={3} lg={3} mt={5}>
    <img
      src={album.image}
      alt={album.title}
      width={200}
      style={{ borderRadius: 10 }}
    />
  
  </Grid>

  {/* Title */}
  <Grid item xs={12} sm={9} md={9} lg={9} mt={5}>
    <Typography variant="h4" mt={5} sx={{ mb: 2 }}>
      {album.title}
    </Typography>
    <Typography>{album.description}</Typography>
     <Typography variant="h4" mt={5} sx={{ mb: 2 }}>
    Followers: {album.follows}
    </Typography>
  </Grid>
</Grid>


<Box sx={{ mt: 4 }}>
<Box sx={{ mt: 2 }} display="flex" justifyContent="right">
  <Pagination
    count={Math.ceil(album.songs.length / songsPerPage)}
    page={page}
    onChange={handleChangePage}
    color="primary"
    sx={{
      '& .MuiPaginationItem-root': {
        color: 'white', // Unselected page number text
      },
      '& .Mui-selected': {
        color: 'white', // Selected page number text
      },
    }}
  />
</Box>





  <Table>
    <TableHead>
      <TableRow>
        <TableCell align="left">
          <Typography variant="subtitle2" fontWeight="bold" sx={{ color: "white" }}>Title</Typography>
        </TableCell>
        <TableCell align="left">
          <Typography variant="subtitle2" fontWeight="bold" sx={{ color: "white" }}>Artist</Typography>
        </TableCell>
        <TableCell align="left">
          <Typography variant="subtitle2" fontWeight="bold" sx={{ color: "white" }}>Duration</Typography>
        </TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
  {paginatedSongs.map((song, idx) => (
    <TableRow key={idx}>
      <TableCell>
        <Box display="flex" alignItems="center" gap={2}>
          <img
            src={album.image}
            alt={song.title}
            width={40}
            height={40}
            style={{ borderRadius: 4 }}
          />
          <Typography variant="body1" sx={{ color: "white" }}>{song.title}</Typography>
        </Box>
      </TableCell>
      <TableCell align="left">
        <Typography variant="body2" sx={{ color: "white" }}>{song.artists}</Typography>
      </TableCell>
      <TableCell align="left">
        <Typography variant="body2" sx={{ color: "white" }}>
          {song.durationInMs
            ? `${Math.floor(song.durationInMs / 60000)}:${String(
                Math.floor((song.durationInMs % 60000) / 1000)
              ).padStart(2, "0")}`
            : "Unknown Duration"}
        </Typography>
      </TableCell>
    </TableRow>
  ))}
</TableBody>

  </Table>
</Box>

    </Box>
  );
}

export default AlbumDetailPage;
