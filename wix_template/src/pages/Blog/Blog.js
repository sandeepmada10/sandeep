import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>

      <h1 className="page-heading">All The Tips In One Place</h1>
      
      <div class="card">
        <img
          class="card-img-top"
          src="https://static.wixstatic.com/media/2e2a49_a44bb315fe0e4ef4b04c683eb71debc3~mv2.jpg/v1/fill/w_1175,h_661,fp_0.50_0.50,q_90,enc_auto/2e2a49_a44bb315fe0e4ef4b04c683eb71debc3~mv2.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <p className="card-day">May 30 . 2 min</p>
          <h1 class="card-title">Finding Ideas for Your Next Podcast</h1>
          <p class="card-text">
            Create a blog post subtitle that summarizes your post in a few
            short, punchy sentences and entices your audience to continue
            reading....
          </p>
        
        </div>
      </div>
    
    </div>
  );
};

export default Blog;
