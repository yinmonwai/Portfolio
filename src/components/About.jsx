import React, { useMemo, useState } from "react";
import {
  Typography,
  Container,
  Box,
  CssBaseline,
  Grid,
  Card,
  CardMedia,
  CardContent,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import profile from "../assets/profile2.jpg";

export default function About() {
  // Theme setup
  const [mode, setMode] = useState("light");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                background: { default: "#f8fafc", paper: "#ffffff" },
                text: { primary: "#1e293b", secondary: "#475569" },
              }
            : {
                background: { default: "#0f172a", paper: "#1e293b" },
                text: { primary: "#f1f5f9", secondary: "#cbd5e1" },
              }),
        },
        typography: {
          fontFamily: "'Poppins', sans-serif",
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const about = {
    description:
      "I’m a Full Stack Web Developer with experience in building responsive and scalable web applications. Highly skilled and dedicated web developer with a strong background in HTML, CSS, Bootstrap, TailwindCSS, and JavaScript. Proficient in Oracle SQL and experienced in PHP programming, Laravel, Livewire, MySQL, and Laravel with APIs. Possess extensive knowledge of ReactJS, MUI, Ant Design, Shadcn, Next.js, Node.js,express.js and MongoDB. Knowledgeable of React Native for mobile application design. Committed to delivering top-quality web solutions, version control with Git and GitHub, and collaboration using Microsoft Teams, Bitbucket, and ClickUp. I enjoy solving problems and writing clean, maintainable code with a focus on modern, user-friendly solutions that work across devices.",
    image: profile,
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* About Section */}
      <Box
        id="about"
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 6 },
        
        }}
      >
        <Container maxWidth="lg">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 8,
                fontWeight: 700,
                textAlign: "center",
                fontSize: { xs: "1.8rem", md: "2.4rem" },
                letterSpacing: 1,
                color: mode === "light" ? "#1976d2" : "#90caf9",
              }}
            >
              About Me
            </Typography>
          </motion.div>

          {/* Content */}
          <Grid
            container
            spacing={6}
            alignItems="center"
            justifyContent="center"
          >
            {/* Left - Image */}
                 <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Box display="flex" justifyContent="center">
                  <Card
                    sx={{
                      borderRadius: "50%",
                      overflow: "hidden",

                      width: { xs: 140, sm: 180, md: 220 },
                      height: { xs: 140, sm: 180, md: 220 },

                      border:
                        mode === "light"
                          ? "4px solid rgba(25,118,210,0.3)"
                          : "4px solid rgba(144,202,249,0.3)",

                      boxShadow:
                        mode === "light"
                          ? "0px 12px 35px rgba(0,0,0,0.15)"
                          : "0px 12px 40px rgba(255,255,255,0.12)",

                      transition: "transform 0.35s ease",

                      "&:hover": {
                        transform: "scale(1.07)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={about.image}
                      alt="Profile"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Card>
                </Box>
              </motion.div>
            </Grid>

            {/* Right - Text */}
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <CardContent
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                    maxWidth: 600,
                    mx: { xs: "auto", md: 0 },
                    px: { xs: 2, md: 4 },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.9,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                    }}
                  >
                    {about.description}
                  </Typography>
                </CardContent>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
