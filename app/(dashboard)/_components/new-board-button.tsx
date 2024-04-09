"use client"
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutations";
interface NewBoardButtonProps{
    orgId: string;
    disabled?: boolean;
}



const NewBoardButton = ({orgId, disabled}:NewBoardButtonProps) => {
    const {mutate, pending} = useApiMutation(api.board.create);
    const onClick = () => {
        mutate({
            orgId,
            title: "Untitled"
        }).then((id) => {
            toast.success("Board created");
            {/* redirect to the board */}
        }).catch((err)=>{toast.error("Failed to create Board")})
    }
    return (  
        <button disabled={disabled || pending} onClick={onClick} className={cn("col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6", disabled && "opacity-75")}>
            <div/>
            <Plus className="h-12 w-12 text-white stroke-1"/>
            <p className="text-xs text-white font-light">New Board</p>
        </button>
    );
}
 
export default NewBoardButton;