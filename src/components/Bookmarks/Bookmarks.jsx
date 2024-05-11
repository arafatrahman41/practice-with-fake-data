import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="w-1/3 mt-10">
        <div className="bg-[#6047EC1A] px-10 py-4 mb-6 rounded-lg border border-[#6047EC]">
          <h4 className="text-xl font-semibold text-[#6047EC]">
            Spent time on read: {readingTime}
          </h4>
        </div>
      <div className="bg-[#1111110D] p-7 rounded-lg">
        <h2 className="text-xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
        {
          bookmarks.map((bookmark, i) => <Bookmark key={i} bookmark={bookmark}></Bookmark>)
        }
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number
};

export default Bookmarks;
