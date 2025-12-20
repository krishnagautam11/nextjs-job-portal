"use client";

import BlogCard from "./BlogCard";
import blogs from "@/data/blogs";

export default function BlogSectionHome() {
  const homeBlogs = blogs.slice(0, 4); 

  return (
    <section className="blog-section">
      <div className="custom-container">

        <div className="blog-header">
          <span className="blog-subtitle">OUR BLOG</span>
          <h2 className="blog-title">Recent Blog</h2>
        </div>

        <div className="blog-grid">
          {homeBlogs.map((item) => (
            <BlogCard key={item.id} data={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
