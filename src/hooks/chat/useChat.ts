import { useState } from "react";
import { Chats, Chat } from "@/types/chat";
import { onValue, ref, push, update } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, database } from "@/firebase";

export const useChat = () => {
  const [chats, setChats] = useState<Chats[]>([]);
  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const chatsRef = ref(database, `chats/${user.uid}`);
      onValue(chatsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setChats(data);
        }
      });
    }
  });

  interface SendChatProps {
    text: string;
    receiverId: string;
  }

  const sendChat = ({ text, receiverId }: SendChatProps) => {
    const chatsRef = ref(
      database,
      `chats/${auth.currentUser?.uid}/${receiverId}`
    );
    const receiverChatsRef = ref(
      database,
      `chats/${receiverId}/${auth.currentUser?.uid}`
    );

    const newChat: Chat = {
      text,
      timestamp: Date.now(),
    };

    const newChatKey = push(chatsRef).key;
    const newReceiverChatKey = push(receiverChatsRef).key;

    if (newChatKey && newReceiverChatKey) {
      const updates: { [key: string]: Chat } = {};
      updates[`/${newChatKey}`] = newChat;
      updates[`/${newReceiverChatKey}`] = newChat;

      console.log(updates);

      update(chatsRef, updates);
      update(receiverChatsRef, updates);
    }
  };

  return { chats, sendChat };
};
