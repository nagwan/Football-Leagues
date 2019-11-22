import React from 'react'
import { Link } from 'react-router-dom';

const View = (() => {
    return (
        <nav className='bg-primary-50 shadow w-full'>
            <div className='flex justify-between items-center py-8 px-20'>

                <div className='logo w-2/12 h-60 cursor-pointer'>
                    <Link to='/'></Link>
                </div>
            </div>
        </nav>
    )
})

export default View