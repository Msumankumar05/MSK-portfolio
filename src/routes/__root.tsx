import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Suspense, useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://itsmsk.vercel.app/#person",
      name: "Makoju Suman Kumar",
      alternateName: ["MSK", "Suman Kumar"],
      description:
        "Full-Stack Engineer & MCA graduate student specializing in React, TypeScript, Node.js, Flutter, and applied AI systems.",
      jobTitle: "Full-Stack Engineer",
      url: "https://itsmsk.vercel.app/",
      image: {
        "@type": "ImageObject",
        url: "https://itsmsk.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        caption: "Makoju Suman Kumar (MSK) — Full-Stack Engineer & AI Developer",
      },
      email: "mailto:ms.kumar.developer05@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Odisha",
        addressCountry: "IN",
      },
      sameAs: [
        "https://github.com/Msumankumar05",
        "https://www.linkedin.com/in/itsmskdev/",
        "https://www.instagram.com/suman_k_72/",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Master of Computer Applications (MCA)",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Bachelor of Science in Computer Science (B.Sc CS)",
        },
      ],
      knowsAbout: [
        "Full-Stack Web Development",
        "React",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Express.js",
        "Flutter",
        "Kotlin",
        "Tailwind CSS",
        "MongoDB",
        "SQL",
        "Artificial Intelligence",
        "Agentic Workflows",
        "Prompt Engineering",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://itsmsk.vercel.app/#website",
      url: "https://itsmsk.vercel.app/",
      name: "Makoju Suman Kumar Portfolio",
      description:
        "Portfolio of Makoju Suman Kumar — Full-Stack Engineer, Mobile Developer & AI enthusiast.",
      publisher: {
        "@id": "https://itsmsk.vercel.app/#person",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://itsmsk.vercel.app/#webpage",
      url: "https://itsmsk.vercel.app/",
      name: "Makoju Suman Kumar (MSK) — Full-Stack Engineer & AI Developer",
      about: {
        "@id": "https://itsmsk.vercel.app/#person",
      },
      mainEntity: {
        "@id": "https://itsmsk.vercel.app/#person",
      },
      inLanguage: "en-US",
      dateModified: "2026-09-17",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://itsmsk.vercel.app/#farmora",
      name: "Farmora",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://farmora-farm-to-home.vercel.app/",
      description:
        "Full-stack MERN agricultural commerce platform connecting farmers directly with customers through a seamless shopping experience.",
      author: {
        "@id": "https://itsmsk.vercel.app/#person",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://itsmsk.vercel.app/#cinedb",
      name: "CineDB",
      applicationCategory: "EntertainmentApplication",
      operatingSystem: "Web",
      url: "https://cine-dbase.vercel.app/",
      description:
        "React-based movie and TV discovery web application powered by the TMDB REST API.",
      author: {
        "@id": "https://itsmsk.vercel.app/#person",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://itsmsk.vercel.app/#skyai",
      name: "SKY AI",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      description:
        "Voice and text conversational AI assistant built with React, Node.js, and Web Speech API.",
      author: {
        "@id": "https://itsmsk.vercel.app/#person",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://itsmsk.vercel.app/#task-planner",
      name: "Mobile Todo & Task Planner",
      applicationCategory: "ProductivityApplication",
      operatingSystem: "Android",
      description:
        "Kotlin-based mobile task management application with local data persistence using Room Database and Jetpack Compose.",
      author: {
        "@id": "https://itsmsk.vercel.app/#person",
      },
    },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Makoju Suman Kumar (MSK) — Full-Stack Engineer & AI Developer" },
      {
        name: "description",
        content:
          "Portfolio of Makoju Suman Kumar (MSK) — MCA student & Full-Stack Software Engineer specializing in React, TypeScript, Node.js, Flutter, and applied AI systems.",
      },
      { name: "author", content: "Makoju Suman Kumar" },
      {
        name: "keywords",
        content:
          "Makoju Suman Kumar, MSK, Full-Stack Developer, Software Engineer, React Developer, Node.js Developer, Flutter Developer, Kotlin, Portfolio, Odisha India, Web Development, AI Engineer, OpenRouter AI",
      },
      {
        name: "robots",
        content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      {
        name: "googlebot",
        content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      { name: "google-site-verification", content: "googlecb459a5d07a81983" },
      { name: "theme-color", content: "#0a0c12" },
      { name: "application-name", content: "MSK Portfolio" },
      { name: "apple-mobile-web-app-title", content: "MSK Portfolio" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "format-detection", content: "telephone=no" },

      // Open Graph / Facebook / LinkedIn
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Makoju Suman Kumar Portfolio" },
      {
        property: "og:title",
        content: "Makoju Suman Kumar (MSK) — Full-Stack Engineer & AI Developer",
      },
      {
        property: "og:description",
        content:
          "Explore high-fidelity web, mobile, and AI solutions engineered by Makoju Suman Kumar.",
      },
      { property: "og:url", content: "https://itsmsk.vercel.app/" },
      { property: "og:image", content: "https://itsmsk.vercel.app/og-image.png" },
      {
        property: "og:image:secure_url",
        content: "https://itsmsk.vercel.app/og-image.png",
      },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Makoju Suman Kumar — Full-Stack & AI Engineer Portfolio",
      },
      { property: "og:locale", content: "en_US" },
      { property: "profile:first_name", content: "Makoju Suman" },
      { property: "profile:last_name", content: "Kumar" },
      { property: "profile:username", content: "itsmsk" },

      // Twitter Cards
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Makoju Suman Kumar (MSK) — Full-Stack Engineer & AI Developer",
      },
      {
        name: "twitter:description",
        content:
          "Portfolio of Makoju Suman Kumar (MSK) — Full-Stack Software Engineer specializing in React, TypeScript, Node.js, Flutter, and AI.",
      },
      { name: "twitter:image", content: "https://itsmsk.vercel.app/og-image.png" },
      {
        name: "twitter:image:alt",
        content: "Makoju Suman Kumar — Portfolio Preview",
      },
      { name: "twitter:creator", content: "@itsmskdev" },
      { name: "twitter:site", content: "@itsmskdev" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://itsmsk.vercel.app/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;700&display=swap",
      },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/coding.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/coding.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
        <noscript>
          <div
            style={{
              padding: "40px 24px",
              maxWidth: "840px",
              margin: "0 auto",
              fontFamily: "system-ui, -apple-system, sans-serif",
              color: "#e2e8f0",
              backgroundColor: "#0b0d13",
              lineHeight: "1.6",
            }}
          >
            <h1 style={{ fontSize: "2rem", color: "#f59e0b", marginBottom: "8px" }}>
              Makoju Suman Kumar (MSK) — Full-Stack Engineer &amp; AI Developer
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#94a3b8" }}>
              Master of Computer Applications (MCA) student &amp; Full-Stack Software Engineer based
              in Odisha, India. Specializing in high-performance web applications, mobile
              engineering, and applied AI systems.
            </p>
            <h2 style={{ fontSize: "1.3rem", color: "#38bdf8", marginTop: "24px" }}>
              Core Technology Stack
            </h2>
            <p>
              React, TypeScript, JavaScript, Node.js, Express.js, Flutter, Kotlin, MongoDB, MySQL,
              Tailwind CSS, OpenRouter AI, Agentic Workflows.
            </p>
            <h2 style={{ fontSize: "1.3rem", color: "#38bdf8", marginTop: "24px" }}>
              Highlighted Projects
            </h2>
            <ul>
              <li>
                <strong>Farmora</strong>: MERN agricultural marketplace with real-time catalog and
                authentication.
              </li>
              <li>
                <strong>CineDB</strong>: Movie and TV exploration engine consuming TMDB API.
              </li>
              <li>
                <strong>SKY AI</strong>: Conversational voice and text assistant powered by speech
                synthesis and LLMs.
              </li>
              <li>
                <strong>Mobile Task Planner</strong>: Cross-platform task manager built with Flutter
                &amp; Kotlin.
              </li>
            </ul>
            <h2 style={{ fontSize: "1.3rem", color: "#38bdf8", marginTop: "24px" }}>
              Contact &amp; Connect
            </h2>
            <p>
              Email:{" "}
              <a href="mailto:ms.kumar.developer05@gmail.com" style={{ color: "#f59e0b" }}>
                ms.kumar.developer05@gmail.com
              </a>
              <br />
              GitHub:{" "}
              <a
                href="https://github.com/Msumankumar05"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#38bdf8" }}
              >
                github.com/Msumankumar05
              </a>
              <br />
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/itsmskdev/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#38bdf8" }}
              >
                linkedin.com/in/itsmskdev
              </a>
              <br />
              Instagram:{" "}
              <a
                href="https://www.instagram.com/suman_k_72/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#38bdf8" }}
              >
                instagram.com/suman_k_72
              </a>
            </p>
          </div>
        </noscript>
        <Scripts />
      </body>
    </html>
  );
}
