"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import profile from "@/assets/profile.jpg";

const BACKEND_URL = "https://personal-website-backend-q46x.onrender.com/chat";

const GREETING = `Hi! Thanks for visiting my website. Feel free to ask me anything!

Examples of questions:
1. What are your strengths as a Software Engineer?
2. What projects have you completed recently?
3. What work experience do you have?`;

interface Message {
  text: string;
  sender: "user" | "bot";
}

export default function AiRyanChat() {
  const [messages, setMessages] = useState<Message[]>([
    { text: GREETING, sender: "bot" },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async () => {
    const text = inputMessage.trim();

    if (!text || isLoading) return;

    setMessages((prev) => [...prev, { text, sender: "user" }]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ inputMessage: text }),
      });
      const data = await response.json();

      setMessages((prev) => [...prev, { text: data.data, sender: "bot" }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          text: "Error generating a response. Please try again!",
          sender: "bot",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[70vh] flex-col pt-10">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight">AI Ryan</h1>
        <p className="mt-2 text-foreground/55">
          A chatbot trained on my background — ask it anything about me.
        </p>
      </div>

      <div className="mt-8 flex-1 space-y-5">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 ${
              m.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {m.sender === "bot" && (
              <Image
                alt="Ryan"
                className="mt-1 h-8 w-8 flex-shrink-0 rounded-full object-cover"
                height={32}
                src={profile}
                width={32}
              />
            )}
            <div
              className={`max-w-[80%] whitespace-pre-line rounded-2xl px-4 py-2.5 leading-relaxed ${
                m.sender === "user"
                  ? "bg-[#c9a36b] text-background"
                  : "bg-foreground/[0.07] text-foreground/90"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-3">
            <Image
              alt="Ryan"
              className="h-8 w-8 flex-shrink-0 rounded-full object-cover"
              height={32}
              src={profile}
              width={32}
            />
            <div className="flex gap-1.5 rounded-2xl bg-foreground/[0.07] px-4 py-3.5">
              <span className="h-2 w-2 animate-bounce rounded-full bg-foreground/40 [animation-delay:-0.2s]" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-foreground/40 [animation-delay:-0.1s]" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-foreground/40" />
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="sticky bottom-0 mt-6 flex gap-3 bg-background/80 py-4 backdrop-blur">
        <input
          className="flex-1 rounded-full border border-foreground/15 bg-foreground/[0.04] px-5 py-3 outline-none transition-colors placeholder:text-foreground/35 focus:border-[#c9a36b]/60"
          placeholder="Ask AI Ryan a question…"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="rounded-full bg-[#c9a36b] px-6 py-3 font-semibold text-background transition-opacity hover:opacity-90 disabled:opacity-50"
          disabled={isLoading || !inputMessage.trim()}
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
}
