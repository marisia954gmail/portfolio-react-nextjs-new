
import BlogContent from "@/components/Blog";
export default function Blog() {
return (
  <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
    <div className="pt-6 space-y-2 md:space-y-5">
      <h1
        className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14"
      >
        Projects
      </h1>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
        Some of the projects I've build or been a part of.
      </p>
    </div>
    <div className="space-y-16 mx-auto max-w-7xl">
      <div className="container py-12">
        <BlogContent/>
      </div>
    </div>
  </div>
  );
}
