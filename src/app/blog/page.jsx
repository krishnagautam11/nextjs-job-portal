import BlogHeader from "../../components/blogs/BlogHeader";
import BlogSection from "../../components/blogs/BlogSection";
import Pagination from "../../components/common/Pagination";

// import BlogHeader from "@/components/blogs/BlogHeader";
// import BlogSection from "@/components/blogs/BlogSection";
// import Pagination from "@/components/common/Pagination";
// import Newsletter from "@/components/common/Newsletter";


export default function BlogPage() {
  return (
    <>
      <BlogHeader />
      <BlogSection/>
      <Pagination />
      {/* <Newsletter /> */}
    </>
  );
}
