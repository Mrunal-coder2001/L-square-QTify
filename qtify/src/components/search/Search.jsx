import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Search({ topAlbums = [], newAlbums = [], onSearchChange }) {
  const combinedAlbums = [...topAlbums, ...newAlbums];
  const albumTitles = combinedAlbums.map((album) => album.title || '');

  return (
    <Box
      sx={{
        width: {
          xs: '90%',
          sm: '70%',
          md: '100%',
          lg: '100%',
        },
        margin: '0 auto',
      }}
    >
      <Autocomplete
        freeSolo
        disablePortal
        options={albumTitles}
        onInputChange={(event, newInputValue) => {
          onSearchChange(newInputValue); // ✅ call parent handler
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search a song of your choice"
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: 'white',
              borderRadius: '8px',
              fontFamily: 'Poppins',
            }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: '#999' }} />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </Box>
  );
}

export default Search;
