import CTAcard from "@/components/CTAcard";
import PaddingContainer from "@/components/PaddingContainer";
import PostBody from "@/components/PostBody";
import PostContent from "@/components/PostContent";
import ShareLinks from "@/components/ShareLinks";
import { DUMMY_POSTS } from "@/dummy-data";
import Image from "next/image";
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
    <PaddingContainer>
      <PostContent post={post} isPostPage />
      <Image
        src={post.image}
        alt={post.title}
        width={1280}
        height={600}
        className="rounded-md mt-6"
      />
      <div className="my-6 flex gap-6">
        <div className="relative">
          <div className="sticky top-24 flex flex-col gap-4">
            <ShareLinks
              platform="facebook"
              link={`https://www.facebook.com/sharer/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
            />
            <ShareLinks
              platform="twitter"
              link={`https://twitter.com/intent/tweet?url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
            />
            <ShareLinks
              platform="linkedin"
              link={`https://www.linkedin.com/shareArticle?mini=true&url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
            />
          </div>
        </div>
        <PostBody body={post.body} />
      </div>
      <CTAcard />
    </PaddingContainer>
  );
};

export default Postpage;

/* <SocialLink
isShareURL
platform="facebook"
link={`https://www.facebook.com/sharer/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
/>
<SocialLink
isShareURL
platform="twitter"
link={`https://twitter.com/intent/tweet?url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
/>
<SocialLink
isShareURL
platform="linkedin"
link={`https://www.linkedin.com/shareArticle?mini=true&url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
/> */
