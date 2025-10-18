
import { Typography, Container, Paper, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import InfoIcon from '@mui/icons-material/Info';

const About = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper sx={{ p: 4, backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <InfoIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h4" component="h1">
            {t("aboutUs")}
          </Typography>
        </Box>
        <Typography variant="body1">
          {t("aboutText")}
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
