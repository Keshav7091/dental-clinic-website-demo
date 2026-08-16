import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, MoveHorizontal, Check, CheckCircle2 } from 'lucide-react';

const SMILE_PRESETS = [
  {
    id: 'whitening',
    title: 'Laser Teeth Whitening',
    tag: '1-Hour Treatment',
    description: 'Up to 8 shades whiter in a single painless 60-minute session.',
    beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
    afterImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'veneers',
    title: 'Porcelain Veneers',
    tag: 'Complete Makeover',
    description: 'Custom ultrathin porcelain shells designed for symmetrical perfection.',
    beforeImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
    afterImg: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'aligners',
    title: 'Clear Invisalign® Aligners',
    tag: 'Invisible Orthodontics',
    description: 'Straighten teeth discreetly in 6 months without bulky wire braces.',
    beforeImg: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800',
    afterImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
  }
];

export default function SmileSlider({ onOpenBooking }) {
  const [activePreset, setActivePreset] = useState(SMILE_PRESETS[0]);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="smile-gallery" className="py-16 lg:py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Before & After
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            See Real Smile Transformations
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Drag the slider handle left and right to compare real patient results before and after our cosmetic dental care.
          </p>
        </div>

        {/* Treatment Preset Selector Tabs */}
        <div className="flex justify-center flex-wrap gap-2 mt-8 mb-10">
          {SMILE_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => {
                setActivePreset(preset);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                activePreset.id === preset.id
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {preset.title}
            </button>
          ))}
        </div>

        {/* Interactive Before / After Slider Box */}
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-4 sm:p-6 shadow-2xl shadow-slate-900/10">
          <div 
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[350px] sm:h-[480px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-800"
          >
            {/* After Image (Background) */}
            <img
              src={activePreset.afterImg}
              alt="Smile Transformation After"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
            
            {/* After Badge */}
            <div className="absolute top-4 right-4 bg-teal-500/90 text-white text-xs font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-lg backdrop-blur-md shadow-lg pointer-events-none z-10 flex items-center gap-1">
              <Check className="w-3.5 h-3.5" /> After AuraDental
            </div>

            {/* Before Image (Clipped Overlay) */}
            <div 
              className="absolute top-0 bottom-0 left-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={activePreset.beforeImg}
                alt="Smile Transformation Before"
                className="absolute top-0 bottom-0 left-0 w-full max-w-none h-full object-cover object-center pointer-events-none"
                style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
              />
              {/* Before Badge */}
              <div className="absolute top-4 left-4 bg-slate-900/90 text-slate-200 text-xs font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-lg backdrop-blur-md shadow-lg">
                Before Treatment
              </div>
            </div>

            {/* Slider Divider Line & Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] pointer-events-none z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-800 shadow-2xl flex items-center justify-center border-2 border-teal-500 hover:scale-110 transition-transform">
                <MoveHorizontal className="w-5 h-5 text-teal-600" />
              </div>
            </div>
          </div>

          {/* Preset Info & CTA Bar */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-300 px-2">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">{activePreset.title}</h3>
                <span className="text-xs bg-teal-500/20 text-teal-300 font-medium px-2.5 py-0.5 rounded-full border border-teal-500/30">
                  {activePreset.tag}
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-1">{activePreset.description}</p>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-md shadow-teal-500/20"
            >
              <Sparkles className="w-4 h-4" /> Book This Transformation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
