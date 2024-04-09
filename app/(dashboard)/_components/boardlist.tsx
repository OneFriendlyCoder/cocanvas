"use client"

import EmptyBoard from "./emptyboard";
import EmptyFavorites from "./emptyfavorites";
import EmptySearch from "./emptysearch";

interface BoardListParams{
    orgId: string;
    query: {
        search? : string;
        favorites?: string;
    }
}

const BoardList:React.FC<BoardListParams> = ({orgId, query}) => {
    const data = [];
    if(!data?.length && query.search){
        return (
            <EmptySearch/>
        )
    }
    if(!data.length && query.favorites){
        return (
            <EmptyFavorites/>
        )
    }
    if(!data.length){
        return (
            <EmptyBoard />
        )
    }
    return (  
        <div>
            {JSON.stringify(query)}
        </div>
    );
}
 
export default BoardList;