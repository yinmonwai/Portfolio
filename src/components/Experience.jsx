import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import portfolio from "../assets/portfolio.jpg";
import customImage from "../assets/custom2.jpg";
import dennis from "../assets/dennis.jpg";
import chatbot from "../assets/chatbot.jpg";
import geolocation from "../assets/geolocation.jpg";
import myino from "../assets/myino1.jpg";
import movas from "../assets/movas1.jpg";
import inventory from "../assets/inventory2.jpg";
import hrImage from "../assets/hr3.jpg";
import wedayImage from "../assets/w.jpg";

export default function Experience() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Designed and developed a personal portfolio website using React.js and MUI to showcase my projects and skills. Implemented responsive design and integrated contact forms for potential client inquiries.",
      image: portfolio,
      technologies: ["React.js", "Material UI"],
      liveDemo: ["https://your-portfolio-link.com","https://github.com/yourusername/portfolio-website"], // optional
    },
    {
      title: "Geolocation Information System",
      description:
           "Developed and maintained a geolocation information system using Vue.js, Laravel, and MySQL. Implemented region-based search and filtering functionalities, displayed user working regions on interactive maps, and built features to insert and manage geographic region data.",
      image: geolocation,
      technologies: ["Vue.js", "Laravel", "MySQL"],
    },
    {
      title: "ChatBot",
      description:
        "Developed and maintained an Agricultural Science chatbot using Vue.js, Laravel, and MySQL, enabling users to ask questions related to crops, farming techniques, and best practices. Built modules for data entry and management, displayed stored agricultural information to users, and processed user inputs through intelligent and interactive chat workflows.",
      image: chatbot,
      technologies: ["Vue.js", "Laravel", "MySQL"],
    },
    {
      title: "Human Resource Management System",
      description:"Developed a comprehensive HR management system using TailwindCSS, Livewire, and MySQL — implementing employee data entry modules, finance reports, personal history reports, and other HR-related reporting features. Built export functionalities for Word and Excel formats, and supported efficient employee management, attendance tracking, and role-based access control.",
      image: hrImage,
      technologies: ["TailwindCSS", "Livewire", "MySQL"],
    },
    {
      title: "Custom Detained Goods Management System",
      description:
           "Built a comprehensive detained goods management system using TailwindCSS, Livewire, and MySQL, focused on managing cases such as illegal import of firearms. Developed data entry workflows for case creation, detained items, and officer actions, along with dynamic reporting modules that allow users to view case summaries, item records, and decision histories in real time.",
      image: customImage,
      technologies: ["TailwindCSS", "Livewire", "MySQL"],
    },
    {
      title: "Dennis Finance Solutions",
      description: "Built a financial management platform featuring budgeting, expense tracking, and goal-setting tools using TailwindCSS, Livewire, and MySQL. Implemented secure authentication, role-based access control, and an intuitive admin panel. Developed file upload functionality for users to upload and manage financial documents and photos, with optimized display throughout the system.",
      image: dennis,
      technologies: ["TailwindCSS", "Livewire", "MySQL"],
    },
    {
      title: "Myanmar Investment Commission",
      description:"Developed and maintained Supervision Department management system for the Myanmar Investment Commission using Bootstrap, jQuery, Laravel, and MySQL. The system includes Admin Management, User Management, Rank Management, and Form Management features. I was responsible for ongoing maintenance, feature improvements, and ensuring smooth workflow operations.",
      image: myino,
      technologies: ["Bootstrap", "jQuery", "Laravel", "MySQL"],
    },
    {
      title: "MIC Online Visa Application System",
      description:
            "Maintained and enhanced an online visa application system for MIC companies using Bootstrap, jQuery, Laravel, and MySQL. Responsibilities included improving user-facing application forms, managing document upload workflows, fixing bugs, optimizing performance, and supporting automated email notification processes to ensure smooth daily operations.",
      image: movas,
      technologies: ["Bootstrap", "jQuery", "Laravel", "MySQL"],
    },
    {
      title: "Restaurant Management System",
      description:
            "Developed and maintained a full-service Restaurant Management (POS) system using TailwindCSS, Livewire, and MySQL. Implemented table reservation handling, food ordering workflows, real-time order tracking, integrated payment processing, and inventory management to monitor stock levels. Built features for billing, receipt generation, and sales reporting, ensuring smooth daily operations and reliable data synchronization across the system.",
      image: inventory,
      technologies: ["TailwindCSS", "Livewire", "MySQL"],
    },
    {
      title: "WeDay Social Commerce Platform",
      description:
           "Developed a full-featured social commerce platform combining social media and e-commerce functionalities using React, Material UI, and a RESTful API. Implemented social feeds allowing users to create posts with photos and videos, interact through likes, reactions, and comments, and share products within the community. Built product discovery and purchasing flows tightly integrated into social content to drive user engagement and seamless shopping experiences.",
      image: wedayImage,
      technologies: ["React.js", "Material UI", "REST API"],
    },
  ];

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 6, md: 10 },
        transition: "background 0.5s ease",
      }}
    >
      <Container>
        {/* Section Title */}
        <Typography
          variant="h4"
          sx={{
            mb: 8,
            fontWeight: 700,
            textAlign: "center",
            fontSize: { xs: "1.8rem", md: "2.4rem" },
            letterSpacing: 1,
            color: isDarkMode ? "#4ea5ecff" : "#1976d2",
          }}
        >
          Projects I’ve Worked On
        </Typography>

        {/* Project Cards */}
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Grid
              container
              spacing={4}
              sx={{
                mb: { xs: 8, md: 10 },
                alignItems: "center",
                flexDirection: {
                  xs: "column",
                  md: index % 2 === 0 ? "row" : "row-reverse",
                },
              }}
            >
              {/* Image */}
              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                    <Card
                      sx={{
                        borderRadius: 4,
                        overflow: "hidden",
                        boxShadow: isDarkMode
                          ? "0px 8px 25px rgba(255,255,255,0.05)"
                          : "0px 8px 25px rgba(0,0,0,0.1)",
                        width: "100%",
                        maxWidth: 420,
                        bgcolor: isDarkMode ? "#121212" : "#ffffff",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={project.image}
                        alt={project.title}
                        sx={{
                          height: { xs: 220, sm: 300 },
                          objectFit: "cover",
                          filter: isDarkMode ? "brightness(0.85)" : "brightness(1)",
                          transition: "filter 0.3s ease",
                          "&:hover": {
                            filter: "brightness(1.05)",
                          },
                        }}
                      />
                    </Card>
                  </motion.div>
                </Box>
              </Grid>

              {/* Description */}
              <Grid item xs={12} md={7}>    
                <CardContent
                  sx={{
                    color: isDarkMode ? "#f5f5f5" : "#333",
                    textAlign: { xs: "center", md: "left" },
                    maxWidth: 650,
                    mx: { xs: "auto", md: 0 },
                    px: { xs: 2, md: 4 },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      textTransform: "capitalize",
                      fontSize: { xs: "1.3rem", md: "1.6rem" },
                      color: isDarkMode ? "#4ea5ecff" : "#1976d2",
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                      color: isDarkMode ? "#cfcfcf" : "#555",
                      mb: 2,
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Technologies */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      justifyContent: { xs: "center", md: "flex-start" },
                    }}
                  >
                    {project.technologies.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        sx={{
                          fontSize: "0.85rem",
                          fontWeight: 500,
                          bgcolor: isDarkMode ? "#1e1e1e" : "#e3e1e1ff",
                          color: isDarkMode ? "#90caf9" : "#1976d2",
                          borderRadius: "8px",
                          px: 1,
                        }}
                      />
                    ))}

                  </Box>
                  
                </CardContent>
              </Grid>
            </Grid>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
}
