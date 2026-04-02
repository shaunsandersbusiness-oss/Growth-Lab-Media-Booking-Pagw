import { useEffect } from 'react';
import { CheckCircle2, Quote, MapPin, Award, TrendingUp } from 'lucide-react';

function SupportingContent() {
  return (
    <>
      {/* Section 1: What You'll Get */}
      <div className="flex flex-col gap-2.5">
        {[
          "Full audit of your current marketing",
          "Competitor analysis for your local market",
          "Custom growth roadmap for your business",
          "Honest assessment — no pressure, no contracts"
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
            <span className="text-gray-200 text-sm">{item}</span>
          </div>
        ))}
      </div>

      {/* Section 2: Single Testimonial */}
      <div className="bg-[#1F2937] p-5 rounded-lg border border-white/5 relative mt-2 lg:mt-0">
        <Quote className="w-8 h-8 text-brand-purple/20 absolute top-3 right-3" />
        <p className="text-white text-sm italic mb-4 relative z-10">
          "15 qualified prospects in 2 weeks. Closed a $30K deal from the first batch."
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="text-xs text-brand-gray">
            <strong className="text-white block text-sm">Jaime Sanchez</strong>
            Vanguard AV | Hackensack, NJ
          </div>
          <div className="bg-brand-teal/10 text-brand-teal text-xs font-bold px-2.5 py-1 rounded border border-brand-teal/20 whitespace-nowrap w-fit">
            $30K in 2 Weeks
          </div>
        </div>
      </div>

      {/* Section 3: Who This Is For */}
      <div className="mt-2 lg:mt-0">
        <h3 className="text-white font-semibold text-xs mb-2 uppercase tracking-wider text-brand-purple">Who This Is For</h3>
        <p className="text-brand-gray text-sm leading-relaxed">
          This call is for local service business owners in NJ & NYC doing $250K+ annually who are tired of scattered marketing and ready for a real system.
        </p>
      </div>

      {/* Section 4: Trust Badges */}
      <div className="flex items-center justify-between lg:justify-start lg:gap-10 border-t border-white/10 pt-5 mt-2 lg:mt-0">
        <div className="flex flex-col items-center gap-1.5">
          <MapPin className="w-5 h-5 text-brand-gray" />
          <span className="text-[10px] text-brand-gray uppercase tracking-wider font-medium">NYC Based</span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <Award className="w-5 h-5 text-brand-gray" />
          <span className="text-[10px] text-brand-gray uppercase tracking-wider font-medium">Certified</span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <TrendingUp className="w-5 h-5 text-brand-gray" />
          <span className="text-[10px] text-brand-gray uppercase tracking-wider font-medium">90-Day System</span>
        </div>
      </div>
    </>
  );
}

export default function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-dark selection:bg-brand-purple/30">
      {/* Navigation */}
      <nav className="w-full h-[50px] flex items-center justify-center sm:justify-start px-4 lg:px-8 border-b border-white/5 shrink-0">
        <div className="font-bold tracking-widest text-sm sm:text-base">
          <span className="text-white">GROWTH LAB</span> <span className="text-brand-purple">MEDIA</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 lg:pt-12 pb-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
          
          {/* Left Column (Desktop) / Top (Mobile) */}
          <div className="w-full lg:w-[40%] flex flex-col">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2 lg:mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
              </span>
              <span className="text-brand-teal text-[11px] lg:text-xs font-semibold uppercase tracking-wider">SPOTS OPEN FOR Q2 2026</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white text-center lg:text-left leading-[1.1] tracking-tight mb-3 lg:mb-5">
              Book Your Free Growth Audit
            </h1>
            
            <p className="text-brand-gray text-sm sm:text-lg text-center lg:text-left mb-6 lg:mb-10">
              30 minutes. No pressure. Let's map your growth engine.
            </p>

            {/* Desktop Supporting Content */}
            <div className="hidden lg:flex flex-col gap-8">
              <SupportingContent />
            </div>
          </div>

          {/* Right Column (Desktop) / Middle (Mobile) */}
          <div className="w-full lg:w-[60%] lg:sticky lg:top-6">
            <div className="w-full max-w-[600px] mx-auto bg-white/5 p-2 sm:p-4 rounded-2xl border border-white/10 shadow-2xl animate-fade-in backdrop-blur-sm">
              <div className="bg-white rounded-xl overflow-hidden">
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/booking/EAfGOO8Z50aCisioAAaY" 
                  style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '650px' }} 
                  scrolling="no" 
                  id="EAfGOO8Z50aCisioAAaY_1773083468968"
                  title="Booking Calendar"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Mobile Supporting Content */}
          <div className="w-full flex flex-col gap-6 lg:hidden mt-2">
            <SupportingContent />
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 border-t border-white/5 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-1">
          <p className="text-brand-gray text-[11px]">&copy; 2026 Growth Lab Media</p>
          <p className="text-brand-gray text-[11px]">Serving NJ & NYC Metro</p>
        </div>
      </footer>
    </div>
  );
}
