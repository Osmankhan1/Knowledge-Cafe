import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Boolmarks/Bookmarks'
import Blog from './component/Blog/Blog'

function App() {
  const [count, setCount] = useState(0)

  const [bookmarks, setBookmarks] = useState([]);
  const [readtime, setReadtime] = useState(0);

  const handleBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  const handleReadTime = (id,time) => {
      const newReadinTime = readtime + time;
      setReadtime(newReadinTime);
      // remove the read blog from the bookmark
      const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id)
      setBookmarks(remainingBookmark)
  }

  return (
    <>
     
     <Header></Header>
     <div className='md: flex max-w-7xl mx-auto'>
     <Blogs handleBookmark={handleBookmark} handleReadTime={handleReadTime}></Blogs>
     <Bookmarks bookmarks={bookmarks} readtime={readtime}></Bookmarks>
     
     </div>
      
    </>
  )
}

export default App
