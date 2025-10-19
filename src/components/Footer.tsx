
import { Typography, Container, Box, Link } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center" gutterBottom>
          {`© ${new Date().getFullYear()} ${t("wordCounter")} | ${t("allRightsReserved")}`}
        </Typography>
        <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
          <Link href="/about" color="inherit" underline="hover">
            {t("about")}
          </Link>
          <Link href="/contact" color="inherit" underline="hover">
            {t("contact")}
          </Link>
          <Link href="/resources" color="inherit" underline="hover">
            {t("resources")}
          </Link>
          <Link href="/privacy-policy" color="inherit" underline="hover">
            {t("privacyPolicy")}
          </Link>
          <Link href="/terms-of-service" color="inherit" underline="hover">
            {t("termsOfService")}
          </Link>
          <Link href="/cookie-policy" color="inherit" underline="hover">
            {t("cookiePolicy")}
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
