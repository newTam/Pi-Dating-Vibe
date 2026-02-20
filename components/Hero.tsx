
import React, { useState, useRef } from 'react';
import { Sparkles, Play, Star, CheckCircle, Heart, User } from 'lucide-react';

interface HeroProps {
  onStartClick?: () => void;
  profileImage?: string;
  userName?: string;
}

const Hero: React.FC<HeroProps> = ({ onStartClick, profileImage, userName }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 20, y: y * -20 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-pink/5 rounded-full blur-[100px] -mr-40 -mt-20 -z-1"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-teal/5 rounded-full blur-[80px] -ml-20 -mb-20 -z-1"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-brand-pink/10 text-brand-pink px-4 py-2 rounded-full font-semibold animate-bounce">
            <Sparkles size={18} />
            <span>#1 Personality Dating App</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mx-auto lg:mx-0">
            Find Your <span className="text-gradient">Vibe</span>,<br />
            Find Your Love
          </h1>

          <p className="text-xl text-brand-gray max-w-lg leading-relaxed mx-auto lg:mx-0">
            Connect souls before faces. Our science-backed personality matching finds your perfect alignment based on values, interests, and real connection.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            {onStartClick ? (
              <button 
                onClick={onStartClick}
                className="w-full sm:w-auto bg-brand-pink text-white px-8 py-4 rounded-full text-center font-bold text-lg hover:shadow-xl hover:shadow-brand-pink/30 hover:-translate-y-1 transition-all active:scale-95"
              >
                Start Your Journey
              </button>
            ) : (
              <a href="#download" className="w-full sm:w-auto bg-brand-pink text-white px-8 py-4 rounded-full text-center font-bold text-lg hover:shadow-xl hover:shadow-brand-pink/30 hover:-translate-y-1 transition-all active:scale-95">
                Go to Dashboard
              </a>
            )}
            
            <a href="#how-it-works" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border-2 border-brand-bg-light px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-bg-light transition-all">
              <Play className="fill-current text-brand-pink" size={20} />
              Watch How It Works
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/${i + 10}/100/100`}
                  alt="User"
                  className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-sm"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-1 text-brand-yellow">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-brand-dark font-medium">50,000+ happy couples</p>
            </div>
          </div>
        </div>

        {/* Right Content - 3D Mockup */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative perspective-1000 hidden lg:flex items-center justify-center h-[600px]"
        >
          {/* Animated Dots */}
          <div className="absolute top-10 right-20 w-4 h-4 bg-brand-pink rounded-full animate-float"></div>
          <div className="absolute bottom-40 left-10 w-6 h-6 bg-brand-teal rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 -right-4 w-3 h-3 bg-brand-yellow rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

          {/* Phone Frame */}
          <div 
            style={{ 
              transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
            className="w-[300px] h-[600px] bg-brand-dark rounded-[3rem] border-8 border-brand-dark shadow-2xl overflow-hidden relative"
          >
            {/* App UI Simulation */}
            <div className="h-full bg-white p-4">
              <div className="flex justify-between items-center mb-6 pt-4">
                <Heart className="text-brand-pink fill-current" />
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                   {profileImage ? (
                     <img src={profileImage} alt="Me" className="w-full h-full object-cover" />
                   ) : (
                     <div className="w-full h-full flex items-center justify-center text-gray-400">
                       <User size={16} />
                     </div>
                   )}
                </div>
              </div>
              <div className="w-full aspect-[3/4] rounded-2xl bg-gray-100 overflow-hidden relative group">
                {userName && profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                ) : (
                  <img 
                    src="https://picsum.photos/seed/profile/400/500" 
                    alt="Profile" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                )}
                <div className="absolute bottom-4 left-4 text-white drop-shadow-md">
                  <h3 className="font-bold text-xl">{userName || 'Sarah'}, {userName ? 'You' : '26'}</h3>
                  <p className="text-sm opacity-90">{userName ? 'Authentic Soul' : 'ENTP • Creative Soul'}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-2 overflow-x-hidden">
                <span className="bg-brand-pink/10 text-brand-pink px-3 py-1 rounded-full text-xs font-bold">Adventurous</span>
                <span className="bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full text-xs font-bold">Coffee Lover</span>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <div 
            className="absolute top-1/4 -right-12 glass p-4 rounded-2xl shadow-xl animate-float flex items-center gap-3"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="bg-brand-teal p-2 rounded-lg">
              <CheckCircle className="text-white" size={20} />
            </div>
            <div>
              <p className="text-xs text-brand-gray">New Match</p>
              <p className="text-sm font-bold">94% Compatibility</p>
            </div>
          </div>

          <div 
            className="absolute bottom-1/4 -left-12 glass p-4 rounded-2xl shadow-xl animate-float flex items-center gap-3"
            style={{ animationDelay: '1.5s' }}
          >
            <div className="bg-brand-pink p-2 rounded-lg">
              <Heart className="text-white" size={20} fill="currentColor" />
            </div>
            <div>
              <p className="text-xs text-brand-gray">Vibe Alert</p>
              <p className="text-sm font-bold">Shared Values!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
