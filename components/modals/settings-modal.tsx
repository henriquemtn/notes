"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader
} from "@/components/ui/dialog"

import { useSettings } from "@/hooks/use-settings"
import { ModeToggle } from "../mode-toggle";
import { Label } from "../ui/label";

export const SettingsModal = () => {
    const settings = useSettings();

    return (
        <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
            <DialogContent className="bg-white dark:bg-[#1F1F1F] dark:text-white">
                <DialogHeader>
                    <h2 className="text-lg font-medium ">My settings</h2>
                </DialogHeader>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-1">
                        <Label>
                            Appearance
                        </Label>
                        <span className="text-[0.8rem] dark:text-gray-200 text-muted-foreground">
                            Customize how Notes looks on your device
                        </span>
                    </div>
                    <div className="mt-4">
                    <ModeToggle />
                </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}