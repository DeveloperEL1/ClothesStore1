import React from 'react'
import { Link } from 'react-router-dom'

function TopBar() {
    const classes = {
        buttonStyles: "bg-teal-700 hover:bg-teal-600 text-white py-2 px-4 rounded-lg font-semibold shadow-md transition duration-300 ease-in-out"
    }
    return (
        <div className='bg-sky-500/100 p-3'>
            <div className='flex justify-end gap-3'>
                <Link className={classes.buttonStyles} to='/signup'>Sign Up</Link>
                <Link className={classes.buttonStyles} to='/signin'>Sign In</Link>
            </div>
        </div>
    )
}

export default TopBar
