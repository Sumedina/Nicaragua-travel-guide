import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Guide from "./pages/Guide.jsx";
import Information from "./pages/Information.jsx";
import PlaceDetails from "./pages/PlaceDetails.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/information" element={<Information />} />
                <Route path="/place/:id" element={<PlaceDetails />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
        </BrowserRouter>
    );
}