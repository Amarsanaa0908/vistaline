'use client';
import { useEffect } from 'react';
export default function UtmCapture() {
  useEffect(() => {
    const p = new URLSearchParams(location.search);
    const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'fbclid'];
    if (!keys.some((k) => p.get(k))) return; // keep earlier values
    const v = Object.fromEntries(keys.map((k) => [k, p.get(k) ?? '']));
    document.cookie = `vl_utm=${encodeURIComponent(JSON.stringify({ ...v, landing: location.pathname }))}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`;
  }, []);
  return null;
}