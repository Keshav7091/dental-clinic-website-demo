import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Shield, CreditCard, Sparkles, HelpCircle } from 'lucide-react';

const TREATMENT_OPTIONS = [
  {
    id: 'whitening',
    name: 'Laser Teeth Whitening',
    basePrice: 299,
    perTooth: false,
    duration: '60 Mins',
    description: 'Instant 8-shade brightening with laser whitening gel.',
    icon: '✨'
  },
  {
    id: 'aligners',
    name: 'Invisalign® Clear Aligners',
    basePrice: 2400,
    perTooth: false,
    duration: '6 - 12 Months',
    description: 'Custom 3D scanned invisible straightening aligners.',
    icon: '💎'
  },
  {
    id: 'implants',
    name: 'Titanium Dental Implant',
    basePrice: 1200,
    perTooth: true,
    duration: '2 Visits',
    description: 'Lifetime permanent tooth replacement with crown.',
    icon: '🦷'
  },
  {
    id: 'veneers',
    name: 'Porcelain Dental Veneers',
    basePrice: 850,
    perTooth: true,
    duration: '2 Visits',
    description: 'Handcrafted ceramic veneers for red-carpet smile.',
    icon: '🌟'
  },
  {
    id: 'cleaning',
    name: 'Painless Deep Cleaning',
    basePrice: 149,
    perTooth: false,
    duration: '45 Mins',
    description: 'Ultrasonic plaque removal & enamel polishing.',
    icon: '🌿'
  },
  {
    id: 'rootcanal',
    name: 'Painless Root Canal',
    basePrice: 650,
    perTooth: false,
    duration: '60 Mins',
    description: 'Same-day emergency pain relief & tooth restoration.',
    icon: '⚡'
  }
];

export default function CostCalculator({ onOpenBooking }) {
  const [selectedTreatment, setSelectedTreatment] = useState(TREATMENT_OPTIONS[0]);
  const [toothCount, setToothCount] = useState(1);
  const [sedation, setSedation] = useState('local'); // local, nitrous, sedation
  const [insurance, setInsurance] = useState('yes'); // yes, no

  // Calculate pricing
  let totalCost = selectedTreatment.perTooth 
    ? selectedTreatment.basePrice * toothCount 
    : selectedTreatment.basePrice;

  if (sedation === 'nitrous') totalCost += 99;
  if (sedation === 'iv') totalCost += 299;

  const onlineDiscount = Math.round(totalCost * 0.1);
  const finalEstimate = totalCost - onlineDiscount;
  const emiMonthly = Math.round(finalEstimate / 24);

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-teal-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
            <Calculator className="w-3.5 h-3.5" /> Instant Cost & Duration Estimator
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Transparent Pricing. No Surprise Bills.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Select your desired treatment below to calculate an instant estimated investment, insurance savings, and 0% interest monthly installment plan.
          </p>
        </div>

        {/* Main Estimator Grid */}
        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200/80 space-y-8">
            
            {/* Step 1: Select Treatment */}
            <div>
              <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                1. Select Desired Treatment
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TREATMENT_OPTIONS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      setSelectedTreatment(t);
                      if (!t.perTooth) setToothCount(1);
                    }}
                    className={`p-4 rounded-2xl text-left border-2 transition-all flex items-start justify-between gap-3 ${
                      selectedTreatment.id === t.id
                        ? 'border-teal-600 bg-teal-50/60 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                        <span>{t.icon}</span>
                        <span>{t.name}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{t.description}</p>
                      <div className="text-xs font-semibold text-teal-700 mt-2">
                        Starting from ${t.basePrice} {t.perTooth ? '/ tooth' : ''}
                      </div>
                    </div>
                    {selectedTreatment.id === t.id && (
                      <div className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Tooth Count (If applicable) */}
            {selectedTreatment.perTooth && (
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-900">
                    Number of Teeth Involved
                  </label>
                  <span className="text-sm font-extrabold text-teal-700 bg-teal-100 px-3 py-0.5 rounded-full">
                    {toothCount} {toothCount === 1 ? 'Tooth' : 'Teeth'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={toothCount}
                  onChange={(e) => setToothCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1 font-medium">
                  <span>1 Tooth</span>
                  <span>6 Teeth (Arch)</span>
                  <span>12 Teeth (Full Smile)</span>
                </div>
              </div>
            )}

            {/* Step 3: Painless Comfort & Comfort Level */}
            <div>
              <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                2. Comfort & Sedation Preference
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'local', title: 'Local Painless Numbing', extra: 'Included (Free)' },
                  { id: 'nitrous', title: 'Laughing Gas (Nitrous)', extra: '+$99' },
                  { id: 'iv', title: 'Deep Sleep IV Sedation', extra: '+$299' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSedation(s.id)}
                    className={`p-3 rounded-xl text-center border text-xs font-semibold transition-all ${
                      sedation === s.id
                        ? 'border-teal-600 bg-teal-600 text-white shadow'
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div>{s.title}</div>
                    <div className={sedation === s.id ? 'text-teal-100 font-normal mt-0.5' : 'text-slate-400 font-normal mt-0.5'}>
                      {s.extra}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Insurance Coverage */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-teal-50/70 border border-teal-100">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-teal-600" />
                <div>
                  <div className="text-sm font-bold text-slate-900">Have Dental Insurance?</div>
                  <div className="text-xs text-slate-500">We accept Delta, MetLife, Cigna, Guardian & PPO plans</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setInsurance('yes')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold ${insurance === 'yes' ? 'bg-teal-600 text-white' : 'bg-white text-slate-600 border'}`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setInsurance('no')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold ${insurance === 'no' ? 'bg-teal-600 text-white' : 'bg-white text-slate-600 border'}`}
                >
                  No
                </button>
              </div>
            </div>

          </div>

          {/* Right Live Estimate Output Summary */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-2xl shadow-slate-900/20 border border-slate-800 space-y-6 sticky top-28">
            
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Estimated Investment</span>
                <h3 className="text-2xl font-extrabold text-white mt-0.5">{selectedTreatment.name}</h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                {selectedTreatment.duration}
              </span>
            </div>

            {/* Price Calculations */}
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex justify-between">
                <span>Estimated Base Price:</span>
                <span className="font-semibold">${totalCost}</span>
              </div>
              <div className="flex justify-between text-teal-400 font-medium">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> 10% Online Booking Discount:
                </span>
                <span>-${onlineDiscount}</span>
              </div>
              {insurance === 'yes' && (
                <div className="flex justify-between text-emerald-400 text-xs bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
                  <span>Insurance Co-Pay Eligible:</span>
                  <span className="font-bold">Covered up to 80%</span>
                </div>
              )}
            </div>

            {/* Final Amount Callout */}
            <div className="pt-4 border-t border-slate-800">
              <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">Estimated Total Out-Of-Pocket</div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl font-extrabold text-white">${finalEstimate}</span>
                <span className="text-xs text-slate-400">USD</span>
              </div>

              {/* Monthly EMI Option */}
              <div className="mt-4 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-teal-400" />
                  <span className="text-slate-300">0% Interest Monthly Plan:</span>
                </div>
                <span className="font-bold text-teal-300 text-sm">As low as ${emiMonthly}/mo</span>
              </div>
            </div>

            {/* Book This Price Button */}
            <button
              onClick={() => onOpenBooking(selectedTreatment.name)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-extrabold text-base transition-all transform hover:-translate-y-0.5 shadow-xl shadow-teal-500/20 flex items-center justify-center gap-2"
            >
              <span>Lock In This Price & Book Slot</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-[11px] text-slate-400 text-center">
              *Final treatment fee confirmed after in-person clinical exam and digital X-ray review.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
