import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import profileImg from "./assets/profile2.jpg";
import WorkExperience from "./components/WorkExperience";
import Certificates from "./components/Certificates";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Box sx={{ background: "linear-gradient(135deg, #162a3eff, #254b71ff)" }}>
      <Navbar />

      {/* Hero Section */}
      <Container sx={{ py: 6 }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{ py: { xs: 4, md: 8 }, color: "white" }}
        >
          {/* Profile Image */}
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <img
              src={profileImg}
              alt="Profile"
              style={{
                width: 200,
                height: 200,
                objectFit: "cover",
                border: "3px solid white",
                borderRadius: "50%",
              }}
            />
          </Grid>

          {/* Text Content */}
          <Grid item xs={12} md={8} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h3" fontWeight="bold">
              Hi, I’m Yin Mon Wai
            </Typography>
            <Typography variant="h3" fontWeight="bold">
              Full Stack Developer
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              I build scalable web apps with React, Vue, Laravel and modern tech.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* About Me */}
      <Box id="about">
        <About />
      </Box>

      {/* Skills + Experience + Work + Projects + Certificates */}
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} id="skills">
            <Skills />
          </Grid>
          <Grid item xs={12} md={6} id="experience">
            <Experience />
          </Grid>
          <Grid item xs={12} md={12} id="work">
            <WorkExperience />
          </Grid>
          <Grid item xs={12} md={12} id="projects">
            <Projects />
          </Grid>
          <Grid item xs={12} md={12} id="certificates">
            <Certificates />
          </Grid>
        </Grid>
      </Container>

      {/* Contact Form */}
      <Container sx={{ py: 6 }}>
        <Box id="contact">
          <ContactForm />
        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
