import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author_img,
    author_name,
    post_time,
    post_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="space-y-4">
      <img className="rounded-xl" src={cover} alt={`The of ${cover}`} />
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            className="w-16 h-16 object-cover rounded-full"
            src={author_img}
            alt=""
          />
          <div>
            <h4 className="text-lg font-bold">{author_name}</h4>
            <p>{post_time}</p>
            <p>{post_date}</p>
          </div>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <p>{reading_time} min read</p>
            <button onClick={() => handleAddToBookmark(blog)} className="text-2xl">
              <CiBookmark></CiBookmark>{" "}
            </button>
          </div>
        </div>
      </div>
      <p className="space-x-2">
        {hashtags.map((hashtag, i) => (
          <span key={i}>#{hashtag}</span>
        ))}
      </p>
      <button onClick={() => handleMarkAsRead(reading_time,id)} className="underline text-xl text-[#6047EC]">Mark as read</button>
      <hr />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
};

export default Blog;
