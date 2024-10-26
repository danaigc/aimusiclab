"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GenerationHistoryCard } from "./GenerationHistoryCard";

export function GenerationHistory() {
  return (
    <div className="w-[400px] p-6 bg-muted/30">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Recent Generations</h2>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </div>

      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="space-y-4 pr-4">
          {[...Array(5)].map((_, index) => (
            <GenerationHistoryCard key={index} index={index} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}