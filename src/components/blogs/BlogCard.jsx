import Image from "next/image";

export default function BlogCard({ data }) {
  return (
    <article className="blog-card">

      <div className="blog-image">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="blog-img"
        />
      </div>

      <div className="blog-content">
        <div className="blog-meta">
          <span>{data.date}</span>
          <span>{data.author}</span>
          <span>{data.comments} 💬</span>
        </div>

        <h3 className="blog-heading">
          {data.title}
        </h3>
      </div>

    </article>
  );
}
