import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog/Blog";

const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3 space-y-8 mt-10">
      {blogs.map((blog) => (
        <Blog
          handleAddToBookmark={handleAddToBookmark}
          key={blog.id}
          blog={blog}
          handleMarkAsRead={handleMarkAsRead}
        />
      ))}
    </div>
  );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
};

export default Blogs;
