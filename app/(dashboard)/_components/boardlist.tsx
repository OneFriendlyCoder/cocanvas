"use client"

import EmptyBoard from "./emptyboard";
import EmptyFavorites from "./emptyfavorites";
import EmptySearch from "./emptysearch";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { get } from '../../../convex/boards';
import BoardCard from "./Boardcard";
import NewBoardButton from "./new-board-button";
interface BoardListParams{
    orgId: string;
    query: {
        search? : string;
        favorites?: string;
    }
}

const BoardList:React.FC<BoardListParams> = ({orgId, query}) => {
    const data = useQuery(api.boards.get, {orgId});
    if(data === undefined){                 //data can never be undefined, so if it is undefined then it is in Loading state
        return (<div>
            Loading...
        </div>)
    }

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
            <h2 className="text-3xl">
                {query.favorites ? "Favorite Boards" : "Team Boards"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-8 pb-10">
                <NewBoardButton orgId={orgId}/>
            {data?.map((board) => (
            <BoardCard 
                key={board._id}
                id={board._id}
                title={board.title}
                imageUrl={board.imageUrl}
                authorId={board.authorId}
                authorName={board.authorName}
                createdAt={board._creationTime}
                orgId={board.orgId}
                isFavorite={false} 
            />
        ))}
            </div>
        </div>
    );
}
 
export default BoardList;