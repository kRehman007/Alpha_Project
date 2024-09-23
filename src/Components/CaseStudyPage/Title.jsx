import { Box, Container, Typography } from "@mui/material";
import img from "../../assets/CaseStudyImg1.svg";
import React from "react";

const Title = () => {
  return (
    <Container sx={{ marginTop: "60px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography sx={{ fontSize: "35px", fontWeight: "medium" }}>
          Case Study Title
        </Typography>
        <Typography
          sx={{ fontSize: "15px", fontWeight: "medium", color: "#878C91" }}
        >
          We are a passionate team of digital marketing enthusiasts dedicated to
          helping businesses succeed in the digital world. With years of
          experience and a deep understanding of the ever-evolving online
          landscape, we stay at the forefront of industry trends and
          technologies.
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

export default Title;
