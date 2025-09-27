import React from "react";
import { Container, Typography, Box } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ py: 6, bgcolor: "background.paper" }}>
      <Container>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
          About Me
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "100%" }}>
          I’m a Full Stack Web Developer with experience in building responsive
          and scalable web applications. Highly skilled and dedicated web developer with a strong background in HTML, CSS,Bootstrap,Tailwindcss and JavaScript. Proficient in Oracle SQL and experienced in PHP programming ,Laravel, Livewire and MySql. Possess extensive knowledge of ReactJS,MUI ,Ant design,shadcn,Next.js ,node.js and Mongodb.Knowledge of Postman to test Backend API. Committed to delivering top-quality web solutions and providing exceptional web development and version control system git, github.Knowledge of Microsoft team,bitbucket and Click Up.Collaboration with Other teams.I enjoy solving problems and creating clean, maintainable code. My focus is on delivering modern, user-friendly solutions that work across devices.
        </Typography>
      </Container>
    </Box>
  );
}
