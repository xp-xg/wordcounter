import { Typography, Container, Paper, Box, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import InfoIcon from '@mui/icons-material/Info';
import { useDocumentTitle, useMetaDescription } from "../lib/useDocumentTitle";
import { useStructuredData } from "../lib/useStructuredData";
import { useEffect } from "react";

const About = () => {
  const { t } = useTranslation();
  
  useDocumentTitle(t("textAnalysisMadeSimple"));
  useMetaDescription(t("accurateFastEasyToUse"));

  // Add structured data for the About page
  useStructuredData({
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": t("textAnalysisMadeSimple"),
    "description": t("accurateFastEasyToUse"),
    "url": "https://yourdomain.com/about",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": t("wordCounter"),
      "applicationCategory": "EducationalApplication",
      "description": t("freeWordCounterDescription"),
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  });

  useEffect(() => {
    const loadAdsterraAboutBanner = () => {
      const container = document.getElementById("adsterra-about-banner");
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
      loadAdsterraAboutBanner();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper sx={{ p: 4, backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
        <Box sx={{ my: 2, textAlign: "center" }}>
          <div id="adsterra-about-banner"></div>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <InfoIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h4" component="h1">
            {t("aboutUs")}
          </Typography>
        </Box>
        <Typography variant="body1" paragraph>
          {t("aboutText")} {t("completelyFree")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("completelyFree")}
        </Typography>
        
        {/* Internal links section */}
        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <Typography variant="h6" gutterBottom>{t("learnMore")}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, mt: 1, flexWrap: 'wrap' }}>
            <Link href="/" color="secondary" underline="hover">{t("useOurTool")}</Link>
            <Link href="/resources" color="secondary" underline="hover">{t("writingResources")}</Link>
            <Link href="/contact" color="secondary" underline="hover">{t("contactUs")}</Link>
            <Link href="/privacy-policy" color="secondary" underline="hover">{t("privacyPolicy")}</Link>
            <Link href="/terms-of-service" color="secondary" underline="hover">{t("termsOfService")}</Link>
            <Link href="/cookie-policy" color="secondary" underline="hover">{t("cookiePolicy")}</Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;
