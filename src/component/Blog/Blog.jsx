import PropTypes from 'prop-types';
import {FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleBookmark, handleReadTime}) => {
    const {id,title, cover, author, author_img, reading_time, posted_date, hashtags} = blog;
    return (
        <div>
            <img className='w-full rounded-[12px] mt-8' src={cover} alt="" />
            <div className='flex justify-between mt-8 '>
                <div className='flex'>
                    <img className='w-[60px] h-[60px] rounded-full' src={author_img} alt="" />
                    <div>
                        <h2 className='ml-[24px]'>{author}</h2>
                        <p className='ml-[24px]'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span >{reading_time} mins reads</span>
                    <button 
                    onClick={()=>handleBookmark(blog)} 
                    className='ml-[5px] text-red-600'
                    ><FaBookmark></FaBookmark>
                    </button>

                </div>
            </div>
            <h3 className='text-4xl mt-5 w-[737px]'>{title}</h3>
            <p className='mb-[21px] mt-3'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">  {hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleReadTime(id,reading_time)} className='text-[#6047EC] text-xl mb-[60px] underline'>Mark as read</button>
        </div>
    );
};

Blog.PropTypes ={
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func
}

export default Blog;