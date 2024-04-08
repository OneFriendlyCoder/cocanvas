"use client"

import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return (  
        <div className="flex items-center gap-x-4 p-5 bg-green-500">
            <div className="bg-yellow-500 hideen lg:flex-1 lg:flex">
                Search
            </div>
                <UserButton />
        </div>
    );
}
 
export default Navbar;