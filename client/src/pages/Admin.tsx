import { useState } from "react";
type Tab = "realizations" | "reviews" | "faqs";
export default function AdminPage() {
  const [tab, setTab] = useState<Tab>("realizations");
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-green-900 mb-4">Panel Admina — 1L3</h1>
      <a href="/" className="text-green-700 underline">← Wróć do strony</a>
    </div>
  );
}
