'use client'
import React, {useState, useEffect} from "react";

//Components
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const Header = () =>{
    return(
        <header>
            <div className="container mx-auto">
                <div className='flex justify-between items-center'>
                    <Logo />
                    <div className='flex items-center gap-x-6'>
                        {/*  Nav  */}
                        <Nav 
                        containerStyles='hidden xl:flex gap-x-8 items center' 
                        linkStyles='relative hover:text-primary trasition-all'
                        underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
                        />
                        <ThemeToggler />
                        {/* Nav mobile */}
                        <div className='xl:hidden'>
                            <MobileNav />
                        </div>
                    </div>  
                </div>
            </div>
          
        </header>
    );
};

export default Header;