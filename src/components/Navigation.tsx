import Link from "next/link";
import PaddingContainer from "./PaddingContainer";

const Navigation = () => {
  return (
    <div className="border-b mb-3 sticky top-0 left-0 right-0 bg-white bg-opacity-50 backdrop-blur-sm shadow-sm">
      <PaddingContainer>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="font-semibold text-lg">
            Explorer
          </Link>
          <nav>
            <ul className="flex items-center justify-center gap-3 text-neutral-700">
              <li>
                <Link href="/cities">Cities</Link>
              </li>
              <li>
                <Link href="/experience">Experience</Link>
              </li>
            </ul>
          </nav>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Navigation;
