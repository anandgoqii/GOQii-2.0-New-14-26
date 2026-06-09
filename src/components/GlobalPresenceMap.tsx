import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { MapPin, Sparkles, Code, Copy, Check, Globe, Settings, Eye, Info } from 'lucide-react';

interface LocationInfo {
  country: string;
  company: string;
  address: string;
  query: string;
  coords: { lat: number; lng: number };
  zoom: number;
}

const LOCATIONS: LocationInfo[] = [
  {
    country: "United States",
    company: "GOQii Inc",
    address: "120, Wood Avenue South, Suite 300,\nIselin, NJ 08830",
    query: "120 Wood Ave S #300, Iselin, NJ 08830, USA",
    coords: { lat: 40.5615, lng: -74.3275 },
    zoom: 13
  },
  {
    country: "United Kingdom",
    company: "GOQii UK Limited",
    address: "29 West Way, Hove,\nEngland, BN3 8LS",
    query: "29 West Way, Hove BN3 8LS, UK",
    coords: { lat: 50.8354, lng: -0.1983 },
    zoom: 13
  },
  {
    country: "India",
    company: "GOQii Technologies Pvt. Ltd.",
    address: "101 Satyam Tower, Govandi East,\nMumbai 400088, India",
    query: "Satyam Tower, Govandi East, Mumbai, Maharashtra 400088, India",
    coords: { lat: 19.0435, lng: 72.9090 },
    zoom: 13
  }
];

// Elegant custom dark style for Google Maps Platform
const DARK_MAP_STYLE = [
  { elementType: "geometry", stylers: [{ color: "#0f172a" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#0f172a" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#64748b" }] },
  { featureType: "administrative", elementType: "geometry", stylers: [{ color: "#334155" }] },
  { featureType: "administrative.country", elementType: "labels.text.fill", stylers: [{ color: "#94a3b8" }] },
  { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#1e293b" }] },
  { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#94a3b8" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#0f172a" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#334155" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#1e293b" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#64748b" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#020617" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#475569" }] }
];

export const GlobalPresenceMap = () => {
  const [activeLoc, setActiveLoc] = useState<LocationInfo>(LOCATIONS[0]);
  const [activeTab, setActiveTab] = useState<'map' | 'code'>('map');
  const [copied, setCopied] = useState(false);
  const [useIframeFallback, setUseIframeFallback] = useState(true);

  // Read developer API Key from environment variables
  const API_KEY =
    process.env.GOOGLE_MAPS_PLATFORM_KEY ||
    (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
    (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
    '';

  const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY' && API_KEY.trim() !== '';

  const handleCopyCode = () => {
    navigator.clipboard.writeText(INTEGRATION_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const INTEGRATION_CODE = `import React from 'react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const GOOGLE_MAPS_PLATFORM_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';

export const GlobalLocationsMap = ({ activeLocation }) => {
  if (!GOOGLE_MAPS_PLATFORM_KEY) {
    return <MapPlaceholder />;
  }

  return (
    <APIProvider apiKey={GOOGLE_MAPS_PLATFORM_KEY} version="weekly">
      <Map
        center={activeLocation.coords}
        zoom={activeLocation.zoom}
        mapId="DEMO_MAP_ID"
        gestureHandling="cooperative"
        disableDefaultUI={false}
        internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
        style={{ width: '100%', height: '100%' }}
      >
        <AdvancedMarker position={activeLocation.coords} title={activeLocation.company}>
          <Pin 
            background="#eb9925" 
            borderColor="#fff" 
            glyphColor="#fff" 
            scale={1.1}
          />
        </AdvancedMarker>
      </Map>
    </APIProvider>
  );
};`;

  return (
    <div className="w-full">
      {/* Visual Header Grid */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-100 dark:border-white/5 pb-6">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900/60 p-1 rounded-full w-fit">
          <button
            onClick={() => setActiveTab('map')}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'map'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Interactive Map</span>
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'code'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Developer Code</span>
          </button>
        </div>

        {/* API Key Status Badge */}
        <div className="flex items-center gap-3">
          {hasValidKey ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono font-semibold text-emerald-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Google Maps SDK Active
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] font-mono font-semibold text-amber-500">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              Map API Sandbox Configuration
            </span>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 items-stretch">
        {/* Left Side: Interactive Country Selection Cards */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {LOCATIONS.map((loc, idx) => {
            const isActive = activeLoc.country === loc.country;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveLoc(loc)}
                className={`p-6 md:p-8 rounded-3xl border transition-all cursor-pointer relative overflow-hidden group ${
                  isActive 
                    ? 'bg-white dark:bg-slate-800 border-primary shadow-xl shadow-primary/10 -translate-y-1' 
                    : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:-translate-y-1 hover:border-primary/50'
                }`}
              >
                {/* Visual marker dot and accent */}
                <div className={`absolute top-0 left-0 w-1.5 h-full transition-all ${
                  isActive ? 'bg-primary' : 'bg-transparent group-hover:bg-primary/40'
                }`} />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className={`text-xl md:text-2xl font-bold mb-1 transition-colors ${isActive ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>
                      {loc.country}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 font-bold mb-3 text-xs md:text-sm tracking-wide uppercase">
                      {loc.company}
                    </p>
                  </div>
                  <div className={`p-2 rounded-xl transition-all ${
                    isActive ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-950/60 text-slate-400'
                  }`}>
                    <MapPin className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed whitespace-pre-line font-mono font-light border-t border-slate-200/50 dark:border-white/5 pt-3 mt-1">
                  {loc.address}
                </p>

                {/* Coordinates Spec */}
                <div className="flex items-center gap-4 mt-4 text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  <span>LAT: {loc.coords.lat.toFixed(4)}</span>
                  <span>LNG: {loc.coords.lng.toFixed(4)}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Side: Map Display or Code Panel */}
        <div className="lg:col-span-7 flex flex-col min-h-[450px] lg:min-h-[600px]">
          <AnimatePresence mode="wait">
            {activeTab === 'map' ? (
              <motion.div
                key="map-tab"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="flex-1 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 relative bg-slate-950 flex flex-col"
              >
                {hasValidKey ? (
                  /* Real Google Maps Integration via SDK Component */
                  <div className="w-full h-full min-h-[450px] lg:h-full relative">
                    <APIProvider apiKey={API_KEY} version="weekly">
                      <Map
                        center={activeLoc.coords}
                        zoom={activeLoc.zoom}
                        mapId="DEMO_MAP_ID"
                        gestureHandling="cooperative"
                        disableDefaultUI={false}
                        internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                        style={{ width: '100%', height: '100%' }}
                        styles={DARK_MAP_STYLE}
                      >
                        <AdvancedMarker position={activeLoc.coords} title={activeLoc.company}>
                          <Pin background="#eb9925" borderColor="#ffffff" glyphColor="#ffffff" scale={1.2} />
                        </AdvancedMarker>
                      </Map>
                    </APIProvider>
                  </div>
                ) : (
                  /* Key is missing: Display beautiful hybrid configuration workspace and fallback embedding */
                  <div className="w-full h-full flex flex-col">
                    {/* Top Alert & Code Guideline Bar */}
                    <div className="bg-slate-900 border-b border-white/5 p-4 md:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 mt-1 sm:mt-0 shrink-0">
                          <Settings className="w-4 h-4 animate-spin-slow" />
                        </div>
                        <div>
                          <h5 className="text-white text-xs font-bold uppercase tracking-wider">Configure Google Maps Platform</h5>
                          <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                            To run custom SDK code with advanced styling, add your key to AI Studio.
                          </p>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => setUseIframeFallback(!useIframeFallback)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-slate-300 hover:text-white text-[11px] font-medium border border-white/10 shrink-0 transition"
                      >
                        {useIframeFallback ? <Globe className="w-3 h-3 text-primary" /> : <Eye className="w-3 h-3" />}
                        <span>{useIframeFallback ? "Switch to Guide View" : "Load Iframe Sandbox"}</span>
                      </button>
                    </div>

                    {/* Main Fallback Screen */}
                    <div className="flex-1 relative flex flex-col justify-center min-h-[350px]">
                      {useIframeFallback ? (
                        /* Use standard premium embedding to still keep things fully working on preview */
                        <div className="absolute inset-0 w-full h-full z-10">
                          <iframe 
                            src={`https://www.google.com/maps?q=${encodeURIComponent(activeLoc.query)}&output=embed`}
                            width="100%" 
                            height="100%"
                            style={{ border: 0, filter: "invert(90%) hue-rotate(180s) contrast(100%)" }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Embedded Map Fallback"
                          />
                        </div>
                      ) : (
                        /* Display full configuration tutorial screen */
                        <div className="p-8 md:p-12 text-slate-300 flex flex-col items-center justify-center max-w-xl mx-auto text-center">
                          <div className="w-12 h-12 bg-primary/10 border border-primary/20 text-primary rounded-2xl flex items-center justify-center mb-6">
                            <Info className="w-6 h-6" />
                          </div>
                          <h4 className="text-white font-bold text-lg mb-2">Maps Platform Integration Guide</h4>
                          <p className="text-slate-400 text-xs mb-6 leading-relaxed">
                            We've pre-coded a robust React solution using <strong className="text-slate-200">@vis.gl/react-google-maps</strong>. Below are the trivial steps to activate the live SDK rendering:
                          </p>
                          
                          <div className="text-left w-full bg-slate-900 border border-white/5 rounded-2xl p-5 space-y-4 mb-6">
                            <div className="flex gap-3 text-xs">
                              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center font-bold">1</span>
                              <p className="text-slate-300">
                                Get an API key from Google Cloud Console:<br />
                                <a href="https://console.cloud.google.com/google/maps-apis/start?utm_campaign=gmp-code-assist-ais" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold inline-block mt-1">Get Google Maps API Key &rarr;</a>
                              </p>
                            </div>
                            <div className="flex gap-3 text-xs">
                              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center font-bold">2</span>
                              <p className="text-slate-300">
                                Open <strong className="text-slate-200">Settings</strong> (⚙️ gear icon, top-right panel) &rarr; <strong className="text-slate-200">Secrets</strong>
                              </p>
                            </div>
                            <div className="flex gap-3 text-xs">
                              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center font-bold">3</span>
                              <p className="text-slate-300">
                                Save secret <code className="bg-white/10 text-white px-1.5 py-0.5 rounded text-[10px] font-mono">GOOGLE_MAPS_PLATFORM_KEY</code> as the secret name
                              </p>
                            </div>
                          </div>

                          <span className="text-[10px] text-slate-500 font-mono">
                            No page reload needed - Cloud Containers handle live sync.
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              /* SDK React Integration Code Tab */
              <motion.div
                key="code-tab"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="flex-1 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-[#0d1117] text-slate-300 flex flex-col font-mono text-xs"
              >
                {/* Code Header Control Bar */}
                <div className="bg-[#161b22] border-b border-white/5 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <span className="text-[11px] text-slate-400 ml-4 font-sans font-bold uppercase tracking-wider">GlobalLocationsMap.tsx</span>
                  </div>

                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition text-[11px] font-sans"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>

                {/* Styled Codeblock area */}
                <div className="flex-1 overflow-x-auto p-6 md:p-8 bg-[#0d1117] relative leading-relaxed overflow-y-auto">
                  <pre className="text-slate-300 select-all font-mono">
                    <code>
                      <span className="text-pink-400">import</span> React <span className="text-pink-400">from</span> <span className="text-green-300">'react'</span>;<br />
                      <span className="text-pink-400">import</span> <span className="text-purple-400">{"{"}</span> APIProvider, Map, AdvancedMarker, Pin <span className="text-purple-400">{"}"}</span> <span className="text-pink-400">from</span> <span className="text-green-300">'@vis.gl/react-google-maps'</span>;<br />
                      <br />
                      <span className="text-slate-500">// Read from secured container variables</span><br />
                      <span className="text-pink-400">const</span> GOOGLE_MAPS_PLATFORM_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || <span className="text-green-300">''</span>;<br />
                      <br />
                      <span className="text-pink-400">export const</span> <span className="text-blue-400">GlobalLocationsMap</span> = <span className="text-purple-400">{"({ activeLocation }) => {"}</span><br />
                      &nbsp;&nbsp;<span className="text-pink-400">if</span> <span className="text-purple-400">(!</span>GOOGLE_MAPS_PLATFORM_KEY<span className="text-purple-400">) {"{"}</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">return</span> <span className="text-green-300">&lt;MapPlaceholder /&gt;</span>;<br />
                      &nbsp;&nbsp;<span className="text-purple-400">{"}"}</span><br />
                      <br />
                      &nbsp;&nbsp;<span className="text-pink-400">return</span> <span className="text-purple-400">{"("}</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">&lt;APIProvider</span> apiKey<span className="text-slate-400">=</span><span className="text-purple-400">{"{"}</span>GOOGLE_MAPS_PLATFORM_KEY<span className="text-purple-400">{"}"}</span> version<span className="text-slate-400">=</span><span className="text-green-300">"weekly"</span><span className="text-green-300">&gt;</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">&lt;Map</span> center<span className="text-slate-400">=</span><span className="text-purple-400">{"{"}</span>activeLocation.coords<span className="text-purple-400">{"}"}</span> zoom<span className="text-slate-400">=</span><span className="text-purple-400">{"{"}</span>activeLocation.zoom<span className="text-purple-400">{"}"}</span> ...<span className="text-green-300">&gt;</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">&lt;AdvancedMarker</span> position<span className="text-slate-400">=</span><span className="text-purple-400">{"{"}</span>activeLocation.coords<span className="text-purple-400">{"}"}</span><span className="text-green-300">&gt;</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">&lt;Pin</span> background<span className="text-slate-400">=</span><span className="text-green-300">"#eb9925"</span> glyphColor<span className="text-slate-400">=</span><span className="text-green-300">"#fff"</span> <span className="text-green-300">/&gt;</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">&lt;/AdvancedMarker&gt;</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">&lt;/Map&gt;</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">&lt;/APIProvider&gt;</span><br />
                      &nbsp;&nbsp;<span className="text-purple-400">)</span>;<br />
                      <span className="text-purple-400">{"};"}</span>
                    </code>
                  </pre>
                </div>

                {/* Explanation specs */}
                <div className="bg-[#161b22] border-t border-white/5 p-4 text-[10px] text-slate-400 font-sans leading-relaxed">
                  Utilizes <strong>@vis.gl/react-google-maps</strong> wrapper around standard <code>AdvancedMarkerElement</code> of Maps Platform, dynamically utilizing native web components with clean class styling.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
