import React from "react";
import { Box, Container, Typography } from "@mui/material";
import img from "../../assets/CaseStudyImg1.svg";

const Section1 = () => {
  return (
    <Container sx={{ marginTop: "60px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography
          sx={{
            fontSize: "35px",
            fontWeight: { xs: "medium", sm: "bold" },
            lineHeight: 1.2,
          }}
        >
          The Benefits of Meditation: How Sitting in Silence Can Improve Your
          Mental Health
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ height: { xs: "360px", sm: "auto" } }}>
            <img
              src={img}
              style={{
                marginTop: "10px",
                objectPosition: "center",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Box>
          <hr style={{ marginTop: "10px" }} />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: { xs: "medium", sm: "bold" },
              }}
            >
              James Nedwirj
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: { xs: "medium", sm: "bold" },
              }}
            >
              August 5, 2023
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Section1;
