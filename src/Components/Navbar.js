import React from 'react';

const Navbar = () => {
    return (
        <div className='h-24 bg-black text-white leading-[5rem] text-3xl flex items-center gap-3 pl-20' >
            HDMusic <img src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="logo" className='h-[50px] w-[50px] rounded-full object-cover' />
        </div>
    );
};

export default Navbar;