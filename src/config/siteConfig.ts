export interface SiteConfig {
  siteName: string;
  description: string;
  currentlyAt: string;
  socialLinks: {
    faceBook: string;
    twitter: string;
    linkedin: string;
    github: string;
  };
}

const siteConfig: SiteConfig = {
  siteName: "Explorer",
  description:
    "Where you can find cities and experience i have gained through my travels",
  currentlyAt: "Assiut,Egypt",
  socialLinks: {
    faceBook: "https://www.facebook.com/moutaz.ali.5?mibextid=9R9pXO",
    twitter: "https://twitter.com/DrMoutazAli2?t=wb6X-nFkbcKBjgHG-qB79A&s=08",
    linkedin: "https://www.linkedin.com/in/moutaz-ali-mahfouz-4324a01a5",
    github: "https://github.com/MezoAli",
  },
};

export default siteConfig;
