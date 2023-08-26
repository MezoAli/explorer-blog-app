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
      <h2 className="text-center mb-6 text-4xl font-bold">{category}</h2>
      <PostList posts={posts} />
    </PaddingContainer>
  );
};

export default CategoryPage;
