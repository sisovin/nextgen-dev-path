export interface Language {
  name: string;
  path: string;
  tagline: string;
  overview: string;
  domains: Array<"mobile" | "web" | "ai" | "system" | "backend" | "game">;
  applications: string[];
  advantages: string[];
  salaryRange: { min: number; max: number };
  careerRoles: string[];
  futureTrends: string[];
  gradient: string;
  icon: string;
}

export const languagesData: Language[] = [
  {
    name: "Python",
    path: "/python",
    tagline: "The Swiss Army Knife of Programming",
    overview: "Python is a versatile, high-level programming language known for its simplicity and readability. It's the go-to choice for data science, machine learning, automation, and web development.",
    domains: ["ai", "web", "backend"],
    applications: [
      "Data Science & Analytics",
      "Machine Learning & AI",
      "Web Development (Django, Flask)",
      "Automation & Scripting",
      "Scientific Computing",
      "DevOps & Cloud Infrastructure"
    ],
    advantages: [
      "Easy to learn with clear, readable syntax",
      "Vast ecosystem of libraries (NumPy, Pandas, TensorFlow)",
      "Strong community support and documentation",
      "Cross-platform compatibility",
      "Rapid prototyping and development speed",
      "Dominant in AI/ML industry"
    ],
    salaryRange: { min: 85000, max: 175000 },
    careerRoles: [
      "Data Scientist",
      "Machine Learning Engineer",
      "Backend Developer",
      "DevOps Engineer",
      "Research Scientist",
      "Automation Engineer"
    ],
    futureTrends: [
      "Leading language for AI/ML development",
      "Growing adoption in cloud computing",
      "Essential for data-driven decision making",
      "Increasing use in automation and IoT"
    ],
    gradient: "bg-gradient-ai",
    icon: "brain"
  },
  {
    name: "JavaScript",
    path: "/javascript",
    tagline: "The Language of the Web",
    overview: "JavaScript powers the modern web, enabling interactive user experiences across browsers. With Node.js, it also dominates server-side development, making it a full-stack powerhouse.",
    domains: ["web", "backend"],
    applications: [
      "Frontend Development (React, Vue, Angular)",
      "Backend Development (Node.js, Express)",
      "Mobile Apps (React Native)",
      "Desktop Apps (Electron)",
      "Game Development (Phaser, Three.js)",
      "Real-time Applications"
    ],
    advantages: [
      "Universal browser support",
      "Full-stack development capability",
      "Massive ecosystem (npm)",
      "Active community and constant evolution",
      "Asynchronous programming support",
      "Quick feedback loop for learning"
    ],
    salaryRange: { min: 75000, max: 165000 },
    careerRoles: [
      "Frontend Developer",
      "Full-Stack Developer",
      "Node.js Developer",
      "React Developer",
      "UI/UX Engineer",
      "Technical Lead"
    ],
    futureTrends: [
      "Continued dominance in web development",
      "Growing serverless adoption",
      "WebAssembly integration",
      "Progressive Web Apps (PWAs) growth"
    ],
    gradient: "bg-gradient-web",
    icon: "globe"
  },
  {
    name: "TypeScript",
    path: "/typescript",
    tagline: "JavaScript with Superpowers",
    overview: "TypeScript is a typed superset of JavaScript that adds static typing, making large-scale applications more maintainable and less error-prone. It's rapidly becoming the standard for modern web development.",
    domains: ["web", "backend"],
    applications: [
      "Enterprise Web Applications",
      "Large-scale Frontend Projects",
      "Backend APIs with Node.js",
      "Mobile Development",
      "Cloud Functions",
      "Developer Tooling"
    ],
    advantages: [
      "Early error detection through static typing",
      "Enhanced IDE support and autocompletion",
      "Better code maintainability",
      "Seamless JavaScript interoperability",
      "Strong tooling ecosystem",
      "Growing industry adoption"
    ],
    salaryRange: { min: 85000, max: 175000 },
    careerRoles: [
      "Frontend Engineer",
      "Full-Stack Engineer",
      "Software Architect",
      "Technical Lead",
      "Platform Engineer",
      "DevOps Engineer"
    ],
    futureTrends: [
      "Becoming default for new projects",
      "Increased enterprise adoption",
      "Better framework integration",
      "Enhanced developer experience tools"
    ],
    gradient: "bg-gradient-system",
    icon: "code"
  },
  {
    name: "Java",
    path: "/java",
    tagline: "Write Once, Run Anywhere",
    overview: "Java is a robust, object-oriented language that powers enterprise applications, Android development, and large-scale systems. Its stability and performance make it a cornerstone of corporate software.",
    domains: ["backend", "mobile"],
    applications: [
      "Enterprise Applications",
      "Android Mobile Development",
      "Cloud-based Applications",
      "Big Data Technologies (Hadoop, Spark)",
      "Financial Trading Systems",
      "E-commerce Platforms"
    ],
    advantages: [
      "Platform independence (JVM)",
      "Strong type safety and performance",
      "Mature ecosystem and frameworks",
      "Excellent backward compatibility",
      "Enterprise-grade security",
      "Extensive corporate support"
    ],
    salaryRange: { min: 80000, max: 170000 },
    careerRoles: [
      "Java Developer",
      "Android Developer",
      "Backend Engineer",
      "Solutions Architect",
      "DevOps Engineer",
      "Big Data Engineer"
    ],
    futureTrends: [
      "Cloud-native development growth",
      "Microservices architecture",
      "Continued enterprise dominance",
      "Modern Java features adoption"
    ],
    gradient: "bg-gradient-backend",
    icon: "server"
  },
  {
    name: "C#",
    path: "/csharp",
    tagline: "Microsoft's Versatile Powerhouse",
    overview: "C# (C-Sharp) is a modern, object-oriented language developed by Microsoft. It's the primary language for .NET development, game development with Unity, and Windows applications.",
    domains: ["game", "backend", "web"],
    applications: [
      "Game Development (Unity)",
      "Desktop Applications (WPF, WinForms)",
      "Web Applications (ASP.NET)",
      "Cloud Services (Azure)",
      "Mobile Apps (Xamarin)",
      "Enterprise Software"
    ],
    advantages: [
      "Powerful .NET framework ecosystem",
      "Excellent game development support (Unity)",
      "Strong typing and modern language features",
      "Cross-platform with .NET Core",
      "Great IDE support (Visual Studio)",
      "Active development and updates"
    ],
    salaryRange: { min: 80000, max: 165000 },
    careerRoles: [
      "Game Developer",
      ".NET Developer",
      "Full-Stack Developer",
      "Unity Developer",
      "Cloud Solutions Architect",
      "Software Engineer"
    ],
    futureTrends: [
      "Unity continues gaming dominance",
      "Cloud-native .NET growth",
      "Cross-platform development expansion",
      "Modern C# feature adoption"
    ],
    gradient: "bg-primary",
    icon: "gamepad"
  },
  {
    name: "Go",
    path: "/go",
    tagline: "Simple, Fast, and Reliable",
    overview: "Go (Golang) is a statically typed language designed by Google for building simple, reliable, and efficient software. It excels in cloud services, microservices, and concurrent programming.",
    domains: ["backend", "system"],
    applications: [
      "Cloud Infrastructure (Kubernetes, Docker)",
      "Microservices Architecture",
      "API Development",
      "DevOps Tools",
      "Distributed Systems",
      "Network Programming"
    ],
    advantages: [
      "Excellent concurrency support",
      "Fast compilation and execution",
      "Simple and clean syntax",
      "Built-in testing and profiling",
      "Strong standard library",
      "Efficient memory management"
    ],
    salaryRange: { min: 90000, max: 180000 },
    careerRoles: [
      "Backend Engineer",
      "DevOps Engineer",
      "Cloud Architect",
      "Site Reliability Engineer",
      "Microservices Developer",
      "Infrastructure Engineer"
    ],
    futureTrends: [
      "Cloud-native development standard",
      "Kubernetes ecosystem growth",
      "Microservices adoption increase",
      "DevOps tooling expansion"
    ],
    gradient: "bg-gradient-system",
    icon: "cloud"
  },
  {
    name: "Ruby",
    path: "/ruby",
    tagline: "Developer Happiness First",
    overview: "Ruby is a dynamic, elegant language that prioritizes developer productivity and happiness. With Ruby on Rails, it revolutionized web development and remains popular for startups and rapid prototyping.",
    domains: ["web", "backend"],
    applications: [
      "Web Development (Ruby on Rails)",
      "Automation Scripts",
      "DevOps Tools",
      "API Development",
      "Data Processing",
      "Prototyping"
    ],
    advantages: [
      "Elegant and readable syntax",
      "Convention over configuration (Rails)",
      "Rapid development and prototyping",
      "Strong metaprogramming capabilities",
      "Supportive community",
      "Rich gem ecosystem"
    ],
    salaryRange: { min: 75000, max: 160000 },
    careerRoles: [
      "Ruby on Rails Developer",
      "Full-Stack Developer",
      "Backend Developer",
      "DevOps Engineer",
      "API Developer",
      "Technical Lead"
    ],
    futureTrends: [
      "Continued startup ecosystem presence",
      "Modern Ruby features adoption",
      "API-focused development",
      "Performance improvements"
    ],
    gradient: "bg-gradient-backend",
    icon: "gem"
  },
  {
    name: "Swift",
    path: "/swift",
    tagline: "The Future of Apple Development",
    overview: "Swift is Apple's modern programming language for iOS, macOS, watchOS, and tvOS development. It combines performance with safety and expressiveness, making it the premier choice for Apple ecosystem development.",
    domains: ["mobile"],
    applications: [
      "iOS App Development",
      "macOS Applications",
      "watchOS Apps",
      "tvOS Development",
      "Server-side Swift",
      "AR/VR Applications"
    ],
    advantages: [
      "Fast performance and safety features",
      "Modern, expressive syntax",
      "Strong type safety",
      "Seamless Objective-C interoperability",
      "Growing server-side capabilities",
      "Active development by Apple"
    ],
    salaryRange: { min: 85000, max: 170000 },
    careerRoles: [
      "iOS Developer",
      "Mobile Engineer",
      "App Developer",
      "AR/VR Developer",
      "Technical Lead",
      "Mobile Architect"
    ],
    futureTrends: [
      "SwiftUI adoption growing",
      "AR/VR development expansion",
      "Server-side Swift emergence",
      "Cross-platform capabilities"
    ],
    gradient: "bg-gradient-mobile",
    icon: "smartphone"
  },
  {
    name: "C++",
    path: "/cpp",
    tagline: "Performance and Control",
    overview: "C++ is a powerful, high-performance language that provides low-level control over system resources. It's essential for game engines, system software, and performance-critical applications.",
    domains: ["game", "system"],
    applications: [
      "Game Engines (Unreal, Unity core)",
      "Operating Systems",
      "Embedded Systems",
      "High-Performance Computing",
      "Graphics and Rendering",
      "Financial Systems"
    ],
    advantages: [
      "Maximum performance and control",
      "Object-oriented and generic programming",
      "Direct hardware manipulation",
      "Extensive standard library (STL)",
      "Cross-platform compatibility",
      "Industry-standard for performance"
    ],
    salaryRange: { min: 85000, max: 175000 },
    careerRoles: [
      "Game Engine Developer",
      "Systems Programmer",
      "Embedded Software Engineer",
      "Graphics Programmer",
      "Performance Engineer",
      "Quant Developer"
    ],
    futureTrends: [
      "Modern C++ standards adoption",
      "Game development dominance",
      "High-frequency trading",
      "Real-time systems growth"
    ],
    gradient: "bg-gradient-system",
    icon: "cpu"
  },
  {
    name: "PHP",
    path: "/php",
    tagline: "The Web's Workhorse",
    overview: "PHP is a server-side scripting language that powers a significant portion of the web, including WordPress, Laravel applications, and e-commerce platforms. Its simplicity and wide hosting support make it accessible and practical.",
    domains: ["web", "backend"],
    applications: [
      "WordPress Development",
      "E-commerce Platforms",
      "Content Management Systems",
      "Web Applications (Laravel, Symfony)",
      "API Development",
      "Server-side Scripting"
    ],
    advantages: [
      "Easy to learn and deploy",
      "Wide hosting support",
      "Large ecosystem (WordPress, Laravel)",
      "Strong database integration",
      "Active community",
      "Cost-effective development"
    ],
    salaryRange: { min: 65000, max: 145000 },
    careerRoles: [
      "PHP Developer",
      "WordPress Developer",
      "Full-Stack Developer",
      "Backend Developer",
      "E-commerce Developer",
      "Web Developer"
    ],
    futureTrends: [
      "Modern PHP frameworks growth",
      "WordPress ecosystem expansion",
      "Performance improvements",
      "Headless CMS adoption"
    ],
    gradient: "bg-gradient-web",
    icon: "shopping-cart"
  }
];
