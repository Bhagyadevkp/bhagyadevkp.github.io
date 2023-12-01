import React from 'react'

function Navbar() {
    return (
        <>
            <header className='fixed bottom-0 w-full pt-3'>
                <div className='container mx-auto'>
                    <ul className='flex justify-around items-center menu py-2'>
                        <li><img className='img-fluid w-10' src='/images/house.png' alt="sd" /></li>
                        <li><img className='img-fluid w-10' src='/images/graduation-hat.png' alt="sd" /></li>
                        <li><img className='img-fluid w-10' src='/images/app-store.png' alt="sd" /></li>
                        <li><img className='img-fluid w-10' src='/images/pencil.png' alt="sd" /></li>
                        <li><img className='img-fluid w-10' src='/images/curriculum-vitae.png' alt="sd" /></li>
                        <li><img className='img-fluid w-10' src='/images/github.png' alt="sd" /></li>
                        <li><img className='img-fluid w-10' src='/images/gmail.png' alt="sd" /></li>
                        <li><img className='img-fluid w-10' src='/images/linkedin.png' alt="sd" /></li>
                        <li><img className='img-fluid w-10' src='/images/twitter.png' alt="sd" /></li>
                        <li><img className='img-fluid w-10' src='/images/blogging.png' alt="sd" /></li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Navbar
