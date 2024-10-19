import { useState } from "react";
import { createPost } from "@/lib/social";
import { useWallet } from "@/contexts/near";

export default function Compose() {
  const { wallet } = useWallet();

  const [text, setText] = useState("");

  const handleSubmit = async () => {
    // This is a placeholder for the actual implementation
    await createPost(wallet!, { text, type: "md" });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <textarea
        className="w-full p-2 border rounded-md resize-none focus:border-purple-800 focus:ring focus:ring-purple-800 focus:ring-opacity-50"
        rows={3}
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        className="mt-2 px-4 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-800/80 transition-colors"
        onClick={handleSubmit}
      >
        Post
      </button>
    </div>
  );
}
