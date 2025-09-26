import React from "react";
import { Container, Typography, Box, Grid,Card,CardMedia,CardContent,Button} from "@mui/material";
import portfolio from '../assets/portfolio1.jpg';
export default function Experience() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Designed and developed a personal portfolio website using React.js and MUI to showcase my projects and skills. Implemented responsive design principles to ensure optimal viewing across devices and integrated contact forms for potential client inquiries.",
    },
    {
      title: "Human Resource Management System",
      description:
        "Developed a comprehensive HR management system tailwindcss,livewire and MySQL, enabling efficient employee data management, attendance tracking, and performance evaluations. Implemented user authentication and role-based access control to ensure data security.",
    },
    {
      title: "Custom Detained Goods Management System",
      description:
        "Created a tailored inventory management system for a logistics company using tailwindcss,livewire and MySQL. The system facilitated real-time tracking of detained goods, automated notifications for status updates, and generated detailed reports to enhance operational efficiency.",
    },
    
    {
      title: "Dennis Finance Solutions",
      description:" Developed a financial services platform using tailwindcss,livewire and MySQL, providing users with tools for budgeting, expense tracking, and financial goal setting. Integrated third-party APIs for real-time financial data and ensured a secure user experience through robust authentication mechanisms.",
        
    },
    {
      title: "Geolocation Information System",
      description:" Developed and Maintain a geolocation information system using Vue.js and laravel, allowing users to visualize and analyze geographic data through interactive maps and charts. Implemented features such as location search, data filtering, and export options to enhance user engagement and data accessibility.",   
    },
    {
      title: "Myanmar Investment Online Management System",
      description:" Developed and Maintain an online management system for Myanmar Investment using bootstrap, jquery, laravel and MySQL. The system streamlined investment application processes, provided real-time status updates, and facilitated document management for investors and regulatory authorities.",
        
    },
    {
      title: "MIC Permitted Companies Online Visa Application System",
      description:" Devloped and Maintain an online visa application system using bootstrap,jquery,laravel and MySQL, streamlining the application process for MIC permitted companies. The system featured user-friendly forms, document upload capabilities, and automated status updates to improve efficiency and user satisfaction.",
        
    },
    {
      title: "Inventory Management System",
      description:" Developed and Maintain an inventory management system using tailwindcss,livewire and MySQL, enabling businesses to track stock levels, manage suppliers, and generate sales reports. Implemented barcode scanning functionality and real-time inventory updates to enhance operational efficiency.",  
    },
    {
      title: "WeDay Social Commerce Platform",
      description:" Built a social commerce platform using React,Mui and Backend Api, allowing users to discover, share, and purchase products within a community-driven environment. Integrated social media features, user reviews, and secure payment gateways to create a seamless shopping experience.",  
    },
    
  ];


const projectData = [
  {
    title: "My Portfolio",
    description:
      "A personal portfolio site built with React",
       image: portfolio,
     link: "https://my-portfolio-liard-psi-28.vercel.app/",
  },
  
];

  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 600,color: "#ffffff" }}>
          I've Worked On Projects In Company
        </Typography>

        {projects.map((project, index) => (
          <Grid
            container
            spacing={2}
            key={index}
            sx={{ mb: 3, alignItems: "flex-start" }}
          >
            {/* Left: Label / Title */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 500, color: "primary.main" }}
              >
                {project.title}
              </Typography>
            </Grid>

            {/* Right: Description */}
            <Grid item xs={12} md={8}>
              <Typography variant="body1" sx={{color:"#ffffff"}}>{project.description}</Typography>
            </Grid>
          </Grid>
        ))}

        <Typography variant="h4" sx={{ mb: 4, textAlign: "center",color: '#fafbfcff', fontWeight: 600 }}>
              My Projects
            </Typography>
            <Grid container spacing={4}>
              {projectData.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card >
                    <CardMedia
                      component="img"
                      height="180"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6">{project.title}</Typography>
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{color: "white", backgroundColor:"#242222ff"}}
                        size="small"
                        href={project.link}
                        target="_blank"
                      >
                        View Project
      
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
      </Container>
    </Box>
  );
}
