// import React from "react";
// import { Box, Container, Typography, Link as MuiLink } from "@mui/material";
// export default function Footer() {
//   return (
//     <Box
//       component="footer"
//       sx={{ py: 4, borderTop: "1px solid", borderColor: "divider" }}
//     >
//       <Container
//         maxWidth="lg"
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <Typography variant="body2" sx={{ color:"#fafbfcff" }}>
//           © {new Date().getFullYear()} FullStackDev — Built with React 
//         </Typography>
//       </Container>
//     </Box>
//   );
// }

import React from "react";
import { Box, Container, Typography, Link as MuiLink, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        borderTop: "1px solid",
        borderColor: "divider",
        backgroundColor: theme.palette.background.paper,
        transition: "all 0.3s ease",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: { xs: "center", sm: "left" },
          gap: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: mode === "light" ? "#0e0e0eff" : "#f9fafcff",
          }}
        >
          © {new Date().getFullYear()}{" "}
          <MuiLink
            href="#"
            underline="hover"
            sx={{
              color: mode === "light" ? "#0e0e0eff" : "#f9fafcff",
              fontWeight: 500,
            }}
          >
            FullStackDev
          </MuiLink>{" "}
          — Built with React 
        </Typography>

        <Typography
          variant="body2"
          sx={{
            // color: theme.palette.text.secondary,
            color: mode === "light" ? "#0e0e0eff" : "#f9fafcff",
          }}
        >
          Designed with ❤️ by You
        </Typography>
      </Container>
    </Box>
  );
}

