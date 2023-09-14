import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks,readtime}) => {
    return (
        
       
        
        <div className="md: w-1/3 bg-slate-300 ml-2 rounded-lg mt-8 pt-2">
            <div>
                <h3 className="text-3xl text-center bg-red-100 p-4 m-4 rounded-[5px] text-[#6047EC] ">Reading Time: {readtime} mins</h3>
            </div>
            <h3 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
        
       
    );
};

export default Bookmarks;