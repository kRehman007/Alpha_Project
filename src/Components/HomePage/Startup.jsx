import { Container, Typography, Box, Button } from "@mui/material";
import React from "react";
import img1 from "../../../src/assets/Dribbble shot  1.svg";
import img2 from "../../../src/assets/Dribbble shot  2.svg";
import img3 from "../../../src/assets/Dribbble shot  3.svg";

const Startup = () => {
  return (
    <Container
      sx={{
        marginTop: "60px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "black",

          padding: "50px 20px",
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: { sm: "center" },
          alignItems: { sm: "center" },
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontWeight: { xs: "medium", md: 600 },
            fontSize: "35px",
          }}
        >
          Transform Your Startup Journey
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontWeight: 500,
            fontSize: { xs: "12px", sm: "14px" },
            textAlign: { sm: "center" },
            width: { sm: "65ch", md: "70ch" },
          }}
        >
          From Ideation to MVP Development, AlphaEdge Solutions empowers your
          innovation journey with key features for success
        </Typography>
        <Typography sx={{ display: "flex", gap: 3, marginTop: "10px" }}>
          {[1, 2, 3].map((num) => (
            <Button
              sx={{
                border: "1px solid white",
                borderRadius: 5,
                px: 3,
                py: 1,
                color: "#fff",
                fontSize: { xs: "7px", md: "10px" },
              }}
              key={num}
            >
              {num === 1
                ? "Ideation tools"
                : num === 2
                ? "MVP Development"
                : "Organizational Support"}
            </Button>
          ))}
        </Typography>

        <Typography
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            flexWrap: "wrap",
            justifyContent: { xs: "center", lg: "flex-start" },
            alignItems: { xs: "center", lg: "flex-start" },
            gap: { sm: 2 },
            color: "#fff",
          }}
        >
          {[1, 2, 3].map((num) => (
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                background:
                  num === 1
                    ? `url(${img1})`
                    : num === 2
                    ? `url(${img2})`
                    : `url(${img3})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: { xs: "300.86px", lg: "321.86px" },
                height: "321.86px",
                color: "#fff",
                borderRadius: 5,
                marginTop: "40px",
                position: "relative",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  position: "relative",
                  left: "10%",
                  top: "7%",
                }}
              >
                <Typography
                  sx={{ width: "50px", borderBottom: "1px solid white" }}
                ></Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  {num === 1
                    ? "Ideation tools"
                    : num === 2
                    ? "MVP Development"
                    : "Organizational Support"}
                </Typography>
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  bottom: "9%",
                  left: "10%",
                  fontWeight: 500,
                  fontSize: "25px",
                }}
              >
                Ai Wave - Ai Chatbot
                <br />
                Mobile App
              </Typography>
            </Typography>
          ))}
        </Typography>
      </Box>
    </Container>
  );
};

export default Startup;
