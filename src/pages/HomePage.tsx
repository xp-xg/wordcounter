
import { Container, Typography } from "@mui/material";
import WordCounter from "../components/WordCounter";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <title>Free Online Word Counter - Count Words, Characters, and More</title>
      <meta name="description" content="A free online word counter that helps you count words, characters, sentences, paragraphs, and estimate reading time. It also provides keyword density analysis." />
      <Typography variant="h4" component="h1" gutterBottom>
        {t("word_counter")}
      </Typography>
      <WordCounter />
    </Container>
  );
};

export default HomePage;
