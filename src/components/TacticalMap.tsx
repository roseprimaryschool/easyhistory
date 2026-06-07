import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapData, MapPoint } from "../types";
import { MapPin, Compass, Play, ArrowRight, ArrowLeft, Info, HelpCircle } from "lucide-react";

interface TacticalMapProps {
  mapData: MapData;
  accentColor: string;
}

export default function TacticalMap({ mapData, accentColor }: TacticalMapProps) {
  const [selectedPointId, setSelectedPointId] = useState<number>(mapData.points[0]?.id || 1);

  const activePoint = mapData.points.find((p) => p.id === selectedPointId) || mapData.points[0];

  const handleNext = () => {
    const currentIndex = mapData.points.findIndex((p) => p.id === selectedPointId);
    if (currentIndex < mapData.points.length - 1) {
      setSelectedPointId(mapData.points[currentIndex + 1].id);
    }
  };

  const handlePrev = () => {
    const currentIndex = mapData.points.findIndex((p) => p.id === selectedPointId);
    if (currentIndex > 0) {
      setSelectedPointId(mapData.points[currentIndex - 1].id);
    }
  };

  const getThemeColors = (color: string) => {
    switch (color) {
      case "indigo": // Alexander the Great
        return {
          base: "indigo",
          border: "border-amber-300/60",
          shadow: "shadow-amber-100/30",
          dot: "bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600",
          textColor: "text-amber-950",
          ring: "bg-amber-400/20 border border-amber-300",
          path: "stroke-amber-500/80",
          strokeWidth: "3.5",
          dashArray: "1, 6", // Beautiful dotted trail
          activeDotClass: "ring-4 ring-amber-400/50 shadow-lg shadow-amber-300/50",
          labelBg: "bg-amber-50 border border-amber-200/80 text-amber-900 shadow-sm"
        };
      case "amber": // Persian Empire
        return {
          base: "amber",
          border: "border-amber-900/20",
          shadow: "shadow-amber-850/20",
          dot: "bg-gradient-to-b from-orange-500 via-amber-700 to-amber-800",
          textColor: "text-amber-50",
          ring: "bg-amber-500/30 border border-amber-400/50",
          path: "stroke-orange-700/80",
          strokeWidth: "3",
          dashArray: "4, 6", // Caravan tracks
          activeDotClass: "ring-4 ring-orange-500/50 shadow-lg shadow-orange-700/50",
          labelBg: "bg-orange-50 border border-orange-200/80 text-orange-950 shadow-sm"
        };
      case "sky": // Cold War
        return {
          base: "sky",
          border: "border-emerald-500/50",
          shadow: "shadow-emerald-950/20",
          dot: "bg-emerald-500 animate-pulse",
          textColor: "text-slate-950",
          ring: "bg-emerald-400/20 border border-emerald-500/60",
          path: "stroke-emerald-400",
          strokeWidth: "2.5",
          dashArray: "3, 3", // Glowing radar track
          activeDotClass: "ring-4 ring-emerald-400/60 shadow-lg shadow-emerald-500/50",
          labelBg: "bg-slate-900/90 border border-slate-700 text-slate-100 shadow-md"
        };
      default:
        return {
          base: "gray",
          border: "border-gray-100",
          shadow: "shadow-gray-100",
          dot: "bg-gray-600",
          textColor: "text-white",
          ring: "bg-gray-500/30 border border-gray-400",
          path: "stroke-gray-400",
          strokeWidth: "2",
          dashArray: "4, 4",
          activeDotClass: "ring-4 ring-slate-400",
          labelBg: "bg-slate-900 border border-slate-800 text-white"
        };
    }
  };

  const colors = getThemeColors(accentColor);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm text-left">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center space-x-2">
            <Compass className={`w-5 h-5 text-${colors.base}-600 animate-spin`} style={{ animationDuration: '20s' }} />
            <h3 className="font-display font-extrabold text-xl text-slate-900">{mapData.title}</h3>
          </div>
          <p className="font-sans text-slate-500 text-xs mt-1">{mapData.description}</p>
        </div>

        {/* Dynamic step tracker */}
        <div className="flex items-center space-x-1.5 font-mono text-xs text-slate-500 bg-slate-100/80 px-2.5 py-1 rounded">
          <span>Campaign Node:</span>
          <span className={`font-semibold text-${colors.base}-600`}>
            {mapData.points.findIndex((p) => p.id === selectedPointId) + 1}
          </span>
          <span>/</span>
          <span>{mapData.points.length}</span>
        </div>
      </div>

      {/* Grid container with Map Point representation */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Interactive Tactical Canvas */}
        <div className="lg:col-span-2 relative w-full aspect-[16/9] min-h-[290px] rounded-xl overflow-hidden border border-slate-200 bg-amber-50/20 shadow-md group/canvas">
          {mapData.mapImageUrl ? (
            <img 
              src={mapData.mapImageUrl} 
              alt={mapData.title}
              className="absolute inset-0 w-full h-full object-fill transition-transform duration-[12s] ease-out group-hover/canvas:scale-[1.015] pointer-events-none"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="absolute inset-0 map-grid-pattern bg-slate-50" />
          )}
          
          {/* Aesthetic vignette vignette overlay for vintage maps / espionage screens */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-900/5 to-slate-900/20 pointer-events-none z-10" />

          {/* Compass Rose Indicator Grid marker */}
          <div className="absolute top-4 right-4 text-[9px] font-mono text-slate-900/80 bg-white/95 backdrop-blur-xs py-1 px-2 rounded-md border border-slate-200/60 shadow-sm select-none flex flex-col items-end z-10">
            <span className="font-bold tracking-wider">CHRONO-MAPPING SYS</span>
            <span className="text-slate-500">N 33&deg; 56&apos; E 51&deg; 22&apos;</span>
          </div>

          <div className="absolute bottom-4 left-4 text-[9px] font-mono text-slate-900/80 bg-white/95 backdrop-blur-xs py-1 px-2 rounded-md border border-slate-200/60 shadow-sm select-none flex items-center space-x-1 z-10">
            <div className={`w-1.5 h-1.5 rounded-full ${colors.dot} pointer-events-none`} />
            <span className="font-medium text-[9px]">Tap markers to track history</span>
          </div>

          {/* SVG Connection Paths Vector Overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {/* Draw pathways sequentially */}
            {mapData.points.map((point, index) => {
              if (index === mapData.points.length - 1) return null;
              const nextPoint = mapData.points[index + 1];
              return (
                <motion.line
                  key={`path-${point.id}`}
                  x1={`${point.x}%`}
                  y1={`${point.y}%`}
                  x2={`${nextPoint.x}%`}
                  y2={`${nextPoint.y}%`}
                  className={`${colors.path}`}
                  strokeWidth={colors.strokeWidth}
                  strokeDasharray={colors.dashArray}
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: index * 0.15 }}
                />
              );
            })}
          </svg>

          {/* Interactive Node Point Vectors representing military locations */}
          {mapData.points.map((point, index) => {
            const isSelected = point.id === selectedPointId;
            return (
              <button
                key={point.id}
                onClick={() => setSelectedPointId(point.id)}
                className="absolute z-20 focus:outline-none cursor-pointer group"
                style={{ left: `${point.x}%`, top: `${point.y}%`, transform: 'translate(-50%, -50%)' }}
                id={`map-node-${point.id}`}
              >
                <div className="relative flex flex-col items-center justify-center">
                  
                  {/* Permanently Visible Name Tag Label */}
                  <div className={`absolute -top-7 px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-mono font-bold tracking-tight whitespace-nowrap transition-all duration-300 pointer-events-none leading-none ${colors.labelBg} ${
                    isSelected ? "scale-105 ring-1 ring-slate-900/20" : "opacity-80 group-hover:opacity-100 group-hover:scale-105"
                  }`}>
                    {point.name}
                  </div>

                  {/* Outer pulsating radial ring when active */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeMapRing"
                      className={`absolute w-8 h-8 rounded-full ${colors.ring}`}
                      animate={{ scale: [1, 1.35, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  )}

                  {/* Node inner indicator */}
                  <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-white flex items-center justify-center shadow transition-all duration-300 ${
                    isSelected 
                      ? `${colors.dot} ${colors.activeDotClass}` 
                      : "bg-slate-700/90 group-hover:bg-slate-900 group-hover:scale-110"
                  }`}>
                    <span className="text-[8px] sm:text-[9px] text-white font-mono font-bold leading-none">{index + 1}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Sidebar / Drawer displaying active point info */}
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePoint.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
              id="active-node-details"
            >
              {/* Year Badge & Title */}
              <div className="flex items-center justify-between">
                <span className={`inline-block text-xs font-mono font-bold text-white px-2.5 py-0.5 rounded-full ${colors.dot}`}>
                  {activePoint.year || "300 BCE"}
                </span>
                <span className="text-[10px] font-mono text-slate-400">Node Ref {activePoint.id}</span>
              </div>

              <div>
                <h4 className="font-display font-extrabold text-lg text-slate-950 leading-tight">
                  {activePoint.name}
                </h4>
                <p className={`font-mono text-[10px] text-${colors.base}-600 font-semibold uppercase tracking-wider mt-1`}>
                  {activePoint.title}
                </p>
              </div>

              <p className="font-sans text-xs text-slate-600 leading-relaxed bg-white border border-slate-100 p-3.5 rounded-lg shadow-sm">
                {activePoint.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigational Controls */}
          <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={mapData.points.findIndex((p) => p.id === selectedPointId) === 0}
              className="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-gray-900 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gray-500 transition duration-200 flex items-center justify-center cursor-pointer"
              id="map-prev-btn"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <span className="text-[11px] font-mono text-slate-500 font-medium select-none">
              Press buttons to march
            </span>

            <button
              onClick={handleNext}
              disabled={mapData.points.findIndex((p) => p.id === selectedPointId) === mapData.points.length - 1}
              className="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-gray-900 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gray-500 transition duration-200 flex items-center justify-center cursor-pointer"
              id="map-next-btn"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
