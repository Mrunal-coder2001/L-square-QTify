import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQPage = () => {
  return (
    <Box sx={{ py: 6, color: "#fff" }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: "bold",
            mb: 4,
          }}
        >
          FAQs
        </Typography>

        <Accordion
          sx={{
            bgcolor: "#111",
            color: "#fff",
            border: "1px solid #333",
            mb: 2,
            borderRadius: 1,
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: "limegreen", // Green arrow
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Is QTify free to use?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            bgcolor: "#111",
            color: "#fff",
            border: "1px solid #333",
            borderRadius: 1,
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: "limegreen",
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Can I download and listen to songs offline?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sorry, unfortunately we don't provide the service to download any songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};

export default FAQPage;
