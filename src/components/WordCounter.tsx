
import { useState } from "react";
import { TextField, Card, CardContent, Typography, Button, Box, Chip, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { saveAs } from "file-saver";
import { stopwords } from "../lib/stopwords";
import HowToUse from "./HowToUse";

const WordCounter = () => {
  const { t, i18n } = useTranslation();
  const [text, setText] = useState("");

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const charCount = text.length;
  const sentenceCount = text.split(/[.?!]/).filter(Boolean).length;
  const paragraphCount = text.split(/\n+/).filter(Boolean).length;
  const readingTime = Math.ceil(wordCount / 200);

  const handleExportTxt = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "text.txt");
  };

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

  const keywordDensity = getKeywordDensity(text);

  const stats = [
    { label: t('words'), value: wordCount },
    { label: t('characters'), value: charCount },
    { label: t('sentences'), value: sentenceCount },
    { label: t('paragraphs'), value: paragraphCount },
    { label: t('readingTime'), value: readingTime },
  ];

  return (
    <>
      <Card>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 3 }}>
            {t('title')}
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
            <Button variant="contained" color="primary" onClick={() => setText("")}>
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
      <HowToUse />
    </>
  );
};

export default WordCounter;
