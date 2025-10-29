import { Typography, Container, TextField, Button, Box, Paper, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useDocumentTitle, useMetaDescription } from "../lib/useDocumentTitle";
import { useStructuredData } from "../lib/useStructuredData";
import { useEffect } from "react";

const Contact = () => {
  const { t } = useTranslation();
  
  useDocumentTitle(t("freeWordCounterSupport"));
  useMetaDescription(t("supportForQuestions"));

  // Add structured data for the Contact page
  useStructuredData({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": t("freeWordCounterSupport"),
    "description": t("supportForQuestions"),
    "url": "https://yourdomain.com/contact",
    "potentialAction": {
      "@type": "Contact",
      "name": t("submitButton")
    }
  });

  useEffect(() => {
    const loadAdsterraContactBanner = () => {
      const container = document.getElementById("adsterra-contact-banner");
      if (container) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.innerHTML = `
          atOptions = {
            'key' : 'b8d52d7c0217f7f4533d6cbf0056701a',
            'format' : 'iframe',
            'height' : 90,
            'width' : 728,
            'params' : {}
          };
        `;
        container.appendChild(script);

        const invokeScript = document.createElement("script");
        invokeScript.type = "text/javascript";
        invokeScript.src =
          "//www.highperformanceformat.com/b8d52d7c0217f7f4533d6cbf0056701a/invoke.js";
        container.appendChild(invokeScript);
      }
    };

    const timer = setTimeout(() => {
      loadAdsterraContactBanner();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper sx={{ p: 4, backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
        <Box sx={{ my: 2, textAlign: "center" }}>
          <div id="adsterra-contact-banner"></div>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <ContactMailIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h4" component="h1">
            {t("contactUs")}
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ mb: 4 }} paragraph>
          {t("questionsSuggestionsFeedback")}
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
        <Typography variant="body2" sx={{ mt: 3, color: 'text.secondary' }}>
          {t("visitResourcesForHelp")}
        </Typography>
        
        {/* Internal links section */}
        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <Typography variant="h6" gutterBottom>{t("exploreOurToolsResources")}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, mt: 1, flexWrap: 'wrap' }}>
            <Link href="/" color="secondary" underline="hover">{t("freeWordCounterTool")}</Link>
            <Link href="/resources" color="secondary" underline="hover">{t("writingGuides")}</Link>
            <Link href="/about" color="secondary" underline="hover">{t("aboutUs")}</Link>
            <Link href="/privacy-policy" color="secondary" underline="hover">{t("privacyPolicy")}</Link>
            <Link href="/terms-of-service" color="secondary" underline="hover">{t("termsOfService")}</Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Contact;
