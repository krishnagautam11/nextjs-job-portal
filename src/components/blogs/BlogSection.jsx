"use client";

import BlogCard from "./BlogCard";
import blogs from "@/data/blogs";

export default function BlogSection() {
  const blogPageBlogs = blogs.slice(0, 8); 

  return (
    <section className="blog-section">
      <div className="custom-container">

        <div className="blog-grid">
          {blogPageBlogs.map((item) => (
            <BlogCard key={item.id} data={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
