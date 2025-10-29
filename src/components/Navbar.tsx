
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, Switch } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
import { useState } from "react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

// Define the supported languages with their codes and display names
const SUPPORTED_LANGUAGES = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "hi", name: "हिन्दी" },
  { code: "de", name: "Deutsch" },
  { code: "ja", name: "日本語" },
  { code: "zh", name: "中文" },
];

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    handleLanguageMenuClose();
  };

  return (
    <AppBar position="sticky" sx={{ background: 'transparent', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center" }}>
            <img 
              src="/word-counter.svg" 
              alt={t("wordCounter")} 
              style={{ height: "40px", marginRight: "10px" }} 
            />
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {t("wordCounter")}
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button sx={{ color: 'inherit', fontWeight: 600 }} component={Link} to="/about">
            {t("about")}
          </Button>
          <Button sx={{ color: 'inherit', fontWeight: 600 }} component={Link} to="/contact">
            {t("contact")}
          </Button>
          <Button sx={{ color: 'inherit', fontWeight: 600 }} component={Link} to="/cookie-policy">
            {t("cookies")}
          </Button>
        </Box>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleLanguageMenuOpen}
          color="inherit"
        >
          <LanguageIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleLanguageMenuClose}
        >
          {SUPPORTED_LANGUAGES.map((language) => (
            <MenuItem 
              key={language.code} 
              onClick={() => changeLanguage(language.code)}
            >
              {language.name}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
