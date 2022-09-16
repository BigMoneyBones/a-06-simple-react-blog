import React from "react";

const Blogs = ({
  userName,
  profileImage,
  blog,
  setBlog,
  blogArray,
  setBlogArray,
}) => {
  const DeleteBlog = (blogId) => {
    setBlogArray(
      blogArray.filter((origionalBlog) => {
        if (origionalBlog.id !== blogId) {
          return origionalBlog;
        }
      })
    );
  };

  return (
    <div id="blogs-main">
      <img id="profile-image" src={profileImage} alt="profile"></img>
      <header>Welcome, {userName}!</header>
      <div id="blogs-container">
        <textarea
          id="text-area"
          placeholder="ENTER YOUR POST HERE"
          //   value={blog}
          onChange={(event) => {
            const newBlog = event.target.value;
            setBlog(newBlog);
          }}
        ></textarea>
        <button
          type="submit"
          id="post-blog-button"
          onClick={() => {
            setBlogArray([
              { text: blog, id: blogArray.length + 1 },
              ...blogArray,
            ]);
            console.log("blog array: ", blogArray);
          }}
        >
          Post
        </button>
        <div id="blog-posts-container">
          {blogArray.map((blog, index) => {
            return (
              <>
                <div id="single-blog-entry" key={`blog-${index}`}>
                  <img id="post-image" src={profileImage} alt="profile"></img>
                  <div>{userName}</div>
                  <div>{blog.text}</div>
                  <button
                    id="delete-post-button"
                    type="submit"
                    onClick={() => {
                      DeleteBlog(blog.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
                <hr />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
