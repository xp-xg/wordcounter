import { Typography, Container, Paper, Box, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDocumentTitle, useMetaDescription } from "../lib/useDocumentTitle";
import { useStructuredData } from "../lib/useStructuredData";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  
  useDocumentTitle(t("privacyPolicyTitle"));
  useMetaDescription(t("privacyPolicyDescription"));

  // Add structured data for the Privacy Policy page
  useStructuredData({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t("privacyPolicyTitle"),
    "description": t("privacyPolicyDescription"),
    "url": "https://yourdomain.com/privacy-policy",
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
    const loadAdsterraPrivacyBanner = () => {
      const container = document.getElementById("adsterra-privacy-banner");
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
      loadAdsterraPrivacyBanner();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper sx={{ p: 4, backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
        <Box sx={{ my: 2, textAlign: "center" }}>
          <div id="adsterra-privacy-banner"></div>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {t("privacyPolicy")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("effectiveDate")}: {new Date().toLocaleDateString()}
          </Typography>
        </Box>

        <Typography variant="h5" component="h2" gutterBottom>
          {t("section1Title")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("noPersonalInformation")}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
          {t("section2Title")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("sinceNoInformation")}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
          {t("dataSecurity")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("dataSecurityInfo")}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
          {t("thirdPartyServices")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("thirdPartyInfo")}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
          {t("cookiesInfo")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("cookiesInfo")}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
          {t("gdprCompliance")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("gdprComplianceInfo")}
        </Typography>
        <ul>
          <li><strong>{t("lawfulnessFairnessTransparency")}:</strong> {t("weProcessNoPersonalData")}</li>
          <li><strong>{t("purposeLimitation")}:</strong> {t("weCollectNoData")}</li>
          <li><strong>{t("dataMinimization")}:</strong> {t("weCollectZeroPersonalData")}</li>
          <li><strong>{t("storageLimitation")}:</strong> {t("weStoreNoPersonalData")}</li>
          <li><strong>{t("integrityConfidentiality")}:</strong> {t("yourDataStaysBrowser")}</li>
          <li><strong>{t("accountability")}:</strong> {t("weDocumentPrivacyPractices")}</li>
        </ul>
        <Typography variant="body1" paragraph>
          {t("gdprArticle17")}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
          {t("ccpaCompliance")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("ccpaComplianceInfo")}
        </Typography>
        <ul>
          <li><strong>{t("noticeAtCollection")}:</strong> {t("thisPrivacyPolicyInforms")}</li>
          <li><strong>{t("rightToKnow")}:</strong> {t("youCanRequestInformation")}</li>
          <li><strong>{t("rightToDelete")}:</strong> {t("youCanRequestDeletion")}</li>
          <li><strong>{t("rightToOptOut")}:</strong> {t("youCanOptOut")}</li>
        </ul>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
          {t("childrensPrivacy")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("childrensPrivacyInfo")}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
          {t("internationalDataTransfers")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("internationalDataTransfersInfo")}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
          {t("changesToPolicy")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("changesInfo")}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
          {t("contactUs")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("contactForQuestions")}
          <Link href="/contact" color="secondary" sx={{ mx: 0.5 }}>
            {t("contact")}
          </Link> 
          {t("page")}.
        </Typography>
        
        {/* Internal links section */}
        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <Typography variant="h6" gutterBottom>{t("navigateOurSite")}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, mt: 1, flexWrap: 'wrap' }}>
            <Link href="/" color="secondary" underline="hover">{t("freeWordCounterTool")}</Link>
            <Link href="/about" color="secondary" underline="hover">{t("aboutUs")}</Link>
            <Link href="/resources" color="secondary" underline="hover">{t("writingResources")}</Link>
            <Link href="/contact" color="secondary" underline="hover">{t("contact")}</Link>
            <Link href="/terms-of-service" color="secondary" underline="hover">{t("termsOfService")}</Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy;