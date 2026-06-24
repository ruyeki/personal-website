import { Metadata } from "next";

import AiRyanChat from "@/components/ai-ryan-chat";

export const metadata: Metadata = {
  title: "AI Ryan",
  description:
    "Chat with AI Ryan — a chatbot trained on Ryan Uyeki's background.",
};

export default function AiRyanPage() {
  return <AiRyanChat />;
}
