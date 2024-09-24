"use client";

import { Id } from '@/convex/_generated/dataModel';
import { useRouter } from 'next/navigation'
import React from 'react'

interface DocumentPagesProps {
    documentId:Id<'documents'>
}

export default function DocumentPages({documentId}:DocumentPagesProps) {
    const router = useRouter();

    return (
        <div className='pl-[54px]'>DocumentPages</div>
    )
}
