import { Post } from "@/types/database";
import PostCard from "./PostCard";

interface PostListProps {
  posts: Post[];
  layout?: "horizontal" | "vertical";
}
const PostList = ({ posts, layout = "vertical" }: PostListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {posts.map((post) => {
        return <PostCard post={post} key={post.id} layout={layout} />;
      })}
    </div>
  );
};

export default PostList;
