// import React from "react";
// import { Box, Container, Typography, Grid, Button } from "@mui/material";
// import { motion } from "framer-motion";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Experience from "./components/Experience";
// import ContactForm from "./components/ContactForm";
// import Footer from "./components/Footer";
// import WorkExperience from "./components/WorkExperience";
// import Certificates from "./components/Certificates";
// import Navbar from "./components/Navbar";
// import profileImg from "./assets/profile2.jpg";
// import cvFile from "./assets/cv.pdf";


// export default function App() {
//   return (
//     <Box sx={{ background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)", color: "white" }}>
//       <Navbar />

//       {/* Hero Section */}
//       <Box
//         sx={{
//           minHeight: "100vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           px: { xs: 2, md: 6 },
//           textAlign: { xs: "center", md: "left" },
//           background: "radial-gradient(circle at 30% 50%, #111 0%, #0a0a0a 100%)",
//         }}
//       >
//         <Container>
//           <Grid container spacing={4} alignItems="center" justifyContent="center">
//             {/* Left Text */}
//             <Grid item xs={12} md={7}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//               >
//                 <Typography
//                   variant="h3"
//                   sx={{
//                     fontWeight: 600,
//                     mb: 1,
//                     fontSize: { xs: "2rem", md: "3.5rem" },
//                   }}
//                 >
//                   <motion.span
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1.2 }}
//                   >
//                     Hello! I’m
//                   </motion.span>{" "}
//                   <motion.span
//                     initial={{ x: -20, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: 0.6, duration: 1 }}
//                     style={{
//                       color: "#9EE493",
//                       borderBottom: "3px solid #9EE493",
//                       display: "inline-block",
//                     }}
//                   >
//                     Yin Mon Wai
//                   </motion.span>
//                 </Typography>

//                 <Typography
//                   variant="h5"
//                   sx={{ mt: 1, color: "#cccccc", fontSize: { xs: "1.3rem", md: "1.8rem" } }}
//                 >
//                   Full Stack Developer
//                 </Typography>

//                 <Typography
//                   variant="body1"
//                   sx={{ mt: 3, maxWidth: 600, color: "#bbbbbb" }}
//                 >
//                   I design and build modern, scalable web applications using React, Laravel,
//                   and cutting-edge technologies.
//                 </Typography>

//                 <Button
//                   variant="contained"
//                   href={cvFile}
//                   download
//                   sx={{
//                     mt: 4,
//                     backgroundColor: "#9EE493",
//                     color: "#000",
//                     px: 4,
//                     py: 1.2,
//                     fontWeight: "bold",
//                     borderRadius: "25px",
//                     "&:hover": { backgroundColor: "#7ed957" },
//                   }}
//                 >
//                   Get Resume
//                 </Button>
//               </motion.div>
//             </Grid>
//             {/* Right Image */}
//             <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
//               <motion.img
//                 src={profileImg}
//                 alt="Profile"
//                 style={{
//                   width: "100%",
//                   maxWidth: "280px",
//                   height: "280px",
//                   borderRadius: "50%",
//                   objectFit: "cover",
//                   border: "4px solid #9EE493",
//                   boxShadow: "0 0 30px rgba(158, 228, 147, 0.4)",
//                   display: "block",
//                   margin: "0 auto",
//                 }}
//                 initial={{ scale: 0.8, opacity: 0, x: 50 }}
//                 whileInView={{ scale: 1, opacity: 1, x: 0 }}
//                 transition={{ duration: 1.2 }}
//               />
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Main Sections */}
//       <Box id="about">
//         <About />
//       </Box>

//       <Container sx={{ py: 6 }}>
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={6} id="skills">
//             <Skills />
//           </Grid>
//           <Grid item xs={12} md={6} id="experience">
//             <Experience />
//           </Grid>
//           <Grid item xs={12} md={12} id="work">
//             <WorkExperience />
//           </Grid>
//           <Grid item xs={12} md={12} id="certificates">
//             <Certificates />
//           </Grid>
//         </Grid>
//       </Container>

//       <Container sx={{ py: 6 }}>
//         <Box id="contact">
//           <ContactForm />
//         </Box>
//       </Container>

//       <Footer />
//     </Box>
//   );
// }


// import React from "react";
// import { Box, Container, Typography, Grid, Button } from "@mui/material";
// import { motion } from "framer-motion";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Experience from "./components/Experience";
// import ContactForm from "./components/ContactForm";
// import Footer from "./components/Footer";
// import WorkExperience from "./components/WorkExperience";
// import Certificates from "./components/Certificates";
// import Navbar from "./components/Navbar";
// import profileImg from "./assets/profile2.jpg";
// import cvFile from "./assets/cv.pdf";

// export default function App() {
//   return (
//     <Box
//       sx={{
//         background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
//         color: "white",
//         overflowX: "hidden",
//       }}
//     >
//       {/* Navbar */}
//       <Navbar />

//       {/* ===== Hero Section ===== */}
//       <Box
//         sx={{
//           minHeight: "100vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           px: { xs: 2, sm: 4, md: 8 },
//           py: { xs: 8, md: 0 },
//           textAlign: { xs: "center", md: "left" },
//           background: "radial-gradient(circle at 30% 50%, #111 0%, #0a0a0a 100%)",
//         }}
//       >
//         <Container maxWidth="lg">
//           <Grid
//             container
//             spacing={6}
//             alignItems="center"
//             justifyContent="center"
//             direction={{ xs: "column-reverse", md: "row" }}
//           >
//             {/* ===== Left Text ===== */}
//             <Grid item xs={12} md={7}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//               >
//                 <Typography
//                   variant="h3"
//                   sx={{
//                     fontWeight: 700,
//                     mb: 1,
//                     fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
//                     lineHeight: 1.2,
//                   }}
//                 >
//                   <motion.span
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1.2 }}
//                   >
//                     Hello! I’m
//                   </motion.span>{" "}
//                   <motion.span
//                     initial={{ x: -20, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: 0.6, duration: 1 }}
//                     style={{
//                       color: "#9EE493",
//                       borderBottom: "3px solid #9EE493",
//                       display: "inline-block",
//                     }}
//                   >
//                     Yin Mon Wai
//                   </motion.span>
//                 </Typography>

//                 <Typography
//                   variant="h5"
//                   sx={{
//                     mt: 1,
//                     color: "#cccccc",
//                     fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.8rem" },
//                   }}
//                 >
//                   Full Stack Developer
//                 </Typography>

//                 <Typography
//                   variant="body1"
//                   sx={{
//                     mt: 3,
//                     maxWidth: 600,
//                     color: "#bbbbbb",
//                     fontSize: { xs: "0.95rem", sm: "1rem" },
//                     mx: { xs: "auto", md: 0 },
//                   }}
//                 >
//                   I design and build modern, scalable web applications using React, Laravel,
//                   and other cutting-edge technologies to deliver clean and efficient user
//                   experiences.
//                 </Typography>

//                 <Button
//                   variant="contained"
//                   href={cvFile}
//                   download
//                   sx={{
//                     mt: 4,
//                     backgroundColor: "#9EE493",
//                     color: "#000",
//                     px: { xs: 3, sm: 4 },
//                     py: 1.2,
//                     fontWeight: "bold",
//                     fontSize: { xs: "0.9rem", sm: "1rem" },
//                     borderRadius: "25px",
//                     "&:hover": { backgroundColor: "#7ed957" },
//                   }}
//                 >
//                   Get Resume
//                 </Button>
//               </motion.div>
//             </Grid>

//             {/* ===== Right Image ===== */}
//             <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
//               <motion.img
//                 src={profileImg}
//                 alt="Profile"
//                 style={{
//                   width: "100%",
//                   maxWidth: "280px",
//                   height: "280px",
//                   borderRadius: "50%",
//                   objectFit: "cover",
//                   border: "4px solid #9EE493",
//                   boxShadow: "0 0 30px rgba(158, 228, 147, 0.4)",
//                   margin: "0 auto",
//                 }}
//                 initial={{ scale: 0.8, opacity: 0, x: 50 }}
//                 whileInView={{ scale: 1, opacity: 1, x: 0 }}
//                 transition={{ duration: 1.2 }}
//               />
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* ===== About Section ===== */}
//       <Box id="about" sx={{ py: { xs: 6, md: 10 } }}>
//         <About />
//       </Box>

//       {/* ===== Skills, Experience, Work, Certificates ===== */}
//       <Container sx={{ py: { xs: 6, md: 10 } }} maxWidth="lg">
//         <Grid container spacing={6}>
//           <Grid item xs={12} md={6} id="skills">
//             <Skills />
//           </Grid>
//           <Grid item xs={12} md={6} id="experience">
//             <Experience />
//           </Grid>
//           <Grid item xs={12} id="work">
//             <WorkExperience />
//           </Grid>
//           <Grid item xs={12} id="certificates">
//             <Certificates />
//           </Grid>
//         </Grid>
//       </Container>

//       {/* ===== Contact Section ===== */}
//       <Container sx={{ py: { xs: 6, md: 10 } }} maxWidth="md">
//         <Box id="contact">
//           <ContactForm />
//         </Box>
//       </Container>

//       {/* ===== Footer ===== */}
//       <Footer />
//     </Box>
//   );
// }


import React, { useMemo, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  createTheme,
  ThemeProvider,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WorkExperience from "./components/WorkExperience";
import Certificates from "./components/Certificates";
import Navbar from "./components/Navbar";

import profileImg from "./assets/profile2.jpg";
import cvFile from "./assets/cv.pdf";
import IntroSection from "./components/IntroSection";

export default function App() {
  // Respect system preference by default
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
        components: {
          MuiButton: {
            defaultProps: {
              disableElevation: true,
            },
          },
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
        <Container sx={{ py: { xs: 6, md: 10 } }} maxWidth="lg">
          
          <Navbar mode={mode} toggleColorMode={toggleColorMode} />

          <Grid item xs={12} id="certificates" sx={{ scrollMarginTop: "88px" }}>
              {/* ===== Hero Section ===== */}
           <IntroSection />
            </Grid>
      
        {/* ===== About Section ===== */}
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

        {/* ===== Contact Section ===== */}
        <Container sx={{ py: { xs: 6, md: 10 } }} maxWidth="md">
          <Box id="contact" sx={{ scrollMarginTop: "88px" }}>
            <ContactForm />
          </Box>
        </Container>

        {/* ===== Footer ===== */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
