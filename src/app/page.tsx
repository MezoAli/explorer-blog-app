import CTAcard from "@/components/CTAcard";
import PaddingContainer from "@/components/PaddingContainer";
import PostCard from "@/components/PostCard";
import PostList from "@/components/PostList";
import { DUMMY_POSTS } from "@/dummy-data";

export default function Home() {
  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard post={DUMMY_POSTS[0]} />
        <PostList posts={[DUMMY_POSTS[1], DUMMY_POSTS[2]]} />
        <CTAcard />
        <PostCard post={DUMMY_POSTS[3]} reverse />
        <PostList posts={[DUMMY_POSTS[4], DUMMY_POSTS[5]]} />
      </main>
    </PaddingContainer>
  );
}
