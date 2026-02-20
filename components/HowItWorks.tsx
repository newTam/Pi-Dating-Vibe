
import React from 'react';
import { ClipboardList, Users, MessageSquare, Star } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList className="text-white" size={32} />,
    title: 'Take the Quiz',
    desc: 'Discover your unique personality type and values through our science-backed alignment quiz.',
    color: 'bg-brand-pink',
    step: '01'
  },
  {
    icon: <Users className="text-white" size={32} />,
    title: 'Get Matched',
    desc: 'Our AI engine analyzes vibes and values to find people who truly resonate with your soul.',
    color: 'bg-brand-teal',
    step: '02'
  },
  {
    icon: <MessageSquare className="text-white" size={32} />,
    title: 'Start Chatting',
    desc: 'Break the ice with meaningful prompts designed to spark deep, authentic conversations.',
    color: 'bg-brand-yellow',
    step: '03'
  }
];

const stats = [
  { label: 'Users Worldwide', value: '2M+' },
  { label: 'Monthly Matches', value: '500k+' },
  { label: 'Happy Couples', value: '50k+' },
  { label: 'App Rating', value: '4.9', icon: <Star size={20} className="fill-current text-brand-yellow inline mb-1" /> }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-brand-bg-light px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-brand-pink font-bold tracking-widest uppercase text-sm">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">3 Simple Steps to Your Soulmate</h2>
          <p className="text-brand-gray max-w-2xl mx-auto">We prioritize who you are over how you look. Follow our proven path to a deeper connection.</p>
        </div>

        {/* Step Cards */}
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-12 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 group">
              <div className="bg-white p-10 rounded-4xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center border border-gray-100 h-full flex flex-col items-center">
                <div className={`w-20 h-20 ${step.color} rounded-3xl flex items-center justify-center mb-8 shadow-lg shadow-${step.color.split('-')[1]}/20 relative`}>
                  {step.icon}
                  <span className="absolute -top-4 -right-4 bg-brand-dark text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-4 border-white">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-brand-gray leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-brand-dark mb-2 group-hover:text-brand-pink transition-colors">
                {stat.value}{stat.icon}
              </div>
              <div className="text-brand-gray font-medium uppercase text-xs tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
