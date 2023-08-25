import siteConfig from "@/config/siteConfig";
import PaddingContainer from "./PaddingContainer";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <div className="border-t py-6 mt-4">
      <PaddingContainer>
        <div>
          <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
          <p className="text-lg mt-2 max-w-md text-neutral-700">
            {siteConfig.description}
          </p>
        </div>
        <div className="flex flex-wrap justify-between items-center py-6">
          <div className="flex justify-start items-start flex-col gap-2">
            <p className="text-sm font-bold">#ExploreTheWorld</p>
            <SocialLinks />
          </div>
          <div className="flex gap-1 justify-start items-start flex-col">
            <p className="text-sm text-neutral-500">Currently At</p>
            <div className="flex justify-center items-center gap-2 border p-1 rounded-md shadow-sm">
              <p>{siteConfig.currentlyAt}</p>
              <div className=" bg-emerald-500 rounded-full h-2 w-2" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center py-3 mt-7">
          <div className="text-sm text-neutral-600">
            All Right Reserved For MoutazAli | Copyright{" "}
            {new Date().getFullYear()}
          </div>
          <div className="text-sm">
            Made With Love By{" "}
            <Link
              target="_blank"
              className="underline underline-offset-1"
              href={`${siteConfig.socialLinks.linkedin}`}
            >
              @Moutaz Ali
            </Link>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
