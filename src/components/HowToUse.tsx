
import { Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useTranslation } from "react-i18next";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const HowToUse = () => {
  const { t } = useTranslation();

  const instructions = [
    t('howToUse.step1'),
    t('howToUse.step2'),
    t('howToUse.step3'),
    t('howToUse.step4'),
  ];

  return (
    <Paper sx={{ p: 4, mt: 4, backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        {t("howToUse.title")}
      </Typography>
      <List>
        {instructions.map((text, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default HowToUse;
