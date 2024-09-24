"use client";

import { useConvexAuth } from "convex/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";

export const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    return (
        <div className="max-w-3xl space-y-4 dark:text-white ">
            <h1 className='font-bold text-[76.5px] leading-[95%] tracking-[-0.04rem] text-left'>Escreva.<br/> Planeje.<br/> Organize.</h1>
            <h3 className='font-medium text-xl'>Com uma ajudinha da IA.</h3>
            {isLoading && (
                <div className='w-full flex items-center justify-center'>
                    <Spinner size='lg'/>
                </div>
            )}
            {isAuthenticated && !isLoading && (
             <Button asChild>
               <Link href='/documents'>
                    Enter Weekly
                    <ArrowRight className="h-4 w-4 ml-2" />
               </Link>
            </Button>
           )}

            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button>
                        Get join Notes free
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </SignInButton>
            )}

        </div>
    )
}