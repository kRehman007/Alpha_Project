import React, { useRef, useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import img1 from "../../assets/CS1.svg";
import img2 from "../../assets/CS2.svg";
import img3 from "../../assets/CS3.svg";
import img4 from "../../assets/CS4.svg";
import "swiper/css";
const Section3 = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const scrollRef = useRef(null);
  const SlideWidth = window.innerWidth;

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
        id: 1,
        img: img1,
        heading: "Fintech",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium.",
      },
      {
        id: 1,
        img: img2,
        heading: "Dummy Heading",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium",
      },
      {
        id: 1,
        img: img3,
        heading: "Lorem Ipsum",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium",
      },
      {
        id: 1,
        img: img4,
        heading: "Software Tech",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium",
      },
    ],
    [
      {
        id: 1,
        img: img1,
        heading: "Fintech",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium.",
      },
      {
        id: 1,
        img: img2,
        heading: "Dummy Heading",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium",
      },
      {
        id: 1,
        img: img3,
        heading: "Lorem Ipsum",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium",
      },
      {
        id: 1,
        img: img4,
        heading: "Software Tech",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium",
      },
    ],
    [
      {
        id: 1,
        img: img1,
        heading: "Fintech",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium.",
      },
      {
        id: 1,
        img: img2,
        heading: "Dummy Heading",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium",
      },
      {
        id: 1,
        img: img3,
        heading: "Lorem Ipsum",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium",
      },
      {
        id: 1,
        img: img4,
        heading: "Software Tech",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium",
      },
    ],
    [
      {
        id: 1,
        img: img1,
        heading: "Fintech",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium.",
      },
      {
        id: 1,
        img: img2,
        heading: "Dummy Heading",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium",
      },
      {
        id: 1,
        img: img3,
        heading: "Lorem Ipsum",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium",
      },
      {
        id: 1,
        img: img4,
        heading: "Software Tech",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium",
      },
    ],
    [
      {
        id: 1,
        img: img1,
        heading: "Fintech",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium.",
      },
      {
        id: 1,
        img: img2,
        heading: "Dummy Heading",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium",
      },
      {
        id: 1,
        img: img3,
        heading: "Lorem Ipsum",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium",
      },
      {
        id: 1,
        img: img4,
        heading: "Software Tech",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium",
      },
    ],
  ];

  return (
    <Container sx={{ marginTop: "40px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "medium", fontSize: "35px" }}>
            Case Studies
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
              See our Work
            </button>
            <EastIcon />
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            scrollBehavior: "smooth",
            overflow: "hidden",
          }}
          ref={scrollRef}
        >
          {HighArray.map((item) => (
            <>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  columnGap: { xs: "20px", sm: "0px", md: "20px" },
                  marginTop: "30px",
                  rowGap: "10px",
                  minWidth: "100vw",
                }}
              >
                {item.map((item) => (
                  <Box key={item.id} sx={{ display: "flex", gap: 3 }}>
                    <Typography
                      sx={{
                        maxWidth: { xs: "150px", sm: "130px", md: "200px" },
                      }}
                    >
                      <img
                        src={item.img}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        marginTop: { xs: "10px", sm: "20px" },
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "20px",
                        }}
                      >
                        {item.heading}
                      </Typography>
                      <Typography
                        sx={{
                          width: { xs: "28ch", sm: "30ch" },
                          color: "#878C91",
                          fontSize: "12px",
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </>
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
      </Box>
    </Container>
  );
};

export default Section3;
