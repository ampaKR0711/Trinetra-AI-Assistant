import React, { useState } from 'react';
import { 
  Search, 
  TrendingUp, 
  TrendingDown, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  User, 
  Bookmark,
  ArrowUpRight,
  ArrowDownRight,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Logo = () => (
  <div className="flex items-center gap-3 group cursor-pointer">
    <div className="w-10 h-10 flex items-center justify-center">
      <svg viewBox="0 0 40 40" className="w-full h-full fill-none">
        {/* Vertical Almond-Shaped Eye Form */}
        <path 
          d="M20 6 Q 32 20 20 34 Q 8 20 20 6 Z" 
          stroke="#4f46e5" 
          strokeWidth="2.5" 
          strokeLinejoin="round"
        />
        {/* Centered Circular Pupil */}
        <circle cx="20" cy="20" r="3.5" fill="#4f46e5" />
        {/* Darker Inner Pupil for Contrast */}
        <circle cx="20" cy="20" r="1.5" fill="#1e1b4b" />
      </svg>
    </div>
    <span className="text-2xl font-bold tracking-widest text-slate-900 uppercase">TRINETRA</span>
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, variant = 'neutral' }: { children: React.ReactNode, variant?: 'success' | 'warning' | 'error' | 'neutral' }) => {
  const styles = {
    success: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    warning: 'bg-amber-50 text-amber-700 border-amber-100',
    error: 'bg-rose-50 text-rose-700 border-rose-100',
    neutral: 'bg-slate-50 text-slate-700 border-slate-100'
  };
  return (
    <span className={`px-2 py-0.5 rounded-md text-[11px] font-semibold border uppercase tracking-wider ${styles[variant]}`}>
      {children}
    </span>
  );
};

// --- Main App ---

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-8">
          <Logo />
          
          <div className="flex-1 max-w-xl relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search stocks, indices, or sectors..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border-transparent focus:bg-white focus:border-indigo-500 rounded-lg text-sm transition-all outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 pl-2 pr-4 py-1.5 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
              <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                <User className="w-3.5 h-3.5" />
              </div>
              Portfolio
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Guidance & Search */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-slate-900 leading-tight">
                What should I do in the market right now?
              </h1>
              <p className="text-sm text-slate-500 leading-relaxed">
                AI-powered insights that guide your decisions clearly and confidently.
              </p>
            </div>

            <div className="space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search stock" 
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <button className="flex items-center justify-between px-4 py-3 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-xl text-sm font-medium transition-colors border border-rose-100 group">
                  <span className="flex items-center gap-2">
                    <TrendingDown className="w-4 h-4" />
                    Market Crash?
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </button>
                <button className="flex items-center justify-between px-4 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl text-sm font-medium transition-colors border border-emerald-100 group">
                  <span className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Market Rising?
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </button>
              </div>
            </div>

            <Card className="p-4 bg-indigo-50 border-indigo-100">
              <div className="flex gap-3">
                <div className="p-2 bg-indigo-100 rounded-lg shrink-0">
                  <Info className="w-4 h-4 text-indigo-600" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-indigo-900 uppercase tracking-wider">Pro Tip</p>
                  <p className="text-sm text-indigo-800/80 leading-relaxed">
                    NIFTY 50 is testing support at 22,100. Watch for a bounce before fresh entries.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Center Column: Market Intelligence */}
          <div className="lg:col-span-6 space-y-6">
            <Card className="relative overflow-hidden border-2 border-indigo-100">
              <div className="absolute top-0 right-0 p-4">
                <div className="flex items-center gap-1.5 px-2 py-1 bg-indigo-600 text-white text-[10px] font-bold rounded uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  Live AI Analysis
                </div>
              </div>
              
              <div className="p-8 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Market Status</p>
                      <h2 className="text-3xl font-bold text-slate-900">Neutral / Consolidating</h2>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-sm font-semibold text-slate-900 mb-1">Reason</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Market is currently in a "wait and watch" mode ahead of the upcoming inflation data. Volume is lower than average, indicating lack of institutional conviction in either direction.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-lg font-bold text-slate-900">Suggested Action</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border border-slate-200 rounded-xl space-y-2 hover:border-indigo-200 transition-colors">
                      <p className="text-sm font-bold text-slate-900">For Investors</p>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Continue SIPs in blue-chip stocks. Avoid lump sum investments until NIFTY clears 22,500 resistance.
                      </p>
                    </div>
                    <div className="p-4 border border-slate-200 rounded-xl space-y-2 hover:border-indigo-200 transition-colors">
                      <p className="text-sm font-bold text-slate-900">For Traders</p>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Focus on stock-specific momentum. Keep tight stop-losses as volatility might spike unexpectedly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> NIFTY: 22,147 (+0.12%)
                    </span>
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> SENSEX: 72,831 (+0.08%)
                    </span>
                  </div>
                  <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors">
                    View Full Analysis <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Card>

            {/* Scenario-Based Guidance */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-rose-500" />
                Scenario: Market Falling
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-5 space-y-4 border-rose-100 bg-rose-50/30">
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-rose-900">Already Invested?</p>
                    <p className="text-xs text-rose-800/60">Strategy for current portfolio</p>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Do not panic sell quality stocks",
                      "Hold fundamentally strong leaders",
                      "Review and exit weak performers"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-rose-800/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-5 space-y-4 border-emerald-100 bg-emerald-50/30">
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-emerald-900">Want to Invest?</p>
                    <p className="text-xs text-emerald-800/60">Strategy for fresh capital</p>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Look for discounted strong stocks",
                      "Invest gradually (Staggered entry)",
                      "Focus on defensive sectors"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-emerald-800/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </div>

          {/* Right Column: Top Opportunities */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">Top Opportunities</h3>
                <button className="text-xs font-semibold text-indigo-600">See All</button>
              </div>
              
              <div className="space-y-3">
                {[
                  { name: 'RELIANCE', price: '2,984.50', change: '+1.45%', signal: 'Strong Buy', variant: 'success' },
                  { name: 'HDFC BANK', price: '1,422.10', change: '-0.20%', signal: 'Watch', variant: 'warning' },
                  { name: 'INFOSYS', price: '1,645.30', change: '+0.85%', signal: 'Strong Buy', variant: 'success' },
                  { name: 'TATA MOTORS', price: '945.20', change: '-2.10%', signal: 'Weak', variant: 'error' },
                  { name: 'ICICI BANK', price: '1,088.45', change: '+0.30%', signal: 'Watch', variant: 'warning' },
                ].map((stock, i) => (
                  <motion.div 
                    key={stock.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="p-3 hover:border-indigo-200 transition-all cursor-pointer group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{stock.name}</span>
                        <Badge variant={stock.variant as any}>{stock.signal}</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">₹{stock.price}</span>
                        <span className={`text-xs font-medium flex items-center gap-0.5 ${stock.change.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {stock.change.startsWith('+') ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                          {stock.change}
                        </span>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sample AI Output Card */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900">AI Decision Card</h3>
              <Card className="border-2 border-indigo-500 shadow-indigo-100 shadow-xl">
                <div className="p-5 space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-black text-slate-900">RELIANCE</h4>
                      <p className="text-xs text-slate-400 font-medium">Reliance Industries Ltd.</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded uppercase tracking-tighter">Bullish</div>
                      <p className="text-[10px] text-slate-400 mt-1 font-semibold">Confidence: 78%</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Action</p>
                      <p className="text-sm font-bold text-slate-900 bg-indigo-50 p-2 rounded-lg border border-indigo-100">
                        Consider buying on dips
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Reason</p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Strong momentum observed in the energy sector combined with positive sentiment following the recent quarterly results. Technical indicators show a breakout above 2,950.
                      </p>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
                    Execute Trade
                  </button>
                </div>
              </Card>
            </div>
          </div>

        </div>
      </main>

      {/* Footer / Disclaimer */}
      <footer className="max-w-7xl mx-auto px-4 py-12 border-t border-slate-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Logo />
            <p className="text-xs text-slate-400 max-w-xs">
              TRINETRA uses advanced AI to analyze market data. Financial markets involve risk. Always consult with a professional advisor.
            </p>
          </div>
          <div className="flex gap-8 text-xs font-semibold text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-indigo-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
