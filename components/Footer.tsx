import React from 'react';
import { Heart, Instagram, Twitter, Linkedin, Facebook, Send, Apple } from 'lucide-react';

interface FooterProps {
  onAuthClick: () => void;
  user: string | null;
}

const Footer: React.FC<FooterProps> = ({ onAuthClick, user }) => {
  return (
    <footer className="bg-white pt-24 relative">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-brand-dark">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-gray-100">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-brand-pink p-2 rounded-lg">
              <Heart className="w-6 h-6 text-white fill-current" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-brand-dark">Vibe</span>
          </div>
          <p className="text-brand-gray">Connecting souls before faces. The #1 personality-first dating experience for mindful connections.</p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-brand-bg-light rounded-full text-brand-gray hover:bg-brand-pink hover:text-white transition-all"><Instagram size={20} /></a>
            <a href="#" className="p-2 bg-brand-bg-light rounded-full text-brand-gray hover:bg-brand-pink hover:text-white transition-all"><Twitter size={20} /></a>
            <a href="#" className="p-2 bg-brand-bg-light rounded-full text-brand-gray hover:bg-brand-pink hover:text-white transition-all"><Facebook size={20} /></a>
            <a href="#" className="p-2 bg-brand-bg-light rounded-full text-brand-gray hover:bg-brand-pink hover:text-white transition-all"><Linkedin size={20} /></a>
          </div>
          
          {/* Stylized Download Button */}
          {!user ? (
            <button 
              onClick={onAuthClick}
              className="inline-flex items-center gap-3 bg-brand-dark text-white px-5 py-3 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl hover:shadow-brand-dark/20 active:scale-95 group w-fit"
            >
              <Apple size={24} fill="currentColor" className="group-hover:text-brand-pink transition-colors" />
              <div className="text-left">
                <p className="text-[9px] uppercase opacity-70 leading-none mb-0.5">Join Vibe Today</p>
                <p className="text-base leading-none">Get the App</p>
              </div>
            </button>
          ) : (
            <p className="text-sm font-bold text-brand-pink py-2">Welcome to the community!</p>
          )}
        </div>

        <div>
          <h4 className="font-bold text-brand-dark mb-6">Product</h4>
          <ul className="space-y-4 text-brand-gray font-medium">
            <li><a href="#how-it-works" className="hover:text-brand-pink transition-colors">How it Works</a></li>
            <li><a href="#features" className="hover:text-brand-pink transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-brand-pink transition-colors">Safety</a></li>
            <li><a href="#" className="hover:text-brand-pink transition-colors">Premium</a></li>
            <li>
              <button 
                onClick={user ? () => window.location.href='#download' : onAuthClick} 
                className="text-brand-pink font-bold hover:underline transition-all"
              >
                {user ? 'Get the App' : 'Join Now'}
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-brand-dark mb-6">Company</h4>
          <ul className="space-y-4 text-brand-gray font-medium">
            <li><a href="#" className="hover:text-brand-pink transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-brand-pink transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-brand-pink transition-colors">Press</a></li>
            <li><a href="#" className="hover:text-brand-pink transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-brand-dark mb-6">Join our Newsletter</h4>
          <p className="text-brand-gray text-sm">Get dating tips and vibe updates directly to your inbox.</p>
          <div className="flex bg-brand-bg-light p-1 rounded-2xl">
            <input type="email" placeholder="Email address" className="bg-transparent px-4 py-3 flex-1 text-sm outline-none" />
            <button className="bg-brand-pink text-white p-3 rounded-xl hover:scale-105 transition-transform">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-brand-gray text-sm">&copy; 2024 Vibe Dating App. All rights reserved.</p>
        <div className="flex gap-8 text-sm text-brand-gray font-medium">
          <a href="#" className="hover:text-brand-pink transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-pink transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-brand-pink transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;