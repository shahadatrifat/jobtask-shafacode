import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Send, Mic, Plus, Menu, X } from "lucide-react";

const Chatbot = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const chatHistory = [
    {
      id: 1,
      type: "bot",
      message: "নমস্কার! আমি আপনার উদ্ভিদ সহায়ক। আপনার গাছ সম্পর্কে যেকোনো প্রশ্ন করতে পারেন। আমি আপনাকে সাহায্য করতে প্রস্তুত আছি এবং আপনার বাগানের যত্ন নিতে সহায়তা করব।",
    },
    {
      id: 2,
      type: "user",
      message: "আমার গাছের পাতা হলুদ হয়ে যাচ্ছে কেন? কি করতে হবে এটা ঠিক করার জন্য?",
    },
    {
      id: 3,
      type: "bot",
      message: "পাতা হলুদ হওয়ার বিভিন্ন কারণ থাকতে পারে:",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80",
    },
    {
      id: 4,
      type: "user",
      message: "আমার টমেটো গাছে সাদা দাগ দেখা যাচ্ছে। এটা কি রোগ? এবং কিভাবে চিকিৎসা করব?",
    },
    {
      id: 5,
      type: "bot",
      message: "হ্যাঁ, এটি সম্ভবত পাউডারি মিলডিউ রোগ। এটি একটি ছত্রাক জনিত রোগ যা টমেটো গাছে সাধারণত দেখা যায়। চিকিৎসার জন্য:",
      suggestions: [
        "পাতা হলুদ হওয়া সমস্যা সমাধানে আমি কিভাবে সাহায্য করতে পারি?",
        "কিভাবে টমেটো গাছের যত্ন নিতে হয়?",
        "বাণিজ্যিক সার ব্যবহার করা উচিত নাকি জৈবিক সার ব্যবহার করা ভালো?",
      ],
    },
  ];

  const sidebarItems = [
    "আমার গাছের পাতা হলুদ হয়ে যাচ্ছে",
    "টমেটো গাছে সাদা দাগ দেখা যাচ্ছে",
    "কিভাবে গোলাপ গাছের যত্ন নেব",
    "জৈবিক সার বানানোর উপায়",
    "গাছে পোকা দূর করার পদ্ধতি",
  ];

  return (
    <div className="h-screen bg-background flex mt-[72px] relative">
      {/* Sidebar - Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-accent/20 transition-transform duration-300 flex flex-col border-r border-border mt-[72px] lg:mt-0`}
      >
        {/* Close button - Mobile only */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          <X className="w-5 h-5" />
        </Button>

        <div className="p-4 border-b border-border">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <Plus className="w-4 h-4 mr-2" />
            New Chat
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">
            History
          </h3>
          <div className="space-y-2">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-sm text-foreground line-clamp-2"
                onClick={() => setIsSidebarOpen(false)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col w-full lg:w-auto">
        {/* Header */}
        <div className="border-b border-border p-3 sm:p-4 flex items-center gap-3 bg-card">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="flex-shrink-0"
          >
            <Menu className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-semibold text-sm">
                AI
              </span>
            </div>
            <span className="font-semibold text-sm sm:text-base">Plant Assistant</span>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
          {chatHistory.map((chat) => (
            <div
              key={chat.id}
              className={`flex ${
                chat.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex gap-2 sm:gap-3 w-full sm:max-w-[85%] md:max-w-3xl ${
                  chat.type === "user" ? "flex-row-reverse" : ""
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm sm:text-base ${
                    chat.type === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-accent-foreground"
                  }`}
                >
                  {chat.type === "user" ? "U" : "AI"}
                </div>

                {/* Message Content */}
                <div className="space-y-2 sm:space-y-3 flex-1 min-w-0">
                  <Card
                    className={`p-3 sm:p-4 ${
                      chat.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-card"
                    }`}
                  >
                    <p className="text-xs sm:text-sm leading-relaxed break-words">
                      {chat.message}
                    </p>
                  </Card>

                  {/* Image if exists */}
                  {chat.image && (
                    <div className="rounded-lg overflow-hidden">
                      <img
                        src={chat.image}
                        alt="Plant issue"
                        className="w-full h-40 sm:h-48 object-cover"
                      />
                      <Button
                        size="sm"
                        variant="outline"
                        className="mt-2 w-full text-xs sm:text-sm"
                      >
                        Download
                      </Button>
                    </div>
                  )}

                  {/* Suggestions if exists */}
                  {chat.suggestions && (
                    <div className="space-y-2">
                      {chat.suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          className="w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-border hover:bg-secondary transition-colors text-xs sm:text-sm break-words"
                        >
                          {suggestion} →
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  {chat.type === "bot" && chat.suggestions && (
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs sm:text-sm w-full sm:w-auto"
                      >
                        আমি বুঝেছি ধন্যবাদ
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs sm:text-sm w-full sm:w-auto"
                      >
                        আরো জানতে চাই
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="border-t border-border p-3 sm:p-4 bg-card">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-1 sm:gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10"
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 hidden xs:flex"
              >
                <Mic className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Input
                placeholder="আপনার প্রশ্ন লিখুন..."
                className="flex-1 text-xs sm:text-sm h-8 sm:h-10"
              />
              <Button
                size="icon"
                className="bg-primary hover:bg-primary/90 text-primary-foreground flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;