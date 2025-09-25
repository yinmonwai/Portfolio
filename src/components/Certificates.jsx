import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { FaCertificate,FaUniversity } from "react-icons/fa";

const certificates = [
  {
    title: "B.Sc. in Computer Science",
    issuer: "Second Year,University of Computer Studies(Monywa)",
  },
  {
    title: "The Digital Adda Certificate(Govit of India)",
    issuer: "Program in HTML,Css and JavaScript for Web Developers",
  },
  {
    title: "PageMyanmar",
    issuer: "Web development and Design Course",
  },
  {
    title: "Fairway Technology",
    issuer: "Professional Web Developer Certification",
  },
  
  {
    title: "Info Wave IT Training Center",
    issuer: "Oracle Database SQL Certified Associate,Power BI,Python for Data Analysis",
  },
];

export default function Certificates() {
  return (
    <Box sx={{ py: 6}}>
      <Typography variant="h5" align="center" sx={{ mb: 4, fontWeight: 600,textAlign: "center", color: '#fafbfcff' }}>
        Education
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {certificates.map((cert, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 2,
                textAlign: "center",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              <FaCertificate size={28} color="#ff9800" />
              <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 1 }}>
                {cert.title}
              </Typography>
              <Typography variant="body2">{cert.issuer}</Typography>
              <Typography variant="caption" color="text.secondary">
                {cert.year}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
