
# Blueprint: Word Counter Application

## Overview

The "Word Counter" is a modern web application built using React and Material-UI. It serves as a comprehensive tool for writers, students, and professionals to analyze their text. The application provides key metrics such as word count, character count, sentence and paragraph count, estimated reading time, and keyword density. The user interface is designed to be clean, intuitive, and mobile-responsive. A key feature is its robust internationalization support, allowing users to switch between multiple languages seamlessly.

## Project Outline

*   **Framework:** React (using Vite)
*   **UI Library:** Material-UI
*   **Routing:** `react-router-dom` for client-side navigation.
*   **Internationalization (i18n):** `i18next` with `i18next-http-backend` to dynamically load translation files.
*   **Styling:** Primarily uses Material-UI's `sx` prop for CSS-in-JS styling.

### Features

*   **Comprehensive Text Analysis:** Calculates words, characters, sentences, and paragraphs.
*   **Reading Time:** Estimates the time required to read the text.
*   **Keyword Density:** Analyzes and displays the frequency of keywords, ignoring common stopwords for accuracy.
*   **Multi-Language Support:** The entire UI is translated into English, Spanish, French, and Hindi.
*   **Language Selector:** A dropdown menu in the navigation bar allows for easy language switching.
*   **Responsive Design:** The layout adapts to different screen sizes, ensuring a good experience on both desktop and mobile devices.
*   **Utility Functions:** Includes buttons to clear the text area and export the text as a `.txt` file.

### Component Structure

*   **`App.tsx`:** The root component that sets up the theme, routing, and overall page structure.
*   **`main.tsx`:** The application's entry point, responsible for rendering the `App` component and initializing the `i18next` configuration.
*   **`components/Navbar.tsx`:** The main navigation bar, containing links to different pages and the language selector.
*   **`components/WordCounter.tsx`:** The core component handling the text input, analysis logic, and display of results.
*   **`components/Footer.tsx`:** The application's footer.
*   **`pages/About.tsx`:** A page providing information about the application.
*   **`pages/Contact.tsx`:** A page containing a contact form.

### Internationalization (i18n) Setup

*   **Configuration:** The i18n logic is initialized in `src/i18n.ts`. It uses `i18next-http-backend` to fetch translation files from the `public/locales` directory.
*   **Language Detection:** `i18next-browser-languagedetector` is used to automatically detect the user's preferred language from the browser settings or URL path.
*   **Translation Files:** JSON files for each supported language are stored in `public/locales/{language_code}/translation.json`.
*   **Supported Languages:**
    *   English (`en`)
    *   Spanish (`es`)
    *   French (`fr`)
    *   Hindi (`hi`)
*   **Stopwords:** The keyword density feature uses a dedicated list of stopwords for each supported language (`src/lib/stopwords.ts`) to provide more accurate results.

## Ad Implementation

The application integrates with Google AdSense and Adsterra to display ads. The following components are used to render the ads:

*   **`AdBanner.tsx`:** A component for displaying banner ads.
*   **`AdSense.tsx`:** A component for integrating with Google AdSense.
*   **`NativeAd.tsx`:** A component for displaying native ads.

The ads are placed in the following locations:

*   **Header:** A banner ad is displayed at the top of the page.
*   **Footer:** A banner ad is displayed at the bottom of the page.
*   **WordCounter:** A banner ad is displayed after the statistics section.
