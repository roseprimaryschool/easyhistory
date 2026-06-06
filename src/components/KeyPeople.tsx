import React from "react";
import { motion } from "motion/react";
import { KeyPerson } from "../types";
import { Users, Info, Calendar } from "lucide-react";

interface KeyPeopleProps {
  people: KeyPerson[];
  accentColor: string;
}

export default function KeyPeople({ people, accentColor }: KeyPeopleProps) {
  const getAccentColors = (color: string) => {
    switch (color) {
      case "indigo":
        return {
          iconBg: "bg-indigo-50 text-indigo-700",
          itemBg: "bg-indigo-50/20 hover:border-indigo-200"
        };
      case "amber":
        return {
          iconBg: "bg-amber-50 text-amber-700",
          itemBg: "bg-amber-50/20 hover:border-amber-200"
        };
      case "sky":
        return {
          iconBg: "bg-sky-50 text-sky-700",
          itemBg: "bg-sky-50/20 hover:border-sky-200"
        };
      default:
        return {
          iconBg: "bg-slate-50 text-slate-700",
          itemBg: "bg-slate-50/20 hover:border-slate-200"
        };
    }
  };

  const style = getAccentColors(accentColor);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm text-left">
      
      {/* Top Section Header */}
      <div className="flex items-center space-x-2.5 mb-8">
        <div className={`p-1.5 rounded bg-indigo-50 text-indigo-600`}>
          <Users className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-display font-extrabold text-xl text-slate-900">Key Historical Directors</h3>
          <p className="font-sans text-xs text-slate-500">The crucial actors whose human ambitions, failures, and deeds directed events.</p>
        </div>
      </div>

      {/* People Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="key-people-grid">
        {people.map((person, index) => {
          return (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`p-5 rounded-2xl border border-slate-100 bg-white transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between ${style.itemBg}`}
              id={`person-card-${index}`}
            >
              <div>
                {/* Visual Header featuring portrait emoji */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl shadow-sm text-center">
                    {person.emoji}
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 flex items-center gap-1 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full select-none">
                    <Calendar className="w-3 h-3" />
                    <span>{person.bornDied}</span>
                  </span>
                </div>

                {/* Name & Role Title decoration */}
                <div>
                  <h4 className="font-display font-extrabold text-base text-slate-950 leading-tight">
                    {person.name}
                  </h4>
                  <span className={`inline-block font-mono text-[10px] font-semibold text-${accentColor}-600 tracking-wider uppercase mt-1`}>
                    {person.role}
                  </span>
                </div>

                {/* Brief bio summary explanation */}
                <p className="font-sans text-xs text-slate-600 leading-relaxed mt-4">
                  {person.bio}
                </p>
              </div>

              {/* Cognitive retention reference tag */}
              <div className="border-t border-slate-50 pt-4 mt-6 flex items-center space-x-1.5 text-slate-400 text-[10px]">
                <Info className="w-3.5 h-3.5 text-slate-350" />
                <span className="font-sans">Role Impact Rate: Leading Figure</span>
              </div>

            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
