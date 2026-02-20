
import React, { useState, useEffect, useRef } from 'react';
import { X, User, MapPin, Globe, Sparkles, Check, Info, Navigation, AlertCircle, Camera, Trash2, Crosshair, Database, Server, Link, ShieldCheck, RefreshCw, ChevronDown } from 'lucide-react';

interface ProfileData {
  name: string;
  bio: string;
  interests: string[];
  discoveryMode: 'local' | 'global';
  radius: number;
  profileImage?: string;
  nasConfig?: {
    address: string;
    token: string;
    dbType: string;
    dbName: string;
    isConnected: boolean;
  };
}

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: ProfileData;
  onSave: (data: ProfileData) => void;
}

const INTERESTS_OPTIONS = [
  'Art', 'Gaming', 'Hiking', 'Cooking', 'Music', 
  'Travel', 'Yoga', 'Reading', 'Coding', 'Fitness',
  'Photography', 'Cinema', 'Design', 'Philosophy'
];

const DB_TYPES = [
  { id: 'mariadb', name: 'MariaDB (Standard QNAP)', icon: '🐬' },
  { id: 'postgres', name: 'PostgreSQL (Container Station)', icon: '🐘' },
  { id: 'mongodb', name: 'MongoDB (NoSQL)', icon: '🍃' },
  { id: 'redis', name: 'Redis (Cache Sync)', icon: '⚡' }
];

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, initialData, onSave }) => {
  const [formData, setFormData] = useState<ProfileData>(initialData);
  const [activeTab, setActiveTab] = useState<'profile' | 'vault'>('profile');
  const [isSaving, setIsSaving] = useState(false);
  const [showSaved, setShowSaved] = useState(false);
  const [isConnectingNas, setIsConnectingNas] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Geolocation states
  const [isLocating, setIsLocating] = useState(false);
  const [locationCoords, setLocationCoords] = useState<{lat: number, lng: number} | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setFormData({
        ...initialData,
        nasConfig: initialData.nasConfig || {
          address: '',
          token: '',
          dbType: 'mariadb',
          dbName: 'vibe_data',
          isConnected: false
        }
      });
    } else {
      setShowSaved(false);
      setIsSaving(false);
    }
  }, [isOpen, initialData]);

  const handleTestNasConnection = () => {
    if (!formData.nasConfig?.address) return;
    setIsConnectingNas(true);
    
    // Simulate NAS Handshake with specified DB
    setTimeout(() => {
      setFormData(prev => ({
        ...prev,
        nasConfig: { ...prev.nasConfig!, isConnected: true }
      }));
      setIsConnectingNas(false);
    }, 2000);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, profileImage: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      onSave(formData);
      setIsSaving(false);
      setShowSaved(true);
      setTimeout(() => {
        setShowSaved(false);
        onClose();
      }, 1500);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-md transition-opacity" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-2xl rounded-4xl shadow-2xl overflow-hidden animate-in zoom-in duration-300 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-brand-bg-light/50">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-brand-pink rounded-2xl flex items-center justify-center text-white overflow-hidden border-2 border-white shadow-sm">
              {formData.profileImage ? (
                <img src={formData.profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <User size={24} />
              )}
            </div>
            <div>
              <h2 className="text-xl font-bold text-brand-dark leading-none">Settings & Sync</h2>
              <div className="flex gap-4 mt-1.5">
                <button 
                  onClick={() => setActiveTab('profile')}
                  className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${activeTab === 'profile' ? 'text-brand-pink' : 'text-brand-gray'}`}
                >
                  My Identity
                </button>
                <button 
                  onClick={() => setActiveTab('vault')}
                  className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${activeTab === 'vault' ? 'text-brand-teal' : 'text-brand-gray'}`}
                >
                  Vibe Vault (NAS)
                </button>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-brand-gray hover:bg-white rounded-full transition-all">
            <X size={20} />
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10">
          {activeTab === 'profile' ? (
            <div className="space-y-10 animate-in fade-in duration-300">
              {/* Profile Image & Basic Info */}
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative group">
                  <div onClick={() => fileInputRef.current?.click()} className="w-32 h-32 rounded-4xl overflow-hidden bg-brand-bg-light border-4 border-white shadow-xl flex items-center justify-center cursor-pointer">
                    {formData.profileImage ? <img src={formData.profileImage} alt="Preview" className="w-full h-full object-cover" /> : <User size={48} className="text-brand-pink/30" />}
                  </div>
                  <button onClick={() => fileInputRef.current?.click()} className="absolute -bottom-2 -right-2 bg-brand-pink text-white p-3 rounded-2xl shadow-lg border-4 border-white"><Camera size={20} /></button>
                  <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
                </div>
              </div>

              <div className="space-y-4">
                <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Display Name" className="w-full px-5 py-3.5 bg-brand-bg-light border border-transparent rounded-2xl focus:border-brand-pink focus:bg-white outline-none transition-all font-medium" />
                <textarea value={formData.bio} onChange={(e) => setFormData({...formData, bio: e.target.value})} placeholder="Tell us about your soul..." rows={3} className="w-full px-5 py-3.5 bg-brand-bg-light border border-transparent rounded-2xl focus:border-brand-pink focus:bg-white outline-none transition-all font-medium resize-none" />
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold text-brand-dark uppercase tracking-wider flex items-center gap-2">
                  <Sparkles size={14} className="text-brand-teal" /> Your Interests
                </label>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS_OPTIONS.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => {
                        const interests = formData.interests.includes(interest)
                          ? formData.interests.filter(i => i !== interest)
                          : [...formData.interests, interest];
                        setFormData({...formData, interests});
                      }}
                      className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${
                        formData.interests.includes(interest) 
                          ? 'bg-brand-teal border-brand-teal text-white shadow-lg shadow-brand-teal/20' 
                          : 'bg-white border-gray-200 text-brand-gray hover:border-brand-teal'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
              <div className="bg-brand-dark rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Server size={120} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Database size={20} className="text-brand-teal" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">QNAP Database Sync</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Vibe Vault Gateway</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Connect your QNAP NAS to verify your identity through your private database. We support MariaDB (Native), PostgreSQL, and MongoDB via Container Station.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2 sm:col-span-1">
                        <label className="text-[10px] font-bold uppercase text-white/40 mb-1.5 block">Database Engine</label>
                        <div className="relative">
                          <select 
                            value={formData.nasConfig?.dbType || 'mariadb'}
                            onChange={(e) => setFormData({
                              ...formData,
                              nasConfig: { ...formData.nasConfig!, dbType: e.target.value, isConnected: false }
                            })}
                            className="w-full bg-white/10 border border-white/10 rounded-xl py-3 pl-4 pr-10 outline-none focus:border-brand-teal transition-all text-sm appearance-none"
                          >
                            {DB_TYPES.map(db => (
                              <option key={db.id} value={db.id} className="bg-brand-dark text-white">{db.icon} {db.name}</option>
                            ))}
                          </select>
                          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                        </div>
                      </div>
                      
                      <div className="col-span-2 sm:col-span-1">
                        <label className="text-[10px] font-bold uppercase text-white/40 mb-1.5 block">Database Name</label>
                        <input 
                          type="text" 
                          placeholder="e.g. vibe_store" 
                          value={formData.nasConfig?.dbName || ''}
                          onChange={(e) => setFormData({
                            ...formData, 
                            nasConfig: { ...formData.nasConfig!, dbName: e.target.value, isConnected: false }
                          })}
                          className="w-full bg-white/10 border border-white/10 rounded-xl py-3 px-4 outline-none focus:border-brand-teal transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase text-white/40 mb-1.5 block">QNAP myQNAPcloud URL / IP</label>
                      <div className="relative">
                        <Link className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                        <input 
                          type="text" 
                          placeholder="https://your-nas.myqnapcloud.com" 
                          value={formData.nasConfig?.address || ''}
                          onChange={(e) => setFormData({
                            ...formData, 
                            nasConfig: { ...formData.nasConfig!, address: e.target.value, isConnected: false }
                          })}
                          className="w-full bg-white/10 border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-brand-teal transition-all text-sm"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-[10px] font-bold uppercase text-white/40 mb-1.5 block">Application API Token</label>
                      <div className="relative">
                        <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                        <input 
                          type="password" 
                          placeholder="QNAP-API-SECRET-TOKEN" 
                          value={formData.nasConfig?.token || ''}
                          onChange={(e) => setFormData({
                            ...formData, 
                            nasConfig: { ...formData.nasConfig!, token: e.target.value, isConnected: false }
                          })}
                          className="w-full bg-white/10 border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-brand-teal transition-all text-sm"
                        />
                      </div>
                    </div>

                    <button 
                      onClick={handleTestNasConnection}
                      disabled={isConnectingNas}
                      className={`w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                        formData.nasConfig?.isConnected 
                          ? 'bg-brand-teal text-white' 
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {isConnectingNas ? (
                        <RefreshCw size={18} className="animate-spin" />
                      ) : formData.nasConfig?.isConnected ? (
                        <><Check size={18} /> Connection Verified</>
                      ) : (
                        'Test Link Connection'
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="flex items-center gap-4 p-4 bg-brand-bg-light rounded-2xl border border-gray-100">
                <div className="w-10 h-10 bg-brand-teal/10 rounded-full flex items-center justify-center text-brand-teal">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-dark">Private Data Handshake</p>
                  <p className="text-[10px] text-brand-gray">Supporting Native MariaDB and Container Station Docker images.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-white border-t border-gray-100">
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className={`w-full py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
              showSaved ? 'bg-brand-teal text-white' : 'bg-brand-pink text-white active:scale-[0.98]'
            }`}
          >
            {isSaving ? <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : showSaved ? 'Saved!' : 'Update Profile'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
