"use client"

import { UserButton, useOrganization } from "@clerk/nextjs";
import SearchInputs from "./search-input";
import { OrganizationSwitcher } from "@clerk/nextjs";
import InviteButton from "./invite_button";

const Navbar = () => {
    const {organization} = useOrganization();
    return (  
        <div className="flex items-center gap-x-4 p-5 bg-green-500">
            <div className="bg-yellow-500 hidden lg:flex-1 lg:flex">
                <SearchInputs/>
            </div>
            <div className="block lg:hidden flex-1">
            <OrganizationSwitcher hidePersonal appearance={{
                elements: {
                    rootBox: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        maxWidth: "376px",
                    },
                    organizationSwitcherTrigger:{
                        padding: '6px',
                        width: "100%",
                        borderRadius: "5px",
                        border: "1px solid yellow",
                        justifyContent: "space-between",
                        backgroundColor: "white",
                    }
                }
            }}/>
            </div>
                {organization && <InviteButton/>}   {/* if we dont have an active organization we cant invite people */}
                <UserButton />
        </div>
    );
}
 
export default Navbar;