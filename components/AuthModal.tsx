
import React, { useState, useEffect } from 'react';
import { X, Mail, Lock, User } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  useEffect(() => {
    // Reset states when modal closes
    if (!isOpen) {
      setIsLoading(false);
      setIsGoogleLoading(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate Email/Password Authentication Flow
    setTimeout(() => {
      onLogin(email || 'demo@vibe.app');
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  const handleGoogleLogin = () => {
    setIsGoogleLoading(true);
    
    // Simulate initiating a Google OAuth 2.0 Flow
    const width = 500;
    const height = 600;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    
    // Create a mock OAuth popup
    const popup = window.open(
      'about:blank',
      'google-oauth',
      `width=${width},height=${height},left=${left},top=${top}`
    );

    if (popup) {
      popup.document.write(`
        <html>
          <head>
            <title>Sign in - Google Accounts</title>
            <style>
              body { font-family: 'Roboto', arial, sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #f1f3f4; }
              .card { background: white; padding: 40px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.12); text-align: center; max-width: 400px; }
              .logo { width: 74px; margin-bottom: 24px; }
              h1 { font-size: 24px; font-weight: 400; margin: 0 0 8px; color: #202124; }
              p { font-size: 16px; color: #5f6368; margin-bottom: 32px; }
              .user-picker { display: flex; align-items: center; padding: 12px; border: 1px solid #dadce0; border-radius: 4px; cursor: pointer; transition: background 0.2s; text-align: left; }
              .user-picker:hover { background: #f8f9fa; }
              .avatar { width: 32px; height: 32px; border-radius: 50%; background: #4285f4; color: white; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-weight: bold; }
              .email { font-size: 14px; color: #3c4043; font-weight: 500; }
            </style>
          </head>
          <body>
            <div class="card">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="logo" />
              <h1>Choose an account</h1>
              <p>to continue to Vibe</p>
              <div class="user-picker" onclick="window.close()">
                <div class="avatar">G</div>
                <div>
                  <div class="email">google.user@gmail.com</div>
                  <div style="font-size: 12px; color: #5f6368;">Google Account</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `);

      const timer = setInterval(() => {
        if (popup.closed) {
          clearInterval(timer);
          // Simulate the callback processing the auth code/token
          setTimeout(() => {
            onLogin('google.user@gmail.com');
            setIsGoogleLoading(false);
            onClose();
          }, 800);
        }
      }, 500);
    } else {
      // Fallback if popup is blocked
      setTimeout(() => {
        onLogin('google.user@gmail.com');
        setIsGoogleLoading(false);
        onClose();
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-brand-dark/40 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-md rounded-4xl shadow-2xl overflow-hidden animate-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-brand-gray hover:bg-brand-bg-light rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8 sm:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-dark mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-brand-gray">
              {isLogin ? 'Enter your details to find your vibe.' : 'Join 2M+ souls finding real connection.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray/50" size={18} />
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required
                  className="w-full pl-12 pr-4 py-3.5 bg-brand-bg-light border border-transparent rounded-2xl focus:border-brand-pink focus:bg-white outline-none transition-all"
                />
              </div>
            )}
            
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray/50" size={18} />
              <input 
                type="email" 
                placeholder="Email Address" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-brand-bg-light border border-transparent rounded-2xl focus:border-brand-pink focus:bg-white outline-none transition-all font-medium"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray/50" size={18} />
              <input 
                type="password" 
                placeholder="Password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-brand-bg-light border border-transparent rounded-2xl focus:border-brand-pink focus:bg-white outline-none transition-all font-medium"
              />
            </div>

            <button 
              disabled={isLoading || isGoogleLoading}
              className="w-full bg-brand-pink text-white py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-brand-pink/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                isLogin ? 'Sign In' : 'Join Vibe'
              )}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-brand-gray font-semibold tracking-wider">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <button 
              onClick={handleGoogleLogin}
              disabled={isLoading || isGoogleLoading}
              className="flex items-center justify-center gap-3 w-full py-3.5 border-2 border-gray-100 rounded-2xl font-bold text-brand-dark hover:bg-brand-bg-light transition-all active:scale-[0.98] disabled:opacity-70"
            >
              {isGoogleLoading ? (
                <div className="w-5 h-5 border-2 border-brand-pink/30 border-t-brand-pink rounded-full animate-spin"></div>
              ) : (
                <>
                  <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                  Sign in with Google
                </>
              )}
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-brand-gray">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-brand-pink font-bold hover:underline"
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
