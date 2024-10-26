"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GenerationHistoryCard } from "../components/create/GenerationHistoryCard";

export default function HistoryPage() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Generation History</h1>
      
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(12)].map((_, index) => (
            <GenerationHistoryCard key={index} index={index} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}