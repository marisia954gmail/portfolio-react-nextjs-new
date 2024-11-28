import Image from "next/image";
import TagIcon from "./icons/tag.svg";
//import json file and loop


import blogsData from "../data/blogs.js";

const Blog = () => {
  return (
    <>
    {blogsData.map((blog) => (
        <div key={blog.id}>
    <div
      className="relative flex flex-col max-w-3xl lg:ml-auto  xl:max-w-none "
    >
      <h3
        className="mb-4 text-4xl text-slate-700 tracking-tight font-bold dark:text-slate-200 lg:w-[45rem]"
      >
        {blog.h3}
      </h3>
      <div className="flex mb-2 -mt-2 ">
        <div className="flex prose prose-slate  gap-1 flex-wrap">
        {blog.date}
          <Image src={TagIcon} alt="React Logo" />
        </div>
      </div>

      <div className="mb-6 prose prose-slate dark:prose-dark">
        <p>
        {blog.blogTitle}
        </p>
      </div>

      <br />
    </div>
  </div>
  ))}
    </>
    );
};

export default Blog;



// import blog from "../data/blogs.json";
// import blogsData from "../../data/blogs";

// export default function Blog() {
// return (
//   <div>
//     {blogsData.map((user) => (
//       <div key={user.id}>{user.h3}</div>

//     ))}
//   </div>
//   );
// }