import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import img1 from "../../../src/assets/Innovation 1.svg";
import img2 from "../../../src/assets/Innovation 2.svg";
import img3 from "../../../src/assets/Innovation 3.svg";
import img4 from "../../../src/assets/Innovation 4.svg";
const Section = () => {
  return (
    <Container sx={{ marginTop: "60px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography sx={{ fontSize: "35px", fontWeight: "bold" }}>
          Our Incredible Team
        </Typography>
        <Typography
          sx={{ fontSize: "15px", fontWeight: "medium", color: "#878C91" }}
        >
          We believe in hiring great people and give them the resources and
          support to do their best.
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 2,
            maxWidth: "100%",
            marginTop: "20px",
            marginBottom: "50px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              background: `url(${img1})`,
              backgroundSize: "cover",

              height: "352px",
              borderRadius: 5,
              color: "#fff",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                position: "absolute",
                left: "7%",
                bottom: "10%",
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                Andrea James
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Digital Brand Designer
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Brand
                  </Button>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Design
                  </Button>
                </Box>
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              background: `url(${img2})`,
              backgroundSize: "cover",

              height: "352px",
              borderRadius: 5,
              color: "#fff",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                position: "absolute",
                left: "7%",
                bottom: "10%",
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                Alex Benjani
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Digital Brand Designer
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Mobile
                  </Button>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    UI
                  </Button>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Design
                  </Button>
                </Box>
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              background: `url(${img3})`,
              backgroundSize: "cover",

              height: "352px",
              borderRadius: 5,
              color: "#fff",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                position: "absolute",
                left: "7%",
                bottom: "10%",
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                Lily Gabriella
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Digital Brand Designer
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Mobile
                  </Button>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    UI
                  </Button>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Web
                  </Button>
                </Box>
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              background: `url(${img4})`,
              backgroundSize: "cover",

              height: "352px",
              borderRadius: 5,
              color: "#fff",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                position: "absolute",
                left: "7%",
                bottom: "10%",
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                Sabrina Cathrine
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>Illustator</Typography>
              <Typography
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Graphic Designer
                  </Button>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Illustrator
                  </Button>
                </Box>
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              background: `url(${img1})`,
              backgroundSize: "cover",

              height: "352px",
              borderRadius: 5,
              color: "#fff",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                position: "absolute",
                left: "7%",
                bottom: "10%",
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                Andrea James
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Digital Brand Designer
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Brand
                  </Button>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Design
                  </Button>
                </Box>
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              background: `url(${img2})`,
              backgroundSize: "cover",

              height: "352px",
              borderRadius: 5,
              color: "#fff",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                position: "absolute",
                left: "7%",
                bottom: "10%",
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                Alex Benjani
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Digital Brand Designer
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Mobile
                  </Button>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    UI
                  </Button>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Design
                  </Button>
                </Box>
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              background: `url(${img3})`,
              backgroundSize: "cover",

              height: "352px",
              borderRadius: 5,
              color: "#fff",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                position: "absolute",
                left: "7%",
                bottom: "10%",
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                Lily Gabriella
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Digital Brand Designer
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Mobile
                  </Button>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    UI
                  </Button>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Web
                  </Button>
                </Box>
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              background: `url(${img4})`,
              backgroundSize: "cover",

              height: "352px",
              borderRadius: 5,
              color: "#fff",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                position: "absolute",
                left: "7%",
                bottom: "10%",
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                Sabrina Cathrine
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>Illustator</Typography>
              <Typography
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Graphic Designer
                  </Button>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Illustrator
                  </Button>
                </Box>
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              background: `url(${img1})`,
              backgroundSize: "cover",

              height: "352px",
              borderRadius: 5,
              color: "#fff",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                position: "absolute",
                left: "7%",
                bottom: "10%",
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                Andrea James
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Digital Brand Designer
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Brand
                  </Button>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Design
                  </Button>
                </Box>
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              background: `url(${img2})`,
              backgroundSize: "cover",

              height: "352px",
              borderRadius: 5,
              color: "#fff",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                position: "absolute",
                left: "7%",
                bottom: "10%",
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                Alex Benjani
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Digital Brand Designer
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Mobile
                  </Button>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    UI
                  </Button>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Design
                  </Button>
                </Box>
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              background: `url(${img3})`,
              backgroundSize: "cover",

              height: "352px",
              borderRadius: 5,
              color: "#fff",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                position: "absolute",
                left: "7%",
                bottom: "10%",
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                Lily Gabriella
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Digital Brand Designer
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Mobile
                  </Button>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    UI
                  </Button>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Web
                  </Button>
                </Box>
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              background: `url(${img4})`,
              backgroundSize: "cover",

              height: "352px",
              borderRadius: 5,
              color: "#fff",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                position: "absolute",
                left: "7%",
                bottom: "10%",
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                Sabrina Cathrine
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>Illustator</Typography>
              <Typography
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Graphic Designer
                  </Button>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      border: "1px solid white",
                      borderRadius: 10,
                    }}
                  >
                    Illustrator
                  </Button>
                </Box>
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Section;
