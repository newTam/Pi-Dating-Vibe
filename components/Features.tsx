import React from 'react';
import { 
  ShieldCheck, 
  Video, 
  Brain, 
  Zap, 
  MessageSquare, 
  Mic, 
  Calendar, 
  BarChart3, 
  SlidersHorizontal 
} from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-brand-teal font-bold tracking-widest uppercase text-sm">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">Features That Set Us Apart</h2>
          <p className="text-brand-gray max-w-2xl mx-auto">Designed for meaningful interactions, our tools help you express your true self and find genuine alignment.</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6 auto-rows-[240px] lg:auto-rows-[300px]">
          
          {/* Large Card: Personality First */}
          <div className="col-span-12 lg:col-span-8 row-span-1 lg:row-span-2 group relative bg-brand-pink/5 rounded-4xl p-8 lg:p-12 overflow-hidden border border-brand-pink/10 hover:shadow-2xl hover:shadow-brand-pink/10 transition-all duration-500 hover:-translate-y-1">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="space-y-4 max-w-md">
                <div className="w-14 h-14 bg-brand-pink rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Brain size={28} />
                </div>
                <h3 className="text-3xl font-bold text-brand-dark">Personality First</h3>
                <p className="text-brand-gray text-lg leading-relaxed">
                  Our core matching algorithm is built on decades of social science. We prioritize core values, communication styles, and emotional intelligence over surface-level traits.
                </p>
              </div>
              <div className="hidden sm:block mt-8">
                <div className="flex gap-4">
                  <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold border border-brand-pink/20 text-brand-pink shadow-sm">Values Alignment</span>
                  <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold border border-brand-pink/20 text-brand-pink shadow-sm">Science-Backed</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-pink/10 rounded-full blur-3xl group-hover:bg-brand-pink/20 transition-colors duration-500"></div>
            <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden lg:block opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              <Brain size={240} className="text-brand-pink" />
            </div>
          </div>

          {/* Small Card: Safe & Secure */}
          <div className="col-span-12 lg:col-span-4 group relative bg-brand-dark rounded-4xl p-8 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-brand-teal">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Safe & Secure</h3>
                <p className="text-white/60 text-sm">Verified profiles and end-to-end privacy for a safe dating experience.</p>
              </div>
            </div>
          </div>

          {/* Small Card: Video Profiles */}
          <div className="col-span-12 lg:col-span-4 group relative bg-brand-teal/5 rounded-4xl p-8 overflow-hidden border border-brand-teal/10 hover:shadow-2xl hover:shadow-brand-teal/10 transition-all duration-500 hover:-translate-y-1">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-12 h-12 bg-brand-teal rounded-xl flex items-center justify-center text-white shadow-lg">
                <Video size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Video Profiles</h3>
                <p className="text-brand-gray text-sm">See the spark in action with short, authentic video introductions.</p>
              </div>
            </div>
          </div>

          {/* Wide Card: Smart Matching */}
          <div className="col-span-12 lg:col-span-8 group relative bg-brand-yellow/5 rounded-4xl p-8 lg:p-10 overflow-hidden border border-brand-yellow/10 hover:shadow-2xl hover:shadow-brand-yellow/10 transition-all duration-500 hover:-translate-y-1">
            <div className="relative z-10 flex items-start lg:items-center gap-8 h-full">
              <div className="w-20 h-20 bg-brand-yellow rounded-3xl flex-shrink-0 flex items-center justify-center text-white shadow-lg">
                <Zap size={40} className="fill-current" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-brand-dark">Smart Matching</h3>
                  <Zap size={20} className="text-brand-yellow animate-pulse fill-current" />
                </div>
                <p className="text-brand-gray text-lg max-w-xl">
                  Our advanced AI doesn't just look at keywords; it understands context and nuance to predict long-term compatibility between unique personalities.
                </p>
              </div>
            </div>
          </div>

          {/* Small Card: Advanced Filters */}
          <div className="col-span-12 lg:col-span-4 group relative bg-brand-pink/10 rounded-4xl p-8 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-brand-pink/20">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-12 h-12 bg-brand-pink rounded-xl flex items-center justify-center text-white shadow-lg">
                <SlidersHorizontal size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Advanced Filters</h3>
                <p className="text-brand-gray text-sm">Refine your journey with deep filters for lifestyle, life goals, and complex personality traits.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features List */}
        <div className="mt-16 pt-16 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-brand-bg-light rounded-2xl flex items-center justify-center text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-all">
              <MessageSquare size={20} />
            </div>
            <div>
              <p className="font-bold text-sm">Ice Breakers</p>
              <p className="text-xs text-brand-gray">Never run out of things to say</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-brand-bg-light rounded-2xl flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all">
              <Mic size={20} />
            </div>
            <div>
              <p className="font-bold text-sm">Voice Notes</p>
              <p className="text-xs text-brand-gray">Hear the vibe in their voice</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-brand-bg-light rounded-2xl flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-white transition-all">
              <Calendar size={20} />
            </div>
            <div>
              <p className="font-bold text-sm">Date Ideas</p>
              <p className="text-xs text-brand-gray">Curated spots for first dates</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-brand-bg-light rounded-2xl flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-all">
              <BarChart3 size={20} />
            </div>
            <div>
              <p className="font-bold text-sm">Vibe Score</p>
              <p className="text-xs text-brand-gray">Daily personality insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;