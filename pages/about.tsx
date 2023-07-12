import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import * as React from "react";

export interface AboutProps {
  title: string;
  description: string;
  image: string;
}

const abouts: AboutProps[] = [
  {
    title: "Cute Models",
    description:
      "From our in-house Design and Creative studios to our monthly birthday cupcake breaks. We love to build moments.",
    image: "boys-shirts-100x100.jpg",
  },
  {
    title: "Awesome Products",
    description:
      "From our in-house Design and Creative studios to our monthly birthday cupcake breaks. We love to build moments.",
    image: "boys-jumpsuits-100x100.jpg",
  },
  {
    title: "Best Quality",
    description:
      "From our in-house Design and Creative studios to our monthly birthday cupcake breaks. We love to build moments.",
    image: "boys-jeans-100x100.jpg",
  },
];

export default function About() {
  return (
    <>
      <Box
        padding={"80px 0"}
        textAlign={"center"}
        sx={{
          backgroundImage: "url(babystreet-title-background.jpg)",
          backgroundSize: "cover",
        }}
      >
        <Typography fontSize={"47px"} color={"#183a5c"} fontWeight={700}>
          About Us
        </Typography>
      </Box>
      <Container maxWidth="xl">
        <Box padding={"100px 0"}>
          <Grid container spacing={{ xs: 0, md: 8 }}>
            <Grid item xs={12} md={6}>
              <Box
                component={"img"}
                width={"100%"}
                src="bs-blog-1-650x450.jpg"
                alt="bs-blog"
              />
            </Grid>
            <Grid item xs={12} md={6} display={"flex"} alignItems={"center"}>
              <Box>
                <Typography fontSize={"30px"} fontWeight={700} color={"#333"}>
                  Story & Mission
                </Typography>
                <Typography margin={"18px 0"} fontSize={"18px"} color={"#999"}>
                  We believe that childhood is a celebration, and the colorful
                  prints and cute characters we design are inspired by the joy
                  and love children bring into our lives. We celebrate childhood
                  by supporting babies, children, and families with thoughtful
                  designs, quality materials and construction, and convenient
                  shopping options.
                </Typography>
                <Box
                  component={"img"}
                  src="signature-160x63.png"
                  alt="signature"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box padding={"100px 0"} sx={{ background: "#ebf7fa " }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {abouts &&
              abouts.map((about, index) => (
                <Grid key={index} item xs={12} sm={4}>
                  <Card
                    sx={{
                      transition: ".3s linear",
                      ":hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 0px 40px 0 rgba(0, 0, 0, 0.15)",
                      },
                    }}
                  >
                    <CardActionArea
                      sx={{
                        position: "relative",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "50px 20px",
                        ":before": {
                          position: "absolute",
                          content: '""',
                          inset: "10px",
                          border: "2px dashed #000000",
                          opacity: 0.1,
                        },
                      }}
                    >
                      <Box
                        component="img"
                        height="54px"
                        width="54px"
                        sx={{ borderRadius: "50%" }}
                        src={about.image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom fontSize={"18px"}>
                          {about.title}
                        </Typography>
                        <Typography color="text.secondary" fontSize={"18px"}>
                          {about.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="xl">
        <Box padding={"100px 0"}>
          <Grid container spacing={{ xs: 4, md: 8 }}>
            <Grid item xs={12} md={6} display={"flex"} alignItems={"center"}>
              <Box>
                <Typography fontSize={"30px"} fontWeight={700} color={"#333"}>
                  Our Philosophy
                </Typography>
                <Typography margin={"18px 0"} fontSize={"18px"} color={"#999"}>
                  We believe that childhood is a celebration, and the colorful
                  prints and cute characters we design are inspired by the joy
                  and love children bring into our lives. We celebrate childhood
                  by supporting children and families with thoughtful designs,
                  quality materials and convenient shopping options.
                </Typography>
                <Typography
                  marginBottom={"35px"}
                  fontSize={"18px"}
                  color={"#999"}
                >
                  We continue this heritage in every little detail to make
                  dressing easier for mom and life more comfortable for babies,
                  and as we move into the future, we are proud to help families
                  like yours with innovative products.
                </Typography>
                <Button
                  variant="dashed"
                  sx={{ padding: "14px 20px", fontWeight: 700 }}
                >
                  Shop Now
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component={"img"}
                width={"100%"}
                src="bs-blog-3-650x450.jpg"
                alt="bs-blog"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
