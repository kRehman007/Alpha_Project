import { Container, Typography, Box } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React from "react";
import img1 from "../../assets/Blogimg.svg";
import img2 from "../../assets/Bloglogo1.svg";
import img3 from "../../assets/Bloglogo2.svg";
import img4 from "../../assets/Bloglogo3.svg";

const Section1 = () => {
  return (
    <Container sx={{ marginTop: "60px", marginBottom: "40px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography sx={{ fontWeight: 600, fontSize: "35px" }}>Blog</Typography>

        <Typography
          sx={{ fontSize: "14px", color: "#878C91", fontWeight: 500 }}
        >
          Explore our latest insights and tips to help your business grow:
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            marginTop: "20px",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "65%" },
              borderRadius: "10px",
              background: `url(${img1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: "-17%",
                width: "90%",
                backgroundColor: "lightgreen",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: 2,
                padding: "20px",
                display: { xs: "none", sm: "block" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  color: "#878C91",
                  fontSize: "12px",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                  }}
                >
                  May 22
                </Typography>
                <AccessTimeIcon
                  sx={{
                    fontSize: "20px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "12px",
                  }}
                >
                  4 min read
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: "medium",
                  color: "#121212",
                  lineHeight: "1",
                  margin: "10px 0",
                }}
              >
                The Benefits of Meditation: Improve mental health with simple
                practices.
              </Typography>
              <Typography sx={{ color: "#878C91", fontSize: "12px" }}>
                we are a passionate team of digital marketing enthusiasts
                dedicated to helping businesses succeed in the digital world.
                With years of experience and a deep understanding
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "35%" },
              display: "flex",
              flexDirection: { xs: "column", sm: "row", md: "column" },
              maxHeight: "400px",
              marginTop: { sm: "100px", md: "0" },
              gap: { xs: 2, sm: 7, md: 2 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", sm: "column", md: "row" },
                gap: 1,
              }}
            >
              <img
                src={img2}
                style={{
                  borderRadius: "10px",
                  maxWidth: "190px",
                  maxHeight: "140px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: { xs: "5px" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    color: "#878C91",
                    fontSize: "12px",
                    alignItems: "center",
                    paddingLeft: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                    }}
                  >
                    May 22
                  </Typography>
                  <AccessTimeIcon
                    sx={{
                      fontSize: "20px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "12px",
                    }}
                  >
                    4 min read
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#121212",
                    fontWeight: "medium",
                  }}
                >
                  How to Travel on a Budget: See the world without breaking the
                  bank.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", sm: "column", md: "row" },
                gap: 1,
              }}
            >
              <img
                src={img3}
                style={{
                  borderRadius: "10px",
                }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    color: "#878C91",
                    fontSize: "12px",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                    }}
                  >
                    May 22
                  </Typography>
                  <AccessTimeIcon
                    sx={{
                      fontSize: "20px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "12px",
                    }}
                  >
                    4 min read
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#121212",
                    fontWeight: "medium",
                  }}
                >
                  The Importance of Diversity and Inclusion in the Workplace
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", sm: "column", md: "row" },
                gap: 1,
              }}
            >
              <img
                src={img4}
                style={{
                  borderRadius: "10px",
                  maxWidth: "190px",
                  maxHeight: "140px",
                }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    color: "#878C91",
                    alignItems: "center",
                    paddingLeft: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                    }}
                  >
                    May 22
                  </Typography>
                  <AccessTimeIcon
                    sx={{
                      fontSize: "20px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "12px",
                    }}
                  >
                    4 min read
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#121212",
                    fontWeight: "medium",
                  }}
                >
                  How to Travel on a Budget: Tips for Seeing the World Without
                  Breaking the Bank
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Section1;
