"use client";

import { AlertDialogDescription, AlertDialogTitle } from "@radix-ui/react-alert-dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTrigger  } from "../ui/alert-dialog";

interface ConfirmModalProps {
    children: React.ReactNode;
    onConfirm: () => void;
}

export const ConfirmModal = ({
    children,
    onConfirm
}: ConfirmModalProps) => {
    const handleConfirm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        onConfirm();
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger onClick={(e) => e.stopPropagation()} asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={e => e.stopPropagation()}>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleConfirm}>
                        Confirm
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
