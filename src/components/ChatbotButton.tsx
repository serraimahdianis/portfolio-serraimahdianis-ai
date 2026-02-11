import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Bot, Home, Contact, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { Language } from "@/lib/types";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const API_URL = import.meta.env.VITE_CHATBOT_API_URL || "/api/chat";

export function ChatbotButton() {
  const { lang, isRtl } = useLanguage();
  const t = translations[lang];
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: t.chatbot_welcome,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Update welcome message when language changes
  useEffect(() => {
    setMessages((prev) => {
      const newMessages = [...prev];
      const welcomeIndex = newMessages.findIndex((m) => m.id === "welcome");
      if (welcomeIndex !== -1) {
        newMessages[welcomeIndex] = {
          ...newMessages[welcomeIndex],
          content: t.chatbot_welcome,
        };
      }
      return newMessages;
    });
  }, [lang, t.chatbot_welcome]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.content,
          history: messages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          language: lang,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.message || data.response || t.chatbot_error,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: t.chatbot_error,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickActions = [
    { id: "home", label: t.nav_home, icon: Home, href: "#" },
    { id: "contact", label: t.nav_contact, icon: Contact, href: "#contact" },
    { id: "microimport", label: lang === Language.EN ? "Micro Import" : lang === Language.FR ? "Micro Import" : lang === Language.AR ? "الاستيراد المصغر" : "Mikroimport", icon: ShoppingCart, href: "#services" },
  ];

  const handleQuickAction = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 z-50 h-14 w-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
          isRtl ? "left-6" : "right-6",
          isOpen && "rotate-90"
        )}
        size="icon"
        aria-label={isOpen ? t.chatbot_close : t.chatbot_open}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
      </Button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-24 z-50 w-96 max-w-[calc(100vw-48px)] rounded-2xl border bg-background shadow-2xl transition-all duration-300",
          isRtl ? "left-6" : "right-6",
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        )}
        dir={isRtl ? "rtl" : "ltr"}
      >
        {/* Header */}
        <div className="flex items-center gap-3 border-b px-4 py-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <Bot className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">{t.chatbot_title}</h3>
            <p className="text-xs text-muted-foreground">
              {isLoading ? t.chatbot_subtitle_typing : t.chatbot_subtitle_online}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Messages */}
        <ScrollArea className="h-80 px-4 py-4" ref={scrollRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3",
                  message.role === "user" && "flex-row-reverse"
                )}
              >
                <div
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                    message.role === "assistant"
                      ? "bg-primary"
                      : "bg-muted"
                  )}
                >
                  {message.role === "assistant" ? (
                    <Bot className="h-4 w-4 text-primary-foreground" />
                  ) : (
                    <span className="text-xs font-medium">
                      {isRtl ? "أنت" : "You"}
                    </span>
                  )}
                </div>
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
                    message.role === "assistant"
                      ? "bg-muted"
                      : "bg-primary text-primary-foreground"
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
                  <Bot className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="flex items-center gap-1 rounded-2xl bg-muted px-4 py-3">
                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Quick Actions */}
        <div className="border-t px-4 py-3 bg-muted/50">
          <p className="text-xs text-muted-foreground mb-2 font-medium">
            {lang === Language.EN ? "Quick navigation:" : lang === Language.FR ? "Navigation rapide :" : lang === Language.AR ? "التنقل السريع:" : "Schnellnavigation:"}
          </p>
          <div className="flex flex-wrap gap-2">
            {quickActions.map((action) => (
              <Button
                key={action.id}
                variant="outline"
                size="sm"
                className="text-xs h-8 px-3"
                onClick={() => handleQuickAction(action.href)}
              >
                <action.icon className="h-3 w-3 mr-1" />
                {action.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="border-t p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="flex gap-2"
          >
            <Input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={t.chatbot_placeholder}
              className="flex-1"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              disabled={isLoading || !inputValue.trim()}
              aria-label={t.chatbot_send}
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
