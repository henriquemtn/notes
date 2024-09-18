'use client'

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentsPage = () => {
    const { user } = useUser();
    const create = useMutation(api.documents.create);

    const onCreate = () => {
        const promise = create({ title: "Untitled" });

        toast.promise(promise, {
            loading: "Creating document...",
            success: "Document created!",
            error: "Failed to create a new Document"
        })

    }

    return ( 
        <div className="h-full flex flex-col items-center justify-center gap-2">
            <h2 className="text-lg font-medium">
                Welcome to {user?.firstName}&apos;s Notes
            </h2>
            <Button onClick={onCreate}>
                <PlusCircle className="h-4 w-4 mr-2"/>
                Create a note
            </Button>
        </div>
     );
}
 
export default DocumentsPage;