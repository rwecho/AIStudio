"use client";
import { useReportWebVitals } from "next/web-vitals";
import { useState } from "react";

const WebVitals = () => {
  const [metrics, setMetrics] = useState({
    FCP: null,
    LCP: null,
  });

  useReportWebVitals((metric) => {
    switch (metric.name) {
      case "FCP": {
        setMetrics((prevMetrics) => ({
          ...prevMetrics,
          FCP: metric.value.toFixed(0),
        }));
        break;
      }
      case "LCP": {
        setMetrics((prevMetrics) => ({
          ...prevMetrics,
          LCP: metric.value.toFixed(0),
        }));
        break;
      }
    }
  });

  // 当没有数据时不渲染任何内容
  if (!metrics.FCP && !metrics.LCP) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-white shadow-lg p-3 rounded-lg text-xs opacity-70 hover:opacity-100 transition-opacity z-50">
      <h4 className="font-bold mb-1 text-gray-700">性能指标</h4>
      <div className="space-y-1">
        {metrics.FCP && (
          <div className="flex items-center justify-between">
            <span className="text-gray-600">FCP: </span>
            <span className="font-mono">{metrics.FCP} ms</span>
          </div>
        )}
        {metrics.LCP && (
          <div className="flex items-center justify-between">
            <span className="text-gray-600">LCP: </span>
            <span className="font-mono">{metrics.LCP} ms</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebVitals;
