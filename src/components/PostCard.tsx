import { Post } from "@/types/database";
import Image from "next/image";
import Link from "next/link";
import PostContent from "./PostContent";

interface PostCardProps {
  post: Post;
  layout?: "horizontal" | "vertical";
  reverse?: boolean;
}
const PostCard = ({ post, reverse, layout = "horizontal" }: PostCardProps) => {
  return (
    <Link
      href={`/post/${post.slug}`}
      className={`${
        layout === "horizontal"
          ? "grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          : "space-y-8"
      }`}
    >
      <Image
        src={post.image}
        alt={post.title}
        width={600}
        height={300}
        className={`rounded-md object-cover object-center max-h-[300px] ${
          reverse ? "md:order-last" : ""
        }`}
      />
      <PostContent post={post} />
    </Link>
  );
};

export default PostCard;
