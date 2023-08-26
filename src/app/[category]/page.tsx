import PaddingContainer from "@/components/PaddingContainer";
import PostList from "@/components/PostList";
import { DUMMY_CATEGORIES, DUMMY_POSTS } from "@/dummy-data";

export async function generateStaticParams() {
  return DUMMY_CATEGORIES.map((cat) => {
    return { category: cat.slug };
  });
}

const CategoryPage = ({
  params: { category },
}: {
  params: { category: string };
}) => {
  const posts = DUMMY_POSTS.filter((post) => {
    return post.category.title.toLowerCase() === category;
  });
  return (
    <PaddingContainer>
      <PostList posts={posts} />
    </PaddingContainer>
  );
};

export default CategoryPage;
