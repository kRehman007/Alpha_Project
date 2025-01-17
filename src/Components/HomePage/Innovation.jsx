import { Container, Box, Button, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../../src/assets/Innovation 1.svg";
import img2 from "../../../src/assets/Innovation 2.svg";
import img3 from "../../../src/assets/Innovation 3.svg";
import img4 from "../../../src/assets/Innovation 4.svg";

const Innovation = () => {
  const navigate = useNavigate();
  const ImagesArray = [
    {
      id: 1,
      name: "Andrea James",
      skill: "Digital Brand Designer",
      btn: ["Brand", "Design"],
      img: img1,
    },
    {
      id: 2,
      name: "Alex Benjani",
      skill: "Product Development",
      btn: ["Mobile", "UI", "Design"],
      img: img2,
    },
    {
      id: 3,
      name: "Lily Gabriella",
      skill: "UI Illustrator",
      btn: ["Brand", "UI"],
      img: img3,
    },
    {
      id: 4,
      name: "Andrea James",
      skill: "Digital Brand Designer",
      btn: ["Graphic Designer", "Iluustrator"],
      img: img4,
    },
    {
      id: 5,
      name: "Sabrina Cathrine",
      skill: "Illustrator",
      btn: ["Brand", "Design"],
      img: img1,
    },
  ];
  return (
    <Container sx={{ marginTop: "60px", paddingBottom: "50px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "medium",
              color: "#010205",
              paddingLeft: "7px",
              fontSize: "35px",
            }}
          >
            Meet the Minds Behind the
            <br /> Innovation
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid black",
              borderRadius: 10,
              px: 2,
              py: 1,
              rowGap: 0,
              marginRight: "10px",
              marginTop: { sm: "10px" },
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
              See All
            </button>
            <EastIcon />
          </Typography>
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            overflow: "hidden",
            width: { md: "100vw" },
          }}
        >
          {ImagesArray.map((item) => (
            <Box
              key={item.id}
              sx={{
                position: "relative",
                background: `url(${item.img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                minWidth: "308px",
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
                  {item.name}
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>{item.skill}</Typography>
                <Typography
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  {item.btn.map((inner, index) => (
                    <Button
                      key={index}
                      sx={{
                        color: "#fff",
                        fontSize: "10px",
                        border: "1px solid white",
                        borderRadius: 10,
                      }}
                    >
                      {inner}
                    </Button>
                  ))}
                </Typography>
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography
          sx={{
            display: { xs: "flex", sm: "none" },

            alignItems: "center",
            width: "min-content",
            whiteSpace: "nowrap",
            border: "1px solid black",
            borderRadius: 10,
            padding: "5px 10px",
            rowGap: 0,
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            columnGap: { xs: 0, md: 2 },
          }}
        >
          <button
            onClick={() => navigate("#")}
            style={{
              border: "none",
              backgroundColor: "transparent",
              paddingRight: "9px",
            }}
          >
            Read our story
          </button>
          <EastIcon />
        </Typography>
      </Box>
    </Container>
  );
};

export default Innovation;
