import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { Container, Box, Typography } from "@mui/material";
import img from "../../assets/trendingBlog.svg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EastIcon from "@mui/icons-material/East";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Section2 = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const scrollRef = useRef(null);
  const SlideWidth = window.innerWidth;
  console.log(SlideWidth);

  const ScrollRight = () => {
    if (currentIndex < 5 && scrollRef.current) {
      scrollRef.current.scrollBy({
        left: SlideWidth,
        behavior: "smooth",
      });
      if (currentIndex < HighArray.length) {
        setCurrentIndex((prev) => prev + 1);
      }
    }
  };
  const ScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -SlideWidth, behavior: "smooth" });
      if (currentIndex > 1) {
        setCurrentIndex((prev) => prev - 1);
      }
    }
  };
  const HighArray = [
    [
      {
        id: "1",
        head: "The Importance of Diversity and Inclusion in the Workplace",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore ",
      },
      {
        id: "2",
        head: "The Importance of Diversity and Inclusion in the Workplace",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore ",
      },
      {
        id: "3",
        head: "The Importance of Diversity and Inclusion in the Workplace",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
      },
    ],
    [
      {
        id: "1",
        head: "The Importance of Diversity and Inclusion in the Workplace",
        text: "Foster a more inclusive and productive work environment.",
      },
      {
        id: "2",
        head: "The Importance of Diversity and Inclusion in the Workplace",
        text: "Foster a more inclusive and productive work environment.",
      },
      {
        id: "3",
        head: "The Importance of Diversity and Inclusion in the Workplace",
        text: "Foster a more inclusive and productive work environment.",
      },
    ],
    [
      {
        id: "1",
        head: "The Importance of Diversity and Inclusion in the Workplace",
        text: "Foster a more inclusive and productive work environment.",
      },
      {
        id: "2",
        head: "The Importance of Diversity and Inclusion in the Workplace",
        text: "Foster a more inclusive and productive work environment.",
      },
      {
        id: "3",
        head: "The Importance of Diversity and Inclusion in the Workplace",
        text: "Foster a more inclusive and productive work environment.",
      },
    ],
    [
      {
        id: "1",
        head: "The Importance of Diversity and Inclusion in the Workplace",
        text: "Foster a more inclusive and productive work environment.",
      },
      {
        id: "2",
        head: "The Importance of Diversity and Inclusion in the Workplace",
        text: "Foster a more inclusive and productive work environment.",
      },
      {
        id: "3",
        head: "The Importance of Diversity and Inclusion in the Workplace",
        text: "Foster a more inclusive and productive work environment.",
      },
    ],
    [
      {
        id: "1",
        head: "The Importance of Diversity and Inclusion in the Workplace",
        text: "Foster a more inclusive and productive work environment.",
      },
      {
        id: "2",
        head: "The Importance of Diversity and Inclusion in the Workplace",
        text: "Foster a more inclusive and productive work environment.",
      },
      {
        id: "3",
        head: "The Importance of Diversity and Inclusion in the Workplace",
        text: "Foster a more inclusive and productive work environment.",
      },
    ],
  ];
  return (
    <Container sx={{ marginTop: { xs: "100px", sm: "50px", md: "100px" } }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "medium", fontSize: "35px" }}>
            Trending Blog
          </Typography>
          <Typography
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <input
              type="search"
              placeholder="Search Blogs"
              style={{
                backgroundColor: "transparent",
                padding: "10px 5px",
                border: "none",
                borderBottom: "1px solid lightgray",
              }}
            />
          </Typography>
        </Box>
      </Box>

      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 4, md: 0 },
          flexWrap: { sm: "wrap", md: "nowrap" },
          width: "100%",
          overflow: "hidden",
          marginTop: "20px",
        }}
      >
        {HighArray.map((row) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              flexWrap: { sm: "wrap", md: "nowrap" },
              minWidth: { xs: "100%", md: `${SlideWidth}px` },
              overflow: { xs: "auto", md: "hidden" },
              gap: { xs: 4, md: 5, lg: 10 },
            }}
          >
            {row.map((item) => (
              <Box
                sx={{
                  maxWidth: { xs: "100%", md: "33%" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: { xs: 0, sm: 1 },
                }}
              >
                <Box
                  sx={{
                    height: {
                      xs: "400px",
                      sm: "300px",
                      md: "200px",
                      lg: "300px",
                    },
                    width: { xs: "100%", md: "auto" },
                  }}
                >
                  <img src={img} style={{ width: "100%", height: "100%" }} />
                </Box>
                <Box
                  sx={{
                    paddingLeft: { xs: "12px", md: "0" },
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
                    color: "#121212",
                    fontWeight: 600,
                    maxWidth: "35ch",
                  }}
                >
                  {item.head}
                </Typography>
                <Typography
                  sx={{
                    color: "#878C91",
                    fontSize: "12px",
                    maxWidth: "50ch",
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      <Typography
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          marginTop: "50px",
          width: "100%",
          marginBottom: "20px",
          justifyContent: "flex-end",
          display: { xs: "none", md: "flex" },
        }}
      >
        <Typography
          onClick={ScrollLeft}
          sx={{
            cursor: "pointer",
            border: "1px solid black",
            borderRadius: 5,
            padding: "5px 15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: currentIndex == 5 ? "black" : "white",
            color: currentIndex == 5 ? "white" : "black",
          }}
        >
          <KeyboardBackspaceIcon />
        </Typography>
        <Typography sx={{ fontSize: "14px" }}>
          <span style={{ fontWeight: "bold" }}>
            0{currentIndex}/0{HighArray.length}
          </span>
        </Typography>
        <Typography
          onClick={ScrollRight}
          sx={{
            cursor: "pointer",
            border: "1px solid black",
            borderRadius: 5,
            padding: "5px 15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: currentIndex < 5 ? "black" : "white",
            color: currentIndex < 5 ? "white" : "black",
          }}
        >
          <EastIcon />
        </Typography>
      </Typography>
    </Container>
  );
};

export default Section2;
