import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

import portfolio from '../assets/portfolio1.jpg';

const projectData = [
  {
    title: "My Portfolio",
    description:
      "A personal portfolio site built with React",
       image: portfolio,
     link: "https://my-portfolio-liard-psi-28.vercel.app/",
  },
  // {
  //   title: "E-commerce Website",
  //   description:
  //     "Admin dashboard for managing products, orders, and users with charts.",
  //   image: ecommerce1,
  //   link: "#",
  // },
];

export default function Projects() {
  return (
    <Container sx={{ py: 6 }}>
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
                  color="secondary"
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
  );
}
