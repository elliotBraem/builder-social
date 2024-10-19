import { Post as PostType } from "@/lib/social";
import LikeButton from "./LikeButton";
import { ProfileLine } from "./ProfileLine";
import { useWallet } from "@/contexts/near";

export default function Post(post: PostType) {
  const { signedAccountId } = useWallet();

  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-md">
      <ProfileLine accountId={post.accountId} />
      <p className="mb-4">{post.content.text}</p>
      {signedAccountId && <LikeButton item={post.item} accountId={post.accountId} />}
    </div>
  );
}
