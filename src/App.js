import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import About from './Components/About';
import Contact from './Components/Contact';
import { ThemeProvider } from './Context/Theme';

// Importing all utility components 
import UrlShortener from "./Components/Utilities/UrlShortener"; 
import WifiSpeedChecker from "./Components/Utilities/WifiSpeedChecker"; 
import QRCodeGenerator from "./Components/Utilities/QRCodeGenerator"; 
import TypingSpeedTester from "./Components/Utilities/TypingSpeedTester"; 
import ImageCompressor from "./Components/Utilities/ImageCompressor"; 
import PDFGenerator from "./Components/Utilities/PDFGenerator"; 
import PlagiarismChecker from "./Components/Utilities/PlagiarismChecker"; 
import YTVideoDownloader from "./Components/Utilities/YTVideoDownloader"; 
import BarcodeGenerator from "./Components/Utilities/BarcodeGenerator"; 
import TextUtils from './Components/Utilities/TextUtils';

function App() {
  // Context API  Dark Mode State
  const [darkMode, setMode] = useState(() => {
    const isDark = localStorage.getItem("darkMode");
    return isDark === "true";
  });

  // Function to Toggle Dark Mode
  const toggleMode = () => {
    setMode((prev) => !prev);
  };

  // Effect to Update Local Storage & Body Class
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
    const bodyEl = document.body;
    if (bodyEl) {
      if (darkMode) {
        bodyEl.classList.add("dark");
      } else {
        bodyEl.classList.remove("dark");
      }
    }
  }, [darkMode]);

  return (
    <ThemeProvider value={{ darkMode, toggleMode }}>
      <Router>      
      <Navbar />
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/url-shortener" element={<UrlShortener />} />
        <Route path="/wifi-speed-checker" element={<WifiSpeedChecker />} />
        <Route path="/qr-code-generator" element={<QRCodeGenerator />} />
        <Route path="/typing-speed-tester" element={<TypingSpeedTester />} />
        <Route path="/image-compressor" element={<ImageCompressor />} />
        <Route path="/pdf-generator" element={<PDFGenerator />} />
        <Route path="/plagiarism-checker" element={<PlagiarismChecker />} />
        <Route path="/yt-video-downloader" element={<YTVideoDownloader />} />
        <Route path="/barcode-generator" element={<BarcodeGenerator />} />
        <Route path="/textutils" element={<TextUtils />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>


      </Router>
    </ThemeProvider>
  );
}

export default App;
