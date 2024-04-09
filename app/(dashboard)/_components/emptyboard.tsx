"use client"
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Organization } from "@clerk/nextjs/server";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutations";
const EmptyBoard = () => {

    const {organization} = useOrganization();
    const {mutate, pending} = useApiMutation(api.board.create);
    const onClick = () => {
        if(!organization) return;
        mutate({
            orgId: organization.id,
            title: "Untitled"
        })
    }

    return (  
        <div className="h-full flex flex-col items-center justify-center">
            <Image src="" alt="Empty favorites" height={140} width={140}/>
            <h2 className="text-2xl font-semibold mt-6">
                Create your first board
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Start by creating a board for your organization
            </p>
            <div className="mt-6">
                <Button onClick={onClick} disabled={pending} size="lg">
                    Create board
                </Button>
            </div>
        </div>
    );
}
 
export default EmptyBoard;