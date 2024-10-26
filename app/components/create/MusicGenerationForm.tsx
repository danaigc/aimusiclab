"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Music2, Wand2 } from "lucide-react";

interface MusicGenerationFormProps {
  isGenerating: boolean;
  selectedStyle: string;
  lyrics: string;
  onStyleChange: (value: string) => void;
  onLyricsChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onGenerate: () => void;
}

const musicStyles = [
  "Pop",
  "Rock",
  "Jazz",
  "Classical",
  "Electronic",
  "Hip Hop",
  "R&B",
  "Country",
  "Folk",
  "Ambient",
];

export function MusicGenerationForm({
  isGenerating,
  selectedStyle,
  lyrics,
  onStyleChange,
  onLyricsChange,
  onGenerate,
}: MusicGenerationFormProps) {
  return (
    <Tabs defaultValue="lyrics" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="lyrics">From Lyrics</TabsTrigger>
        <TabsTrigger value="instrumental">Instrumental</TabsTrigger>
      </TabsList>

      <TabsContent value="lyrics">
        <Card className="p-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Music Style</label>
              <Select value={selectedStyle} onValueChange={onStyleChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a style" />
                </SelectTrigger>
                <SelectContent>
                  {musicStyles.map((style) => (
                    <SelectItem key={style} value={style.toLowerCase()}>
                      {style}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Your Lyrics</label>
              <Textarea
                placeholder="Enter your lyrics here..."
                value={lyrics}
                onChange={onLyricsChange}
                className="h-40 resize-none"
              />
            </div>

            <Button 
              onClick={onGenerate} 
              className="w-full"
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Generate Music
                </>
              )}
            </Button>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="instrumental">
        <Card className="p-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Music Style</label>
              <Select value={selectedStyle} onValueChange={onStyleChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a style" />
                </SelectTrigger>
                <SelectContent>
                  {musicStyles.map((style) => (
                    <SelectItem key={style} value={style.toLowerCase()}>
                      {style}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={onGenerate} 
              className="w-full"
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Music2 className="mr-2 h-4 w-4" />
                  Generate Instrumental
                </>
              )}
            </Button>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
}