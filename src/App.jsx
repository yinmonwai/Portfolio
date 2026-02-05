import React, { useMemo, useState } from "react";
import {
  Box,
  Container,
  Grid,
  createTheme,
  ThemeProvider,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ContactForm from "./components/ContactForm";
import WorkExperience from "./components/WorkExperience";
import Certificates from "./components/Certificates";
import IntroSection from "./components/IntroSection";

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode ? "dark" : "light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: { main: "#0a0a0a" },
                background: { default: "#f6f7f9", paper: "#fff" },
                text: { primary: "#0a0a0a", secondary: "#444" },
              }
            : {
                primary: { main: "#0a0a0a" },
                background: { default: "#0a0a0a", paper: "#111" },
                text: { primary: "#fff", secondary: "#bdbdbd" },
              }),
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        },
      }),
    [mode]
  );

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          background:
            mode === "light"
              ? "linear-gradient(135deg, #f6f7f9 0%, #eef1f5 100%)"
              : "linear-gradient(135deg, #0a0a0a 0%, #151515 100%)",
          color: "text.primary",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        {/* Navbar */}
        <Navbar mode={mode} toggleColorMode={toggleColorMode} />

        {/* ===== Main Content ===== */}
        <Container sx={{ py: { xs: 6, md: 10 } }} maxWidth="lg">
          {/* Hero Section */}
          <Box id="intro" sx={{ scrollMarginTop: "88px" }}>
            <IntroSection />
          </Box>

          {/* About Section */}
          <Box id="about" sx={{ py: { xs: 6, md: 10 }, scrollMarginTop: "88px" }}>
            <About />
          </Box>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6} id="skills" sx={{ scrollMarginTop: "88px" }}>
              <Skills />
            </Grid>
            <Grid item xs={12} md={6} id="experience" sx={{ scrollMarginTop: "88px" }}>
              <Experience />
            </Grid>
            <Grid item xs={12} id="work" sx={{ scrollMarginTop: "88px" }}>
              <WorkExperience />
            </Grid>
            <Grid item xs={12} id="certificates" sx={{ scrollMarginTop: "88px" }}>
              <Certificates />
            </Grid>
          </Grid>
        </Container>

        {/* Contact Section */}
        <Container  maxWidth="md">
          <Box id="contact" sx={{ scrollMarginTop: "50px" }}>
            <ContactForm />
          </Box>
        </Container> 
        {/* <Footer /> */}
      </Box>
    </ThemeProvider>
  );
}

