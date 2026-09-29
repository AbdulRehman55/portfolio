"use client";

import { useEffect, useRef, useState } from "react";
import { content } from "@/lib/site";

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const { services, servicesHeading, servicesSupport } = content;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={ref}
      className="border-t border-line px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div
          className={`max-w-2xl transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h2 className="font-display text-4xl tracking-tight text-paper sm:text-5xl">
            {servicesHeading}
          </h2>
          <p className="mt-4 text-lg text-paper-muted">{servicesSupport}</p>
        </div>

        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {services.map((service, index) => (
            <li
              key={service.title}
              className={`transition-all duration-700 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{
                transitionDelay: visible ? `${120 + index * 80}ms` : "0ms",
              }}
            >
              <h3 className="text-base font-medium text-paper">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper-muted">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
