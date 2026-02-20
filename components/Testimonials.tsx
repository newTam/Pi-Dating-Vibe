
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'James', age: 28, loc: 'New York', text: 'Vibe changed the game for me. I found someone who actually understands my humor!', avatar: 'https://i.pravatar.cc/150?u=james' },
  { name: 'Elena', age: 31, loc: 'London', text: 'The personality quiz was so accurate. My match and I have the exact same values.', avatar: 'https://i.pravatar.cc/150?u=elena' },
  { name: 'Marcus', age: 26, loc: 'Berlin', text: 'No more mindless swiping. Every conversation I had on here felt meaningful.', avatar: 'https://i.pravatar.cc/150?u=marcus' },
  { name: 'Sophia', age: 29, loc: 'Paris', text: 'I love the ice-breakers! They make starting a conversation so much easier.', avatar: 'https://i.pravatar.cc/150?u=sophia' },
  { name: 'Liam', age: 33, loc: 'Sydney', text: 'Best dating app experience yet. The community is so respectful and authentic.', avatar: 'https://i.pravatar.cc/150?u=liam' },
  { name: 'Maya', age: 27, loc: 'Tokyo', text: 'Finally an app that cares about who I am, not just what I look like.', avatar: 'https://i.pravatar.cc/150?u=maya' },
];

/* Fixed: Using React.FC to allow reserved 'key' prop when used as a component */
const TestimonialCard: React.FC<{ item: typeof testimonials[0] }> = ({ item }) => (
  <div className="flex-shrink-0 w-[350px] mx-4 glass p-8 rounded-3xl border border-gray-100 hover:-translate-y-1 transition-transform">
    <div className="flex items-center gap-1 text-brand-yellow mb-4">
      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
    </div>
    <Quote className="text-brand-pink/20 mb-2" size={32} />
    <p className="text-brand-gray mb-6 leading-relaxed italic">"{item.text}"</p>
    <div className="flex items-center gap-4">
      <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <h4 className="font-bold text-brand-dark">{item.name}, {item.age}</h4>
        <p className="text-xs text-brand-gray">{item.loc}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <span className="text-brand-pink font-bold tracking-widest uppercase text-sm">Love Stories</span>
        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mt-2">Love Found on Vibe</h2>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative flex mask-marquee py-4">
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((item, idx) => (
            <TestimonialCard key={idx} item={item} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 */}
      <div className="relative flex mask-marquee py-4 mt-8">
        <div className="flex animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].reverse().map((item, idx) => (
            <TestimonialCard key={idx} item={item} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100">
          <div className="text-3xl font-bold text-brand-pink mb-1">4.9</div>
          <p className="text-sm text-brand-gray uppercase tracking-widest font-bold">App Store Rating</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100">
          <div className="text-3xl font-bold text-brand-teal mb-1">#1</div>
          <p className="text-sm text-brand-gray uppercase tracking-widest font-bold">Dating App 2024</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100">
          <div className="text-3xl font-bold text-brand-dark mb-1">2M+</div>
          <p className="text-sm text-brand-gray uppercase tracking-widest font-bold">Active Users</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
