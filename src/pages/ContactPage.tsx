
import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <title>Contact Us - Word Counter Support</title>
      <meta name="description" content="Get in touch with the Word Counter team. Contact us for support, feedback, or any inquiries you may have about our free online text analysis tool." />
      <Typography variant="h4" component="h1" gutterBottom>
        {t("contact_us")}
      </Typography>
      <Typography variant="body1">
        {t("contact_text")}
      </Typography>
    </Container>
  );
};

export default ContactPage;
