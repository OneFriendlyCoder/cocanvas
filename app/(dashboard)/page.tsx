"use client"

import { useOrganization } from "@clerk/nextjs";
import EmptyOrg from "./_components/empty-orgs";
import BoardList from "./_components/boardlist";
interface DashBoardParams{          // we will be accessing those search params from the url
    searchParams: {
        search?: string,
        favorites?: string;
    }
}

const DashBoard:React.FC<DashBoardParams> = ({searchParams}) => {
    const {organization} = useOrganization();
    return (  
        <div className="flex-1 bg-red-500 h-[calc(100%-80px)] p-6">
            {
                !organization ? (<EmptyOrg/>) : (<BoardList orgId={organization.id} query={searchParams}/>)
            }
        </div>
    );
}
 
export default DashBoard;