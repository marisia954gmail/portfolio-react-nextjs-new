
import GithubNewIcon from "./icons/github_new.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <>
    <div className="flex flex-col items-center mt-16">
      <div className="flex mb-3 space-x-4">
        <a
          className="text-sm text-gray-500 transition hover:text-gray-600"
          ><Image src={GithubNewIcon} alt="React Logo" /><span className="sr-only">github </span>
        </a>
        <a
          className="text-sm text-gray-500 transition hover:text-gray-600"
          ><Image src={GithubNewIcon} alt="React Logo" /><span className="sr-only">github </span>
        </a>

      </div>
      <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>Copyright © 2024</div>
        <div>•</div>

      </div>
      <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/mdrathik/tailwind-nuxtjs-starter-blog"
        ></a>
      </div>
    </div>
    </>
  );
};

export default Footer;