import siteConfig from "@/config/siteConfig";
import { Facebook, Twitter, Github, Linkedin } from "lucide-react";
import Link from "next/link";
const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center gap-3 text-sm">
      <Link target="_blank" href={`${siteConfig.socialLinks.faceBook}`}>
        <Facebook size="20px" />
      </Link>
      <Link target="_blank" href={`${siteConfig.socialLinks.twitter}`}>
        <Twitter size="20px" />
      </Link>
      <Link target="_blank" href={`${siteConfig.socialLinks.github}`}>
        <Github size="20px" />
      </Link>
      <Link target="_blank" href={`${siteConfig.socialLinks.linkedin}`}>
        <Linkedin size="20px" />
      </Link>
    </div>
  );
};

export default SocialLinks;
