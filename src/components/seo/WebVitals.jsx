"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals((metric) => {
    // eslint-disable-next-line default-case
    switch (metric.name) {
      case "CLS": {
        console.log("CLS", metric);
      }
    }
  });
}
