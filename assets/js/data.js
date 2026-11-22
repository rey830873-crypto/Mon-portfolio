// Données structurées du portfolio

const PORTFOLIO_SKILLS = [
  {
    num: "01",
    title: "Mobile",
    subtitle: "Flutter & Dart",
    desc: "Applications mobiles fluides avec Android Studio (ex : CourantCI).",
    borderClass: "border-pink-300 hover:border-pink-500",
    numClass: "text-pink-500",
    bgClass: "bg-pink-50/90"
  },
  {
    num: "02",
    title: "Web",
    subtitle: "HTML5 • CSS3 • Tailwind",
    desc: "Sites vitrines modernes, responsives et animés (The Ordinary, Longrich, Tiramisu).",
    borderClass: "border-sky-300 hover:border-sky-500",
    numClass: "text-sky-500",
    bgClass: "bg-sky-50/90"
  },
  {
    num: "03",
    title: "Data & Python",
    subtitle: "SQL Server • Scraping",
    desc: "Modélisation de bases de données universitaires et extraction Python (Amazon Scraper).",
    borderClass: "border-amber-300 hover:border-amber-500",
    numClass: "text-amber-500",
    bgClass: "bg-amber-50/90"
  },
  {
    num: "04",
    title: "Outils & Soft Skills",
    subtitle: "C • C# • Collaboration",
    desc: "VS Code, Visual Studio, PyCharm, Code::Blocks, esprit d'équipe et adaptabilité.",
    borderClass: "border-purple-300 hover:border-purple-500",
    numClass: "text-purple-600",
    bgClass: "bg-purple-50/90"
  }
];

const PROJECTS_DATA = {
  courantci: {
    num: "01",
    title: "CourantCI",
    category: "Application Mobile • Flutter / Dart",
    description:
      "Application mobile développée en Dart avec Flutter pour répondre à un problème concret de la société.",
    stack: ["Flutter", "Dart", "Mobile UI"],
    cardBg: "bg-[#2b1f52]/95 backdrop-blur-md",
    border: "border-pink-400/70",
    numColor: "text-pink-300",
    tagColor: "text-pink-200",
    btnColor: "bg-pink-500 hover:bg-pink-400 text-white",
    images: [
      "Data/Courant_ci.jpeg",
      "Data/Courant_ci (2).jpeg",
      "Data/Courant_ci (3).jpeg",
      "Data/Courant_ci (4).jpeg"
    ]
  },
  "gestion-universite": {
    num: "02",
    title: "Gestion d'Université",
    category: "Base de Données • SQL Server",
    description:
      "Système de gestion d'université en base de données conçu pour permettre à chaque établissement de mieux structurer ses données.",
    stack: ["SQL", "SQL Server", "Modélisation BDD"],
    cardBg: "bg-[#1b2e59]/95 backdrop-blur-md",
    border: "border-sky-400/70",
    numColor: "text-sky-300",
    tagColor: "text-sky-200",
    btnColor: "bg-sky-400 hover:bg-sky-300 text-slate-950",
    images: [
      "Data/Gestion université.png",
      "Data/Gestion université (2).png"
    ]
  },
  "amazon-scraper": {
    num: "03",
    title: "Amazon Scraper",
    category: "Programme Python • Web Scraping",
    description:
      "Programme Python permettant d'extraire des éléments produits sur le site Amazon de manière structurée et professionnelle.",
    stack: ["Python", "Web Scraping", "Data"],
    cardBg: "bg-[#352659]/95 backdrop-blur-md",
    border: "border-amber-300/70",
    numColor: "text-amber-300",
    tagColor: "text-amber-200",
    btnColor: "bg-amber-400 hover:bg-amber-300 text-slate-950",
    images: ["Data/Amazone scraper.png"]
  },
  ordinary: {
    num: "04",
    title: "The Ordinary — Cosmétique",
    category: "Site Web • HTML5 / CSS3",
    description:
      "Site web réalisé en HTML et CSS dans le cadre d'un module académique, consacré aux soins et produits cosmétiques.",
    stack: ["HTML5", "CSS3", "UI Design"],
    cardBg: "bg-[#2e2058]/95 backdrop-blur-md",
    border: "border-purple-300/70",
    numColor: "text-purple-300",
    tagColor: "text-purple-200",
    btnColor: "bg-purple-400 hover:bg-purple-300 text-slate-950",
    images: ["Data/ordinary.jpg"]
  },
  longrich: {
    num: "05",
    title: "Longrich — Site Vitrine",
    category: "Site Web • HTML5 / CSS3",
    description:
      "Site vitrine développé en HTML et CSS présentant des produits du quotidien et du bien-être.",
    stack: ["HTML5", "CSS3", "Responsive"],
    cardBg: "bg-[#16384d]/95 backdrop-blur-md",
    border: "border-emerald-300/70",
    numColor: "text-emerald-300",
    tagColor: "text-emerald-200",
    btnColor: "bg-emerald-400 hover:bg-emerald-300 text-slate-950",
    images: ["Data/longrich1 (2).jpg"]
  },
  tiramisu: {
    num: "06",
    title: "Tiramisu — Site Gourmand",
    category: "Site Web • HTML5 / CSS3",
    description:
      "Site web HTML et CSS au design chaleureux dédié à l'univers culinaire et à la pâtisserie.",
    stack: ["HTML5", "CSS3", "Design Web"],
    cardBg: "bg-[#3c234d]/95 backdrop-blur-md",
    border: "border-orange-300/70",
    numColor: "text-orange-300",
    tagColor: "text-orange-200",
    btnColor: "bg-orange-400 hover:bg-orange-300 text-slate-950",
    images: ["Data/tiramisu1.jpg"]
  }
};
