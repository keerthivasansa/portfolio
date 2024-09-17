'use client'
import { RESUME_LINK } from "@/app/data/global";
import { useRouter } from "next/navigation";

function Resume() {
    const router = useRouter();
    
    router.push(RESUME_LINK);
    return <>Fetching latest resume . . .</>
}

export default Resume;