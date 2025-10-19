import { Typography, Container, Paper, Box, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDocumentTitle, useMetaDescription } from "../lib/useDocumentTitle";
import { useStructuredData } from "../lib/useStructuredData";

const Resources = () => {
  const { t } = useTranslation();
  
  useDocumentTitle(t("wordCounterGuide"));
  useMetaDescription(t("completeGuideDescription"));

  // Add structured data for the Resources page
  useStructuredData({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t("completeGuide"),
    "description": t("professionalWritingTips"),
    "author": {
      "@type": "Organization",
      "name": t("wordCounter")
    },
    "datePublished": "2025-01-01",
    "dateModified": new Date().toISOString(),
    "articleSection": t("writingResources"),
    "keywords": "word counter, text analysis, writing tips, content optimization, SEO writing",
    "publisher": {
      "@type": "Organization",
      "name": t("wordCounter"),
      "logo": {
        "@type": "ImageObject",
        "url": "https://yourdomain.com/logo.png"
      }
    }
  });

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper sx={{ p: 4, backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t("completeGuide")}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          {t("professionalWritingTips")}
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3, color: 'secondary.main' }}>
          {t("importanceOfWordCount")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("wordCountInfo")}
        </Typography>
        <ul>
          <li><strong>{t("blogPosts")}:</strong> {t("blogPostsInfo")}</li>
          <li><strong>{t("academicPapers")}:</strong> {t("academicPapersInfo")}</li>
          <li><strong>{t("socialMedia")}:</strong> {t("socialMediaInfo")}</li>
          <li><strong>{t("emails")}:</strong> {t("emailsInfo")}</li>
        </ul>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3, color: 'secondary.main' }}>
          {t("howToUseWordCounter")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("wordCounterUtility")}
        </Typography>
        <ul>
          <li><strong>{t("planYourContent")}:</strong> {t("setWordTargets")}</li>
          <li><strong>{t("checkLengthRequirements")}:</strong> {t("ensureContentMeetsGuidelines")}</li>
          <li><strong>{t("analyzeReadingTime")}:</strong> {t("knowHowLongContentTakes")}</li>
          <li><strong>{t("optimizeForSeo")}:</strong> {t("meetRecommendedWordCounts")}</li>
          <li><strong>{t("trackProgress")}:</strong> {t("monitorWritingPace")}</li>
        </ul>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3, color: 'secondary.main' }}>
          {t("writingTipsBasedOnTextAnalysis")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("textCompositionHelps")}
        </Typography>
        <ul>
          <li><strong>{t("sentenceLength")}:</strong> {t("mixShortAndLong")}</li>
          <li><strong>{t("paragraphStructure")}:</strong> {t("aimForSentences")}</li>
          <li><strong>{t("keywordDensity")}:</strong> {t("keepItNatural")}</li>
          <li><strong>{t("readingLevel")}:</strong> {t("adjustForAudience")}</li>
        </ul>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3, color: 'secondary.main' }}>
          {t("textAnalysisForContentTypes")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("textCompositionHelps")}
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            {t("academicWriting")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("academicWritingInfo")}
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            {t("blogArticles")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("blogArticlesInfo")}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="h3" gutterBottom>
            {t("businessDocuments")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("businessDocumentsInfo")}
          </Typography>
        </Box>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3, color: 'secondary.main' }}>
          {t("bestPracticesForWriting")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("implementingPractices")}
        </Typography>
        <ul>
          <li><strong>{t("knowYourAudience")}:</strong> {t("tailorWordChoice")}</li>
          <li><strong>{t("setClearObjectives")}:</strong> {t("definePurpose")}</li>
          <li><strong>{t("useActiveVoice")}:</strong> {t("generallyMoreConcise")}</li>
          <li><strong>{t("editRuthlessly")}:</strong> {t("removeRedundantWords")}</li>
          <li><strong>{t("reviewAndRefine")}:</strong> {t("checkMetricsBeforePublishing")}</li>
        </ul>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3, color: 'secondary.main' }}>
          {t("readingTimeAndEngagement")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("averageReadingTime")}
        </Typography>
        <ul>
          <li>{t("quickRead")} ({t("quickReadTime")})</li>
          <li>{t("mediumRead")} ({t("mediumReadTime")})</li>
          <li>{t("inDepthRead")} ({t("inDepthReadTime")})</li>
        </ul>
        <Typography variant="body1" paragraph>
          {t("considerAudienceAttention")}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3, color: 'secondary.main' }}>
          {t("seoAndContentOptimization")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("significantlyImproveContent")}
        </Typography>
        <ul>
          <li><strong>{t("keywordDensity")}:</strong> {t("maintainSearchRankings")}</li>
          <li><strong>{t("contentLength")}:</strong> {t("targetWordCount")}</li>
          <li><strong>{t("readability")}:</strong> {t("varySentenceLength")}</li>
          <li><strong>{t("structure")}:</strong> {t("useHeadingsParagraphs")}</li>
        </ul>

        <Typography variant="body1" paragraph sx={{ mt: 3 }}>
          {t("forMoreInformation")}, {t("checkOutOur")} <Link href="/about" color="secondary">{t("aboutUs")}</Link> {t("page")}
          {t("orUseOur")} <Link href="/" color="secondary">{t("wordCounter")}</Link> {t("toolToAnalyzeContent")}
        </Typography>
        
        {/* Related articles section */}
        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <Typography variant="h6" gutterBottom>{t("relatedResources")}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, mt: 1, flexWrap: 'wrap' }}>
            <Link href="/" color="secondary" underline="hover">{t("freeWordCounterTool")}</Link>
            <Link href="/about" color="secondary" underline="hover">{t("aboutOurService")}</Link>
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

export default Resources;