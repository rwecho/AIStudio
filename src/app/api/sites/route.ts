import { NextResponse } from "next/server";

export function GET() {
  const sites: Site[] = [
    {
      id: "1",
      url: "https://chat.openai.com",
      title: "ChatGPT",
      description:
        "Advanced AI assistant that can understand and generate human-like text, answer questions and assist with various tasks.",
      tags: ["AI Chat", "Language Model", "Free/Paid"],
      label: "Hot",
      cover: "https://source.unsplash.com/random/600x400/?ai,chatbot,1",
      createdAt: new Date(),
    },
    {
      id: "2",
      url: "https://www.midjourney.com",
      title: "Midjourney",
      description:
        "Powerful AI art generator creating stunning images from text descriptions.",
      tags: ["Image Generation", "AI Art", "Paid"],
      label: "Popular",
      cover: "https://source.unsplash.com/random/600x400/?ai,art,2",
      createdAt: new Date(),
    },
    {
      id: "3",
      url: "https://stability.ai",
      title: "Stable Diffusion",
      description:
        "Open-source image generation model creating detailed images from text prompts.",
      tags: ["Image Generation", "Open Source"],
      cover: "https://source.unsplash.com/random/600x400/?ai,stable,3",
      createdAt: new Date(),
    },
    {
      id: "4",
      url: "https://www.anthropic.com/claude",
      title: "Claude",
      description:
        "AI assistant designed to be helpful, harmless, and honest in conversations.",
      tags: ["AI Chat", "Language Model"],
      cover: "https://source.unsplash.com/random/600x400/?ai,assistant,4",
      createdAt: new Date(),
    },
    {
      id: "5",
      url: "https://elevenlabs.io",
      title: "ElevenLabs",
      description:
        "AI voice generation platform creating realistic human voices for content.",
      tags: ["Audio Generation", "Voice AI"],
      cover: "https://source.unsplash.com/random/600x400/?ai,audio,5",
      createdAt: new Date(),
    },
    {
      id: "6",
      url: "https://runwayml.com",
      title: "Runway",
      description:
        "AI-powered creative suite for video editing, generation and visual effects.",
      tags: ["Video", "Creative Tools"],
      label: "New",
      cover: "https://source.unsplash.com/random/600x400/?ai,video,6",
      createdAt: new Date(),
    },
    {
      id: "7",
      url: "https://github.com/features/copilot",
      title: "GitHub Copilot",
      description:
        "AI pair programmer that helps write code with smart suggestions and completions.",
      tags: ["Development", "Coding Assistant"],
      cover: "https://source.unsplash.com/random/600x400/?ai,code,7",
      createdAt: new Date(),
    },
    {
      id: "8",
      url: "https://huggingface.co",
      title: "Hugging Face",
      description:
        "Platform providing thousands of pre-trained AI models and datasets for developers.",
      tags: ["Development", "AI Models", "Open Source"],
      cover: "https://source.unsplash.com/random/600x400/?ai,platform,8",
      createdAt: new Date(),
    },
  ];

  // random choice of sites
  sites.sort(() => Math.random() - 0.5);
  sites.length = Math.floor(Math.random() * 5) + 1;

  return NextResponse.json(sites);
}
