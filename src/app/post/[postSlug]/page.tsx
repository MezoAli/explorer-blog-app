import { DUMMY_POSTS } from "@/dummy-data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return DUMMY_POSTS.map((post) => {
    return { postSlug: post.slug };
  });
}

const Postpage = ({
  params: { postSlug },
}: {
  params: { postSlug: string };
}) => {
  const post = DUMMY_POSTS.find((post) => post.slug === postSlug);
  if (!post) {
    return notFound();
  }
  return (
    <div>
      Post Page
      <p>post slug : {postSlug}</p>
      <p>post title : {post?.title}</p>
      <p>post des : {post?.description}</p>
    </div>
  );
};

export default Postpage;
