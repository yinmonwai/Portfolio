import React from "react";
import { Box, Container, Typography, Link as MuiLink } from "@mui/material";
import {  IconButton } from "@mui/material";
import { FaFacebook, FaLinkedin, FaGithub, FaGoogle } from "react-icons/fa";
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
        {/* <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <MuiLink href="#" underline="none">
            Privacy
          </MuiLink>
          <MuiLink href="#" underline="none">
            Terms
          </MuiLink>
        </Box> */}


        {/* <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
      <MuiLink href="#" underline="none">
        Privacy
      </MuiLink>
      <MuiLink href="#" underline="none">
        Terms
      </MuiLink>
      <IconButton sx={{ color: "#fafbfcff" }}
        component="a"
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </IconButton>
      <IconButton sx={{ color: "#fafbfcff" }}
        component="a"
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </IconButton>
      <IconButton sx={{ color: "#fafbfcff" }}
        component="a"
        href="mailto:yourname@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGoogle />
      </IconButton>
      <IconButton sx={{ color: "#fafbfcff" }}
        component="a"
        href="https://github.com/yinmonwai"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </IconButton>
    </Box> */}
      </Container>
    </Box>
  );
}
