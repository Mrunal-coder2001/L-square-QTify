import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const FeedbackButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#121212',
  color: '#34C94B',
  border: '1px solid #34C94B',
  borderRadius: '12px',
  padding: '10px 16px',
  fontFamily: 'Poppins',
  fontWeight: 600,
  fontSize: '18px',
  lineHeight: '27px',
  letterSpacing: '0.25px',
  textTransform: 'none',
  minWidth: '130px',
  '&:hover': {
    backgroundColor: '#1e1e1e',
    borderColor: '#34C94B',
  },
  // Responsive font sizing
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    padding: '8px 12px',
  },
}));

export default function ButButtonCode() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: {
          xs: 'center',
          md: 'flex-end',
        },
        mt: 2,
        px: {
          xs: 2,
          sm: 3,
          md: 5,
        },
      }}
    >
      <FeedbackButton>
        Give Feedback
      </FeedbackButton>
    </Box>
  );
}
