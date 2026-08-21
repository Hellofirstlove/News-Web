import React, { use, useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router'
import userIcon from "../assets/user.png"
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [catOpen, setCatOpen]   = useState(false);
    const [categories, setCategories] = useState([]);

    // ── Dark Mode ───────────────────────────────────────────────
    // Read saved theme from localStorage (default = "light")
    const [theme, setTheme] = useState(
        () => localStorage.getItem("dn-theme") || "light"
    );

    // Apply theme to <html> whenever it changes
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("dn-theme", theme);
    }, [theme]);

    const toggleTheme = () =>
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    // ────────────────────────────────────────────────────────────

    // Fetch categories for the mobile dropdown
    useEffect(() => {
        fetch("/categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error("Failed to load categories", err));
    }, []);

    const handleLogOut = () => {
        logOut()
            .then(() => alert("You Logged Out successfully"))
            .catch(err => console.log(err));
    };

    const closeMenu = () => setMenuOpen(false);

    const navLinks = (
        <>
            <NavLink to="/" onClick={closeMenu}
                className={({ isActive }) => isActive ? "text-primary font-bold" : "hover:text-primary"}>
                Home
            </NavLink>
            <NavLink to="/about" onClick={closeMenu}
                className={({ isActive }) => isActive ? "text-primary font-bold" : "hover:text-primary"}>
                About
            </NavLink>
            <NavLink to="/career" onClick={closeMenu}
                className={({ isActive }) => isActive ? "text-primary font-bold" : "hover:text-primary"}>
                Career
            </NavLink>
        </>
    );

    return (
        <div className='relative'>
            {/* ── Top bar — constrained to match main content width ── */}
            <div className='w-11/12 mx-auto'>
                <div className='grid grid-cols-3 items-center py-2'>

                    {/* Col 1 — left spacer */}
                    <div></div>

                    {/* Col 2 — perfectly centered nav links (desktop only) */}
                    <div className='hidden lg:flex justify-center gap-6 text-xl text-accent'>
                        {navLinks}
                    </div>

                    {/* Col 2 mobile — empty placeholder so grid stays 3-col */}
                    <div className='lg:hidden'></div>

                    {/* Col 3 — theme toggle + avatar + login/logout + hamburger */}
                    <div className='flex items-center justify-end gap-3'>

                        {/* 🌙 / ☀️ Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="btn btn-ghost btn-sm text-xl"
                            aria-label="Toggle dark mode"
                            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
                        >
                            {theme === "light" ? "🌙" : "☀️"}
                        </button>

                        <img
                            className="w-10 rounded-full"
                            src={user ? user.photoURL : userIcon}
                            alt="user avatar"
                        />
                        {user ? (
                            <button onClick={handleLogOut} className="btn btn-primary btn-sm px-6">LogOut</button>
                        ) : (
                            <Link to="/auth/login" className="btn btn-primary btn-sm px-6">Login</Link>
                        )}

                        {/* Hamburger — mobile only */}
                        <button
                            className="lg:hidden btn btn-ghost btn-sm text-2xl"
                            onClick={() => setMenuOpen(prev => !prev)}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? '✕' : '☰'}
                        </button>
                    </div>

                </div>{/* end grid */}
            </div>{/* end w-11/12 */}


            {/* ── Mobile dropdown ── */}
            {menuOpen && (
                <div className='lg:hidden absolute top-full left-0 w-full bg-base-100 shadow-xl z-50 border-t border-base-200'>
                    <div className='flex flex-col gap-1 px-6 py-4 text-lg text-accent'>
                        {navLinks}
                    </div>

                    <div className='divider my-0 px-4'></div>

                    {/* Categories accordion */}
                    <div className='px-4 pb-4'>
                        <button
                            onClick={() => setCatOpen(prev => !prev)}
                            className='w-full flex justify-between items-center py-3 text-base font-bold text-base-content'
                        >
                            <span>📂 Browse Categories</span>
                            <span>{catOpen ? '▲' : '▼'}</span>
                        </button>

                        {catOpen && (
                            <div className='grid grid-cols-2 gap-2 mt-2'>
                                {categories.map(cat => (
                                    <NavLink
                                        key={cat.id}
                                        to={`/category/${cat.id}`}
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            `btn btn-sm border-0 font-semibold text-accent ${isActive ? 'bg-primary text-white' : 'bg-base-200 hover:bg-base-300'}`
                                        }
                                    >
                                        {cat.name}
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>


                </div>
            )}
        </div>
    );
};

export default Navbar;