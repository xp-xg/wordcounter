import { Typography, Container, Paper, Box, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDocumentTitle, useMetaDescription } from "../lib/useDocumentTitle";
import { useStructuredData } from "../lib/useStructuredData";
import { useEffect } from "react";

const TermsOfService = () => {
  const { t } = useTranslation();
  
  useDocumentTitle(t("termsOfServiceTitle"));
  useMetaDescription(t("termsDescription"));

  // Add structured data for the Terms of Service page
  useStructuredData({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t("termsOfServiceTitle"),
    "description": t("termsDescription"),
    "url": "https://yourdomain.com/terms-of-service",
    "about": {
      "@type": "Organization",
      "name": t("wordCounter")
    },
    "mentions": [
      {
        "@type": "SoftwareApplication",
        "name": t("freeWordCounterTool"),
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    ]
  });

  useEffect(() => {
    const loadAdsterraTermsBanner = () => {
      const container = document.getElementById("adsterra-terms-banner");
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
      loadAdsterraTermsBanner();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper sx={{ p: 4, backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
        <Box sx={{ my: 2, textAlign: "center" }}>
          <div id="adsterra-terms-banner"></div>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {t("termsOfService")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("effectiveDate")}: {new Date().toLocaleDateString()}
          </Typography>
        </Box>

        <Typography variant="h5" component="h2" gutterBottom>
          {t("agreementToTerms")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("agreementInfo")}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
          {t("useLicense")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("useLicenseInfo")}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
          {t("disclaimer")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("disclaimerInfo")}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
          {t("limitations")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("limitationInfo")}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
          {t("accuracyOfMaterials")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("accuracyInfo")}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
          {t("advertisingDisclosure")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("advertisingDisclosureInfo")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("usersMayOptOut")}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
          {t("thirdPartyServices")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("thirdPartyServicesInfo")}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
          {t("changes")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("changesTermsInfo")}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
          {t("contactInfo")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("contactInfoText")}
          <Link href="/contact" color="secondary" sx={{ mx: 0.5 }}>
            {t("contact")}
          </Link> 
          {t("page")}.
        </Typography>
        
        {/* Internal links section */}
        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <Typography variant="h6" gutterBottom>{t("exploreOurWebsite")}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, mt: 1, flexWrap: 'wrap' }}>
            <Link href="/" color="secondary" underline="hover">{t("freeWordCounterTool")}</Link>
            <Link href="/about" color="secondary" underline="hover">{t("aboutUs")}</Link>
            <Link href="/resources" color="secondary" underline="hover">{t("writingResources")}</Link>
            <Link href="/contact" color="secondary" underline="hover">{t("contact")}</Link>
            <Link href="/privacy-policy" color="secondary" underline="hover">{t("privacyPolicy")}</Link>
            <Link href="/terms-of-service" color="secondary" underline="hover">{t("termsOfService")}</Link>
            <Link href="/cookie-policy" color="secondary" underline="hover">{t("cookiePolicy")}</Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default TermsOfService;