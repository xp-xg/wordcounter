
import { useState, useMemo, useCallback } from "react";

import { TextField, Card, CardContent, Typography, Button, Box, Chip, Paper, Link } from "@mui/material";

import { useTranslation } from "react-i18next";

import { saveAs } from "file-saver";

import { stopwords } from "../lib/stopwords";

import HowToUse from "./HowToUse";

import AdSense from "./AdSense";

import { useDebounce } from "../lib/useDebounce";

import { useDocumentTitle, useMetaDescription, useSocialMetaTags } from "../lib/useDocumentTitle";

import { useStructuredData } from "../lib/useStructuredData";



const WordCounter = () => {

  const { t, i18n } = useTranslation();

  const [text, setText] = useState("");



  // Use debounced version of text for expensive operations

  const debouncedText = useDebounce(text, 500); // 500ms delay



  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  const charCount = text.length;

  const sentenceCount = text.split(/[.?!]/).filter(Boolean).length;

  const paragraphCount = text.split(/\n+/).filter(Boolean).length;

  const readingTime = Math.ceil(wordCount / 200);



  // SEO optimization with dynamic meta tags

  const pageTitle = t("freeWordCounterOnline");

  const pageDescription = t("freeWordCounterDescription");

  

  useDocumentTitle(pageTitle);

  useMetaDescription(pageDescription);

  useSocialMetaTags(pageTitle, pageDescription);



  // Structured data for search engines

  useStructuredData({

    "@context": "https://schema.org",

    "@type": "WebApplication",

    "name": "Word-CTR – Free Online Word Counter",

    "url": "https://word-ctr.web.app/",

    "description": "Free online tool to count words, characters, and sentences instantly. Ideal for writers, students, and bloggers.",

    "applicationCategory": "Utility",

    "operatingSystem": "All",

    "creator": {

      "@type": "Organization",

      "name": "Word-CTR"

    }

  });



  const handleExportTxt = useCallback(() => {

    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });

    saveAs(blob, "text.txt");

  }, [text]);



  const getKeywordDensity = (text: string) => {

    const currentLanguage = i18n.language;

    const stopWords = stopwords[currentLanguage] || stopwords.en;



    const words = text

      .toLowerCase()

      .replace(/[^\w\s]/gi, '')

      .trim()

      .split(/\s+/)

      .filter(word => word.length > 1 && !stopWords.includes(word));



    if (words.length === 0 || !words[0]) {

        return [];

    }



    const wordFrequencies = words.reduce((acc, word) => {

      acc[word] = (acc[word] || 0) + 1;

      return acc;

    }, {} as { [key: string]: number });



    const sortedKeywords = Object.entries(wordFrequencies)

      .sort(([, a], [, b]) => b - a)

      .slice(0, 5);



    return sortedKeywords;

  };



  // Use memoization to avoid recalculation unless debouncedText changes

  const keywordDensity = useMemo(() => getKeywordDensity(debouncedText), [debouncedText]);



  const stats = [

    { label: t('words'), value: wordCount },

    { label: t('characters'), value: charCount },

    { label: t('sentences'), value: sentenceCount },

    { label: t('paragraphs'), value: paragraphCount },

    { label: t('readingTime'), value: readingTime },

  ];



  const handleClearText = useCallback(() => {

    setText("");

  }, [setText]);



  return (

    <>
      {/* Adsterra 300x250 Banner - Top Banner */}
      <Box sx={{ my: 2, textAlign: 'center' }}>
        <div 
          dangerouslySetInnerHTML={{ __html: `
            <script type="text/javascript">
              atOptions = {
                'key' : '83a6efa470c7f6727efb436b09f78d22',
                'format' : 'iframe',
                'height' : 250,
                'width' : 300,
                'params' : {}
              };
            </script>
            <script type="text/javascript" src="//www.highperformanceformat.com/83a6efa470c7f6727efb436b09f78d22/invoke.js"></script>
          `}}
        />
      </Box>
      <Card>

        <CardContent sx={{ p: 4 }}>

          <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 3 }}>

            {t('title')}

          </Typography>

          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2, textAlign: 'center' }}>

            {t("bestFreeTool")}

          </Typography>

          

          {/* Descriptive content about word counting */}

          <Typography variant="body1" sx={{ mb: 3, textAlign: 'center', color: 'text.secondary' }}>

            {t("whyUseWordCounter", "Paste your text below to get instant word and character counts. Perfect for writers, students, and bloggers who need to meet specific word limits for essays, blog posts, and social media content.")}

          </Typography>

          

          <TextField

            multiline

            rows={10}

            fullWidth

            variant="outlined"

            value={text}

            onChange={(e) => setText(e.target.value)}

            placeholder={t('placeholder')}

            sx={{ mb: 3 }}

          />

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>

            <Button variant="contained" color="primary" onClick={handleClearText}>

              {t("clearText")}

            </Button>

            <Button variant="outlined" color="secondary" onClick={handleExportTxt}>

              {t("exportTxt")}

            </Button>

          </Box>

          <Box

            sx={{

              display: 'grid',

              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',

              gap: 2,

              textAlign: 'center',

            }}

          >

            {stats.map((item, index) => (

              <Paper key={index} elevation={3} sx={{ p: 2, borderRadius: 3, background: 'rgba(255, 255, 255, 0.05)' }}>

                <Typography variant="h5" sx={{ fontWeight: 700 }}>{item.value}</Typography>

                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>{item.label}</Typography>

              </Paper>

            ))}

          </Box>



          {keywordDensity.length > 0 && (

            <Box sx={{ mt: 5, textAlign: 'center' }}>

              <Typography variant="h5" gutterBottom>

                {t("keywordDensity")}

              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.5 }}>

                {keywordDensity.map(([word, count]) => (

                  <Chip key={word} label={`${word}: ${count}`} variant="filled" color="secondary" />

                ))}

              </Box>

            </Box>

          )}

        </CardContent>

      </Card>

      

      {/* AdSense Ad - Top of HowToUse section */}

      <Box sx={{ my: 3, textAlign: 'center' }}>

        <AdSense 

          adSlot="1234567890" 

          adFormat="horizontal" 

          style={{ display: 'block', textAlign: 'center' }}

        />

      </Box>

      

      <HowToUse />
      
      {/* Adsterra Native Banner - Between How to Use and Counter Component */}
      <Box sx={{ my: 3, textAlign: 'center' }}>
        <div 
          dangerouslySetInnerHTML={{ __html: `
            <script async="true" data-cfasync="false" src="//pl27942032.effectivegatecpm.com/05e96df38241a2f448ce27b19e32317b/invoke.js"></script>
            <div id="container-05e96df38241a2f448ce27b19e32317b"></div>
          `}}
        />
      </Box>
      
      {/* AdSense Ad - Bottom of page */}
      <Box sx={{ my: 3, textAlign: 'center' }}>
        <AdSense 
          adSlot="0987654321" 
          adFormat="horizontal" 
          style={{ display: 'block', textAlign: 'center' }}
        />
      </Box>

      
      {/* Adsterra 728x90 Banner - Between How to Use and Learn More About Text Analysis */}
      <Box sx={{ my: 3, textAlign: 'center' }}>
        <div 
          dangerouslySetInnerHTML={{ __html: `
            <script type="text/javascript">
              atOptions = {
                'key' : 'b8d52d7c0217f7f4533d6cbf0056701a',
                'format' : 'iframe',
                'height' : 90,
                'width' : 728,
                'params' : {}
              };
            </script>
            <script type="text/javascript" src="//www.highperformanceformat.com/b8d52d7c0217f7f4533d6cbf0056701a/invoke.js"></script>
          `}}
        />
      </Box>
      
      {/* Related articles section */}
      <Box sx={{ mt: 4, p: 2, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>{t("learnMoreAboutTextAnalysis")}</Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 1, flexWrap: 'wrap' }}>

          <Link href="/resources" color="secondary" underline="hover">{t("writingTips")}</Link>

          <Link href="/resources" color="secondary" underline="hover">{t("seoContentOptimization")}</Link>

          <Link href="/resources" color="secondary" underline="hover">{t("textAnalysisTechniques")}</Link>

          <Link href="/about" color="secondary" underline="hover">{t("aboutOurTool")}</Link>

        </Box>

      </Box>

    </>

  );

};



export default WordCounter;


