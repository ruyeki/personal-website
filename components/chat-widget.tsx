"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import Image from "next/image";

import profile from "@/assets/profile.jpg";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    Array<{ text: string; sender: "user" | "bot" }>
  >([
    {
      text: "Hi! Thanks for visiting my website. Feel free to ask me anything!",
      sender: "bot",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: "user" }]);
      setInputMessage("");
      setIsLoading(true);

      try {
        const response = await fetch("https://personal-website-backend-q46x.onrender.com/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputMessage }),
        });

        const llm_response = await response.json();

        console.log(llm_response["data"]);

        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              text: llm_response["data"],
              sender: "bot",
            },
          ]);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error(error);
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              text: "Error generating a response. Please try again!",
              sender: "bot",
            },
          ]);
          setIsLoading(false);
        }, 1000);
      }
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Button
          isIconOnly
          className="h-14 w-14 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/50 hover:shadow-violet-500/70 hover:scale-110 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          )}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="bg-gray-900/95 backdrop-blur-xl border border-gray-800 shadow-2xl shadow-violet-500/20">
              <CardHeader className="flex flex-col gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white p-4">
                <h3 className="text-xl font-bold">Chat with AI Ryan</h3>
                <p className="text-sm text-gray-200">
                  Ask me anything about Ryan!
                </p>
              </CardHeader>

              <CardBody className="p-4 h-96 overflow-y-auto">
                <div className="flex flex-col gap-3">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      animate={{ opacity: 1, x: 0 }}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} items-end gap-2`}
                      initial={{
                        opacity: 0,
                        x: message.sender === "user" ? 20 : -20,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {message.sender === "bot" && (
                        <div className="flex-shrink-0">
                          <Image
                            alt="Ryan's profile"
                            className="rounded-full"
                            height={32}
                            src={profile}
                            width={32}
                          />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                          message.sender === "user"
                            ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white"
                            : "bg-gray-800 text-gray-200"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </motion.div>
                  ))}

                  {/* Loading Indicator */}
                  {isLoading && (
                    <motion.div
                      animate={{ opacity: 1, x: 0 }}
                      className="flex justify-start items-end gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex-shrink-0">
                        <Image
                          alt="Ryan's profile"
                          className="rounded-full"
                          height={32}
                          src={profile}
                          width={32}
                        />
                      </div>
                      <div className="bg-gray-800 text-gray-200 px-4 py-3 rounded-2xl">
                        <div className="flex gap-1">
                          <motion.span
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: 0,
                            }}
                          />
                          <motion.span
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: 0.2,
                            }}
                          />
                          <motion.span
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: 0.4,
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </CardBody>

              <CardFooter className="p-4 border-t border-gray-800">
                <div className="flex gap-2 w-full">
                  <Input
                    className="flex-1"
                    placeholder="Type a message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSend();
                      }
                    }}
                  />
                  <Button
                    className="bg-gradient-to-r from-violet-600 to-purple-600 text-white"
                    onClick={handleSend}
                  >
                    Send
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
