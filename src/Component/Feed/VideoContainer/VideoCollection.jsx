import React from 'react'
import { Link } from 'react-router-dom'
import nature from './nature.png'
const VideoCollection = () => {
    return (
        <>
          
            <div className='mr-3 w-[23%] h-fit max-sm:w-[80%]  bg-gray-600 rounded-2xl overflow-hidden
    '>
        <Link to={`/video`}>
                <img src={nature} alt="nature" />
                <div className=' bg-red-500'>
                    <div>
                        <span>Title of the videoes</span>
                    </div>
                    <div>
                        <span> Channel name</span>
                    </div>
                    <div>
                        <span>Views and time</span>
                    </div>
                </div>
            </Link>
            </div>
        </>
    )
}

export default VideoCollection