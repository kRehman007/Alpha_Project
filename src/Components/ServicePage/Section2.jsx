import React from "react";
import { Container, Box, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import img from "../../assets/serviceImg.svg";
const Section2 = () => {
  return (
    <Container sx={{ marginTop: "40px" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "medium", fontSize: "35px" }}>
            What is Id8Edge?
          </Typography>
          <Typography
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              width: "min-content",
              whiteSpace: "nowrap",
              border: "1px solid black",
              borderRadius: 10,
              padding: "5px 10px",
              marginTop: { sm: "10px" },
              marginRight: "22px",
              rowGap: 0,
              columnGap: { xs: 0, sm: 2 },
            }}
          >
            <button
              onClick={() => navigate("#")}
              style={{
                border: "none",
                backgroundColor: "transparent",
                paddingRight: "9px",
                fontWeight: "bold",
              }}
            >
              Get a Quote
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
            justifyContent: "space-between",
            marginTop: { xs: "0px", sm: "20px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              order: { xs: 2, sm: 1 },
              marginTop: { sm: "20px", md: "40px" },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ display: { xs: "none", md: "block" } }}>
                  <KeyboardDoubleArrowRightIcon
                    style={{
                      marginTop: { xs: "7px", md: "0px" },
                    }}
                  />
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 600,
                    fontSize: "18px",
                  }}
                >
                  Integrate Comprehensive Business Data
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "#878C91",
                  fontSize: "12px",
                }}
              >
                we are a passionate team of digital marketing enthusiasts
                dedicated to
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ display: { xs: "none", md: "block" } }}>
                  <KeyboardDoubleArrowRightIcon style={{ marginTop: "7px" }} />
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    marginTop: "10px",
                    fontWeight: 600,
                    fontSize: "18px",
                  }}
                >
                  Receive Intelligent Recommendations
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "#878C91",
                  fontSize: "12px",
                }}
              >
                we are a passionate team of digital marketing enthusiasts
                dedicated to
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ display: { xs: "none", md: "block" } }}>
                  <KeyboardDoubleArrowRightIcon style={{ marginTop: "7px" }} />
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    marginTop: "10px",
                    fontWeight: 600,
                    fontSize: "18px",
                  }}
                >
                  Act, Implement & Monitor Progress
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "#878C91",
                  fontSize: "12px",
                }}
              >
                we are a passionate team of digital marketing enthusiasts
                dedicated to
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              height: { xs: "100%", md: "300px" },
              marginRight: { xs: "25px", sm: "0" },
              marginTop: { xs: "30px", sm: "20px" },
              order: { xs: 1, sm: 2 },
              marginBottom: { xs: "15px", sm: "0px" },
            }}
          >
            <img src={img} style={{ width: "100%", height: "100%" }} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Section2;
