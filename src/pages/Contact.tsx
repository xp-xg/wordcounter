
import { Typography, Container, TextField, Button, Box, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper sx={{ p: 4, backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <ContactMailIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h4" component="h1">
            {t("contactUs")}
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ mb: 4 }}>
          {t("contactText")}
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label={t("nameLabel")}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label={t("emailLabel")}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label={t("messageLabel")}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            {t("submitButton")}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Contact;
