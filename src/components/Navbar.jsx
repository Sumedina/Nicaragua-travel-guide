import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {

    useEffect(() => {
        let prevScrollpos = window.pageYOffset;
        const navbar = document.getElementById("navbar");
        const HIDE_THRESHOLD = 5;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if (prevScrollpos > currentScrollPos) {
                navbar.style.top = "0";
            } else if (currentScrollPos > (prevScrollpos + HIDE_THRESHOLD)) {
                navbar.style.top = "-50px";
            }

            prevScrollpos = currentScrollPos;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="/guide">Guide</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/information">Information</Link>
        </div>
    );
}