"use client"
import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import Hint from "@/components/hint";
interface ItemProps{
    id: string;
    name: string;
    imageUrl: string;
}

const Item = ({id, name, imageUrl}:ItemProps) => {

    const {organization} = useOrganization();
    const {setActive} = useOrganizationList();
    const isActive = organization?.id === id;
    const onClick = () => {
        if(!setActive) return;
        setActive({organization: id});
    }

    return (  
        <div className="aspect-square relative">
            <Hint label={name} side="right" sideOffset={10} align="start">
                <Image src={imageUrl} fill onClick={onClick} alt="name" className={cn("rounded-md cursor-pointer opacity-75 hover:opacity-100 transition", isActive && "opacity-100")}/>
            </Hint>

        </div>
    );
}
 
export default Item;