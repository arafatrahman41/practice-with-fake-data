import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    setBookmarks([...bookmarks, blog]);
  };

  const handleMarkAsRead = (time, id) => {
    setReadingTime (readingTime + time)
    // console.log('remove bookmark', id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  };
  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="flex gap-5">
        <Blogs 
        handleAddToBookmark={handleAddToBookmark}
        handleMarkAsRead = {handleMarkAsRead}
        ></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
