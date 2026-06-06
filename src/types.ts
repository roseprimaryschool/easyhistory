/**
 * Types representing history lesson topics and their visual components
 */

export interface MapPoint {
  id: number;
  name: string;
  x: number; // percentage width 0-100
  y: number; // percentage height 0-100
  year?: string;
  title: string;
  description: string;
}

export interface MapConnection {
  fromId: number;
  toId: number;
}

export interface MapData {
  title: string;
  description: string;
  points: MapPoint[];
  connections: MapConnection[];
  regions?: { name: string; path: string; color: string }[]; // visual reference
}

export interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  category: string; // e.g., "Conquest", "Plague", "Treaty"
}

export interface CauseEffectNode {
  id: number;
  cause: string;
  causeDesc: string;
  trigger: string; // The turning point / action
  effect: string;
  effectDesc: string;
}

export interface KeyPerson {
  name: string;
  role: string;
  bio: string;
  emoji: string;
  bornDied: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface HistoryTopic {
  id: string;
  title: string;
  subtitle: string;
  era: string;
  duration: string;
  summary: string;
  accentColor: string; // Tailwind class base e.g., "amber" or "sky"
  bgGradient: string;  // e.g. "from-amber-50 to-amber-100/50" for light mode
  badgeBg: string;
  icon: string;        // Name of Lucide icon
  map: MapData;
  timeline: TimelineEvent[];
  causeEffect: CauseEffectNode[];
  people: KeyPerson[];
  quiz: QuizQuestion[];
}
