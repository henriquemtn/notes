"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl dark:text-white transition-all font-bold">
                Your Ideas, Documents, & Plans. Unfied. Welcome to
                <span className="text-gray-900 underline dark:text-white transition-all"> Notes</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium dark:text-white transition-all">
                Notes is the connected workspace where <br />
                better, faster work happens.
            </h3>
            <Button>
                Enter Notes
                <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
        </div>
    )
}