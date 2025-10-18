
import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <title>About Our Word Counter - Free Text Analysis Tool</title>
      <meta name="description" content="Learn more about our free online word counter. Discover the features and technology behind our text analysis tool, built with React and Material-UI." />
      <Typography variant="h4" component="h1" gutterBottom>
        {t("about_us")}
      </Typography>
      <Typography variant="body1">
        {t("about_text")}
      </Typography>
    </Container>
  );
};

export default AboutPage;
