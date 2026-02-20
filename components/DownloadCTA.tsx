import React from 'react';
import { Smartphone, Apple, Play } from 'lucide-react';

interface DownloadCTAProps {
  onDownloadClick?: () => void;
}

const DownloadCTA: React.FC<DownloadCTAProps> = ({ onDownloadClick }) => {
  return (
    <section id="download" className="py-24 px-4 bg-brand-dark relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-pink/10 rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8 text-center lg:text-left">
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Love is Just a <span className="text-brand-pink">Tap</span> Away
          </h2>
          <p className="text-xl text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Join 2 million others who have ditched the surface-level swipe for deep, personality-first connections. Download Vibe today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button 
              onClick={onDownloadClick}
              className="flex items-center gap-3 bg-white text-brand-dark px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform w-full sm:w-auto justify-center"
            >
              <Apple fill="currentColor" />
              <div className="text-left">
                <p className="text-[10px] uppercase opacity-70 leading-none">Download on the</p>
                <p className="text-lg leading-none">App Store</p>
              </div>
            </button>
            <button 
              onClick={onDownloadClick}
              className="flex items-center gap-3 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform w-full sm:w-auto justify-center"
            >
              <Play fill="currentColor" />
              <div className="text-left">
                <p className="text-[10px] uppercase opacity-70 leading-none">Get it on</p>
                <p className="text-lg leading-none">Google Play</p>
              </div>
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
            <div className="bg-white p-3 rounded-2xl">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=vibe-dating" alt="QR Code" className="w-20 h-20" />
            </div>
            <div className="text-white/60 text-sm">
              <p className="font-bold text-white">Scan to Download</p>
              <p>Available for iOS and Android</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          {/* Pulsing Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-pink rounded-full blur-[100px] animate-pulse-slow"></div>
          
          <div className="relative w-[300px] h-[600px] bg-brand-dark rounded-[3rem] border-8 border-white/10 shadow-2xl overflow-hidden">
            <div className="h-full bg-brand-pink flex flex-col items-center justify-center text-center p-8 text-white space-y-6">
              <div className="bg-white/20 p-4 rounded-full animate-bounce">
                <Smartphone size={48} />
              </div>
              <h3 className="text-4xl font-bold">It's a Match!</h3>
              <p className="opacity-90">Someone just vibed with your personality. Start chatting now!</p>
              <div className="flex -space-x-4">
                 <img src="https://i.pravatar.cc/100?u=1" className="w-16 h-16 rounded-full border-4 border-brand-pink shadow-lg" alt="" />
                 <img src="https://i.pravatar.cc/100?u=2" className="w-16 h-16 rounded-full border-4 border-brand-pink shadow-lg" alt="" />
              </div>
              <button className="w-full bg-white text-brand-pink py-4 rounded-2xl font-bold shadow-xl active:scale-95 transition-all">
                 Say Hello
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;