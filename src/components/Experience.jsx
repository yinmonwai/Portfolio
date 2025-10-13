import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import portfolio from "../assets/portfolio1.jpg";
import customImage from "../assets/custom2.jpg";
import dennis from "../assets/dennis.jpg";
import chatbot from "../assets/chatbot.jpg";
import geolocation from "../assets/geolocation.jpg";
import myino from "../assets/myino1.jpg";
import movas from "../assets/movas1.jpg";
import inventory from "../assets/inventory1.jpg";
import hrImage from "../assets/hr3.jpg";

export default function Experience() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Designed and developed a personal portfolio website using React.js and MUI to showcase my projects and skills. Implemented responsive design principles to ensure optimal viewing across devices and integrated contact forms for potential client inquiries.",
      image: portfolio,
    },
    {
      title: "Geolocation Information System",
      description:
        "Developed and Maintain a geolocation information system using Vue.js, laravel and MySql, allowing users to visualize and analyze geographic data through interactive maps and charts. Implemented features such as location search, data filtering, and export options to enhance user engagement and data accessibility.",
      image: geolocation,
    },
    {
      title: "ChatBot",
      description:"Developed an intelligent chatbot designed to assist users with Agricultural Science questions using Vue.js,Laravel and Mysql. It provides instant answers about crops, soil management, fertilizers, and pest control using natural language understanding. This helps students and farmers access reliable agricultural knowledge easily through a simple chat interface.",
      image: chatbot,
    },
    {
      title: "Human Resource Management System",
      description:
        "Developed a comprehensive HR management system using TailwindCSS, Livewire, and MySQL — enabling efficient employee data management, attendance tracking, and performance evaluations. Implemented user authentication and role-based access control for secure data handling.",
      image: hrImage,
    },
    {
      title: "Custom Detained Goods Management System",
      description:
        "Built a tailored detained goods management system using TailwindCSS, Livewire, and MySQL. The system facilitated real-time tracking of detained goods, automated notifications for status updates, and generated reports to enhance operational efficiency.",
      image: customImage,
    },
    {
      title: "Dennis Finance Solutions",
      description:
        "Developed a financial services platform with budgeting, expense tracking, and goal-setting tools using TailwindCSS, Livewire, and MySQL. Integrated APIs for real-time financial data and ensured secure authentication for a safe user experience.",
      image: dennis,
    },
    {
      title: "Myanmar Investment Commision",
      description:
        "Developed and Maintain an online management system for Myanmar Investment using bootstrap, jquery, laravel and MySQL. The system streamlined investment application processes, provided real-time status updates, and facilitated document management for investors and regulatory authorities.",
      image: myino,
    },
     {
      title: "MIC Permitted Companies Online Visa Application System",
      description:
        "Devloped and Maintain an online visa application system using bootstrap,jquery,laravel and MySQL, streamlining the application process for MIC permitted companies. The system featured user-friendly forms, document upload capabilities, and automated status updates to improve efficiency and user satisfaction.",
      image: movas,
    },
    {
      title: "Inventory Management System",
      description:
        "Built and maintained an inventory management system with TailwindCSS, Livewire, and MySQL. Included stock tracking, supplier management, barcode scanning, and real-time updates for operational efficiency.",
      image: inventory,
    },
    {
      title: "WeDay Social Commerce Platform",
      description:
        "Built a social commerce platform using React, MUI, and Backend API. Enabled users to discover, share, and purchase products within a community. Integrated reviews, social features, and secure payments.",
      image: portfolio,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
      }}
    >
      <Container>
        {/* Section Title */}
        <Typography
          variant="h4"
          sx={{
            mb: 8,
            fontWeight: 700,
            color: "#9EE493",
            textAlign: "center",
            fontSize: { xs: "1.8rem", md: "2.4rem" },
            letterSpacing: 1,
          }}
        >
          Projects I've Worked On
        </Typography>

        {/* Project List */}
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
                mb: 10,
                alignItems: "center",
                flexDirection: {
                  xs: "column",
                  md: index % 2 === 0 ? "row" : "row-reverse",
                },
              }}
            >
              {/* Image Section */}
              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Card
                      sx={{
                        borderRadius: 4,
                        overflow: "hidden",
                        boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.5)",
                        width: "100%",
                        maxWidth: 420,
                        bgcolor: "#121212",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={project.image}
                        alt={project.title}
                        sx={{
                          height: { xs: 220, sm: 300 },
                          objectFit: "cover",
                        }}
                      />
                    </Card>
                  </motion.div>
                </Box>
              </Grid>

              {/* Text Section */}
              <Grid item xs={12} md={7}>
                <CardContent
                  sx={{
                    color: "#ffffff",
                    textAlign: { xs: "center", md: "left" },
                    maxWidth: 600,
                    mx: { xs: "auto", md: 0 },
                    px: { xs: 2, md: 4 },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      color: "#9EE493",
                      mb: 2,
                      textTransform: "capitalize",
                      fontSize: { xs: "1.3rem", md: "1.6rem" },
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#d0d0d0",
                      lineHeight: 1.8,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                      mb: 3,
                    }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
}
