
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, Switch } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
import { useState } from "react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            {t("wordCounter")}
          </Link>
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button sx={{ color: 'inherit', fontWeight: 600 }} component={Link} to="/about">
            {t("about")}
          </Button>
          <Button sx={{ color: 'inherit', fontWeight: 600 }} component={Link} to="/contact">
            {t("contact")}
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
          <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
          <MenuItem onClick={() => changeLanguage("es")}>Español</MenuItem>
          <MenuItem onClick={() => changeLanguage("fr")}>Français</MenuItem>
          <MenuItem onClick={() => changeLanguage("hi")}>हिन्दी</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
