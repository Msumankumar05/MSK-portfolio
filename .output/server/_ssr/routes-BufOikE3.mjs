import { a as __toESM } from "../_runtime.mjs";
import { a as motion, i as useScroll, n as useTransform, o as AnimatePresence, r as useMotionValue, s as performance_default, t as useSpring } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { S as ArrowUpRight, _ as Compass, a as Server, b as BookOpen, c as Mail, d as GraduationCap, f as Github, g as Cpu, h as Database, i as Smartphone, l as Linkedin, m as Download, n as Terminal, o as Send, p as ExternalLink, r as Sparkles, s as MapPin, t as Wrench, u as Instagram, v as CodeXml, x as ArrowUp, y as Brain } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BufOikE3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		id: "home",
		label: "Home",
		num: "00"
	},
	{
		id: "about",
		label: "About",
		num: "01"
	},
	{
		id: "stack",
		label: "Stack",
		num: "02"
	},
	{
		id: "work",
		label: "Work",
		num: "03"
	},
	{
		id: "journey",
		label: "Journey",
		num: "04"
	},
	{
		id: "arena",
		label: "Arena",
		num: "05"
	},
	{
		id: "contact",
		label: "Contact",
		num: "06"
	}
];
var SCENE_MAP = {
	home: {
		chapter: "Chapter I",
		title: "Hello World"
	},
	about: {
		chapter: "Chapter II",
		title: "The Builder"
	},
	stack: {
		chapter: "Chapter III",
		title: "The Toolkit"
	},
	work: {
		chapter: "Chapter IV",
		title: "Selected Work"
	},
	journey: {
		chapter: "Chapter V",
		title: "The Timeline"
	},
	arena: {
		chapter: "Chapter VI",
		title: "The Arena"
	},
	contact: {
		chapter: "Chapter VII",
		title: "Cross the Border"
	}
};
var TECH_BADGES = [
	"React",
	"Node.js",
	"MongoDB",
	"Flutter",
	"React Native",
	"Kotlin",
	"Firebase",
	"TypeScript",
	"AI",
	"MERN"
];
var STATS = [
	{
		label: "Projects Shipped",
		value: 7,
		suffix: "+"
	},
	{
		label: "Technologies",
		value: 14,
		suffix: "+"
	},
	{
		label: "GitHub Repos",
		value: 15,
		suffix: "+"
	},
	{
		label: "Coding Hours",
		value: 1562,
		suffix: "+"
	}
];
var SKILL_GROUPS = [
	{
		title: "Frontend",
		icon: CodeXml,
		items: [
			"HTML",
			"CSS",
			"JavaScript",
			"TypeScript",
			"React",
			"Tailwind CSS"
		]
	},
	{
		title: "Backend",
		icon: Server,
		items: ["Node.js", "Express.js"]
	},
	{
		title: "Mobile",
		icon: Smartphone,
		items: [
			"Flutter",
			"Kotlin",
			"React Native"
		]
	},
	{
		title: "Databases",
		icon: Database,
		items: [
			"MongoDB",
			"MySQL",
			"Firebase"
		]
	},
	{
		title: "AI",
		icon: Brain,
		items: [
			"LLMs",
			"Prompt Engineering",
			"AI Assistants",
			"Voice Interfaces"
		]
	},
	{
		title: "Tools",
		icon: Wrench,
		items: [
			"Git",
			"GitHub",
			"VS Code",
			"Android Studio",
			"Postman",
			"Figma"
		]
	}
];
var PROJECTS = [
	{
		name: "Farmora",
		tag: "Full-Stack",
		category: "Farm-to-Home Marketplace",
		desc: "MERN-based e-commerce platform connecting farmers with customers through a seamless shopping experience.",
		longDesc: "A full-stack MERN application that enables customers to browse fresh produce, manage carts, place orders, and securely authenticate. Features an intuitive admin dashboard, responsive UI, REST APIs, and MongoDB for efficient product and order management.",
		stack: [
			"React",
			"Node.js",
			"JavaScript",
			"Express",
			"MongoDB",
			"JWT",
			"Tailwind CSS"
		],
		accent: "var(--pf-c1)",
		icon: "🌱",
		metric: {
			value: "100%",
			unit: "",
			label: "Responsive design · Secure authentication · Admin dashboard"
		},
		liveUrl: "https://farmora-farm-to-home.vercel.app/",
		githubUrl: "https://github.com/Msumankumar05/farmora1"
	},
	{
		name: "CineDB",
		tag: "Frontend",
		category: "Movie Discovery Platform",
		desc: "A responsive movie discovery application with search, trending titles, detailed pages, and a modern UI.",
		longDesc: "A React-based movie discovery platform powered by the TMDB API. Users can explore trending movies, search for titles, view detailed information, browse cast details, and enjoy a fast, responsive interface built with reusable components.",
		stack: [
			"React",
			"JavaScript",
			"TMDB API",
			"Tailwind CSS",
			"Vite"
		],
		accent: "var(--pf-c2)",
		icon: "🎬",
		metric: {
			value: "100%",
			unit: "",
			label: "Responsive UI · Live TMDB API · Fast search experience"
		},
		liveUrl: "https://cine-dbase.vercel.app/"
	},
	{
		name: "SKY AI",
		tag: "AI Assistant",
		category: "AI-Powered Web Application",
		desc: "An intelligent AI assistant with real-time chat, voice interaction, and a clean, responsive interface.",
		longDesc: "An AI-powered web application built with React and Node.js, featuring real-time conversations, voice input using the Web Speech API, and AI-generated responses through the OpenRouter API. Designed with a modern, responsive interface to deliver an intuitive user experience.",
		stack: [
			"React",
			"Node.js",
			"Express",
			"OpenRouter API",
			"Web Speech API"
		],
		accent: "var(--pf-c1)",
		icon: "🤖",
		metric: {
			value: "24/7",
			unit: "",
			label: "AI conversations · Voice input · Responsive design"
		}
	},
	{
		name: "Mobile Todo",
		tag: "Mobile",
		category: "Task Management App",
		desc: "A Flutter-based task management application with offline storage, reminders, and an intuitive user interface.",
		longDesc: "A cross-platform mobile application built with Flutter, featuring task creation, local data persistence using SQLite, reminders, and a clean, responsive interface. Designed to deliver a simple and efficient productivity experience across Android devices.",
		stack: [
			"Kotlin",
			"SQLite",
			"Provider"
		],
		accent: "var(--pf-c2)",
		icon: "📱",
		metric: {
			value: "100%",
			unit: "",
			label: "Offline storage · Task reminders · Clean UI"
		},
		githubUrl: "https://github.com/Msumankumar05/My-Tasks-app"
	},
	{
		name: "InterviewAI",
		tag: "AI Platform",
		category: "Career · Interview Preparation",
		desc: "An AI-powered interview preparation platform that transforms resumes into personalized interview experiences.",
		longDesc: "Currently under development, InterviewAI analyzes uploaded resumes and generates tailored interview questions, technical assessments, and personalized preparation plans. Designed to help students and professionals practice with role-specific AI-driven interviews.",
		stack: [
			"Next.js",
			"TypeScript",
			"AI",
			"Node.js"
		],
		accent: "#94a3b8",
		icon: "🧠",
		placeholder: true,
		metric: {
			value: "Soon",
			unit: "",
			label: "AI resume analysis · Personalized interview preparation"
		}
	},
	{
		name: "Project On",
		tag: "Mobile",
		category: "Coming Soon",
		desc: "A next-generation mobile application currently in development. Details will be revealed soon.",
		longDesc: "A confidential mobile project focused on delivering an innovative user experience with modern technologies. Development is actively in progress, and the complete feature set will be announced upon launch.",
		stack: [
			"Flutter",
			"Firebase",
			"AI"
		],
		accent: "#94a3b8",
		icon: "🚀",
		placeholder: true,
		metric: {
			value: "2026",
			unit: "",
			label: "Currently in development · Official reveal coming soon"
		}
	}
];
var CODING_PROFILES = {
	leetcode: {
		platform: "LeetCode",
		rankName: "Knight",
		sub: "LEETCODE · KNIGHT · 600+ PROBLEMS SOLVED",
		url: "https://leetcode.com/u/sumankumar/",
		stats: [
			{
				value: "600+",
				label: "PROBLEMS SOLVED"
			},
			{
				value: "180",
				label: "EASY SOLVED"
			},
			{
				value: "320",
				label: "MEDIUM SOLVED"
			},
			{
				value: "100",
				label: "HARD SOLVED"
			}
		],
		breakdown: [
			{
				label: "Easy",
				count: 180,
				pct: 30,
				color: "bg-[var(--pf-c1)]"
			},
			{
				label: "Medium",
				count: 320,
				pct: 53.3,
				color: "bg-[#c9a0ff]"
			},
			{
				label: "Hard",
				count: 100,
				pct: 16.7,
				color: "bg-[var(--pf-c2)]"
			}
		]
	},
	codeforces: {
		platform: "Codeforces",
		rankName: "Specialist",
		sub: "CODEFORCES · SPECIALIST · 1620 MAX RATING",
		url: "https://codeforces.com/profile/sumankumar",
		stats: [
			{
				value: "1620",
				label: "MAX RATING"
			},
			{
				value: "Specialist",
				label: "CURRENT RANK"
			},
			{
				value: "450+",
				label: "PROBLEMS SOLVED"
			},
			{
				value: "28",
				label: "CONTESTS"
			}
		],
		breakdown: [
			{
				label: "Easy (800-1100)",
				count: 210,
				pct: 46.7,
				color: "bg-[var(--pf-c1)]"
			},
			{
				label: "Medium (1200-1500)",
				count: 180,
				pct: 40,
				color: "bg-[#c9a0ff]"
			},
			{
				label: "Hard (1600+)",
				count: 60,
				pct: 13.3,
				color: "bg-[var(--pf-c2)]"
			}
		]
	},
	codechef: {
		platform: "CodeChef",
		rankName: "3-Star",
		sub: "CODECHEF · 3★ · 1680 RATING",
		url: "https://www.codechef.com/users/sumankumar",
		stats: [
			{
				value: "1680",
				label: "CURRENT RATING"
			},
			{
				value: "3★",
				label: "RATING BAND"
			},
			{
				value: "350+",
				label: "PROBLEMS SOLVED"
			},
			{
				value: "Div 2",
				label: "CURRENT DIVISION"
			}
		],
		breakdown: [
			{
				label: "Easy",
				count: 190,
				pct: 54.3,
				color: "bg-[var(--pf-c1)]"
			},
			{
				label: "Medium",
				count: 120,
				pct: 34.3,
				color: "bg-[#c9a0ff]"
			},
			{
				label: "Hard",
				count: 40,
				pct: 11.4,
				color: "bg-[var(--pf-c2)]"
			}
		]
	}
};
function useCountUp(target, active, duration = 1800) {
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!active) return;
		let raf = 0;
		const start = performance_default.now();
		const tick = (t) => {
			const p = Math.min(1, (t - start) / duration);
			const eased = 1 - Math.pow(1 - p, 3);
			setN(Math.round(target * eased));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		active,
		target,
		duration
	]);
	return n;
}
function useInView() {
	const ref = (0, import_react.useRef)(null);
	const [seen, setSeen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!ref.current) return;
		const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), { threshold: .25 });
		io.observe(ref.current);
		return () => io.disconnect();
	}, []);
	return {
		ref,
		seen
	};
}
function useLenis() {
	(0, import_react.useEffect)(() => {
		const lenis = new Lenis({
			duration: 1.15,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true
		});
		let raf = 0;
		const loop = (time) => {
			lenis.raf(time);
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		const onClick = (e) => {
			const a = e.target?.closest?.("a[href^=\"#\"]");
			if (!a) return;
			const id = a.getAttribute("href");
			if (!id || id === "#") return;
			const el = document.querySelector(id);
			if (!el) return;
			e.preventDefault();
			lenis.scrollTo(el, {
				offset: -40,
				duration: 1.4
			});
		};
		document.addEventListener("click", onClick);
		return () => {
			document.removeEventListener("click", onClick);
			cancelAnimationFrame(raf);
			lenis.destroy();
		};
	}, []);
}
function Magnetic({ children, strength = .28, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const x = useSpring(0, {
		stiffness: 180,
		damping: 15
	});
	const y = useSpring(0, {
		stiffness: 180,
		damping: 15
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		style: {
			x,
			y
		},
		className,
		onMouseMove: (e) => {
			const r = ref.current.getBoundingClientRect();
			x.set((e.clientX - (r.left + r.width / 2)) * strength);
			y.set((e.clientY - (r.top + r.height / 2)) * strength);
		},
		onMouseLeave: () => {
			x.set(0);
			y.set(0);
		},
		children
	});
}
function Grid3D({ mx, my }) {
	const rx = useTransform(my, [-1, 1], [63, 67]);
	const ry = useTransform(mx, [-1, 1], [-4, 4]);
	const x = useTransform(mx, [-1, 1], [-20, 20]);
	const y = useTransform(my, [-1, 1], [-10, 10]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
		style: { perspective: "1200px" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "absolute bottom-[-30%] left-[-30%] right-[-30%] h-[75%] opacity-[0.05] [mask-image:linear-gradient(to_top,black_20%,transparent_90%)]",
			style: {
				rotateX: rx,
				rotateY: ry,
				x,
				y,
				backgroundImage: "linear-gradient(to right, var(--pf-c1) 1.5px, transparent 1.5px), linear-gradient(to bottom, var(--pf-c1) 1.5px, transparent 1.5px)",
				backgroundSize: "50px 50px",
				transformOrigin: "center bottom"
			}
		})
	});
}
function NeuralConstellation() {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let animationFrameId;
		let width = canvas.width = window.innerWidth;
		let height = canvas.height = window.innerHeight;
		const particles = [];
		const particleCount = 65;
		for (let i = 0; i < particleCount; i++) particles.push({
			x: Math.random() * width,
			y: Math.random() * height,
			vx: (Math.random() - .5) * .45,
			vy: (Math.random() - .5) * .45,
			r: Math.random() * 1.5 + .5
		});
		let mouseX = -1e3;
		let mouseY = -1e3;
		const handleMouseMove = (e) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
		};
		const handleMouseLeave = () => {
			mouseX = -1e3;
			mouseY = -1e3;
		};
		window.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseleave", handleMouseLeave);
		const handleResize = () => {
			if (!canvas) return;
			width = canvas.width = window.innerWidth;
			height = canvas.height = window.innerHeight;
		};
		window.addEventListener("resize", handleResize);
		const draw = () => {
			ctx.clearRect(0, 0, width, height);
			for (let i = 0; i < particleCount; i++) {
				const p1 = particles[i];
				p1.x += p1.vx;
				p1.y += p1.vy;
				if (p1.x < 0 || p1.x > width) p1.vx *= -1;
				if (p1.y < 0 || p1.y > height) p1.vy *= -1;
				ctx.fillStyle = "rgba(0, 229, 255, 0.25)";
				ctx.beginPath();
				ctx.arc(p1.x, p1.y, p1.r, 0, Math.PI * 2);
				ctx.fill();
				for (let j = i + 1; j < particleCount; j++) {
					const p2 = particles[j];
					const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
					if (dist < 105) {
						const alpha = (1 - dist / 105) * .12;
						ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
						ctx.lineWidth = .65;
						ctx.beginPath();
						ctx.moveTo(p1.x, p1.y);
						ctx.lineTo(p2.x, p2.y);
						ctx.stroke();
					}
				}
				if (mouseX > -500) {
					const distToMouse = Math.hypot(p1.x - mouseX, p1.y - mouseY);
					if (distToMouse < 140) {
						const alpha = (1 - distToMouse / 140) * .28;
						ctx.strokeStyle = `rgba(192, 132, 252, ${alpha})`;
						ctx.lineWidth = .8;
						ctx.beginPath();
						ctx.moveTo(p1.x, p1.y);
						ctx.lineTo(mouseX, mouseY);
						ctx.stroke();
					}
				}
			}
			animationFrameId = requestAnimationFrame(draw);
		};
		draw();
		return () => {
			cancelAnimationFrame(animationFrameId);
			window.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseleave", handleMouseLeave);
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		className: "pointer-events-none absolute inset-0 -z-20 h-full w-full opacity-[0.85]"
	});
}
function FloatingShape({ mx, my, factorX, factorY, className = "", children }) {
	const x = useTransform(mx, [-1, 1], [-35 * factorX, 35 * factorX]);
	const y = useTransform(my, [-1, 1], [-35 * factorY, 35 * factorY]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: {
			x,
			y
		},
		className: `pointer-events-none absolute hidden lg:block ${className}`,
		children
	});
}
function Starfield() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--pf-bg)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-40",
				style: { backgroundImage: "radial-gradient(circle at 20% 30%, rgb(from var(--pf-c1) r g b / 0.10), transparent 55%), radial-gradient(circle at 80% 70%, rgb(from var(--pf-c2) r g b / 0.10), transparent 55%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: {
					backgroundImage: "radial-gradient(1px 1px at 25% 30%, rgba(255,255,255,0.6) 50%, transparent 100%),           radial-gradient(1px 1px at 70% 20%, rgba(255,255,255,0.4) 50%, transparent 100%),           radial-gradient(1px 1px at 40% 80%, rgb(from var(--pf-c1) r g b / 0.6) 50%, transparent 100%),           radial-gradient(1px 1px at 85% 55%, rgb(from var(--pf-c2) r g b / 0.5) 50%, transparent 100%),           radial-gradient(1px 1px at 15% 60%, rgba(255,255,255,0.5) 50%, transparent 100%),           radial-gradient(1px 1px at 55% 45%, rgba(255,255,255,0.35) 50%, transparent 100%),           radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.4) 50%, transparent 100%),           radial-gradient(1px 1px at 90% 90%, rgb(from var(--pf-c1) r g b / 0.5) 50%, transparent 100%)",
					backgroundSize: "600px 600px, 800px 800px, 500px 500px, 700px 700px, 900px 900px, 400px 400px, 650px 650px, 750px 750px",
					backgroundRepeat: "repeat"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAurora, {})
		]
	});
}
function ScrollAurora() {
	const { scrollYProgress } = useScroll();
	const p = useSpring(scrollYProgress, {
		stiffness: 60,
		damping: 20
	});
	const rotate = useTransform(p, [0, 1], [0, 300]);
	const y1 = useTransform(p, [0, 1], ["0%", "-30%"]);
	const y2 = useTransform(p, [0, 1], ["0%", "40%"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: {
			rotate,
			y: y1
		},
		className: "absolute left-[-15%] top-[10%] h-[70vmin] w-[70vmin] rounded-[42%_58%_63%_37%] bg-[var(--pf-c1)]/[0.08] blur-3xl"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: {
			rotate: useTransform(rotate, (v) => -v),
			y: y2
		},
		className: "absolute right-[-15%] top-[40%] h-[70vmin] w-[70vmin] rounded-[63%_37%_44%_56%] bg-[var(--pf-c2)]/[0.07] blur-3xl"
	})] });
}
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 20,
		mass: .2
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: { scaleX },
		className: "fixed left-0 right-0 top-0 z-[60] h-[1px] origin-left bg-[var(--pf-c1)]"
	});
}
function useActiveSection() {
	const [active, setActive] = (0, import_react.useState)("home");
	(0, import_react.useEffect)(() => {
		const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) setActive(e.target.id);
			});
		}, { rootMargin: "-45% 0px -50% 0px" });
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
	return active;
}
function HUDChrome({ active }) {
	const scene = SCENE_MAP[active] ?? SCENE_MAP.home;
	const idx = NAV.findIndex((n) => n.id === active);
	const num = idx >= 0 ? NAV[idx].num : "00";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none fixed left-6 top-6 z-40 hidden md:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: -6
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: 6
					},
					transition: { duration: .4 },
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-8 bg-[var(--pf-c1)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--pf-c1)]",
							children: scene.chapter
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "pl-11 font-mono text-[9px] uppercase tracking-[0.3em] text-white/80",
						children: ["— ", scene.title]
					})]
				}, active + "-tl")
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none fixed bottom-5 left-6 z-40 hidden md:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-mono text-[9px] uppercase tracking-[0.4em] text-white/40",
				children: [
					num,
					" / ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-white/70",
						children: scene.title
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none fixed bottom-5 right-6 z-40 hidden text-right md:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "font-mono text-[9px] uppercase tracking-[0.25em] leading-relaxed text-white/40",
				children: [
					"LAT 17.38° N",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"LNG 78.48° E"
				]
			})
		})
	] });
}
function Navbar({ active }) {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 20);
		on();
		window.addEventListener("scroll", on);
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed inset-x-0 top-6 z-50 flex justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: `flex items-center gap-1 rounded-full border border-white/10 bg-black/50 px-2 py-1.5 backdrop-blur-xl transition-shadow ${scrolled ? "shadow-[0_10px_40px_-15px_rgb(from var(--pf-c1) r g b / 0.35)]" : ""}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#home",
					className: "flex items-center gap-2 rounded-full px-3 py-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg italic text-white",
						children: "MSK."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-1 h-4 w-px bg-white/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center md:flex",
					children: NAV.slice(1).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#${item.id}`,
						className: `relative rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${active === item.id ? "text-[var(--pf-c1)]" : "text-white/60 hover:text-white"}`,
						children: [active === item.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							layoutId: "nav-underline",
							className: "absolute inset-x-3 -bottom-0.5 h-px bg-[var(--pf-c1)]",
							transition: {
								type: "spring",
								stiffness: 380,
								damping: 30
							}
						}), item.label]
					}) }, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/resume.pdf",
					target: "_blank",
					rel: "noreferrer",
					className: "ml-2 flex items-center gap-1.5 rounded-full bg-[var(--pf-c1)] px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white",
					children: ["Resume ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3 w-3" })]
				})
			]
		})
	});
}
function TerminalEmulator() {
	const [history, setHistory] = (0, import_react.useState)([
		"Welcome to MSK terminal v1.0.2",
		"Type 'help' to see available commands.",
		""
	]);
	const [input, setInput] = (0, import_react.useState)("");
	const inputRef = (0, import_react.useRef)(null);
	const containerRef = (0, import_react.useRef)(null);
	const handleCommand = (e) => {
		e.preventDefault();
		const cmd = input.trim().toLowerCase();
		if (!cmd) return;
		let response = [];
		switch (cmd) {
			case "help":
				response = [
					`guest@msk:~$ ${input}`,
					"Available terminal commands:",
					"  about    - Bio & education path",
					"  skills   - Technical core stack",
					"  projects - Highlighted applications",
					"  contact  - Reach out directly",
					"  clear    - Flush console history"
				];
				break;
			case "about":
				response = [
					`guest@msk:~$ ${input}`,
					"Makoju Suman Kumar — postgraduate (MCA) student",
					"& full-stack engineer from Odisha, India.",
					"Building web, cross-platform mobile, and AI solutions."
				];
				break;
			case "skills":
				response = [
					`guest@msk:~$ ${input}`,
					"Languages : TS, JS, Dart, Kotlin, Java",
					"Frameworks: React, Node, Express, Flutter",
					"Databases : MongoDB, MySQL, Firebase, SQLite",
					"AI Tools  : LLM prompts, Agents, Web Speech API"
				];
				break;
			case "projects":
				response = [
					`guest@msk:~$ ${input}`,
					"• Farmora  - MERN commerce pipeline",
					"• CineDB   - Editorial movie crawler",
					"• SKY AI   - Voice conversational flow",
					"• Todo     - Offline-first SQLite planner"
				];
				break;
			case "contact":
				response = [
					`guest@msk:~$ ${input}`,
					"Email    : ms.kumar.developer05@gmail.com",
					"GitHub   : github.com/Msumankumar05",
					"LinkedIn : linkedin.com/in/makoju-suman-kumar"
				];
				break;
			case "clear":
				setHistory([]);
				setInput("");
				return;
			default: response = [
				`guest@msk:~$ ${input}`,
				`bash: command not found: ${cmd}`,
				"Type 'help' for options."
			];
		}
		setHistory((prev) => [
			...prev,
			...response,
			""
		]);
		setInput("");
		setTimeout(() => {
			if (containerRef.current) containerRef.current.scrollTop = containerRef.current.scrollHeight;
		}, 10);
	};
	const focusInput = () => {
		inputRef.current?.focus();
	};
	(0, import_react.useEffect)(() => {
		focusInput();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		onClick: focusInput,
		className: "h-[220px] cursor-text overflow-y-auto px-5 py-3 font-mono text-[10px] leading-relaxed text-white/75 select-text",
		ref: containerRef,
		style: { scrollbarWidth: "none" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-0.5",
			children: history.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: line.startsWith("guest@") ? "text-[var(--pf-c1)]" : line.startsWith("Available") || line.startsWith("Welcome") ? "text-white/40" : "",
				children: line
			}, i))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleCommand,
			className: "mt-1 flex items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[var(--pf-c2)] mr-1.5 shrink-0 select-none",
				children: "guest@msk:~$"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: inputRef,
				type: "text",
				value: input,
				onChange: (e) => setInput(e.target.value),
				className: "flex-1 bg-transparent text-white outline-none border-none p-0 font-mono text-[10px] focus:ring-0 focus:outline-none",
				maxLength: 30,
				autoCapitalize: "none",
				autoComplete: "off"
			})]
		})]
	});
}
function HeroCard() {
	const cardRef = (0, import_react.useRef)(null);
	const [tab, setTab] = (0, import_react.useState)("code");
	const [selectedFile, setSelectedFile] = (0, import_react.useState)("profile");
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const springX = useSpring(x, {
		stiffness: 150,
		damping: 20
	});
	const springY = useSpring(y, {
		stiffness: 150,
		damping: 20
	});
	const rotateX = useTransform(springY, [-.5, .5], [15, -15]);
	const rotateY = useTransform(springX, [-.5, .5], [-15, 15]);
	const glowX = useTransform(springX, [-.5, .5], ["20%", "80%"]);
	const glowY = useTransform(springY, [-.5, .5], ["20%", "80%"]);
	const glareX = useTransform(springX, [-.5, .5], [0, 100]);
	const glareY = useTransform(springY, [-.5, .5], [0, 100]);
	const glareOpacity = useSpring(0, {
		stiffness: 150,
		damping: 20
	});
	const glowBackground = useTransform([glowX, glowY], ([gx, gy]) => `radial-gradient(ellipse at ${gx} ${gy}, rgb(from var(--pf-c1) r g b / 0.18), rgb(from var(--pf-c3) r g b / 0.10) 45%, transparent 70%)`);
	const handleMouseMove = (e) => {
		if (!cardRef.current) return;
		const rect = cardRef.current.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		const mouseX = e.clientX - rect.left - width / 2;
		const mouseY = e.clientY - rect.top - height / 2;
		x.set(mouseX / width);
		y.set(mouseY / height);
		glareOpacity.set(.65);
	};
	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
		glareOpacity.set(0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		ref: cardRef,
		onMouseMove: handleMouseMove,
		onMouseLeave: handleMouseLeave,
		style: {
			rotateX,
			rotateY,
			transformPerspective: 1e3
		},
		className: "relative w-full max-w-[520px] select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "pointer-events-none absolute -inset-8 rounded-3xl opacity-60",
				style: { background: glowBackground }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden border border-white/10 bg-[var(--pf-card)] shadow-[0_40px_100px_-30px_rgb(from var(--pf-c1) r g b / 0.25)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "pointer-events-none absolute inset-0 z-30",
						style: {
							opacity: glareOpacity,
							background: useTransform([glareX, glareY], ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, rgba(0, 229, 255, 0.12) 0%, rgba(255, 45, 125, 0.04) 50%, transparent 80%)`)
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-white/5 px-5 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[#ff5f57]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[#febc2e]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[#28c840]" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setTab("code"),
									className: `font-mono text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 transition ${tab === "code" ? "bg-white/5 text-[var(--pf-c1)]" : "text-white/35 hover:text-white/60"}`,
									children: "profile.tsx"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setTab("terminal"),
									className: `font-mono text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 transition ${tab === "terminal" ? "bg-white/5 text-[var(--pf-c1)]" : "text-white/35 hover:text-white/60"}`,
									children: "terminal.sh"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--pf-c1)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--pf-c1)]/70",
								children: "live"
							})]
						})]
					}),
					tab === "code" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-[220px] font-mono text-[10px] leading-relaxed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-[110px] shrink-0 border-r border-white/5 bg-[var(--pf-bg)]/40 py-2 select-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "px-3 pb-1 font-mono text-[8px] uppercase tracking-wider text-white/30",
									children: "src/"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setSelectedFile("profile"),
									className: `flex w-full items-center gap-1.5 px-3 py-1 text-left transition ${selectedFile === "profile" ? "bg-white/5 text-[var(--pf-c1)]" : "text-white/50 hover:text-white/80"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📄" }), " profile.json"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setSelectedFile("skills"),
									className: `flex w-full items-center gap-1.5 px-3 py-1 text-left transition ${selectedFile === "skills" ? "bg-white/5 text-[var(--pf-c1)]" : "text-white/50 hover:text-white/80"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📄" }), " skills.txt"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setSelectedFile("contact"),
									className: `flex w-full items-center gap-1.5 px-3 py-1 text-left transition ${selectedFile === "contact" ? "bg-white/5 text-[var(--pf-c1)]" : "text-white/50 hover:text-white/80"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📄" }), " links.json"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-white/5 my-1" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setSelectedFile("package"),
									className: `flex w-full items-center gap-1.5 px-3 py-1 text-left transition ${selectedFile === "package" ? "bg-white/5 text-[var(--pf-c1)]" : "text-white/50 hover:text-white/80"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📄" }), " package.json"]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 overflow-y-auto p-3.5 select-text",
							style: { scrollbarWidth: "none" },
							children: [
								selectedFile === "profile" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10.5px]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white/40",
											children: "{"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pl-3.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[var(--pf-c1)]",
													children: "\"name\""
												}),
												": ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#a8ff78]",
													children: "\"Makoju Suman Kumar\""
												}),
												","
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pl-3.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[var(--pf-c1)]",
													children: "\"role\""
												}),
												": ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#a8ff78]",
													children: "\"Fullstack Engineer\""
												}),
												","
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pl-3.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[var(--pf-c1)]",
													children: "\"location\""
												}),
												": ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#a8ff78]",
													children: "\"Odisha, IN\""
												}),
												","
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pl-3.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[var(--pf-c1)]",
													children: "\"status\""
												}),
												": ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#a8ff78]",
													children: "\"open_to_work\""
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white/40",
											children: "}"
										}) })
									]
								}),
								selectedFile === "skills" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[9.5px] leading-relaxed text-white/70",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[var(--pf-c2)]",
											children: "// Core Technologies"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[var(--pf-c1)]",
											children: "Frontend :"
										}), " React, Javascript, TS"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[var(--pf-c1)]",
											children: "Backend  :"
										}), " Node.js, Express.js"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[var(--pf-c1)]",
											children: "Mobile   :"
										}), " Flutter, Kotlin, RN"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[var(--pf-c1)]",
											children: "Database :"
										}), " MongoDB, MySQL, SQLite"] })
									]
								}),
								selectedFile === "contact" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white/40",
											children: "{"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pl-3.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[var(--pf-c1)]",
													children: "\"email\""
												}),
												": ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#a8ff78]",
													children: "\"ms.kumar.developer05@gmail.com\""
												}),
												","
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pl-3.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[var(--pf-c1)]",
													children: "\"github\""
												}),
												": ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#a8ff78]",
													children: "\"github.com/Msumankumar05\""
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white/40",
											children: "}"
										}) })
									]
								}),
								selectedFile === "package" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[9px] leading-relaxed text-white/50",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white/30",
											children: "{"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pl-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[var(--pf-c1)]",
													children: "\"dependencies\""
												}),
												": ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-white/30",
													children: "{"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pl-6",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[var(--pf-c2)]",
													children: "\"react\""
												}),
												": ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#a8ff78]",
													children: "\"^19.0.0\""
												}),
												","
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pl-6",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[var(--pf-c2)]",
													children: "\"framer-motion\""
												}),
												": ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#a8ff78]",
													children: "\"^11.0.0\""
												}),
												","
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pl-6",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[var(--pf-c2)]",
													children: "\"lenis\""
												}),
												": ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#a8ff78]",
													children: "\"^1.0.0\""
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "pl-3",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-white/30",
												children: "}"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white/30",
											children: "}"
										}) })
									]
								})
							]
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TerminalEmulator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-5 h-px bg-gradient-to-r from-[var(--pf-c1)]/20 via-[var(--pf-c2)]/20 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2 px-5 py-3",
						children: [
							"MERN",
							"Flutter",
							"React Native",
							"AI / LLMs"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "border border-[var(--pf-c1)]/20 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--pf-c1)]/60",
							children: t
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: (e) => {
							const rect = e.currentTarget.getBoundingClientRect();
							const cx = rect.left + rect.width / 2;
							const cy = rect.top + rect.height / 2;
							const el = document.documentElement;
							const next = (el.getAttribute("data-pf-theme") === "gold" ? "gold" : "cyber") === "gold" ? "cyber" : "gold";
							if (document.getElementById("pf-portal-overlay")) return;
							const nextC1 = next === "gold" ? "#f5c14a" : "#00e5ff";
							const nextC2 = next === "gold" ? "#ff7a2d" : "#ff2d7d";
							const nextC3 = next === "gold" ? "#ffd98a" : "#c084fc";
							document.body.classList.add("pf-portal-active");
							const overlay = document.createElement("div");
							overlay.id = "pf-portal-overlay";
							overlay.style.cssText = `
              position: fixed; inset: 0; z-index: 99999; pointer-events: none;
              --px: ${cx}px; --py: ${cy}px;
              --c1: ${nextC1}; --c2: ${nextC2}; --c3: ${nextC3};
            `;
							overlay.innerHTML = `
              <div class="pf-veil"></div>
              <div class="pf-bloom" style="
                background: radial-gradient(circle at var(--px) var(--py),
                  rgb(from var(--c3) r g b / 0.55) 0%,
                  rgb(from var(--c2) r g b / 0.28) 22%,
                  rgb(from var(--c1) r g b / 0.14) 45%,
                  transparent 70%);
              "></div>
              <div class="pf-ripple pf-ripple-1" style="left: var(--px); top: var(--py); border-color: rgb(from var(--c1) r g b / 0.7);"></div>
              <div class="pf-ripple pf-ripple-2" style="left: var(--px); top: var(--py); border-color: rgb(from var(--c2) r g b / 0.5);"></div>
              <div class="pf-ripple pf-ripple-3" style="left: var(--px); top: var(--py); border-color: rgb(from var(--c3) r g b / 0.35);"></div>
              <div class="pf-grain"></div>
            `;
							document.body.appendChild(overlay);
							window.setTimeout(() => {
								el.setAttribute("data-pf-theme", next);
								try {
									localStorage.setItem("pf-theme", next);
								} catch {}
							}, 520);
							window.setTimeout(() => {
								document.body.classList.remove("pf-portal-active");
								overlay.remove();
							}, 1600);
						},
						className: "group relative flex w-full items-center justify-center gap-2 border-t border-white/5 px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-white/70 transition hover:text-white",
						style: { background: "linear-gradient(90deg, rgb(from var(--pf-c1) r g b / 0.08), rgb(from var(--pf-c2) r g b / 0.08), rgb(from var(--pf-c3) r g b / 0.08))" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-1.5 w-1.5 rounded-full",
								style: { background: "var(--pf-c1)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-1.5 w-1.5 rounded-full",
								style: { background: "var(--pf-c2)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-1.5 w-1.5 rounded-full",
								style: { background: "var(--pf-c3)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1",
								children: "Swap Theme"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1 opacity-50 transition group-hover:opacity-100",
								children: "↻"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-0",
						style: { background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%, rgb(from var(--pf-c1) r g b / 0.03) 100%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-0.5 w-full bg-gradient-to-r from-[var(--pf-c1)] via-[var(--pf-c3)] to-[var(--pf-c2)]" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { y: [
					0,
					-8,
					0
				] },
				transition: {
					duration: 3.5,
					repeat: Infinity,
					ease: "easeInOut"
				},
				className: "absolute -right-4 -top-4 border border-[var(--pf-c1)]/30 bg-[var(--pf-bg)] px-3 py-1.5 shadow-[0_0_20px_rgb(from var(--pf-c1) r g b / 0.2)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--pf-c1)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--pf-c1)]" }), "Available Now"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { y: [
					0,
					8,
					0
				] },
				transition: {
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1
				},
				className: "absolute -bottom-4 -left-4 border border-[var(--pf-c2)]/30 bg-[var(--pf-bg)] px-3 py-1.5 shadow-[0_0_20px_rgb(from var(--pf-c2) r g b / 0.15)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--pf-c2)]/80",
					children: "MSK"
				})
			})
		]
	});
}
var SOCIAL_LINKS = [
	{
		label: "GitHub",
		icon: Github,
		href: "https://github.com/Msumankumar05"
	},
	{
		label: "LinkedIn",
		icon: Linkedin,
		href: "https://www.linkedin.com/in/m-suman-kumar-43b3a1300/"
	},
	{
		label: "Instagram",
		icon: Instagram,
		href: "https://www.instagram.com/suman_k_72/"
	},
	{
		label: "Email",
		icon: Mail,
		href: "mailto: makojusumankumar@gmail.com"
	}
];
function Hero() {
	const spotRef = (0, import_react.useRef)(null);
	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const [ping, setPing] = (0, import_react.useState)(32);
	const [time, setTime] = (0, import_react.useState)("");
	const [sys, setSys] = (0, import_react.useState)({
		os: "Linux",
		browser: "Chrome"
	});
	(0, import_react.useEffect)(() => {
		const pTimer = setInterval(() => {
			setPing(Math.floor(Math.random() * 25) + 18);
		}, 2500);
		const clockTimer = setInterval(() => {
			setTime((/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
				hour12: true,
				timeZone: "Asia/Kolkata"
			}));
		}, 1e3);
		if (typeof window !== "undefined") {
			const ua = navigator.userAgent;
			let os = "Linux";
			if (ua.indexOf("Win") !== -1) os = "Windows";
			else if (ua.indexOf("Mac") !== -1) os = "macOS";
			else if (ua.indexOf("X11") !== -1) os = "UNIX";
			else if (ua.indexOf("Linux") !== -1) os = "Linux";
			else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) os = "Mobile OS";
			let browser = "Chrome";
			if (ua.indexOf("Firefox") !== -1) browser = "Firefox";
			else if (ua.indexOf("Safari") !== -1 && ua.indexOf("Chrome") === -1) browser = "Safari";
			else if (ua.indexOf("Edge") !== -1) browser = "Edge";
			else if (ua.indexOf("OPR") !== -1 || ua.indexOf("Opera") !== -1) browser = "Opera";
			setSys({
				os,
				browser
			});
		}
		setTime((/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
			hour12: true,
			timeZone: "Asia/Kolkata"
		}));
		return () => {
			clearInterval(pTimer);
			clearInterval(clockTimer);
		};
	}, []);
	const rx = useTransform(my, [-1, 1], [3, -3]);
	const ry = useTransform(mx, [-1, 1], [-4, 4]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative flex min-h-screen lg:h-screen lg:min-h-0 items-center overflow-hidden px-6 pt-24 pb-16 md:px-20 lg:py-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: spotRef,
				className: "pointer-events-none absolute inset-0 z-0",
				style: { background: "radial-gradient(700px circle at var(--x,40%) var(--y,50%), rgb(from var(--pf-c1) r g b / 0.07), transparent 55%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute right-0 top-0 h-full w-[55%] z-0",
				style: { background: "radial-gradient(ellipse at 78% 42%, rgb(from var(--pf-c3) r g b / 0.09) 0%, rgb(from var(--pf-c1) r g b / 0.05) 38%, transparent 68%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute bottom-0 left-0 h-[40%] w-[35%] z-0",
				style: { background: "radial-gradient(ellipse at 0% 100%, rgb(from var(--pf-c2) r g b / 0.06), transparent 65%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid3D, {
				mx,
				my
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeuralConstellation, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingShape, {
				mx,
				my,
				factorX: 1.5,
				factorY: .8,
				className: "left-[42%] top-[25%] z-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					animate: {
						rotate: 360,
						y: [
							0,
							-10,
							0
						]
					},
					transition: {
						rotate: {
							duration: 15,
							repeat: Infinity,
							ease: "linear"
						},
						y: {
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut"
						}
					},
					className: "h-7 w-7 rotate-45 border border-[var(--pf-c1)]/30 bg-[var(--pf-bg)]/40 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgb(from var(--pf-c1) r g b / 0.12)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] text-[var(--pf-c1)]/60 font-mono -rotate-45",
						children: "✦"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingShape, {
				mx,
				my,
				factorX: -1.2,
				factorY: 1.2,
				className: "right-[45%] bottom-[20%] z-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					animate: {
						rotate: -360,
						y: [
							0,
							12,
							0
						]
					},
					transition: {
						rotate: {
							duration: 20,
							repeat: Infinity,
							ease: "linear"
						},
						y: {
							duration: 5,
							repeat: Infinity,
							ease: "easeInOut"
						}
					},
					className: "h-8 w-8 border border-[var(--pf-c2)]/30 bg-[var(--pf-bg)]/40 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgb(from var(--pf-c2) r g b / 0.12)]",
					style: { clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingShape, {
				mx,
				my,
				factorX: .6,
				factorY: -1.4,
				className: "right-[8%] top-[15%] z-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					animate: {
						rotate: 180,
						y: [
							0,
							-15,
							0
						]
					},
					transition: {
						rotate: {
							duration: 25,
							repeat: Infinity,
							ease: "linear"
						},
						y: {
							duration: 6,
							repeat: Infinity,
							ease: "easeInOut"
						}
					},
					className: "h-10 w-10 border border-[var(--pf-c3)]/30 bg-[var(--pf-bg)]/40 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgb(from var(--pf-c3) r g b / 0.12)]",
					style: { clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)" }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 grid w-full max-w-7xl mx-auto grid-cols-1 items-center gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: -10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .6 },
							className: "mb-6 inline-flex items-center gap-2.5 border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative flex h-1.5 w-1.5 shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--pf-c1)] opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--pf-c1)] shadow-[0_0_8px_var(--pf-c1)]" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] uppercase tracking-[0.28em] text-white/55",
									children: "Odisha, India"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-px bg-white/15" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--pf-c1)]",
									children: "Open to Work"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 28,
								filter: "blur(10px)"
							},
							animate: {
								opacity: 1,
								y: 0,
								filter: "blur(0px)"
							},
							transition: {
								duration: 1,
								ease: [
									.2,
									.7,
									.2,
									1
								]
							},
							style: {
								rotateX: rx,
								rotateY: ry,
								transformPerspective: 1400
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-1.5 block font-display text-xl italic font-light text-white/40 md:text-2xl tracking-wide",
								children: "Hi, I'm"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display leading-[0.92] tracking-tight text-white select-none cursor-default",
								style: { fontSize: "clamp(4.5rem, 11vw, 8.2rem)" },
								children: ["MSK", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										background: "linear-gradient(135deg,var(--pf-c1),var(--pf-c3))",
										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent"
									},
									children: "."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: .25,
								duration: .6
							},
							className: "mt-5 flex flex-wrap gap-2",
							children: [
								"Full-Stack Engineer",
								"Mobile Dev",
								"AI Builder"
							].map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/55",
								children: chip
							}, chip))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: .35,
								duration: .7
							},
							className: "mt-5 max-w-[42ch] text-[14px] font-light leading-relaxed text-white/50",
							children: [
								"Building the full spectrum — from pixel-perfect UIs to robust backends, cross-platform mobile apps, and",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[var(--pf-c2)] font-mono",
									children: "AI-powered"
								}),
								" experiences that ship."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 8
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: .42,
								duration: .6
							},
							className: "mt-5 max-w-[42ch] grid grid-cols-3 gap-px border border-white/5 bg-white/5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-[var(--pf-bg)]/60 px-3.5 py-2 border-r border-white/5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white/20 select-none",
											children: "ping /"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[var(--pf-c1)] font-bold tabular-nums",
											children: [ping, "ms"]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-[var(--pf-bg)]/60 px-3.5 py-2 border-r border-white/5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white/20 select-none",
											children: "env /"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-white/70",
											children: [
												sys.os,
												" · ",
												sys.browser
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-[var(--pf-bg)]/60 px-3.5 py-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white/20 select-none",
											children: "time /"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white/70 tabular-nums",
											children: time || "11:03 PM"
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: .48,
								duration: .7
							},
							className: "mt-8 flex flex-wrap items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#work",
									className: "group relative flex items-center gap-2.5 overflow-hidden bg-[var(--pf-c1)] px-7 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-black transition-all hover:bg-white",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" }),
										"View Projects",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "transition-transform duration-300 group-hover:translate-x-1",
											children: "→"
										})
									]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, {
									strength: .2,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#contact",
										className: "flex items-center gap-2 border border-white/20 px-7 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-white transition hover:border-white hover:bg-white hover:text-black",
										children: "Get In Touch"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "/resume.pdf",
									target: "_blank",
									rel: "noreferrer",
									className: "flex items-center gap-2 px-4 py-3.5 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 transition hover:text-[var(--pf-c1)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3 w-3" }), " Resume"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: {
								delay: .65,
								duration: .7
							},
							className: "mt-7 flex flex-wrap gap-x-6 gap-y-2",
							children: SOCIAL_LINKS.map(({ label, icon: Icon, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href,
								target: "_blank",
								rel: "noreferrer",
								className: "group flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 transition hover:text-white",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3 w-3" }),
									label,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-2.5 w-2.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
								]
							}, label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: {
								delay: .85,
								duration: .8
							},
							className: "mt-9 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex w-max animate-marquee gap-2",
								children: [...TECH_BADGES, ...TECH_BADGES].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "whitespace-nowrap border border-white/10 bg-white/[0.02] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/55",
									children: t
								}, i))
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						x: 40,
						scale: .95
					},
					animate: {
						opacity: 1,
						x: 0,
						scale: 1
					},
					transition: {
						delay: .28,
						duration: 1,
						ease: [
							.2,
							.7,
							.2,
							1
						]
					},
					className: "hidden lg:flex lg:col-span-5 lg:items-center lg:justify-end",
					style: { perspective: 1e3 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-card-scale origin-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCard, {})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 1.2,
					duration: .8
				},
				className: "pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 hidden flex-col items-center gap-2 md:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[8px] uppercase tracking-[0.5em] text-white/25",
					children: "Scroll"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					animate: { y: [
						0,
						8,
						0
					] },
					transition: {
						duration: 1.6,
						repeat: Infinity,
						ease: "easeInOut"
					},
					className: "h-8 w-px bg-gradient-to-b from-[var(--pf-c1)]/60 to-transparent"
				})]
			})
		]
	});
}
function SectionEyebrow({ num, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-white/25",
				children: [num, " /"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[var(--pf-c1)]",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ml-2 h-px w-8 bg-[var(--pf-c1)]/40" })
		]
	});
}
function Stat({ v, label, suffix }) {
	const { ref, seen } = useInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "bg-[var(--pf-bg)] p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "font-display text-4xl italic text-white",
			children: [useCountUp(v, seen).toLocaleString(), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[var(--pf-c1)]",
				children: suffix
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 font-mono text-[9px] uppercase tracking-[0.25em] text-white/40",
			children: label
		})]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative px-6 py-32 md:px-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, {
				num: "01",
				title: "The Builder"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid gap-16 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
							initial: {
								opacity: 0,
								y: 30
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-100px"
							},
							transition: {
								duration: .9,
								ease: [
									.2,
									.7,
									.2,
									1
								]
							},
							className: "font-display text-4xl leading-[1.05] text-white md:text-6xl lg:text-7xl",
							children: [
								"A builder who likes the ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-[var(--pf-c2)]",
									children: "messy bit"
								}),
								" between the database and the user."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-80px"
							},
							transition: {
								delay: .15,
								duration: .7
							},
							className: "mt-10 max-w-xl space-y-5 text-sm leading-relaxed text-white/60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"I'm ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-white",
									children: "Makoju Suman Kumar"
								}),
								" — an MCA student and full-stack developer who enjoys turning ideas into production-ready software across web, mobile, and AI."
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I write code because I like the moment something I built actually works for someone else. I care about clean architecture, intuitive UX, and continuously leveling up the craft." })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap gap-2",
							children: [
								"MCA Student",
								"Full-Stack",
								"Mobile",
								"AI Enthusiast",
								"Fast Learner"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60",
								children: t
							}, t))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-100px"
					},
					transition: {
						delay: .2,
						duration: .8
					},
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative border border-white/10 bg-white/[0.02] p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-px -top-px h-14 w-14 border-r border-t border-[var(--pf-c1)]/60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-px -left-px h-14 w-14 border-b border-l border-[var(--pf-c2)]/50" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-8 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.3em]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white/40",
									children: "profile.json"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5 text-[var(--pf-c1)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 animate-pulse rounded-full bg-[var(--pf-c1)]" }), " LIVE"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4 text-[11px]",
								children: [
									["Name", "Makoju Suman Kumar"],
									["Role", "Full-Stack Web · Mobile · AI"],
									["Based", "Odisha, India"],
									["Email", "ms.kumar.developer05@gmail.com"],
									["Status", "Open to internships · freelance · contracts"]
								].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 border-b border-white/5 pb-3 last:border-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono uppercase tracking-[0.2em] text-white/35",
										children: k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "col-span-2 text-white/85",
										children: v
									})]
								}, k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid grid-cols-2 gap-px border border-white/10 bg-white/10",
								children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									v: s.value,
									label: s.label,
									suffix: s.suffix
								}, s.label))
							})
						]
					})
				})]
			})]
		})
	});
}
function Stack() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stack",
		className: "relative px-6 py-32 md:px-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, {
					num: "02",
					title: "The Toolkit"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-100px"
					},
					transition: { duration: .8 },
					className: "mt-8 font-display text-5xl leading-[1.05] text-white md:text-7xl",
					children: [
						"The full ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-[var(--pf-c1)]",
							children: "constellation"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-sm leading-relaxed text-white/50",
					children: "From pixel-perfect UI to backend systems, mobile apps, and AI — the tools I reach for."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3",
					children: SKILL_GROUPS.map((group, i) => {
						const Icon = group.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 24
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-80px"
							},
							transition: {
								duration: .6,
								delay: i * .05
							},
							className: "group relative overflow-hidden bg-[var(--pf-bg)] p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--pf-c1)]/0 blur-3xl transition-all duration-500 group-hover:bg-[var(--pf-c1)]/10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-[var(--pf-c1)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-2xl italic text-white",
											children: group.title
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-[9px] uppercase tracking-[0.25em] text-white/30",
										children: ["0", i + 1]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 flex flex-wrap gap-2",
									children: group.items.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/65 transition group-hover:border-white/25",
										children: x
									}, x))
								})
							]
						}, group.title);
					})
				})
			]
		})
	});
}
function WorkFrame({ p, i, total }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-screen w-screen shrink-0 items-center justify-center px-6 md:px-24",
		style: { background: `radial-gradient(ellipse at 50% 60%, ${p.accent}12, transparent 65%)` },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute left-[6vw] top-1/2 hidden -translate-y-1/2 select-none font-display italic leading-none text-white/5 md:block",
				style: { fontSize: "28vw" },
				children: String(i + 1).padStart(2, "0")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em]",
							style: { color: p.accent },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-px w-6",
									style: { backgroundColor: p.accent }
								}),
								"Frame ",
								String(i + 1).padStart(2, "0")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50",
							children: p.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-6xl leading-[0.95] text-white md:text-8xl",
							children: p.name.split(" ").map((w, wi) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: wi === 1 ? "italic" : "",
								children: [w, wi < p.name.split(" ").length - 1 ? " " : ""]
							}, wi))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg",
							children: p.longDesc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display leading-none",
								style: {
									color: p.accent,
									fontSize: "clamp(3rem, 7vw, 5.5rem)"
								},
								children: [p.metric.value, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[0.5em] align-top",
									style: { color: p.accent },
									children: p.metric.unit
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 max-w-[16rem] font-mono text-[10px] uppercase leading-relaxed tracking-[0.22em] text-white/55",
								children: p.metric.label
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap gap-1.5",
							children: p.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "border border-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70",
								children: s
							}, s))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#",
									className: `group inline-flex items-center gap-2 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.3em] transition ${p.placeholder ? "pointer-events-none opacity-40" : ""}`,
									style: {
										backgroundColor: p.accent,
										color: "var(--pf-bg)"
									},
									children: ["Read case study", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
								}),
								p.liveUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: p.liveUrl,
									target: "_blank",
									rel: "noreferrer",
									className: `group inline-flex items-center gap-2 border border-white/20 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/80 transition hover:border-[var(--pf-c1)] hover:text-[var(--pf-c1)] ${p.placeholder ? "pointer-events-none opacity-40" : ""}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" }), "Live"]
								}),
								p.githubUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: p.githubUrl,
									target: "_blank",
									rel: "noreferrer",
									className: `group inline-flex items-center gap-2 border border-white/20 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/80 transition hover:border-[var(--pf-c1)] hover:text-[var(--pf-c1)] ${p.placeholder ? "pointer-events-none opacity-40" : ""}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-3 w-3" }), "GitHub"]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex flex-col gap-0 overflow-hidden border border-white/10 bg-[var(--pf-card)]",
						style: {
							boxShadow: `0 60px 140px -50px ${p.accent}44`,
							minHeight: "clamp(420px, 55vh, 640px)"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-px w-full",
								style: { background: `linear-gradient(to right, ${p.accent}, transparent)` }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-white/5 px-7 py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.2em]",
										style: {
											backgroundColor: p.accent,
											color: "var(--pf-bg)"
										},
										children: p.tag
									}), p.placeholder && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "border border-white/20 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/50",
										children: "In Progress"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.3em] text-white/30",
									children: [
										p.placeholder ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1.5 text-amber-400/60",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-amber-400/70" }), "Alpha"]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1.5",
											style: { color: `${p.accent}cc` },
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "h-1.5 w-1.5 animate-pulse rounded-full",
												style: { backgroundColor: p.accent }
											}), "Live"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white/20",
											children: "·"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											String(i + 1).padStart(2, "0"),
											" / ",
											String(total).padStart(2, "0")
										] })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex-1 px-7 py-8",
								style: { background: `radial-gradient(ellipse at 80% 20%, ${p.accent}18, transparent 60%)` },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"aria-hidden": true,
										className: "pointer-events-none absolute -right-4 -bottom-6 select-none font-display italic leading-none text-white/[0.04]",
										style: { fontSize: "11rem" },
										children: p.icon
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-5 font-mono text-[9px] uppercase tracking-[0.35em] text-white/35",
										children: p.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-3.5",
										children: p.longDesc.split(". ").filter(Boolean).slice(0, 3).map((sentence, si) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1.5 h-1 w-1 shrink-0 rounded-full",
												style: { backgroundColor: p.accent }
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-[13px] leading-relaxed text-white/65",
												children: [sentence.replace(/\.$/, ""), "."]
											})]
										}, si))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-7 h-px bg-white/5" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-x-6 gap-y-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mb-1 font-mono text-[8px] uppercase tracking-[0.35em] text-white/30",
												children: "Type"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[12px] font-medium text-white/80",
												children: p.tag
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mb-1 font-mono text-[8px] uppercase tracking-[0.35em] text-white/30",
												children: "Domain"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[12px] font-medium text-white/80",
												children: p.category.split(" · ")[0]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mb-1 font-mono text-[8px] uppercase tracking-[0.35em] text-white/30",
												children: "Key Metric"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "font-display text-[13px] font-medium",
												style: { color: p.accent },
												children: [p.metric.value, p.metric.unit]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mb-1 font-mono text-[8px] uppercase tracking-[0.35em] text-white/30",
												children: "Stack size"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-[12px] font-medium text-white/80",
												children: [p.stack.length, " technologies"]
											})] })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-6 h-px bg-white/5" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-3 font-mono text-[8px] uppercase tracking-[0.35em] text-white/30",
										children: "Built with"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-1.5",
										children: p.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.15em] transition",
											style: {
												borderColor: `${p.accent}30`,
												color: `${p.accent}bb`
											},
											children: s
										}, s))
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-px w-full",
								style: { background: `linear-gradient(to left, ${p.accent}60, transparent)` }
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute right-[6vw] top-1/2 hidden -translate-y-1/2 select-none font-display italic leading-none text-white/5 md:block",
				style: { fontSize: "28vw" },
				children: String(i + 1).padStart(2, "0")
			})
		]
	});
}
function Work() {
	const wrap = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: wrap,
		offset: ["start start", "end end"]
	});
	const total = PROJECTS.length;
	const smoothX = useSpring(useTransform(scrollYProgress, [0, 1], ["0vw", `-${(total - 1) * 100}vw`]), {
		stiffness: 90,
		damping: 22,
		mass: .5
	});
	const [active, setActive] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		return scrollYProgress.on("change", (v) => {
			const idx = Math.min(total - 1, Math.max(0, Math.round(v * (total - 1))));
			setActive(idx);
		});
	}, [scrollYProgress, total]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		ref: wrap,
		className: "relative",
		style: { height: `${total * 100}vh` },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sticky top-0 h-screen w-full overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none absolute inset-x-0 top-6 z-20 flex items-center justify-between px-6 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 md:px-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--pf-c1)]",
								children: "03"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-white/20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Selected Work — Horizontal Track" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-white",
							children: String(active + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-white/40",
							children: [" / ", String(total).padStart(2, "0")]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute bottom-6 left-6 z-20 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 md:left-24",
					children: "03 / Selected Work"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none absolute bottom-6 right-6 z-20 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 md:right-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						animate: { y: [
							0,
							4,
							0
						] },
						transition: {
							duration: 1.6,
							repeat: Infinity,
							ease: "easeInOut"
						},
						className: "text-[var(--pf-c1)]",
						children: "↓"
					}), "Scroll to pan"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					style: { x: smoothX },
					className: "flex h-full will-change-transform",
					children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkFrame, {
						p,
						i,
						total
					}, p.name + i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-6 bottom-14 z-20 flex items-center gap-3 md:inset-x-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-1 items-center gap-1.5",
						children: PROJECTS.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative h-px flex-1 bg-white/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "absolute inset-y-0 left-0 bg-[var(--pf-c1)]",
								animate: { scaleX: i < active ? 1 : i === active ? .5 : 0 },
								style: {
									transformOrigin: "left",
									width: "100%"
								},
								transition: {
									duration: .4,
									ease: "easeOut"
								}
							})
						}, i))
					})
				})
			]
		})
	});
}
var JOURNEY = [
	{
		period: "2022 — 2025",
		title: "Foundations",
		icon: BookOpen,
		tags: [
			"B.Sc CS",
			"DSA",
			"DBMS",
			"OS",
			"Software Eng."
		]
	},
	{
		period: "2023 — 2025",
		title: "Full-Stack",
		icon: Terminal,
		tags: [
			"MERN",
			"REST APIs",
			"Auth",
			"Dashboards",
			"Deploy"
		]
	},
	{
		period: "2024 — 2025",
		title: "Mobile",
		icon: Smartphone,
		tags: [
			"Flutter",
			"Kotlin",
			"State Mgmt",
			"Native UI"
		]
	},
	{
		period: "2025 — 2026",
		title: "Applied AI",
		icon: Cpu,
		tags: [
			"LLMs",
			"Voice-First",
			"SKY AI",
			"Prompting"
		]
	},
	{
		period: "2026 — Present",
		title: "Postgraduate",
		icon: GraduationCap,
		tags: [
			"MCA",
			"Distributed Sys",
			"Research"
		]
	},
	{
		period: "Ongoing",
		title: "Craft",
		icon: Compass,
		tags: [
			"Open Source",
			"Reading",
			"Shipping",
			"Always Learning"
		]
	}
];
function Journey() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "journey",
		className: "relative px-6 py-32 md:px-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, {
					num: "04",
					title: "The Timeline"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-100px"
					},
					transition: { duration: .8 },
					className: "mt-8 font-display text-5xl leading-[1.05] text-white md:text-7xl",
					children: [
						"Experience &",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-[var(--pf-c1)]",
							children: "learning"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-sm leading-relaxed text-white/50",
					children: "A quiet arc — from fundamentals to full-stack, mobile, and applied AI. The tools change, the craft stays."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3",
					children: JOURNEY.map((item, i) => {
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 24
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-80px"
							},
							transition: {
								duration: .6,
								delay: i * .05
							},
							className: "group relative overflow-hidden bg-[var(--pf-bg)] p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--pf-c1)]/0 blur-3xl transition-all duration-500 group-hover:bg-[var(--pf-c1)]/10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-[var(--pf-c1)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-2xl italic text-white",
											children: item.title
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-[9px] uppercase tracking-[0.25em] text-white/30",
										children: ["0", i + 1]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40",
									children: item.period
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 flex flex-wrap gap-2",
									children: item.tags.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/65 transition group-hover:border-white/25",
										children: x
									}, x))
								})
							]
						}, item.title + i);
					})
				})
			]
		})
	});
}
function ContribGraph() {
	const cells = Array.from({ length: 182 }, (_, i) => {
		const seed = Math.sin(i * 12.9898) * 43758.5453;
		const r = seed - Math.floor(seed);
		return r < .35 ? 0 : r < .6 ? 1 : r < .8 ? 2 : r < .94 ? 3 : 4;
	});
	const colors = [
		"bg-white/5",
		"bg-[var(--pf-c1)]/20",
		"bg-[var(--pf-c1)]/40",
		"bg-[var(--pf-c1)]/70",
		"bg-[var(--pf-c2)]"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-flow-col grid-rows-7 gap-[3px]",
		children: cells.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-2.5 w-2.5 ${colors[v]}` }, i))
	});
}
function Arena() {
	const { ref, seen } = useInView();
	const commits = useCountUp(1240, seen);
	const stars = useCountUp(320, seen);
	const prs = useCountUp(85, seen);
	const TABS = [
		{
			key: "codeforces",
			label: "Codeforces"
		},
		{
			key: "codechef",
			label: "CodeChef"
		},
		{
			key: "leetcode",
			label: "LeetCode"
		}
	];
	const [activeTab, setActiveTab] = (0, import_react.useState)("leetcode");
	const profile = CODING_PROFILES[activeTab];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "arena",
		className: "relative px-6 py-32 md:px-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			ref,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, {
					num: "05a",
					title: "The Arena"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-80px"
						},
						transition: { duration: .8 },
						className: "font-display text-4xl leading-[1.05] text-white md:text-6xl lg:max-w-xl",
						children: [
							"Numbers from the",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-[var(--pf-c1)]",
								children: "late-night"
							}),
							" arena."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-mono text-[10px] uppercase tracking-[0.3em] text-white/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-white",
							children: "——"
						}), "\xA0\xA01000+ Problems · 30+ Contests"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex items-center gap-0 border-b border-white/10",
					children: TABS.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActiveTab(tab.key),
						className: `relative px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.25em] transition-colors ${activeTab === tab.key ? "text-[var(--pf-c1)]" : "text-white/40 hover:text-white/80"}`,
						children: [activeTab === tab.key && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							layoutId: "arena-tab-underline",
							className: "absolute inset-x-0 bottom-[-1px] h-[1.5px] bg-[var(--pf-c1)]",
							transition: {
								type: "spring",
								stiffness: 380,
								damping: 30
							}
						}), tab.label]
					}, tab.key))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -12
						},
						transition: {
							duration: .45,
							ease: [
								.2,
								.7,
								.2,
								1
							]
						},
						className: "mt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-8 border border-white/10 bg-white/[0.02] lg:grid-cols-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex flex-col justify-between overflow-hidden px-8 py-10 lg:col-span-7",
								style: { background: "radial-gradient(ellipse at 25% 80%, rgb(from var(--pf-c1) r g b / 0.04), transparent 65%)" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"aria-hidden": true,
										className: "pointer-events-none absolute -bottom-4 -right-2 select-none font-display italic leading-none text-white/[0.04]",
										style: { fontSize: "12rem" },
										children: profile.rankName.split(" ")[0]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-2 font-mono text-[9px] uppercase tracking-[0.35em] text-white/30",
										children: "Current rank"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "relative font-display text-[5.5rem] italic leading-[0.9] text-white md:text-[8rem]",
										children: profile.rankName
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-[9px] uppercase tracking-[0.3em] text-white/40",
											children: profile.sub
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: profile.url,
											target: "_blank",
											rel: "noreferrer",
											className: "mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--pf-c1)]/70 transition hover:text-[var(--pf-c1)]",
											children: ["View Profile ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3 w-3" })]
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 border-l border-white/10 lg:col-span-5",
								children: profile.stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `flex flex-col justify-center px-7 py-7 ${i % 2 === 0 ? "border-r border-white/10" : ""} ${i < 2 ? "border-b border-white/10" : ""}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-3xl italic text-white md:text-4xl",
										children: s.value
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1.5 font-mono text-[8px] uppercase tracking-[0.3em] text-white/35",
										children: s.label
									})]
								}, s.label))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 border border-white/10 bg-white/[0.02] px-8 py-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-4 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-display text-lg italic text-white",
										children: [
											profile.platform,
											" —",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[var(--pf-c1)]",
												children: [profile.stats[0].value, " solved"]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "hidden items-center gap-4 font-mono text-[9px] uppercase tracking-[0.25em] text-white/40 md:flex",
										children: profile.breakdown.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											b.label,
											" ",
											b.count
										] }, b.label))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-8 w-full overflow-hidden",
									children: profile.breakdown.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										initial: { width: 0 },
										animate: { width: `${b.pct}%` },
										transition: {
											duration: .8,
											delay: i * .12,
											ease: [
												.2,
												.7,
												.2,
												1
											]
										},
										className: `${b.color} flex items-center justify-start overflow-hidden px-3 ${i > 0 ? "border-l border-[var(--pf-bg)]/60" : ""}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "whitespace-nowrap font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-[var(--pf-bg)]",
											children: [
												b.count,
												" ",
												b.label
											]
										})
									}, b.label))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 flex items-center gap-5",
									children: TABS.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setActiveTab(tab.key),
										className: `font-mono text-[9px] uppercase tracking-[0.3em] transition ${activeTab === tab.key ? "text-[var(--pf-c1)]" : "text-white/30 hover:text-white/60"}`,
										children: [
											tab.label,
											" ",
											activeTab === tab.key ? "↗" : "/"
										]
									}, tab.key))
								})
							]
						})]
					}, activeTab)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-20 border-t border-white/5" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, {
					num: "05b",
					title: "Open Source"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-8 font-display text-5xl leading-[1.05] text-white md:text-6xl",
					children: [
						"Building in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-[var(--pf-c2)]",
							children: "public"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid gap-6 lg:grid-cols-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-white/10 bg-white/[0.02] p-8 lg:col-span-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-6 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-white/70",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" }), "@MSK-INDIA"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[9px] uppercase tracking-[0.25em] text-white/40",
									children: "Last 26 weeks"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-x-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContribGraph, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid grid-cols-3 gap-px border border-white/10 bg-white/10",
								children: [
									{
										l: "Commits",
										v: commits
									},
									{
										l: "Stars",
										v: stars
									},
									{
										l: "PRs",
										v: prs
									}
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-[var(--pf-bg)] p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-3xl italic text-white",
										children: s.v.toLocaleString()
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 font-mono text-[9px] uppercase tracking-[0.25em] text-white/40",
										children: s.l
									})]
								}, s.l))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-white/10 bg-white/[0.02] p-8 lg:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50",
							children: "Top Languages"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-4",
							children: [
								{
									name: "TypeScript",
									pct: 32,
									color: "var(--pf-c1)"
								},
								{
									name: "JavaScript",
									pct: 26,
									color: "#7dd3fc"
								},
								{
									name: "Dart",
									pct: 14,
									color: "var(--pf-c2)"
								},
								{
									name: "Kotlin",
									pct: 12,
									color: "var(--pf-c3)"
								},
								{
									name: "Java",
									pct: 9,
									color: "#22d3ee"
								},
								{
									name: "Other",
									pct: 7,
									color: "#64748b"
								}
							].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white/80",
									children: l.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-white/40",
									children: [l.pct, "%"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-[3px] bg-white/5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: { width: 0 },
									whileInView: { width: `${l.pct}%` },
									viewport: { once: true },
									transition: {
										duration: 1,
										delay: .1,
										ease: [
											.2,
											.7,
											.2,
											1
										]
									},
									style: { background: l.color },
									className: "h-full"
								})
							})] }, l.name))
						})]
					})]
				})
			]
		})
	});
}
function Contact() {
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [errorMessage, setErrorMessage] = (0, import_react.useState)("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("sending");
		setErrorMessage("");
		try {
			const params = new URLSearchParams();
			params.append("name", formData.name);
			params.append("email", formData.email);
			params.append("message", formData.message);
			params.append("_subject", `Portfolio contact from ${formData.name}`);
			params.append("_template", "table");
			params.append("_captcha", "false");
			if (!(await fetch("https://formsubmit.co/ajax/ms.kumar.developer05@gmail.com", {
				method: "POST",
				headers: { Accept: "application/json" },
				body: params
			})).ok) throw new Error("Message delivery failed. Please try again in a moment.");
			setFormData({
				name: "",
				email: "",
				message: ""
			});
			setStatus("success");
		} catch (error) {
			const fallbackMailto = `mailto:ms.kumar.developer05@gmail.com?subject=${encodeURIComponent(`Portfolio contact from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
			window.location.href = fallbackMailto;
			setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Your mail app should open next.");
			setStatus("error");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative px-6 py-32 md:px-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, {
					num: "06",
					title: "Cross the Border"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-8 font-display text-5xl leading-[1.05] text-white md:text-7xl",
					children: [
						"Let's build something ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-[var(--pf-c1)]",
							children: "together"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-sm leading-relaxed text-white/55",
					children: "Freelance, internships, or a full-time full-stack seat — my inbox is open."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid gap-12 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-5 border border-white/10 bg-white/[0.02] p-8",
						children: [
							{
								k: "Email",
								v: "ms.kumar.developer05@gmail.com",
								i: Mail
							},
							{
								k: "Location",
								v: "Odisha, India",
								i: MapPin
							},
							{
								k: "GitHub",
								v: "github.com/Msumankumar05",
								i: Github
							},
							{
								k: "LinkedIn",
								v: "linkedin.com/in/m-suman-kumar",
								i: Linkedin
							}
						].map(({ k, v, i: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-white/5 pb-4 last:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5 text-[var(--pf-c1)]" }), k]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-white/85",
								children: v
							})]
						}, k))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
						onSubmit: handleSubmit,
						className: "space-y-4 border border-white/10 bg-white/[0.02] p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 8
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -8
								},
								className: "flex min-h-[280px] flex-col items-center justify-center text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--pf-c1)]/10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 text-[var(--pf-c1)]" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-2xl text-white",
										children: "Message sent"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40",
										children: "I’ll get back to you soon."
									})
								]
							}, "sent") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								exit: { opacity: 0 },
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "block",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mb-1.5 block font-mono text-[9px] uppercase tracking-[0.25em] text-white/40",
												children: "Name"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												required: true,
												value: formData.name,
												onChange: (e) => setFormData((prev) => ({
													...prev,
													name: e.target.value
												})),
												className: "w-full border border-white/10 bg-transparent px-3 py-2.5 text-sm text-white outline-none transition focus:border-[var(--pf-c1)]"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "block",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mb-1.5 block font-mono text-[9px] uppercase tracking-[0.25em] text-white/40",
												children: "Email"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												required: true,
												type: "email",
												value: formData.email,
												onChange: (e) => setFormData((prev) => ({
													...prev,
													email: e.target.value
												})),
												className: "w-full border border-white/10 bg-transparent px-3 py-2.5 text-sm text-white outline-none transition focus:border-[var(--pf-c1)]"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mb-1.5 block font-mono text-[9px] uppercase tracking-[0.25em] text-white/40",
											children: "Message"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											required: true,
											rows: 5,
											value: formData.message,
											onChange: (e) => setFormData((prev) => ({
												...prev,
												message: e.target.value
											})),
											className: "w-full resize-none border border-white/10 bg-transparent px-3 py-2.5 text-sm text-white outline-none transition focus:border-[var(--pf-c1)]"
										})]
									}),
									status === "error" && errorMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-[10px] uppercase tracking-[0.2em] text-rose-400",
										children: errorMessage
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										disabled: status === "sending",
										className: "group mt-2 flex w-full items-center justify-center gap-3 bg-[var(--pf-c1)] px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70",
										children: [status === "sending" ? "Sending..." : "Send Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" })]
									})
								]
							}, "form")
						})
					})]
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden border-t border-white/5 bg-[var(--pf-bg)] px-6 py-16 md:px-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--pf-c1)]/[0.03] blur-[100px]",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-12 lg:gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-2xl italic font-bold tracking-tight text-white",
									children: ["MSK", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[var(--pf-c1)]",
										children: "."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-px bg-white/15" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[9px] uppercase tracking-[0.25em] text-white/40",
									children: "Makoju Suman Kumar"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-xs leading-relaxed text-white/50",
							children: "Full-Stack Developer crafting high-fidelity web, mobile, and AI solutions. Currently based in Odisha, India, exploring the horizons of software architecture."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[9px] uppercase tracking-[0.3em] text-white/35",
							children: "Index / Chapters"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid grid-cols-2 gap-y-2.5 font-mono text-[10px] uppercase tracking-[0.15em]",
							children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `#${n.id}`,
								className: "w-fit text-white/60 transition-colors hover:text-[var(--pf-c1)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[var(--pf-c1)]/50 mr-1.5",
										children: n.num
									}),
									" ",
									n.label
								]
							}, n.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[9px] uppercase tracking-[0.3em] text-white/35",
								children: "Connection Terminals"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex gap-4",
								children: [
									{
										label: "GitHub",
										href: "https://github.com/Msumankumar05",
										icon: Github
									},
									{
										label: "LinkedIn",
										href: "https://www.linkedin.com/in/m-suman-kumar-43b3a1300/",
										icon: Linkedin
									},
									{
										label: "Email",
										href: "mailto: makojusumankumar@gmail.com",
										icon: Mail
									}
								].map(({ label, href, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href,
									target: "_blank",
									rel: "noreferrer",
									title: label,
									className: "flex h-8 w-8 items-center justify-center border border-white/10 bg-white/[0.02] text-white/60 transition hover:border-[var(--pf-c1)] hover:text-[var(--pf-c1)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
								}, label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 font-mono text-[9px] uppercase tracking-[0.25em] leading-relaxed text-white/30",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-[var(--pf-c1)] animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Loc: 17.38° N, 78.48° E" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Terminal Status: Active" })
								})]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 border-t border-white/5 pt-8 flex flex-wrap items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.25em] text-white/25",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Makoju Suman Kumar. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-2",
					children: [
						"Built with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[var(--pf-c2)]",
							children: "♡"
						}),
						" · React · Framer Motion · Tailwind"
					]
				})]
			})]
		})]
	});
}
function BackToTop() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setShow(window.scrollY > 600);
		on();
		window.addEventListener("scroll", on);
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
		initial: {
			opacity: 0,
			y: 16
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			y: 16
		},
		href: "#home",
		className: "fixed bottom-24 right-6 z-40 flex h-10 w-10 items-center justify-center border border-white/15 bg-black/60 text-white backdrop-blur transition hover:border-[var(--pf-c1)] hover:text-[var(--pf-c1)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-4 w-4" })
	}) });
}
function CinematicLoader() {
	const [gone, setGone] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		let raf = 0;
		const start = performance_default.now();
		const dur = 1600;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / dur);
			const eased = 1 - Math.pow(1 - p, 2.4);
			setProgress(Math.round(eased * 100));
			if (p < 1) raf = requestAnimationFrame(tick);
			else setTimeout(() => setGone(true), 500);
		};
		raf = requestAnimationFrame(tick);
		document.body.style.overflow = "hidden";
		return () => {
			cancelAnimationFrame(raf);
			document.body.style.overflow = "";
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (gone) document.body.style.overflow = "";
	}, [gone]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: !gone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "fixed inset-0 z-[80] overflow-hidden bg-[var(--pf-bg)]",
		initial: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .5 },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--pf-c1)]/20 blur-[140px] animate-aurora" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[var(--pf-c2)]/15 blur-[130px] animate-float-slow" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute left-8 top-8 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.35em] text-[var(--pf-c1)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-8 bg-[var(--pf-c1)]" }), " Booting Sequence"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-8 right-8 text-right font-mono text-[9px] uppercase tracking-[0.25em] text-white/40",
				children: [
					"LAT 17.38° N",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"LNG 78.48° E"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex h-full w-full flex-col items-center justify-center px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							scale: .7,
							opacity: 0,
							filter: "blur(10px)"
						},
						animate: {
							scale: 1,
							opacity: 1,
							filter: "blur(0px)"
						},
						transition: {
							duration: .9,
							ease: [
								.2,
								.7,
								.2,
								1
							]
						},
						className: "font-display text-7xl italic text-white md:text-9xl",
						children: ["MSK", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[var(--pf-c2)]",
							children: "."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 8
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .4,
							duration: .6
						},
						className: "mt-6 font-mono text-[10px] uppercase tracking-[0.4em] text-white/50",
						children: "Makoju Suman Kumar — Portfolio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 h-px w-64 max-w-[70vw] overflow-hidden bg-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "h-full bg-[var(--pf-c1)]",
							style: { width: `${progress}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 font-mono text-[10px] tabular-nums text-white/60",
						children: [
							progress.toString().padStart(3, "0"),
							"% ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--pf-c1)]",
								children: "·"
							}),
							" Loading assets"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { scaleY: 1 },
				animate: { scaleY: 0 },
				transition: {
					delay: 1.75,
					duration: .9,
					ease: [
						.7,
						0,
						.2,
						1
					]
				},
				style: { transformOrigin: "top" },
				className: "pointer-events-none absolute inset-x-0 top-0 z-20 h-1/2 bg-[var(--pf-bg)]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { scaleY: 1 },
				animate: { scaleY: 0 },
				transition: {
					delay: 1.75,
					duration: .9,
					ease: [
						.7,
						0,
						.2,
						1
					]
				},
				style: { transformOrigin: "bottom" },
				className: "pointer-events-none absolute inset-x-0 bottom-0 z-20 h-1/2 bg-[var(--pf-bg)]"
			})
		]
	}) });
}
function Portfolio() {
	(0, import_react.useEffect)(() => {
		try {
			const saved = localStorage.getItem("pf-theme");
			if (saved) document.documentElement.setAttribute("data-pf-theme", saved);
			else document.documentElement.setAttribute("data-pf-theme", "cyber");
		} catch {}
	}, []);
	useLenis();
	const active = useActiveSection();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-[var(--pf-bg)] text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CinematicLoader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Starfield, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { active }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HUDChrome, { active }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Journey, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arena, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToTop, {})
		]
	});
}
//#endregion
export { Portfolio as component };
