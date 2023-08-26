import { DUMMY_POSTS } from "@/dummy-data";

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
  return (
    <div>
      Post Page
      <p>post slug : {postSlug}</p>
    </div>
  );
};

export default Postpage;
