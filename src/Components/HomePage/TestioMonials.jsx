import { Container, Box, Typography, Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TestioMonials = () => {
  const SwiperRef = useRef();
  let text =
    '" lphaEdge Solutions thoroughly analyzes our industry and targe  audience, allowing them to develop customized campaigns that  effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition."';

  const Array = [
    { id: 1, text: text, name: "Michael Kaizer", desc: "CEO of Basecamp Corp" },
    { id: 2, text: text, name: "Michael Kaizer", desc: "CEO of Basecamp Corp" },
    { id: 3, text: text, name: "Michael Kaizer", desc: "CEO of Basecamp Corp" },
    {
      id: 4,
      text: text,
      name: "Michael Kaizer",
      desc: "CEO of Basecamp CorpCEO",
    },
    { id: 5, text: text, name: "Michael Kaizer", desc: "CEO of Basecamp Corp" },
  ];

  return (
    <Container sx={{ marginTop: "60px" }}>
      <Box sx={{ paddingBottom: "40px" }}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => {
            SwiperRef.current = swiper;
          }}
        >
          {Array.map((item) => (
            <SwiperSlide>
              <Box
                key={item.id}
                sx={{ display: "flex", flexDirection: "column", gap: 4 }}
              >
                <Typography
                  sx={{
                    fontWeight: { xs: "medium", sm: 600 },
                    fontSize: "20px",
                  }}
                >
                  {item.text}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    gap: { xs: 2, sm: 0 },
                  }}
                >
                  <Typography
                    sx={{ display: "flex", gap: 2, alignItems: "center" }}
                  >
                    <Button
                      sx={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        backgroundColor: "lightgray",
                      }}
                    ></Button>
                    <Typography
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "#010205",
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography sx={{ color: "#871c91", fontSize: "12px" }}>
                        {item.desc}
                      </Typography>
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      paddingLeft: { xs: "10px", sm: "0" },
                      paddingTop: { xs: "10px", sm: "0" },
                    }}
                  >
                    <Typography
                      onClick={() => SwiperRef.current?.slidePrev()}
                      sx={{
                        cursor: "pointer",
                        border: "1px solid black",
                        borderRadius: 5,
                        padding: "5px 15px",
                        display: "flex",
                        justifyContent: "center",

                        alignItems: "center",
                        backgroundColor: item.id == Array.length && "black",
                        color: item.id == Array.length ? "#fff" : "#000",
                      }}
                    >
                      <KeyboardBackspaceIcon />
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      <span style={{ fontWeight: "bold" }}>0{item.id}</span>
                      /0
                      {Array.length}
                    </Typography>
                    <Typography
                      onClick={() => SwiperRef.current?.slideNext()}
                      sx={{
                        cursor: "pointer",
                        border: "1px solid black",
                        borderRadius: 5,
                        padding: "5px 15px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: item.id < Array.length && "black",
                        color: item.id < Array.length ? "#fff" : "#000",
                      }}
                    >
                      <EastIcon />
                    </Typography>
                  </Typography>
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default TestioMonials;
