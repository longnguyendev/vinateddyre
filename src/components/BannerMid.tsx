import { Box, Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "./Link";

export function BannerMid() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            backgroundImage: "url(/back-dark-blue-section.jpg)",
            width: "100%",
            height: "600px",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "150px",
              textAlign: "center",
            }}
          >
            <Typography color="#81d1e5" fontSize="19px" fontWeight={700}>
              BACK TO SCHOOL
            </Typography>
            <Typography
              component={motion.div}
              initial={{ scale: 0.3 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              variant="h3"
              fontFamily="Hensa"
              color="white"
              fontSize="72px"
            >
              Girls Collection
            </Typography>
            <Typography color="white" fontSize="19px" fontWeight={500}>
              We celebrate childhood by supporting babies, children, and
              families
            </Typography>
            <Typography color="white" fontSize="19px" fontWeight={500}>
              with thoughtful designs, quality materials and construction,
            </Typography>
            <Typography color="white" fontSize="19px" fontWeight={500}>
              and convenient shopping options.
            </Typography>
            <Button
              LinkComponent={Link}
              href="/shop"
              variant="dashed"
              aria-label="go to shop"
              sx={{ padding: "14px 20px", marginTop: "50px", fontWeight: 700 }}
            >
              Shop Collection
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            backgroundImage: "url(/back-school-kids.jpg)",
            width: "100%",
            height: { xs: "300px", md: "600px" },
            backgroundSize: "cover",
            backgroundPosition: "center  center",
          }}
        />
      </Grid>
    </Grid>
  );
}
