import React from "react";
import "./blog.css";
import blogc1 from "../../assets/images/blogc1.png";
import Desk from "../../assets/images/Desk.png";
import apple from "../../assets/images/apple.png";
import BlogCard from "../Cards/BlogCard";
const Blog = () => {
  return (
    <>
      {/* ==== blog started here ====   */}
      <section id="blog">
        <div className="blog__wrapper">
          <h2 className="common__heading">Our blog</h2>
          <div className="blog__cards">
            <BlogCard
              Imgsrc={blogc1}
              Alt={"not found"}
              date={"19 Jan 2022"}
              tittle={
                "How one Webflow user grew his single person consultancy from $0-100K in 14 months"
              }
              paragraph={
                "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
              }
              link={"View more →"}
            />
            <BlogCard
              Imgsrc={Desk}
              Alt={"not found"}
              date={"19 Jan 2022"}
              tittle={
                "How one Webflow user grew his single person consultancy from $0-100K in 14 months"
              }
              paragraph={
                "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
              }
              link={"View more →"}
            />
            <BlogCard
              Imgsrc={apple}
              Alt={"not found"}
              date={"19 Jan 2022"}
              tittle={
                "How one Webflow user grew his single person consultancy from $0-100K in 14 months"
              }
              paragraph={
                "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
              }
              link={"View more →"}
            />
          </div>
        </div>
      </section>
      {/* ==== blog ended here ====  */}
    </>
  );
};

export default Blog;
