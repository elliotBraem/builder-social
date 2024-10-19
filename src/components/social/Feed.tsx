import { useState, useEffect } from "react";
import Post from "./Post";
import { getPosts, Post as PostType } from "@/lib/social";

export default function Feed() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
}