import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='flex justify-between items-center p-10 mx-10 border-b border-red-600'>
            <div>
                <Link to={""}>
                    <p className='font-bold font-mono text-3xl text-red-600'>
                        RestCountries
                    </p>
                </Link>
            </div>
            <div className='w-[80px]'>
                <Link className=' flex justify-center items-center flex-col' to={"saved"}>
                    <img src="/WhiteSave.png" />
                    <p className='font-bold font-mono text-xl text-red-600'>Saved</p>
                </Link>
            </div>
        </div>
    )
}

export default Header