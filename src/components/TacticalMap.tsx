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
      case "indigo":
        return {
          base: "indigo",
          border: "border-indigo-100",
          shadow: "shadow-indigo-100",
          dot: "bg-indigo-600",
          ring: "bg-indigo-500/30",
          path: "stroke-indigo-400"
        };
      case "amber":
        return {
          base: "amber",
          border: "border-amber-100",
          shadow: "shadow-amber-100",
          dot: "bg-amber-600",
          ring: "bg-amber-500/30",
          path: "stroke-amber-400"
        };
      case "sky":
        return {
          base: "sky",
          border: "border-sky-100",
          shadow: "shadow-sky-100",
          dot: "bg-sky-600",
          ring: "bg-sky-500/30",
          path: "stroke-sky-400"
        };
      default:
        return {
          base: "gray",
          border: "border-gray-100",
          shadow: "shadow-gray-100",
          dot: "bg-gray-600",
          ring: "bg-gray-500/30",
          path: "stroke-gray-400"
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
        <div className="lg:col-span-2 relative h-80 sm:h-96 rounded-xl overflow-hidden border border-slate-150 map-grid-pattern bg-slate-50">
          
          {/* Compass Rose Indicator Grid marker */}
          <div className="absolute top-4 right-4 text-[10px] font-mono text-slate-400 select-none flex flex-col items-end">
            <span>CHRONO-MAPPING SYS</span>
            <span>N 33&deg; 56&apos; E 51&deg; 22&apos;</span>
          </div>

          <div className="absolute bottom-4 left-4 text-[10px] font-mono text-slate-400 select-none flex items-center space-x-1">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 pointer-events-none" />
            <span>Click any node on the map of campaigns</span>
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
                  strokeWidth="2.5"
                  strokeDasharray="4 6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
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
                <div className="relative flex items-center justify-center">
                  
                  {/* Outer pulsating radial ring when active */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeMapRing"
                      className={`absolute w-10 h-10 rounded-full ${colors.ring}`}
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  )}

                  {/* Node inner indicator */}
                  <div className={`w-5 h-5 rounded-full border-2 border-white flex items-center justify-center shadow transition-all duration-300 ${
                    isSelected 
                      ? `${colors.dot} scale-125` 
                      : "bg-slate-500 group-hover:bg-indigo-500 group-hover:scale-110"
                  }`}>
                    <span className="text-[9px] text-white font-mono font-bold">{index + 1}</span>
                  </div>

                  {/* Tiny floating geographic title tag */}
                  <div className="absolute top-6 whitespace-nowrap bg-slate-900/90 text-white text-[9px] uppercase font-mono tracking-wider py-0.5 px-1.5 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {point.name}
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
