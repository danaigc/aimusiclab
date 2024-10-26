"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music2 } from "lucide-react";

interface MusicCardProps {
  title: string;
  style: string;
  duration: string;
  height: string;
  image: string;
}

export function MusicCard({ title, style, duration, height, image }: MusicCardProps) {
  return (
    <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-xl overflow-hidden ${height}`}>
      <div className="relative w-full h-full">
        <img 
          src={image} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="font-semibold text-xl mb-2">{title}</h3>
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-90">{style}</span>
              <div className="flex items-center gap-3">
                <span className="text-sm opacity-90">{duration}</span>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Music2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}