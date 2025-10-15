// import React from "react";
// import { Box, Typography, Grid, Paper } from "@mui/material";
// import { FaCertificate,FaUniversity } from "react-icons/fa";

// const certificates = [
//   {
//     title: "B.Sc. in Computer Science",
//     issuer: "Second Year,University of Computer Studies(Monywa)",
//   },
//   {
//     title: "The Digital Adda Certificate(Govit of India)",
//     issuer: "Program in HTML,Css and JavaScript for Web Developers",
//   },
//   {
//     title: "PageMyanmar",
//     issuer: "Web development and Design Course",
//   },
//   {
//     title: "Fairway Technology",
//     issuer: "Professional Web Developer Certification",
//   },
  
//   {
//     title: "Info Wave IT Training Center",
//     issuer: "Oracle Database SQL Certified Associate,Power BI,Python for Data Analysis",
//   },
// ];

// export default function Certificates() {
//   return (
//     <Box sx={{ py: 6}}>
//       <Typography variant="h5" align="center" sx={{ mb: 4, fontWeight: 600,textAlign: "center", color: '#fafbfcff' }}>
//         Education
//       </Typography>
//       <Grid container spacing={3} justifyContent="center">
//         {certificates.map((cert, index) => (
//           <Grid item xs={12} md={4} key={index}>
//             <Paper
//               elevation={3}
//               sx={{
//                 p: 3,
//                 borderRadius: 2,
//                 textAlign: "center",
//                 transition: "transform 0.3s, box-shadow 0.3s",
//                 "&:hover": {
//                   transform: "translateY(-5px)",
//                   boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
//                 },
//               }}
//             >
//               <FaCertificate size={28} color="#ff9800" />
//               <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 1 }}>
//                 {cert.title}
//               </Typography>
//               <Typography variant="body2">{cert.issuer}</Typography>
//               <Typography variant="caption" color="text.secondary">
//                 {cert.year}
//               </Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }


// import React from "react";
// import { Box, Typography, Grid } from "@mui/material";
// import { motion } from "framer-motion";
// import { FaCertificate, FaUniversity } from "react-icons/fa";

// const certificates = [
//   {
//     title: "B.Sc. in Computer Science",
//     issuer: "Third Year, University of Computer Studies (Monywa)",
//     icon: <FaUniversity size={30} color="#00bcd4" />,
//   },
//   {
//     title: "The Digital Adda Certificate (Govt of India)",
//     issuer: "Program in HTML, CSS and JavaScript for Web Developers",
//     icon: <FaCertificate size={30} color="#ff9800" />,
//   },
//   {
//     title: "PageMyanmar",
//     issuer: "Web Development and Design Course",
//     icon: <FaCertificate size={30} color="#f44336" />,
//   },
//   {
//     title: "Fairway Technology",
//     issuer: "Professional Web Developer Certification",
//     icon: <FaCertificate size={30} color="#4caf50" />,
//   },
//   {
//     title: "Info Wave IT Training Center",
//     issuer:
//       "Oracle Database SQL Certified Associate, Power BI, Python for Data Analysis",
//     icon: <FaCertificate size={30} color="#9c27b0" />,
//   },
// ];

// export default function Certificates() {
//   return (
//     <Box
//       sx={{
//         py: { xs: 5, md: 8 },
//         px: { xs: 2, md: 6 },
//       }}
//     >
//       <Typography
//         variant="h4"
//         align="center"
//         sx={{
//           mb: 5,
//           fontWeight: 700,
//           textTransform: "uppercase",
//           letterSpacing: 1.5,
//           background: "linear-gradient(to right, #00bcd4, #4caf50)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}
//       >
//         Education & Certifications
//       </Typography>

//       <Grid container spacing={4} justifyContent="center">
//         {certificates.map((cert, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.2,
//                 ease: "easeOut",
//               }}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
//               }}
//               style={{
//                 background:
//                   "linear-gradient(145deg, rgba(40,40,60,0.9), rgba(60,60,90,0.9))",
//                 borderRadius: "16px",
//                 padding: "24px",
//                 height: "100%",
//                 textAlign: "center",
//                 cursor: "pointer",
//                 transition: "all 0.3s ease-in-out",
//               }}
//             >
//               <motion.div
//                 animate={{ rotate: [0, 5, -5, 0] }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                   ease: "easeInOut",
//                 }}
//                 style={{ display: "inline-block" }}
//               >
//                 {cert.icon}
//               </motion.div>

//               <Typography
//                 variant="h6"
//                 sx={{
//                   mt: 2,
//                   fontWeight: 600,
//                   fontSize: "1.1rem",
//                 }}
//               >
//                 {cert.title}
//               </Typography>
//               <Typography
//                 variant="body2"
//                 sx={{
//                   mt: 1,
//                   color: "rgba(255,255,255,0.75)",
//                   fontSize: "0.9rem",
//                 }}
//               >
//                 {cert.issuer}
//               </Typography>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }


import React from "react";
import { Box, Typography, Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { FaCertificate, FaUniversity } from "react-icons/fa";

const certificates = [
  {
    title: "B.Sc. in Computer Science",
    issuer: "Second Year, University of Computer Studies (Monywa)",
    icon: <FaUniversity size={30} color="#00bcd4" />,
  },
  {
    title: "The Digital Adda Certificate (Govt of India)",
    issuer: "Program in HTML, CSS and JavaScript for Web Developers",
    icon: <FaCertificate size={30} color="#ff9800" />,
  },
  {
    title: "PageMyanmar",
    issuer: "Web Development and Design Course",
    icon: <FaCertificate size={30} color="#f44336" />,
  },
  {
    title: "Fairway Technology",
    issuer: "Professional Web Developer Certification",
    icon: <FaCertificate size={30} color="#4caf50" />,
  },
  {
    title: "Info Wave IT Training Center",
    issuer:
      "Oracle Database SQL Certified Associate, Power BI, Python for Data Analysis",
    icon: <FaCertificate size={30} color="#9c27b0" />,
  },
];

export default function Certificates() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      id="certificates"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8 },
        // backgroundColor: isDark ? "#0f111a" : "#f5f7fa",
        transition: "background-color 0.5s ease",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 6,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 1.5,
          // background: isDark
          //   ? "linear-gradient(to right, #00e5ff, #4caf50)"
          //   : "linear-gradient(to right, #3f51b5, #00bcd4)",
          background: isDark ? "#5b74f0ff" : "#2da4e9ff",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Education & Certifications
      </Typography>

      {/* Grid */}
      <Grid container spacing={5} justifyContent="center">
        {certificates.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: isDark
                  ? "0 10px 25px rgba(0, 229, 255, 0.2)"
                  : "0 10px 25px rgba(63, 81, 181, 0.2)",
              }}
              viewport={{ once: true }}
              style={{
                background: isDark
                  ? "rgba(255, 255, 255, 0.08)"
                  : "rgba(255, 255, 255, 0.8)",
                borderRadius: "18px",
                padding: "28px",
                height: "100%",
                textAlign: "center",
                cursor: "pointer",
                border: `1px solid ${
                  isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"
                }`,
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
              }}
            >
              {/* Icon Animation */}
              <motion.div
                animate={{ rotate: [0, 6, -6, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                style={{
                  display: "inline-block",
                  marginBottom: "12px",
                }}
              >
                {cert.icon}
              </motion.div>

              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: isDark ? "#fff" : "#212121",
                }}
              >
                {cert.title}
              </Typography>

              {/* Issuer */}
              <Typography
                variant="body2"
                sx={{
                  mt: 1.5,
                  color: isDark ? "rgba(255,255,255,0.7)" : "#444",
                  fontSize: "0.9rem",
                  lineHeight: 1.5,
                }}
              >
                {cert.issuer}
              </Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
