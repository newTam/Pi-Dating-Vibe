
import React, { useState } from 'react';
import { Heart, Menu, X, LogOut, User, Settings } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
  user: string | null;
  userName?: string;
  profileImage?: string;
  onAuthClick: () => void;
  onLogout: () => void;
  onProfileClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, user, userName, profileImage, onAuthClick, onLogout, onProfileClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 py-4 ${scrolled ? 'top-4' : 'top-0'}`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ${scrolled ? 'glass rounded-full px-8 py-3 shadow-lg' : 'px-4 py-2'}`}>
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 cursor-pointer group">
          <div className="bg-brand-pink p-2 rounded-xl group-hover:scale-110 transition-transform">
            <Heart className="w-6 h-6 text-white fill-current" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-brand-dark">Vibe</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Home', href: '#home' },
            { name: 'How It Works', href: '#how-it-works' },
            { name: 'Features', href: '#features' },
            { name: 'Testimonials', href: '#testimonials' }
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-brand-dark font-medium hover:text-brand-pink transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink transition-all group-hover:w-full"></span>
            </a>
          ))}
          
          {user ? (
            <div className="flex items-center gap-4 pl-4 border-l border-gray-100">
              <button 
                onClick={onProfileClick}
                className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
              >
                <div className="w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink overflow-hidden border-2 border-transparent group-hover:border-brand-pink transition-all">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <User size={20} />
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-brand-dark leading-none group-hover:text-brand-pink transition-colors">{userName || 'Profile'}</span>
                  <span className="text-[10px] text-brand-gray truncate max-w-[80px]">Edit Settings</span>
                </div>
              </button>
              <button 
                onClick={onLogout}
                className="p-2 text-brand-gray hover:text-brand-pink transition-colors"
                title="Logout"
              >
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <button 
              onClick={onAuthClick}
              className="bg-brand-pink text-white px-6 py-2.5 rounded-full font-semibold hover:bg-opacity-90 transition-all active:scale-95 shadow-md hover:shadow-brand-pink/20"
            >
              Login / Sign Up
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-brand-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[60] transition-transform duration-500 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
          <button 
            className="absolute top-8 right-8 p-2 text-brand-dark"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          
          <div className="flex flex-col items-center gap-6">
            {[
              { name: 'Home', href: '#home' },
              { name: 'How It Works', href: '#how-it-works' },
              { name: 'Features', href: '#features' },
              { name: 'Testimonials', href: '#testimonials' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-2xl font-bold text-brand-dark hover:text-brand-pink transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="w-full pt-8 border-t border-gray-100 mt-4 flex flex-col items-center gap-4">
            {user ? (
              <>
                <button 
                  onClick={() => { onProfileClick(); setMobileMenuOpen(false); }}
                  className="flex items-center gap-3 bg-brand-bg-light px-6 py-4 rounded-3xl w-full text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-pink text-white flex items-center justify-center overflow-hidden">
                    {profileImage ? (
                      <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <User size={24} />
                    )}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="font-bold text-brand-dark">{userName || 'Account'}</p>
                    <p className="text-xs text-brand-gray truncate">Edit Profile & Range</p>
                  </div>
                  <Settings size={20} className="text-brand-gray" />
                </button>
                <button 
                  onClick={() => { onLogout(); setMobileMenuOpen(false); }}
                  className="flex items-center gap-2 text-brand-pink font-bold py-2"
                >
                  <LogOut size={20} /> Sign Out
                </button>
              </>
            ) : (
              <button 
                onClick={() => { onAuthClick(); setMobileMenuOpen(false); }}
                className="w-full bg-brand-pink text-white py-4 rounded-2xl font-bold shadow-lg shadow-brand-pink/20 active:scale-95 transition-all"
              >
                Login / Sign Up
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Fixed: Add default export to resolve the import error in App.tsx
export default Navbar;
