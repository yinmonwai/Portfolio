// import React from "react";
// import { Box, Typography, Grid, Paper } from "@mui/material";
// import {
//   FaReact,
//   FaNodeJs,
//   FaDocker,
//   FaLaravel,
//   FaBootstrap,
//   FaHtml5,
//   FaCss3Alt,
//   FaVuejs,
// } from "react-icons/fa";
// import {
//   SiMongodb,
//   SiPostgresql,
//   SiMui,
//   SiJavascript,
//   SiTypescript, 
//   SiMysql,
//   SiLivewire,
//   SiTailwindcss,
//   SiNextdotjs,  
//   SiAntdesign,  
//   SiShadcnui,
// } from "react-icons/si";

// // Skills list with icons
// const skills = [
//   { name: "HTML5", icon: <FaHtml5 color="#e34f26" /> },
//   { name: "CSS3", icon: <FaCss3Alt color="#1572b6" /> },
//   { name: "Bootstrap", icon: <FaBootstrap color="#7952b3" /> },
//   { name: "TailwindCSS", icon: <SiTailwindcss color="#38b2ac" /> },
//   { name: "JavaScript", icon: <SiJavascript color="#f0db4f" /> },
//   { name: "Vue", icon: <FaVuejs color="#4fc08d" /> },
//   { name: "React", icon: <FaReact color="#61dafb" /> },
//   { name: "MUI", icon: <SiMui color="#007fff" /> },
//   { name: "Ant Design", icon: <SiAntdesign color="#0170fe" /> },
//   { name: "shadcn/ui", icon: <SiShadcnui color="#000000" /> },
//   { name: "Laravel", icon: <FaLaravel color="#ff2d20" /> },
//   { name: "Livewire", icon: <SiLivewire color="#0f6ad6" /> },
//   { name: "MySQL", icon: <SiMysql color="#4479a1" /> },
//   { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> }, 
//   { name: "Next JS", icon: <SiNextdotjs color="#61dafb" /> },
//   { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
//   { name: "Express", icon: <FaNodeJs color="#000" /> },
//   { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
//   { name: "MongoDB", icon: <SiMongodb color="#4db33d" /> },
// ];

// export default function Skills() {
//   return (
//     <Grid item xs={12} md={7}>
//       <Typography variant="h6" sx={{ textAlign: "center", mt: 2, mb: 2, fontWeight: 600,color: '#fafbfcff' }}>
//         My Work With
//       </Typography>

//       {/* Skills Grid with Wave Animation */}
//       <Box
//         sx={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: 2,
//           justifyContent: "center",
//         }}
//       >
//         {skills.map((skill, index) => (
//           <Paper
//             key={skill.name}
//             elevation={3}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 1.5,
//               px: 2,
//               py: 1,
//               borderRadius: 2,
//               minWidth: "120px",
//               fontSize: { xs: "1.8rem", sm: "2rem", md: "2.3rem" },
//               "& svg": {
//                 fontSize: "inherit",
//               },
//               animation: "wave 2s ease-in-out infinite",
//               animationDelay: `${index * 0.15}s`, // Stagger effect
//               "@keyframes wave": {
//                 "0%, 100%": { transform: "translateX(0)" },
//                 "80%": { transform: "translateX(-12px)" },
//               },
//             }}
//           >
//             {skill.icon}
//             <Typography
//               variant="body2"
//               sx={{
//                 fontWeight: 500,
//                 fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
//               }}
//             >
//               {skill.name}
//             </Typography>
//           </Paper>
//         ))}
//       </Box>
//     </Grid>
//   );
// }


// import React from "react";
// import { Box, Typography, Grid, Paper } from "@mui/material";
// import {
//   FaReact,
//   FaNodeJs,
//   FaDocker,
//   FaLaravel,
//   FaBootstrap,
//   FaHtml5,
//   FaCss3Alt,
//   FaVuejs,
//   FaGitAlt,
//   FaJava,
// } from "react-icons/fa";
// import {
//   SiMongodb,
//   SiPostgresql,
//   SiMui,
//   SiJavascript,
//   SiTypescript,
//   SiMysql,
//   SiLivewire,
//   SiTailwindcss,
//   SiNextdotjs,
//   SiAntdesign,
//   SiShadcnui,
//   SiExpress,
// } from "react-icons/si";
// import { motion } from "framer-motion";

// const skills = [
//   { name: "Express.js", icon: <SiExpress color="#000000" /> },
//   { name: "Tailwind CSS", icon: <SiTailwindcss color="#38b2ac" /> },
//   { name: "shadcn/ui", icon: <SiShadcnui color="#000000" /> },
//   { name: "Git", icon: <FaGitAlt color="#f1502f" /> },
//   { name: "Java", icon: <FaJava color="#007396" /> },
//   { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
//   { name: "React", icon: <FaReact color="#61dafb" /> },
//   { name: "Laravel", icon: <FaLaravel color="#ff2d20" /> },
//   { name: "Livewire", icon: <SiLivewire color="#0f6ad6" /> },
//   { name: "MySQL", icon: <SiMysql color="#4479a1" /> },
//   { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
//   { name: "MongoDB", icon: <SiMongodb color="#4db33d" /> },
// ];

// export default function Skills() {
//   return (
//     <Box
//       sx={{
//         py: 6,
//         px: { xs: 2, sm: 6 },
//         textAlign: "center",
//         background:
//           "linear-gradient(to bottom, #000000, #0a0a1a, #101020)",
//         color: "white",
//       }}
//     >
//       <Typography
//         variant="h4"
//         sx={{
//           fontWeight: 700,
//           mb: 2,
//           textAlign: "center",
//         }}
//       >
//         Technologies I Work With
//       </Typography>

//       <Typography
//         variant="body1"
//         sx={{
//           mb: 6,
//           color: "#c0c0c0",
//           maxWidth: "700px",
//           mx: "auto",
//         }}
//       >
//         I’m proficient in these modern technologies and frameworks and always
//         eager to learn new ones to expand my skill set.
//       </Typography>

//       <Grid
//         container
//         spacing={3}
//         justifyContent="center"
//         alignItems="center"
//       >
//         {skills.map((skill, index) => (
//           <Grid
//             item
//             xs={6}
//             sm={4}
//             md={3}
//             lg={2}
//             key={index}
//             sx={{ display: "flex", justifyContent: "center" }}
//           >
//             <motion.div
//               animate={{
//                 x: ["-10px", "10px", "-10px"],
//               }}
//               transition={{
//                 duration: 2.5,
//                 repeat: Infinity,
//                 delay: index * 0.15,
//                 ease: "easeInOut",
//               }}
//             >
//               <Paper
//                 elevation={5}
//                 sx={{
//                   background: "rgba(255,255,255,0.05)",
//                   borderRadius: 4,
//                   py: 3,
//                   px: 2,
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   width: { xs: "110px", sm: "130px", md: "140px" },
//                   transition: "transform 0.3s ease",
//                   "&:hover": {
//                     transform: "scale(1.1)",
//                     background: "rgba(255,255,255,0.1)",
//                   },
//                 }}
//               >
//                 <Box sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, mb: 1 }}>
//                   {skill.icon}
//                 </Box>
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     fontWeight: 500,
//                     fontSize: { xs: "0.8rem", sm: "0.9rem" },
//                   }}
//                 >
//                   {skill.name}
//                 </Typography>
//               </Paper>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }


// import React from "react";
// import { Box, Typography } from "@mui/material";
// import {
//   FaReact,
//   FaNodeJs,
//   FaLaravel,
//   FaBootstrap,
//   FaHtml5,
//   FaCss3Alt,
//   FaVuejs,
//   FaGitAlt,
// } from "react-icons/fa";
// import {
//   SiMongodb,
//   SiPostgresql,
//   SiMui,
//   SiJavascript,
//   SiTypescript, 
//   SiMysql,
//   SiLivewire,
//   SiTailwindcss,
//   SiNextdotjs,  
//   SiAntdesign,  
//   SiShadcnui,
// } from "react-icons/si";
// import { motion } from "framer-motion";

// const skills = [

//   { name: "HTML5", icon: <FaHtml5 color="#e34f26" /> },
//   { name: "CSS3", icon: <FaCss3Alt color="#1572b6" /> },
//   { name: "Bootstrap", icon: <FaBootstrap color="#7952b3" /> },
//   { name: "TailwindCSS", icon: <SiTailwindcss color="#38b2ac" /> },
//   { name: "JavaScript", icon: <SiJavascript color="#f0db4f" /> },
//   { name: "Vue", icon: <FaVuejs color="#4fc08d" /> },
//   { name: "React", icon: <FaReact color="#61dafb" /> },
//   { name: "MUI", icon: <SiMui color="#007fff" /> },
//   { name: "Ant Design", icon: <SiAntdesign color="#0170fe" /> },
//   { name: "shadcn/ui", icon: <SiShadcnui color="#f7ececff" /> },
//   { name: "Laravel", icon: <FaLaravel color="#ff2d20" /> },
//   { name: "Livewire", icon: <SiLivewire color="#0f6ad6" /> },
//   { name: "MySQL", icon: <SiMysql color="#4479a1" /> },
//   { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> }, 
//   { name: "Next JS", icon: <SiNextdotjs color="#61dafb" /> },
//   { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
//   { name: "Express", icon: <FaNodeJs color="#000" /> },
//   { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
//   { name: "MongoDB", icon: <SiMongodb color="#4db33d" /> },
//   { name: "Git", icon: <FaGitAlt color="#f1502f" /> },
// ];

// export default function Skills() {
//   const doubledSkills = [...skills, ...skills];

//   const renderMarqueeRow = (reverse = false) => (
//     <motion.div
//       style={{
//         display: "flex",
//         gap: "2.5rem",
//         marginBottom: "2rem",
//       }}
//       animate={{
//         x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
//       }}
//       transition={{
//         duration: 5,
//         ease: "linear",
//         repeat: Infinity,
//       }}
//     >
//       {doubledSkills.map((skill, index) => (
//         <Box
//           key={`${skill.name}-${index}`}
//           sx={{
//             flexShrink: 0,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             transition: "transform 0.3s ease",
//             "&:hover": {
//               transform: "scale(1.15)",
//             },
//           }}
//         >
//           <Box sx={{ fontSize: { xs: "3rem", sm: "3.5rem", md: "3rem" } }}>
//             {skill.icon}
//           </Box>
//           <Typography
//             variant="body2"
//             sx={{
//               mt: 1,
//               fontWeight: 700,
//               fontSize: { xs: "0.8rem", sm: "0.9rem" },
//               color: "#d0d0d0",
//             }}
//           >
//             {skill.name}
//           </Typography>
//         </Box>
//       ))}
//     </motion.div>
//   );

//   return (
//     <Box
//       sx={{
//         py: { xs: 6, md: 10 },
//         px: { xs: 2, sm: 6 },
//         textAlign: "center",
//          borderRadius: 20,
//       }}
//     >
//       <Typography
//         variant="h4"
//         sx={{
//           fontWeight: 700,
//           mb: 2,
//           textAlign: "center",
//         }}
//       >
//         Technologies I Work With
//       </Typography>

//       <Typography
//         variant="body1"
//         sx={{
//           mb: 6,
//           color: "#c0c0c0",
//           maxWidth: "700px",
//           mx: "auto",
//         }}
//       >
//         I’m proficient in these modern technologies and frameworks and always
//         eager to learn new ones to expand my skill set.
//       </Typography>

//       {/* Two parallel moving rows */}
//       <Box sx={{ width: "100%", overflow: "hidden" }}>
//         {renderMarqueeRow(false)}
//         {renderMarqueeRow(true)}
//       </Box>
//     </Box>
//   );
// }


import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaVuejs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiMui,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiLivewire,
  SiTailwindcss,
  SiNextdotjs,
  SiAntdesign,
  SiShadcnui,
  SiPhp,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: <FaHtml5 color="#e34f26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572b6" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952b3" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss color="#38b2ac" /> },
  { name: "JavaScript", icon: <SiJavascript color="#f0db4f" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
  { name: "Vue", icon: <FaVuejs color="#4fc08d" /> },
  { name: "React", icon: <FaReact color="#61dafb" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
  { name: "MUI", icon: <SiMui color="#007fff" /> },
  { name: "Ant Design", icon: <SiAntdesign color="#0170fe" /> },
  { name: "shadcn/ui", icon: <SiShadcnui color="#c0c0c0" /> },
  { name: "PHP", icon: <SiPhp color="#777bb3" /> },
  { name: "Laravel", icon: <FaLaravel color="#ff2d20" /> },
  { name: "Livewire", icon: <SiLivewire color="#0f6ad6" /> },
  { name: "MySQL", icon: <SiMysql color="#4479a1" /> },
  { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
  { name: "Express", icon: <FaNodeJs color="#000000" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { name: "MongoDB", icon: <SiMongodb color="#4db33d" /> },
  { name: "Git", icon: <FaGitAlt color="#f1502f" /> },
];

export default function Skills() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const doubledSkills = [...skills, ...skills];

  const renderMarqueeRow = (reverse = false) => (
    <motion.div
      style={{
        display: "flex",
        gap: "2.5rem",
        marginBottom: "2rem",
      }}
      animate={{
        x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
      }}
      transition={{
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {doubledSkills.map((skill, index) => (
        <Box
          key={`${skill.name}-${index}`}
          sx={{
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.2)",
              filter: "drop-shadow(0 0 8px rgba(255,255,255,0.4))",
            },
          }}
        >
          <Box sx={{ fontSize: { xs: "2.5rem", sm: "3.5rem", md: "3rem" } }}>
            {skill.icon}
          </Box>
          <Typography
            variant="body2"
            sx={{
              mt: 1,
              fontWeight: 600,
              fontSize: { xs: "0.75rem", sm: "0.9rem" },
              color: isDarkMode ? "#e0e0e0" : "#333",
            }}
          >
            {skill.name}
          </Typography>
        </Box>
      ))}
    </motion.div>
  );

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 6 },
        textAlign: "center",
        borderRadius: 6,
        overflow: "hidden",
        background: isDarkMode
          ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)"
          : "linear-gradient(135deg, #fdfdfd 0%, #f0f0f0 100%)",
        boxShadow: isDarkMode
          ? "0 0 20px rgba(255,255,255,0.05)"
          : "0 0 20px rgba(0,0,0,0.05)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: isDarkMode ? "#5b74f0ff" : "#2da4e9ff",

        }}
      >
        Technologies I Work With
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: 6,
          color: isDarkMode ? "#b0b0b0" : "#555",
          maxWidth: "700px",
          mx: "auto",
        }}
      >
        I’m proficient in these modern technologies and frameworks and always
        eager to learn new ones to expand my skill set.
      </Typography>

      <Box sx={{ width: "100%", overflow: "hidden" }}>
        {renderMarqueeRow(false)}
        {renderMarqueeRow(true)}
      </Box>
    </Box>
  );
}
