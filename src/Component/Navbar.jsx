import React, { use, useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router'
import userIcon from "../assets/user.png"
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    // Controls the mobile hamburger menu open/close state
    const [menuOpen, setMenuOpen] = useState(false);
    // Controls the categories sub-accordion in mobile menu
    const [catOpen, setCatOpen] = useState(false);
    // Holds the fetched category list for mobile menu
    const [categories, setCategories] = useState([]);

    // Fetch categories once on mount so mobile users can browse them
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

    // Main nav links — reused for desktop row and mobile dropdown
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
            {/* ── Top bar ── */}
            <div className='flex justify-between items-center px-4 py-2'>
                {/* User email — desktop only */}
                <div className="hidden lg:block text-sm text-gray-500">
                    {user && user.email}
                </div>

                {/* Desktop nav links — hidden on mobile */}
                <div className='hidden lg:flex gap-5 text-xl text-accent'>
                    {navLinks}
                </div>

                {/* Right: avatar + login/logout + hamburger */}
                <div className='flex items-center gap-3'>
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

                    {/* Hamburger — visible only on mobile */}
                    <button
                        className="lg:hidden btn btn-ghost btn-sm text-2xl"
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* ── Mobile dropdown ── */}
            {menuOpen && (
                <div className='lg:hidden absolute top-full left-0 w-full bg-base-100 shadow-xl z-50 border-t border-base-200'>

                    {/* Page links */}
                    <div className='flex flex-col gap-1 px-6 py-4 text-lg text-accent'>
                        {navLinks}
                    </div>

                    <div className='divider my-0 px-4'></div>

                    {/* ── Collapsible Categories section ── */}
                    <div className='px-4 pb-4'>
                        <button
                            onClick={() => setCatOpen(prev => !prev)}
                            className='w-full flex justify-between items-center py-3 text-base font-bold text-gray-700'
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

                    {/* Email when logged in */}
                    {user && (
                        <div className='px-6 py-3 border-t border-base-200'>
                            <p className="text-sm text-gray-400">{user.email}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navbar;