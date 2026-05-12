"use client";

import ReusableButton from "@/components/ReusableButton";
import { ChevronLeft, ServerCrash } from "lucide-react";
import { useRouter } from "next/navigation";
export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-100">
      <h1 className="text-xl items-center font-semibold text-zinc-500 mb-4 flex flex-row gap-2">
        <ServerCrash className="size-5" />
        404 - Not Found
      </h1>
      <span className="text-zinc-500 text-xs mb-4">
        Sorry, the page you're looking for doesn't exist.
      </span>
      <ReusableButton
        onClick={handleGoBack}
        children="Return"
        icon={ChevronLeft}
      />
    </div>
  );
}
