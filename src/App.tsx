
import { useState, lazy, Suspense } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container, GlobalStyles, CircularProgress, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WordCounter from "./components/WordCounter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieConsentBanner from "./components/CookieConsentBanner";
import { useDocumentTitle, useMetaDescription } from "./lib/useDocumentTitle";
import { useTranslation } from "react-i18next";
import { useGoogleAnalytics } from "./lib/useGoogleAnalytics";
import { errorLogger } from "./lib/errorLogger";

// Lazy load pages for code splitting
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Resources = lazy(() => import("./pages/Resources"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  
  // Initialize Google Analytics with user consent
  // In production, replace with your actual GA4 Measurement ID
  const measurementId = (import.meta as any).env?.VITE_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";
  useGoogleAnalytics(measurementId);

  // Initialize error logging
  // In production, connect to external service with: errorLogger.init('your-logging-service-endpoint');
  errorLogger.init(); 

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
            <Route path="/" element={
              <>
                <DocumentHead />
                <WordCounter />
              </>
            } />
            <Route path="/about" element={
              <Suspense fallback={
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                  <CircularProgress />
                </Box>
              }>
                <About />
              </Suspense>
            } />
            <Route path="/contact" element={
              <Suspense fallback={
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                  <CircularProgress />
                </Box>
              }>
                <Contact />
              </Suspense>
            } />
            <Route path="/resources" element={
              <Suspense fallback={
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                  <CircularProgress />
                </Box>
              }>
                <Resources />
              </Suspense>
            } />
            <Route path="/privacy-policy" element={
              <Suspense fallback={
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                  <CircularProgress />
                </Box>
              }>
                <PrivacyPolicy />
              </Suspense>
            } />
            <Route path="/terms-of-service" element={
              <Suspense fallback={
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                  <CircularProgress />
                </Box>
              }>
                <TermsOfService />
              </Suspense>
            } />
            <Route path="/cookie-policy" element={
              <Suspense fallback={
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                  <CircularProgress />
                </Box>
              }>
                <CookiePolicy />
              </Suspense>
            } />
          </Routes>
        </Container>
        <Footer />
        <CookieConsentBanner />
      </Router>
    </ThemeProvider>
  );
};

// Separate component to manage document head for the home page
const DocumentHead = () => {
  const { t } = useTranslation();
  useDocumentTitle(t("title"));
  useMetaDescription(t("freeWordCounterDescription"));
  return null;
};

export default App;
