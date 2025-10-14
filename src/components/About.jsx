// import React from "react";
// import { Container, Typography, Box } from "@mui/material";

// export default function About() {
//   return (
//     <Box sx={{ py: 6}}>
//       <Container>
//         <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
//           About Me
//         </Typography>
//         <Typography variant="body1" sx={{ maxWidth: "100%" }}>
//           I’m a Full Stack Web Developer with experience in building responsive
//           and scalable web applications. Highly skilled and dedicated web developer with a strong background in HTML, CSS,Bootstrap,Tailwindcss and JavaScript. Proficient in Oracle SQL and experienced in PHP programming ,Laravel, Livewire,MySql and laravel with api. Possess extensive knowledge of ReactJS,MUI ,Ant design,shadcn,Next.js ,node.js and Mongodb.Knowledge of Postman to test Backend API. Committed to delivering top-quality web solutions and providing exceptional web development and version control system git, github.Knowledge of Microsoft team,bitbucket and Click Up.Collaboration with Other teams.I enjoy solving problems and creating clean, maintainable code. My focus is on delivering modern, user-friendly solutions that work across devices.
//         </Typography>
//       </Container>
//     </Box>
//   );
// }


          

// import React from "react";
// import {
//   Container,
//   Typography,
//   Box,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import profile from "../assets/profile2.jpg";

// export default function About() {
//   const projects = [
//     {
//       // title: "About",
//      description: "I’m a Full Stack Web Developer with experience in building responsive and scalable web applications. Highly skilled and dedicated web developer with a strong background in HTML, CSS,Bootstrap,Tailwindcss and JavaScript. Proficient in Oracle SQL and experienced in PHP programming ,Laravel, Livewire,MySql and laravel with api. Possess extensive knowledge of ReactJS,MUI ,Ant design,shadcn,Next.js ,node.js and Mongodb.Knowledge of Postman to test Backend API. Committed to delivering top-quality web solutions and providing exceptional web development and version control system git, github.Knowledge of Microsoft team,bitbucket and Click Up.Collaboration with Other teams.I enjoy solving problems and creating clean, maintainable code. My focus is on delivering modern, user-friendly solutions that work across devices.",
//       image: profile,
//     },
    
//   ];

//   return (
//     <Box
//       sx={{
//         py: { xs: 6, md: 10 },
//       }}
//     >
//       <Container>
//         {/* Section Title */}
//         <Typography
//           variant="h4"
//           sx={{
//             mb: 8,
//             fontWeight: 700,
//             color: "#9EE493",
//             textAlign: "center",
//             fontSize: { xs: "1.8rem", md: "2.4rem" },
//             letterSpacing: 1,
//           }}
//         >
//          About
//         </Typography>

//         {/* Project List */}
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             viewport={{ once: true }}
//           >
//             <Grid
//               container
//               spacing={4}
//               sx={{
//                 mb: 10,
//                 alignItems: "center",
//                 flexDirection: {
//                   xs: "column",
//                   md: index % 2 === 0 ? "row" : "row-reverse",
//                 },
//               }}
//             >
//               {/* Image Section */}
//               <Grid item xs={12} md={5}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     width: "100%",
//                   }}
//                 >
//                   <motion.div
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.4 }}
//                   >
//                     <Card
//                       sx={{
//                         borderRadius: 4,
//                         overflow: "hidden",
//                         boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.5)",
//                         width: "100%",
//                         maxWidth: 420,
//                         bgcolor: "#121212",
//                       }}
//                     >
//                       <CardMedia
//                         component="img"
//                         image={project.image}
//                         alt={project.title}
//                         sx={{
//                           height: { xs: 220, sm: 300 },
//                           objectFit: "cover",
//                         }}
//                       />
//                     </Card>
//                   </motion.div>
//                 </Box>
//               </Grid>

//               {/* Text Section */}
//               <Grid item xs={12} md={7}>
//                 <CardContent
//                   sx={{
//                     color: "#ffffff",
//                     textAlign: { xs: "center", md: "left" },
//                     maxWidth: 600,
//                     mx: { xs: "auto", md: 0 },
//                     px: { xs: 2, md: 4 },
//                   }}
//                 >
//                   <Typography
//                     variant="h5"
//                     sx={{
//                       fontWeight: 600,
//                       color: "#9EE493",
//                       mb: 2,
//                       textTransform: "capitalize",
//                       fontSize: { xs: "1.3rem", md: "1.6rem" },
//                     }}
//                   >
//                     {project.title}
//                   </Typography>
//                   <Typography
//                     variant="body1"
//                     sx={{
//                       color: "#d0d0d0",
//                       lineHeight: 1.8,
//                       fontSize: { xs: "0.95rem", md: "1rem" },
//                       mb: 3,
//                     }}
//                   >
//                     {project.description}
//                   </Typography>
//                 </CardContent>
//               </Grid>
//             </Grid>
//           </motion.div>
//         ))}
//       </Container>
//     </Box>
//   );
// }


// import React from "react";
// import {
//   Container,
//   Typography,
//   Box,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import profile from "../assets/profile2.jpg";

// export default function About() {
//   const about = {
//     description:
//       "I’m a Full Stack Web Developer with experience in building responsive and scalable web applications. Highly skilled and dedicated web developer with a strong background in HTML, CSS, Bootstrap, TailwindCSS, and JavaScript. Proficient in Oracle SQL and experienced in PHP programming, Laravel, Livewire, MySQL, and Laravel with APIs. Possess extensive knowledge of ReactJS, MUI, Ant Design, Shadcn, Next.js, Node.js, and MongoDB. Knowledgeable in Postman for testing backend APIs. Committed to delivering top-quality web solutions, version control with Git and GitHub, and collaboration using Microsoft Teams, Bitbucket, and ClickUp. I enjoy solving problems and writing clean, maintainable code with a focus on modern, user-friendly solutions that work across devices.",
//     image: profile,
//   };

//   return (
//     <Box
//       id="about"
//       sx={{
//         py: { xs: 6, md: 10 },
//       }}
//     >
//       <Container>
//         {/* Section Title */}
//         <motion.div
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >
//           <Typography
//             variant="h4"
//             sx={{
//               mb: 8,
//               fontWeight: 700,
//               color: "#9EE493",
//               textAlign: "center",
//               fontSize: { xs: "1.8rem", md: "2.4rem" },
//               letterSpacing: 1,
//             }}
//           >
//             About
//           </Typography>
//         </motion.div>

//         {/* Content Section */}
//         <Grid
//           container
//           spacing={6}
//           alignItems="center"
//           justifyContent="center"
//         >
//           {/* Left Side - Image */}
//           <Grid item xs={12} md={5}>
//             <motion.div
//               initial={{ opacity: 0, x: -60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               viewport={{ once: true }}
//             >
//               <Box display="flex" justifyContent="center">
//                 <Card
//                   sx={{
//                     borderRadius: "50%",
//                     overflow: "hidden",
//                     width: { xs: 220, sm: 280, md: 320 },
//                     height: { xs: 220, sm: 280, md: 320 },
//                     boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.6)",
//                     bgcolor: "#121212",
//                     "&:hover": {
//                       transform: "scale(1.05)",
//                       transition: "transform 0.4s ease",
//                     },
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     image={about.image}
//                     alt="Profile"
//                     sx={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                       borderRadius: "50%", // ensures oval shape
//                     }}
//                   />
//                 </Card>
//               </Box>
//             </motion.div>
//           </Grid>

//           {/* Right Side - Text */}
//           <Grid item xs={12} md={7}>
//             <motion.div
//               initial={{ opacity: 0, x: 60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <CardContent
//                 sx={{
//                   color: "#ffffff",
//                   textAlign: { xs: "center", md: "left" },
//                   maxWidth: 600,
//                   mx: { xs: "auto", md: 0 },
//                   px: { xs: 2, md: 4 },
//                 }}
//               >
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     color: "#d0d0d0",
//                     lineHeight: 1.9,
//                     fontSize: { xs: "0.95rem", md: "1rem" },
//                   }}
//                 >
//                   {about.description}
//                 </Typography>
//               </CardContent>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }



import React, { useMemo, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  IconButton,
  CssBaseline,
  Grid,
  Card,
  CardMedia,
  CardContent,
  createTheme,
  ThemeProvider,
  useMediaQuery,
  Button,
} from "@mui/material";
import { LightMode, DarkMode, Menu } from "@mui/icons-material";
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
      "I’m a Full Stack Web Developer with experience in building responsive and scalable web applications. Highly skilled and dedicated web developer with a strong background in HTML, CSS, Bootstrap, TailwindCSS, and JavaScript. Proficient in Oracle SQL and experienced in PHP programming, Laravel, Livewire, MySQL, and Laravel with APIs. Possess extensive knowledge of ReactJS, MUI, Ant Design, Shadcn, Next.js, Node.js, and MongoDB. Knowledgeable in Postman for testing backend APIs. Committed to delivering top-quality web solutions, version control with Git and GitHub, and collaboration using Microsoft Teams, Bitbucket, and ClickUp. I enjoy solving problems and writing clean, maintainable code with a focus on modern, user-friendly solutions that work across devices.",
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
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Box display="flex" justifyContent="center">
                  <Card
                    sx={{
                      borderRadius: "50%",
                      overflow: "hidden",
                      width: { xs: 100, sm: 150, md: 200 },
                      height: { xs: 150, sm: 200, md: 200 },
                      boxShadow:
                        mode === "light"
                          ? "0 8px 30px rgba(0,0,0,0.15)"
                          : "0 8px 40px rgba(255,255,255,0.1)",
                   
                      "&:hover": {
                        transform: "scale(1.05)",
                        transition: "transform 0.4s ease",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={about.image}
                      alt="Profile"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50% / 50%", // makes a smooth oval shape
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
