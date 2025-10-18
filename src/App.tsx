
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container, GlobalStyles } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WordCounter from "./components/WordCounter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? '#26a69a' : '#00796b',
      },
      secondary: {
        main: darkMode ? '#ffab40' : '#ff9100',
      },
      background: {
        default: darkMode ? '#1a1a1a' : '#f5f5f5',
        paper: darkMode ? '#2c2c2c' : '#ffffff',
      },
    },
    typography: {
        fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
        h4: {
          fontWeight: 700,
          color: darkMode ? '#ffffff' : '#212121',
        },
        h5: {
          fontWeight: 600,
          color: darkMode ? '#ffffff' : '#212121',
        },
        h6: {
          fontWeight: 600,
          color: darkMode ? '#ffffff' : '#212121',
        },
        body1: {
          color: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.87)',
        },
        body2: {
          color: darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.6)',
        },
      },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    color: darkMode ? '#ffffff' : '#212121'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    textTransform: 'none',
                    fontWeight: 600,
                    padding: '10px 20px',
                },
                containedPrimary: {
                    color: '#fff'
                }
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    boxShadow: darkMode ? '0 10px 40px 0 rgba(0, 0, 0, 0.5)' : '0 10px 40px 0 rgba(31, 38, 135, 0.2)',
                    backdropFilter: 'blur(12px)',
                    '-webkit-backdrop-filter': 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backgroundColor: darkMode ? 'rgba(44, 44, 44, 0.7)' : 'rgba(255, 255, 255, 0.8)',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 12,
                        '&.Mui-focused fieldset': {
                            borderColor: darkMode ? '#26a69a' : '#00796b',
                        },
                    },
                },
            },
        },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
            body: {
                backgroundImage: darkMode 
                    ? 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)' 
                    : 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
              },
        }}
      />
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Container maxWidth="md" sx={{ my: 4 }}>
          <Routes>
            <Route path="/" element={<WordCounter />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
