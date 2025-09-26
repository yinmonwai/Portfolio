import React from "react";
import { Box, Container, Typography, Link as MuiLink } from "@mui/material";
export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ py: 4, borderTop: "1px solid", borderColor: "divider" }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2" sx={{ color:"#fafbfcff" }}>
          © {new Date().getFullYear()} FullStackDev — Built with React 
        </Typography>
      </Container>
    </Box>
  );
}
