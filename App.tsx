
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import Features from './components/Features.tsx';
import Testimonials from './components/Testimonials.tsx';
import DownloadCTA from './components/DownloadCTA.tsx';
import Footer from './components/Footer.tsx';
import AuthModal from './components/AuthModal.tsx';
import ProfileModal from './components/ProfileModal.tsx';

interface UserProfile {
  name: string;
  bio: string;
  interests: string[];
  discoveryMode: 'local' | 'global';
  radius: number;
  profileImage?: string;
}

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  
  // State for User Profile
  const [profile, setProfile] = useState<UserProfile>({
    name: 'New Vibe User',
    bio: 'Looking for someone who values deep conversations over small talk.',
    interests: ['Music', 'Travel', 'Art'],
    discoveryMode: 'local',
    radius: 25,
    profileImage: undefined
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = (email: string) => {
    setUser(email);
    setProfile(prev => ({ ...prev, name: email.split('@')[0] }));
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleSaveProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
  };

  const openAuth = () => setIsAuthModalOpen(true);
  const openProfile = () => setIsProfileModalOpen(true);

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-brand-pink/30">
      <Navbar 
        scrolled={scrollY > 50} 
        user={user} 
        userName={profile.name}
        profileImage={profile.profileImage}
        onAuthClick={openAuth} 
        onLogout={handleLogout}
        onProfileClick={openProfile}
      />
      <main>
        <Hero 
          onStartClick={user ? undefined : openAuth} 
          profileImage={profile.profileImage}
          userName={user ? profile.name : undefined}
        />
        <HowItWorks />
        <Features />
        <Testimonials />
        <DownloadCTA onDownloadClick={user ? undefined : openAuth} />
      </main>
      <Footer onAuthClick={openAuth} user={user} />
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onLogin={handleLogin}
      />

      <ProfileModal 
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        initialData={profile}
        onSave={handleSaveProfile}
      />
    </div>
  );
};

export default App;
