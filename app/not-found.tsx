"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function parseUserAgent(ua: string) {
  let browser = "Unknown";
  if (/Edg\//.test(ua)) browser = "Edge";
  else if (/OPR\//.test(ua)) browser = "Opera";
  else if (/Chrome\//.test(ua) && !/Chromium/.test(ua)) browser = "Chrome";
  else if (/Firefox\//.test(ua)) browser = "Firefox";
  else if (/Safari\//.test(ua) && /Version\//.test(ua)) browser = "Safari";

  let os = "Unknown";
  if (/Windows/.test(ua)) os = "Windows";
  else if (/Mac OS X/.test(ua)) os = "macOS";
  else if (/Android/.test(ua)) os = "Android";
  else if (/iPhone|iPad|iPod/.test(ua)) os = "iOS";
  else if (/Linux/.test(ua)) os = "Linux";

  return { browser, os };
}

type ClientInfo = { path: string; browser: string; os: string };

export default function NotFound() {
  const [info, setInfo] = useState<ClientInfo>({
    path: "/",
    browser: "...",
    os: "...",
  });
  const [ip, setIp] = useState("...");
  const [place, setPlace] = useState("...");

  useEffect(() => {
    // Read browser-only values (navigator/window) after mount, then apply
    // them from a microtask callback rather than synchronously at the top
    // of the effect, matching the pattern already used for the fetch below.
    Promise.resolve().then(() => {
      const { browser, os } = parseUserAgent(navigator.userAgent || "");
      setInfo({
        path: window.location.pathname + window.location.search,
        browser,
        os,
      });
    });

    fetch("https://get.geojs.io/v1/ip/geo.json")
      .then((r) => r.json())
      .then((data: { ip?: string; city?: string; country?: string }) => {
        setIp(data.ip || "Unknown");
        const loc = [data.city, data.country].filter(Boolean).join(", ");
        setPlace(loc || "Unknown");
      })
      .catch(() => {
        setIp("Unknown");
        setPlace("Unknown");
      });
  }, []);

  const rows = [
    { label: "Browser", value: info.browser },
    { label: "Operating system", value: info.os },
    { label: "IP address", value: ip },
    { label: "Location", value: place },
  ];

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center sm:px-8">
      <p className="font-mono text-xs uppercase tracking-wide text-foreground-muted">
        Session terminated
      </p>

      <h1 className="animate-pulse font-display text-4xl leading-relaxed text-[#ff3b3b] sm:text-5xl">
        GAME OVER
      </h1>

      <p className="max-w-lg break-words font-mono text-sm uppercase tracking-wide text-accent-3 sm:text-base">
        <code className="border border-border bg-surface px-1.5 py-0.5 font-mono normal-case text-accent-3">
          {info.path}
        </code>{" "}
        - not found
      </p>

      <table className="w-full max-w-[400px] font-mono text-xs text-foreground-muted sm:text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={`border-t border-dashed border-border ${i === rows.length - 1 ? "text-accent" : ""
                }`}
            >
              <td className="py-2 text-left">{row.label}</td>
              <td className="py-2 text-right tabular-nums">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link
        href="/"
        className="pixel-border pixel-shadow-accent bg-accent px-6 py-3 font-mono text-sm uppercase tracking-wide text-background transition-transform duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
      >
        Visit home
      </Link>
    </main>
  );
}
