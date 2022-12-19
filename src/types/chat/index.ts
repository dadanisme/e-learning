import { Chat } from "./chat";

interface Chats {
  type: "personal" | "group";
  chats: Chat[];
}

export type { Chat, Chats };
