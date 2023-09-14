import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-100 p-4 m-4 rounded-[5px]'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};

export default Bookmark;