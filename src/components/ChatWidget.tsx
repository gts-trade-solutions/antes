import React from "react";
import ChatBot, { ChatBotProvider, useChatWindow } from "react-chatbotify";

import BOT_ICON from "@/assets/logo (2).png"; 

const FloatingChatButton: React.FC<{ icon: string }> = ({ icon }) => {
  const { open } = useChatWindow();
  return (
    <button
      onClick={open}
      aria-label="Open chat"
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        width: 64,
        height: 64,
        borderRadius: "50%",
        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        zIndex: 10000,
        border: "none",
        padding: 0,
        cursor: "pointer",
        background: "transparent",
      }}
    >
      <img
        src={icon}
        alt="Open chat"
        style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }}
      />
    </button>
  );
};

const ChatWidget: React.FC = () => {
  const flow = {
    start: {
      message: "Hi! How can I help?",
      options: ["Products", "Projects", "Contact", "Support"],
      path: "router",
    },
    router: {
      message: (p: any) => `You chose: ${p.userInput}`,
      chatDisabled: true,
    },
  };

  const settings = {
    general: { embedded: false, primaryColor: "#2563eb", secondaryColor: "#0f172a" },
    header: { showAvatar: true, avatar: BOT_ICON, title: "Antes Assistant" },
    botBubble: { showAvatar: true, avatar: BOT_ICON },
    userBubble: { showAvatar: true },
    chatButton: { icon: "" }, 
    chatWindow: { defaultOpen: false },
    chatHistory: { storageKey: "nrs-bot" },
  } as const;

  const styles = {
    chatButtonStyle: { display: "none" },
    chatWindowStyle: { width: 380, height: 560, borderRadius: 16, zIndex: 60 },
    headerStyle: { fontWeight: 700 },
  } as const;

  return (
    <ChatBotProvider>
      <FloatingChatButton icon={BOT_ICON} />
      <ChatBot settings={settings} styles={styles} flow={flow} />
    </ChatBotProvider>
  );
};

export default ChatWidget;
