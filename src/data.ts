import { HistoryTopic } from "./types";

import alexanderCampaignMap from "./assets/images/alexander_campaign_map_1780828068834.png";
import persianEmpireMap from "./assets/images/persian_empire_map_1780828085143.png";
import coldWarMap from "./assets/images/cold_war_map_1780828100939.png";
import alexanderPainting from "./assets/images/alexander_painting_1780828134049.png";
import persianPalacePainting from "./assets/images/persian_palace_painting_1780828154116.png";
import coldWarIllustration from "./assets/images/cold_war_illustration_1780828169805.png";


export const HISTORY_TOPICS: HistoryTopic[] = [
  {
    id: "alexander-the-great",
    title: "Alexander the Great",
    subtitle: "The Lightning Empire of Macedonia",
    era: "356 – 323 BCE",
    duration: "5 min read",
    summary: "How did a 20-year-old prince from Macedonia conquer the entire known Greek and Persian world in just over a decade? Explore Alexander's lightning-fast campaigns, bold military tactics, and how his conquests spread Greek culture ('Hellenism') from India to Egypt.",
    accentColor: "indigo",
    bgGradient: "from-indigo-50 to-indigo-100/50",
    badgeBg: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
    icon: "Sword",
    illustrationUrl: alexanderPainting,
    map: {
      title: "The March of Conquest",
      description: "Follow Alexander's epic campaign route across 17,000 miles, completely reshaping the borders of the ancient world.",
      mapImageUrl: alexanderCampaignMap,
      points: [
        {
          id: 1,
          name: "Macedonia",
          x: 10,
          y: 30,
          year: "336 BCE",
          title: "The Launchpad",
          description: "Alexander is declared King after his father's assassination. He quickly subdues city-states and prepares to cross into Asia."
        },
        {
          id: 2,
          name: "Gordium",
          x: 26,
          y: 34,
          year: "333 BCE",
          title: "Cutting the Knot",
          description: "Legend holds whoever untied the complex knot of Gordium would rule Asia. Unable to undo it, Alexander sliced it cleanly with his sword."
        },
        {
          id: 3,
          name: "Alexandria, Egypt",
          x: 24,
          y: 64,
          year: "331 BCE",
          title: "Pharaoh & Founder",
          description: "Welcomed as a liberator from Persian rule, Alexander is crowned Pharaoh and founds Alexandria, the future vault of global knowledge."
        },
        {
          id: 4,
          name: "Gaugamela",
          x: 46,
          y: 36,
          year: "331 BCE",
          title: "The Ultimate Clash",
          description: "Outnumbered 5-to-1, Alexander executes a brilliant diagonal charge, shattering the Persian royal guard and forcing King Darius III to flee."
        },
        {
          id: 5,
          name: "Persepolis",
          x: 62,
          y: 55,
          year: "330 BCE",
          title: "Burning of the Palace",
          description: "The ceremonial capital of Persia is captured. In a wild night of celebrating (or calculated revenge), the beautiful palace of Xerxes goes up in flames."
        },
        {
          id: 6,
          name: "Hydaspes River",
          x: 86,
          y: 46,
          year: "326 BCE",
          title: "Edge of the Map",
          description: "Deep in modern Pakistan, Alexander defeats King Porus' war elephants but faces monsoon rains. Exhausted and homesick, his armies stage a peaceful mutiny, demanding to go home."
        }
      ],
      connections: [
        { fromId: 1, toId: 2 },
        { fromId: 2, toId: 3 },
        { fromId: 3, toId: 4 },
        { fromId: 4, toId: 5 },
        { fromId: 5, toId: 6 }
      ]
    },
    timeline: [
      {
        id: 101,
        year: "356 BCE",
        title: "Birth of a Legend",
        description: "Born in Pella, Macedonia. His mother, Olympias, tells him he is a descendant of the legendary Greek hero Achilles, while his tutor, Aristotle, sparks his love for science, botany, and literature.",
        category: "Early Life"
      },
      {
        id: 102,
        year: "336 BCE",
        title: "Assassination & Ascension",
        description: "His father, King Philip II, is assassinated at a wedding festival. Alexander, aged just 20, is immediately crowned King of Macedonia, swiftly subduing military opposition at home.",
        category: "Ascension"
      },
      {
        id: 103,
        year: "334 BCE",
        title: "Crossing the Hellespont",
        description: "Alexander leads his combined Greek and Macedonian army into Asia Minor, starting his massive war campaign against the vast Persian Empire under King Darius III.",
        category: "Conquest"
      },
      {
        id: 104,
        year: "331 BCE",
        title: "Battle of Gaugamela",
        description: "The clash that changed history. Under the dusty skies of Iraq, Alexander defeats Darius' larger army, claiming the title of 'King of Asia' and taking over the wealthy capital treasuries.",
        category: "Conquest"
      },
      {
        id: 105,
        year: "326 BCE",
        title: "High Tide at the Hydaspes",
        description: "Entering India, he wins a grueling battle against King Porus. However, his loyal troops refuse to cross the Ganges, forcing a dramatic but peaceful halt to further Eastern expansion.",
        category: "Halt"
      },
      {
        id: 106,
        year: "323 BCE",
        title: "The Mysterious End",
        description: "While planning new sea trade routes in Babylon, Alexander falls gravely ill with a harsh fever and dies at only 32 years old, legendarily leaving his crown to 'the strongest' general.",
        category: "Tragic End"
      }
    ],
    causeEffect: [
      {
        id: 301,
        cause: "Assassination of King Philip II",
        causeDesc: "Macedonia's strong ruler is killed by his bodyguard, sparking fear of chaotic civil war and leaving Greece ripe for widespread rebellions.",
        trigger: "20-year-old Alexander moves instantly with brutal speed to secure the crown and crush rebels.",
        effect: "Greece is quickly pacified and unified",
        effectDesc: "With his home front consolidated and safe, Alexander is free to pursue his father's grand dream: invoking revenge to invade the Persian Empire."
      },
      {
        id: 302,
        cause: "Alexander's Tactical Genius & Phalanx Formation",
        causeDesc: "He masterfully coordinated the Macedonian 'Sarissa' phalanx (18ft pikes) with sudden, devastating companion cavalry attacks.",
        trigger: "At Battle of Gaugamela, he executes a bold, diagonal wedge charge aiming straight for Darius' head.",
        effect: "Collapsing Persian leadership",
        effectDesc: "Darius flees in terror, the Persian lines dissolve in panic, and Alexander is declared master of Mesopotamia virtually overnight."
      },
      {
        id: 303,
        cause: "10 Years & 17,000 Miles of Continuous Warfare",
        causeDesc: "The soldiers faced unknown diseases, fierce monsoons, and devastating armor-shredding rain forest battles.",
        trigger: "Hearing of massive Indian kingdoms ahead, the army stages an emotional, absolute refusal to advance of the Hyphasis River.",
        effect: "Strategic retreat of the campaign",
        effectDesc: "Alexander retreats south along the Indus, resulting in the partition and ultimate breakdown of his grand empire among his rival generals upon his early death."
      }
    ],
    people: [
      {
        name: "Aristotle",
        role: "The Philosopher Mentor",
        bio: "One of history's greatest minds, he tutored teenagers Alexander and Hephaestion, instilling a deep love for medicine, exploration, philosophy, and books.",
        emoji: "🎓",
        bornDied: "384 – 322 BCE"
      },
      {
        name: "Darius III",
        role: "The Last High King",
        bio: "The proud but tragic emperor of the Persian Empire who twice retreated in his chariot from Alexander's direct charges, only to be murdered by his own desperate satraps.",
        emoji: "👑",
        bornDied: "380 – 330 BCE"
      },
      {
        name: "Hephaestion",
        role: "The Soulmate General",
        bio: "Alexander's closest general and intimate childhood friend who shared his dreams of a mixed Greek-Persian culture. His death shattered Alexander, who died only months later.",
        emoji: "🛡️",
        bornDied: "356 – 324 BCE"
      }
    ],
    quiz: [
      {
        question: "How old was Alexander when his father died and he was crowned King?",
        options: ["16 years old", "20 years old", "25 years old", "30 years old"],
        correctIndex: 1,
        explanation: "At just 20, Alexander took the reins of power, immediately executing rivals at home and confirming military alliances across Greece."
      },
      {
        question: "What did Alexander do to solve the riddle of the legendary Gordian Knot?",
        options: [
          "He spent three days carefully untangling it",
          "He sliced it in half with his sword",
          "He burned the chariot it was tied to",
          "He threw it into the sea"
        ],
        correctIndex: 1,
        explanation: "Faced with an impossible tangle, Alexander took a sword and sheared through the knot in seconds, teaching a lesson in finding decisive shortcuts."
      },
      {
        question: "Which philosophers' works did Alexander keep under his pillow on campaigns?",
        options: [
          "Plato's Republic",
          "Aristotle's Physics",
          "Homer's Iliad (edited by Aristotle)",
          "Socrates' Dialogues"
        ],
        correctIndex: 2,
        explanation: "Alexander slept with Homer's Iliad and a dagger. He viewed himself as a modern-day Achilles, seeking eternal battle fame."
      }
    ]
  },
  {
    id: "persian-empire",
    title: "The Persian Empire",
    subtitle: "The Ancient Superpower of Tolerance and Roads",
    era: "550 – 330 BCE",
    duration: "5 min read",
    summary: "Before Rome or Greece peaked, there was Persia: the first true global superpower. Spanning three continents, the Empire ruled over 44% of the world's population. They did it not just with iron spears, but through incredible infrastructure like the Royal Road and a groundbreaking strategy of religious and cultural freedom.",
    accentColor: "amber",
    bgGradient: "from-amber-50 to-amber-100/50",
    badgeBg: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-305",
    icon: "Crown",
    illustrationUrl: persianPalacePainting,
    map: {
      title: "The Imperial Network",
      description: "Explore the vast satrapy administration and the incredible, rapid Royal Road connecting Susa to the Mediterranean.",
      mapImageUrl: persianEmpireMap,
      points: [
        {
          id: 1,
          name: "Sardis",
          x: 14,
          y: 34,
          year: "500 BCE",
          title: "Anatolia Frontier",
          description: "The western end of the Royal Road in Anatolia. This active city linked Persia directly to Mediterranean trade and Greek markets."
        },
        {
          id: 2,
          name: "Babylon",
          x: 42,
          y: 46,
          year: "539 BCE",
          title: "The Cyrus Cylinder",
          description: "Cyrus the Great marches in peacefully. Instead of pillaging, he frees exiled groups (including the Jews) and decrees freedom of worship."
        },
        {
          id: 3,
          name: "Susa",
          x: 56,
          y: 44,
          year: "550 BCE",
          title: "The Administrative Core",
          description: "Susa served as the primary administrative capital of Persia, housing the great imperial treasuries."
        },
        {
          id: 4,
          name: "Persepolis",
          x: 74,
          y: 60,
          year: "518 BCE",
          title: "Rituals and Reliefs",
          description: "Built by Darius the Great, this ceremonial capital hosted spring festivals. Beautiful wall carvings showed emissaries from 28 nations."
        }
      ],
      connections: [
        { fromId: 1, toId: 2 },
        { fromId: 2, toId: 3 },
        { fromId: 3, toId: 4 }
      ]
    },
    timeline: [
      {
        id: 201,
        year: "550 BCE",
        title: "Cyrus the Great Rebels",
        description: "Cyrus, leader of the small Persian tribe, rebels against the mighty Median King. He unites the Iranian tribes, founding the dynasty.",
        category: "Founding"
      },
      {
        id: 202,
        year: "539 BCE",
        title: "Babylon Opens Its Gates",
        description: "Persia conquers the neo-Babylonian empire. Cyrus publishes his clay decree, permitting local people to rebuild their temples and speak their ancestral tongues.",
        category: "Conquest"
      },
      {
        id: 203,
        year: "522 BCE",
        title: "Darius the Organiser",
        description: "Darius I takes power. He splits the vast state into 20 administrative provinces ('Satrapies') and introduces a standard silver and gold currency, the Daric.",
        category: "Administration"
      },
      {
        id: 204,
        year: "515 BCE",
        title: "The Royal Road Built",
        description: "A 1,600-mile highway is finalized. Connecting Sardis to Susa, royal runners could deliver messages across the empire in an astonishing 7 days.",
        category: "Engineering"
      },
      {
        id: 205,
        year: "490 BCE",
        title: "The Battle of Marathon",
        description: "In retaliation for Athens helping Greek rebels, Darius invades. His army faces a surprise crushing setback against Athenian hoplites on the sands of Greece.",
        category: "Conflict"
      },
      {
        id: 206,
        year: "480 BCE",
        title: "Xerxes' Giant Expedition",
        description: "King Xerxes I marches a massive force across an engineering bridge made of ships. After defeating Sparta at Thermopylae, his naval armada is sunk at the Battle of Salamis.",
        category: "Conflict"
      }
    ],
    causeEffect: [
      {
        id: 401,
        cause: "Conquering Nations of Diverse Faiths",
        causeDesc: "Most massive empires before Persia ruled by terror, looting local temples and deporting native populaces, causing rapid bloody revolutions.",
        trigger: "Cyrus issues decrees on tolerance, allowing local customs and letting Jews return to Jerusalem.",
        effect: "Loyalty and stable trade",
        effectDesc: "Conquered societies welcomed Persian rule as relatively light, avoiding massive continuous civilian uprisings and unlocking global commerce."
      },
      {
        id: 402,
        cause: "Slow Communication Speeds",
        causeDesc: "In ancient times, a local governor ('Satrap') could easily build a rogue army and stage a rebellion before the King in Susa even knew what happened.",
        trigger: "Darius I builds the Royal Road with horse post-stations every 15 miles, creating a swift ancient postal service.",
        effect: "Rapid centralized intelligence",
        effectDesc: "Susa finds out about trouble in just 7 days, allowing the Emperor to dispatch forces or enforce taxes before rebellions gain major steam."
      },
      {
        id: 403,
        cause: "Over-extending Into The Greek Coast",
        causeDesc: "The Persian forces were suited for open plains rather than the narrow rocky passes and tight ocean bays of Mainland Greece.",
        trigger: "Darius and Xerxes commit massive wealth and manpower to grand invasions of Greece in revenge for Greek interference.",
        effect: "Straining of prestige and treasure",
        effectDesc: "Crushing defeats at Salamis and Plataea break the myth of Persian invincibility, turning Persia onto a defensive footing until Alexander's invasion."
      }
    ],
    people: [
      {
        name: "Cyrus the Great",
        role: "The Benevolent Emperor",
        bio: "Lauded inside the Hebrew Bible as Persia's Messiah, he established an empire based on mercy, setting free slaves and restoring local gods.",
        emoji: "👑",
        bornDied: "600 – 530 BCE"
      },
      {
        name: "Darius I (The Great)",
        role: "The Master Administrator",
        bio: "Originally a royal spearholder, he took the throne, created taxation coinage, built magnificent cities, and mapped out roads.",
        emoji: "📐",
        bornDied: "550 – 486 BCE"
      },
      {
        name: "Esther",
        role: "The Courageous Queen",
        bio: "The Jewish wife of the Persian King Xerxes (Ahasuerus), whose cunning and courage saved her people from an orchestrating royal massacre.",
        emoji: "👩",
        bornDied: "Circa 480 BCE"
      }
    ],
    quiz: [
      {
        question: "How did Cyrus the Great differ from previous Middle Eastern conquerors?",
        options: [
          "He burned all written text",
          "He allowed conquered populations to retain their religions and cultures",
          "He banned any metal tools",
          "He forced everyone to live in a single giant city"
        ],
        correctIndex: 1,
        explanation: "By applying tolerance, Cyrus ensured local people and elites felt appreciated, making them far less prone to rebel."
      },
      {
        question: "How quickly could a message cross Persia's Royal Road?",
        options: ["7 days", "1 month", "3 months", "Another decade"],
        correctIndex: 0,
        explanation: "Thanks to fresh horses stationed every 15 miles, royal messengers could ride continuously, completing a 3-month journey in 7 days!"
      },
      {
        question: "What unit of uniform currency was popularized by Darius I across his empire?",
        options: ["The Shekel", "The Dollar", "The Daric", "The Denarius"],
        correctIndex: 2,
        explanation: "The Gold Daric was minted with high purity, standardizing tax collection and trade from modern Bulgaria to Pakistan."
      }
    ]
  },
  {
    id: "cold-war",
    title: "The Cold War",
    subtitle: "The Global Ideological Chess Match",
    era: "1947 – 1991",
    duration: "5 min read",
    summary: "For over 40 years, the United States and the Soviet Union locked horns in an ideological twilight struggle. Though direct military battle was strictly avoided due to the chilling reality of nuclear destruction, they fought through spying, massive space races, bitter proxy wars, and high-stakes cultural marketing.",
    accentColor: "sky",
    bgGradient: "from-sky-50 to-sky-100/50",
    badgeBg: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
    icon: "Globe",
    illustrationUrl: coldWarIllustration,
    map: {
      title: "The Cold War Fault Lines",
      description: "Visualizing the hotspots of proxy operations, split capital standoffs, and revolutionary borders.",
      mapImageUrl: coldWarMap,
      points: [
        {
          id: 1,
          name: "Washington D.C.",
          x: 12,
          y: 38,
          year: "1947",
          title: "The Containment Strategy",
          description: "US capital coordinates the Marshall Plan and NATO alliances, monitoring nuclear arsenals and drafting global containment lines."
        },
        {
          id: 2,
          name: "Havana, Cuba",
          x: 15,
          y: 55,
          year: "1962",
          title: "Brink of Nuclear War",
          description: "US spy planes spot Soviet nuclear missile silos being assembled 90 miles from Florida, leading to a terrifying 13-day naval blockade."
        },
        {
          id: 3,
          name: "Checkpoint Charlie, Berlin",
          x: 48,
          y: 35,
          year: "1961",
          title: "Divided Capital Stand-off",
          description: "American and Soviet tanks stand muzzle-to-muzzle in central Berlin as the German capital is split by a concrete security barrier."
        },
        {
          id: 4,
          name: "Korean Peninsula",
          x: 86,
          y: 44,
          year: "1950",
          title: "The First Proxy War",
          description: "High-intensity battles along the 38th Parallel solidify Truman's security posture, leaving Korea partitioned to this day."
        }
      ],
      connections: [
        { fromId: 1, toId: 2 },
        { fromId: 2, toId: 3 },
        { fromId: 3, toId: 4 }
      ]
    },
    timeline: [
      {
        id: 301,
        year: "1945",
        title: "Yalta & Potsdam Division",
        description: "Riding high on WW2 victory, Allied leaders meet in Europe, dividing war-torn Germany into four Allied zones of administration, splitting the continent.",
        category: "Post-War"
      },
      {
        id: 302,
        year: "1947",
        title: "The Truman Doctrine",
        description: "US President Harry Truman announces strategic financial and military support to countries opposing communist expansion, setting active CONTAINMENT policies.",
        category: "Doctrine"
      },
      {
        id: 303,
        year: "1957",
        title: "Sputnik Shockwaves",
        description: "The Soviet Union launches Sputnik-1, the first-ever artificial satellite. This alarms the United States and triggers the high-altitude Space Race.",
        category: "Space Race"
      },
      {
        id: 304,
        year: "1962",
        title: "The Cuban Missile Crisis",
        description: "Thirteen days of sheer global dread. The US and Soviet Union stand on the edge of thermo-nuclear war over warhead placements in Cuba, before quietly trading a solution.",
        category: "Crisis"
      },
      {
        id: 305,
        year: "1989",
        title: "Tearing Down the Wall",
        description: "Peaceful revolutions sweep through Poland and Hungary. On November 9th, joyful citizens swarm the Berlin Wall, dancing on top of its concrete blocks.",
        category: "Peace"
      },
      {
        id: 306,
        year: "1991",
        title: "Collapse of the Soviet Union",
        description: "With economic distress mounting, Soviet leader Gorbachev resigns, and the USSR is officially dissolved into 15 independent nations, ending the Cold War.",
        category: "Dissolution"
      }
    ],
    causeEffect: [
      {
        id: 501,
        cause: "Defeat of Axis Powers in World War II",
        causeDesc: "Left the powerful military machines of Germany and Japan completely dismantled, resulting in a giant power vacuum in Europe and Asia.",
        trigger: "Rival Allies (USA & USSR) race to install political models in liberated lands.",
        effect: "Emergence of the Bipolar World",
        effectDesc: "Western Europe aligns under NATO, while Eastern Europe is wrapped inside the Soviet Warsaw Pact, creating a locked border of suspicion."
      },
      {
        id: 502,
        cause: "Establishment of Massive Hydrogen Bomb Arsenals",
        causeDesc: "Both superpowers held more than enough nuclear triggers to vaporize the entire human population dozens of times over in thirty minutes.",
        trigger: "The doctrine of Mutually Assured Destruction (MAD) becomes a recognized fact.",
        effect: "No direct battles ('Hot War')",
        effectDesc: "Since direct war meant global apocalypse, the superpowers battled safely via spies (CIA/KGB), regional proxies (Korea/Vietnam), and sports."
      },
      {
        id: 503,
        cause: "High Cost of Arms Spending & Economic Shortages",
        causeDesc: "The closed Soviet state was exhausting astronomical percentages of its GDP on war competition, resulting in massive bread lines and tech stagnation.",
        trigger: "Mikhail Gorbachev implements policies of Glasnost (Openness) and Perestroika (Restructuring).",
        effect: "Rapid, democratic independence demands",
        effectDesc: "The political grip slackens, allowing peaceful revolutions to untie Europe's Iron Curtain without firing a single nuclear missile."
      }
    ],
    people: [
      {
        name: "Harry S. Truman",
        role: "The Containment President",
        bio: "Forged the post-WWII containment landscape, funded the rebuild of western Europe via the Marshall Plan, and committed US forces to defend South Korea.",
        emoji: "🇺🇸",
        bornDied: "1884 – 1972"
      },
      {
        name: "Nikita Khrushchev",
        role: "The Thaw and Crisis Chief",
        bio: "Replaced Stalin and initiated some domestic thaws, but authorized the build of the Berlin Wall and deployed nuclear missiles to Cuba.",
        emoji: "🛠️",
        bornDied: "1894 – 1971"
      },
      {
        name: "Mikhail Gorbachev",
        role: "The Last Soviet Reformer",
        bio: "Sought to modernize and save the Soviet Union using openness, but peaceful popular movements outpaced his reforms, earning him the Nobel Peace Prize.",
        emoji: "🕊️",
        bornDied: "1931 – 2022"
      }
    ],
    quiz: [
      {
        question: "What does the military term MAD stand for in the context of the nuclear arms race?",
        options: [
          "Mangled Atomic Deserts",
          "Mutually Assured Destruction",
          "Multi-Angle Defense Protocols",
          "Military Alliance Dispersion"
        ],
        correctIndex: 1,
        explanation: "Mutually Assured Destruction meant that a nuclear attack was suicide, keeping both militaries in check."
      },
      {
        question: "What physical barrier symbolized the division of Europe from 1961 to 1989?",
        options: ["The Iron Wall", "The Berlin Wall", "The Rhine Fence", "The MAGinot Line"],
        correctIndex: 1,
        explanation: "The Berlin Wall divided the capitalist physical zones of the city representing the global Cold War."
      },
      {
        question: "Which country launched the first artificial satellite, Sputnik, into space?",
        options: ["The United States", "The United Kingdom", "The Soviet Union", "West Germany"],
        correctIndex: 2,
        explanation: "The USSR's surprise launch of Sputnik in 1957 shocked the US government and triggered the space race."
      }
    ]
  }
];
