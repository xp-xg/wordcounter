import { Typography, Container, Paper, Box, Link, List, ListItem, ListItemText } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDocumentTitle, useMetaDescription } from "../lib/useDocumentTitle";
import { useStructuredData } from "../lib/useStructuredData";

const CookiePolicy = () => {
  const { t } = useTranslation();
  
  useDocumentTitle(t("cookiePolicyTitle"));
  useMetaDescription(t("cookiePolicyDescription"));

  // Add structured data for the Cookie Policy page
  useStructuredData({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t("cookiePolicyTitle"),
    "description": t("cookiePolicyDescription"),
    "url": "https://yourdomain.com/cookie-policy",
    "about": {
      "@type": "Organization",
      "name": t("wordCounter")
    }
  });
  
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper sx={{ p: 4, backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {t("cookiePolicy")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("lastUpdated")}: {new Date().toLocaleDateString()}
          </Typography>
        </Box>

        <Typography variant="h5" component="h2" gutterBottom>
          {t("whatAreCookies")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("cookiesDefinition")}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
          {t("howWeUseCookies")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("cookieUsageInfo")}
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 2 }}>
          {t("essentialCookies")}
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary={t("functionalityCookies")} 
              secondary={t("functionalityCookiesDescription")} 
            />
          </ListItem>
        </List>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 2 }}>
          {t("performanceCookies")}
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary={t("analyticsCookies")} 
              secondary={t("analyticsCookiesDescription")} 
            />
          </ListItem>
        </List>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 2 }}>
          {t("marketingCookies")}
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary={t("advertisingCookies")} 
              secondary={t("advertisingCookiesDescription")} 
            />
          </ListItem>
        </List>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
          {t("thirdPartyCookies")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("thirdPartyCookiesInfo")}
        </Typography>

        <List>
          <ListItem>
            <ListItemText 
              primary={t("googleAnalytics")} 
              secondary={t("googleAnalyticsDescription")} 
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary={t("googleAdSense")} 
              secondary={t("googleAdSenseDescription")} 
            />
          </ListItem>
        </List>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
          {t("managingCookies")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("managingCookiesInfo")}
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 2 }}>
          {t("browserSettings")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("browserSettingsInfo")}
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 2 }}>
          {t("ourCookieConsentTool")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("cookieConsentToolInfo")}
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary={t("acceptAllCookies")} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t("rejectAllNonEssentialCookies")} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t("customizeCookiePreferences")} />
          </ListItem>
        </List>
        <Typography variant="body1" paragraph>
          {t("accessCookieTool")}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
          {t("changesToCookiePolicy")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("changesToCookiePolicyInfo")}
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
          <Typography variant="h6" gutterBottom>{t("exploreOurSite")}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, mt: 1, flexWrap: 'wrap' }}>
            <Link href="/" color="secondary" underline="hover">{t("freeWordCounterTool")}</Link>
            <Link href="/about" color="secondary" underline="hover">{t("aboutUs")}</Link>
            <Link href="/resources" color="secondary" underline="hover">{t("writingResources")}</Link>
            <Link href="/contact" color="secondary" underline="hover">{t("contact")}</Link>
            <Link href="/privacy-policy" color="secondary" underline="hover">{t("privacyPolicy")}</Link>
            <Link href="/terms-of-service" color="secondary" underline="hover">{t("termsOfService")}</Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default CookiePolicy;