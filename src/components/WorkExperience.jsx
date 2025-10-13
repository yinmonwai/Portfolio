// import React from "react";
// import { Box, Typography, Grid, Avatar } from "@mui/material";
// import { motion } from "framer-motion";
// import { FaBuilding } from "react-icons/fa";

// const experiences = [
//   {
//     role: "Web Developer",
//     company: "Unity IT Solution Co. Ltd",
//     years: "2023 - 2024",
//     logo: "/company1.png",
//   },
//   {
//     role: "Web Developer",
//     company: "MyDay Thu Kyawal Co. Ltd",
//     years: "2024 - Present",
//     logo: "/company2.png",
//   },
// ];

// export default function WorkExperience() {
//   return (
//     <Box
//       sx={{
//         py: 8,
//         px: { xs: 2, sm: 6 },
//         // background: "linear-gradient(to bottom, #000000, #0a0a1a, #101020)",
//         color: "white",
//       }}
//     >
//       <Typography
//         variant="h4"
//         align="center"
//         sx={{
//           fontWeight: 700,
//           mb: 6,
//           background: "linear-gradient(90deg, #00e5ff, #414457ff)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}
//       >
//         Work Experience
//       </Typography>

//       <Grid container spacing={6} justifyContent="center">
//         {experiences.map((exp, index) => (
//           <Grid item xs={12} md={6} key={index}>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.8,
//                 delay: index * 0.1,
//                 ease: "easeOut",
//               }}
//               whileHover={{ scale: 1.03 }}
//               viewport={{ once: true }}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "1.5rem",
//                 padding: "1.2rem 1.5rem",
//                 borderLeft: "4px solid #3f51b5",
//                 borderRadius: "10px",
//                 background: "rgba(255, 255, 255, 0.05)",
//                 backdropFilter: "blur(4px)",
//                 cursor: "default",
//                 transition: "all 0.3s ease",
//               }}
//             >
//               {exp.logo ? (
//                 <Avatar
//                   src={exp.logo}
//                   alt={exp.company}
//                   sx={{
//                     width: 64,
//                     height: 64,
//                     border: "2px solid #3f51b5",
//                     bgcolor: "rgba(255,255,255,0.1)",
//                   }}
//                 />
//               ) : (
//                 <FaBuilding size={45} color="#3f51b5" />
//               )}

//               <Box sx={{ textAlign: "left" }}>
//                 <Typography
//                   variant="h6"
//                   sx={{ fontWeight: 600, color: "white" }}
//                 >
//                   {exp.role}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   sx={{ color: "#c0c0c0", fontWeight: 400 }}
//                 >
//                   {exp.company}
//                 </Typography>
//                 <Typography
//                   variant="caption"
//                   sx={{ color: "#9a9a9a", fontStyle: "italic" }}
//                 >
//                   {exp.years}
//                 </Typography>
//               </Box>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }


import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { FaCertificate, FaUniversity } from "react-icons/fa";

const certificates = [
  {
    title: "Web Developer",
    issuer: "Unity IT Solution Co. Ltd",
   
  },
  {
    title: "Web Developer",
    issuer: "MyDay Thu Kyawal Co. Ltd",
  },
  
];

export default function WorkExperience() {
  return (
    <Box
      sx={{
        py: { xs: 5, md: 8 },
        px: { xs: 2, md: 6 },
        // background:
        //   "linear-gradient(135deg, rgba(10,10,25,0.9) 0%, rgba(30,30,50,0.95) 100%)",
        color: "#fafafa",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 5,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 1.5,
          background: "linear-gradient(to right, #00bcd4, #4caf50)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Work Exprience
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {certificates.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
              }}
              style={{
                background:
                  "linear-gradient(145deg, rgba(40,40,60,0.9), rgba(60,60,90,0.9))",
                borderRadius: "16px",
                padding: "24px",
                height: "100%",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                style={{ display: "inline-block" }}
              >
                {cert.icon}
              </motion.div>

              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  fontWeight: 600,
                  fontSize: "1.1rem",
                }}
              >
                {cert.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "0.9rem",
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

