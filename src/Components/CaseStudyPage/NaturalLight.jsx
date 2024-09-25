import { Container, Typography, Box } from "@mui/material";
import img1 from "../../assets/CaseStudyImg2.svg";
import img2 from "../../assets/CaseStudyImg3.svg";
import React from "react";

const NaturalLight = () => {
  return (
    <Container sx={{ marginTop: "0px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography
          sx={{
            fontWeight: { xs: "medium", md: "bold" },
            fontSize: { xs: "25px", sm: "35px" },
          }}
        >
          Natural light is a highly sought-after feature in any space
        </Typography>
        <Typography
          sx={{ fontSize: "15px", fontWeight: "medium", color: "#878C91" }}
        >
          Optimize for search land it in region today shall be a cloudy day,
          thanks to blue sky thinking, we can now deploy our new ui to the cloud
          . Unlock meaningful moments of relaxation forcing function , or
          weaponize the data. At the end of the day you better eat a reality
          sandwich before you walk back in that boardroom, and onward and
          upward, productize the deliverables and focus on the bottom line, but
          what do you feel you would bring to the table if you were hired for
          this position. This vendor is incompetent mumbo jumbo, optimize for
          search, yet run it up the flagpole
        </Typography>
        <Typography
          sx={{ fontSize: "15px", fontWeight: "medium", color: "#878C91" }}
        >
          You better eat a reality sandwich before you walk back in that
          boardroom can we jump on a zoom through the lens of product launch, so
          sacred cow pulling teeth put your feelers out. We've bootstrapped the
          model your work on this project has been really impactful, overcome
          key issues to meet key milestones, optics, for we just need to put
          these last issues to bed, or disband the squad but rehydrate as
          needed. Cross pollination across our domains we need to build it so
          that it scales.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: { xs: 1, md: 2, lg: 3 },
            textAlign: "center",
            margin: "10px 0",
          }}
        >
          <img src={img1} style={{ width: "49%" }} />
          <img src={img2} style={{ width: "49%" }} />
        </Box>
        <Typography
          sx={{
            fontWeight: { xs: "medium", md: "bold" },
            fontSize: { xs: "25px", sm: "35px" },
          }}
        >
          Natural light is a highly sought-after feature in any space
        </Typography>
        <Typography
          sx={{ fontSize: "15px", fontWeight: "medium", color: "#878C91" }}
        >
          You better eat a reality sandwich before you walk back in that
          boardroom can we jump on a zoom through the lens of product launch, so
          sacred cow pulling teeth put your feelers out. We've bootstrapped the
          model your work on this project has been really impactful, overcome
          key issues to meet key milestones, optics, for we just need to put
          these last issues to bed, or disband the squad but rehydrate as
          needed. Cross pollination across our domains we need to build it so
          that it scales.
        </Typography>
      </Box>
    </Container>
  );
};

export default NaturalLight;
