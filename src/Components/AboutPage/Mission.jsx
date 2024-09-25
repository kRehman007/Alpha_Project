import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
const Mission = () => {
  const Array = [
    {
      id: 1,
      heading: "Heading 01",
      text: "we are a passionate team of digital marketing enthusiasts dedicated to",
    },
    {
      id: 2,
      heading: "Heading 02",
      text: "we are a passionate team of digital marketing enthusiasts dedicated to",
    },
    {
      id: 3,
      heading: "Heading 03",
      text: "we are a passionate team of digital marketing enthusiasts dedicated to",
    },
  ];
  return (
    <Container sx={{ marginTop: "40px" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontWeight: "medium", fontSize: "35px" }}>
            Our Mission
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid black",
              borderRadius: 10,
              marginTop: { sm: "10px" },
              px: 2,
              rowGap: 0,
              columnGap: { xs: 0, md: 2 },
              display: { xs: "none", sm: "flex" },
            }}
          >
            <button
              onClick={() => navigate("#")}
              style={{
                border: "none",
                backgroundColor: "transparent",
                paddingRight: "7px",
              }}
            >
              Read our story
            </button>
            <EastIcon />
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#878C91",
            paddingLeft: { xs: "5px", sm: "0" },
          }}
        >
          From Ideation to MVP Development
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },

            gap: 2,
            marginTop: "30px",
            justifyContent: "space-between",
          }}
        >
          {Array.map((item) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  width: "min-content",
                  borderRadius: 2,
                  backgroundColor: "#E4E4E4",
                  padding: "7px 10px",
                  fontWeight: 600,
                }}
              >
                0{item.id}
              </Typography>
              <Typography
                sx={{ fontWeight: 600, fontSize: "15px", marginTop: "10px" }}
              >
                {item.heading}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "medium",
                  color: "#878C91",
                  width: { md: "35ch" },
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Mission;
