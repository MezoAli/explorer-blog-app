import { getReadingTime, getRelativeTime } from "@/lib/helpers";
import { Post } from "@/types/database";
import { ArrowRight } from "lucide-react";

interface PostContentProps {
  post: Post;
}
const PostContent = ({ post }: PostContentProps) => {
  return (
    <div className="flex flex-col justify-start items-start gap-3">
      <div className="flex justify-center items-center text-sm text-neutral-400 gap-3">
        <div
          className={`font-medium ${
            post.category.title === "Cities"
              ? "text-emerald-500"
              : "text-indigo-500"
          }`}
        >
          {post.category.title}
        </div>
        <div className="h-2 w-2 rounded-full bg-neutral-400" />
        <div>{`${post.author.first_name} ${post.author.last_name}`}</div>
        <div className="h-2 w-2 rounded-full bg-neutral-400" />
        <div>{getReadingTime(post.body)}</div>
        <div className="h-2 w-2 rounded-full bg-neutral-400" />
        <div>{getRelativeTime(post.date_created)}</div>
      </div>
      <h2 className="text-2xl font-medium">{post.title}</h2>
      <div className="text-neutral-500 leading-snug">{post.description}</div>
      <div className="flex gap-2 justify-center items-center pt-2">
        Read More
        <ArrowRight size="16" />
      </div>
    </div>
  );
};

export default PostContent;
