"use client";

import blogs from "@/data/blogs";
import BlogCard from "@/components/blogs/BlogCard";

export default function BlogList() {
  return (
    <section className="blog-list-section">
      <div className="custom-container">
        <div className="blog-list-grid">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} data={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
