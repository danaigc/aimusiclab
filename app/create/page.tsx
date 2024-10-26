"use client";

import { useState } from "react";
import { MusicGenerationForm } from "@/app/components/create/MusicGenerationForm";
import { GenerationHistory } from "@/app/components/create/GenerationHistory";

export default function CreatePage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState("");
  const [lyrics, setLyrics] = useState("");

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold mb-8">Create Your Music</h1>
        
        <MusicGenerationForm
          isGenerating={isGenerating}
          selectedStyle={selectedStyle}
          lyrics={lyrics}
          onStyleChange={setSelectedStyle}
          onLyricsChange={(e) => setLyrics(e.target.value)}
          onGenerate={handleGenerate}
        />
      </div>

      <GenerationHistory />
    </div>
  );
}