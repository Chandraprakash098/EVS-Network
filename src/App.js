

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HotEntertainment from "./pages/HotEntertainment";
import Music from "./pages/Music";
import TraditionalArt from "./pages/TraditionalArt";
import AboutUs from "./pages/AboutUs";

// Import new components
import HotEntertainmentBollywood from "./pages/HotEntertainmentBollywood";
import HotEntertainmentHollywood from "./pages/HotEntertainmentHollywood";
import MusicBollywood from "./pages/MusicBollywood";
import MusicHollywood from "./pages/MusicHollywood";
import TraditionalArtBollywood from "./pages/TraditionalArtBollywood";
import TraditionalArtHollywood from "./pages/TraditionalArtHollywood";
import Career from "./pages/Career";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <Router>
      <div className="bg-blackBg min-h-screen text-neonGreen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hot-entertainment" element={<HotEntertainment />} />
            <Route
              path="/hot-entertainment/bollywood"
              element={<HotEntertainmentBollywood />}
            />
            <Route
              path="/hot-entertainment/hollywood"
              element={<HotEntertainmentHollywood />}
            />
            <Route path="/music" element={<Music />} />
            <Route path="/music/bollywood" element={<MusicBollywood />} />
            <Route path="/music/hollywood" element={<MusicHollywood />} />
            <Route path="/traditional-art" element={<TraditionalArt />} />
            <Route
              path="/traditional-art/bollywood"
              element={<TraditionalArtBollywood />}
            />
            <Route
              path="/traditional-art/hollywood"
              element={<TraditionalArtHollywood />}
            />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/career" element={<Career/>} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


