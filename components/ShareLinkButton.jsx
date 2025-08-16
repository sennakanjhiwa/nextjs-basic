"use client";

import { useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";

export default function ShareLinkButton() {
  const [copied, setCopied] = useState(false);
  function handleClick() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-1 px-1.5 py-1 cursor-pointer bg-gray-500 hover:bg-gray-500/90 text-white rounded text-nowrap transition duration-200"
    >
      <LinkIcon className="h-4 w-4" />
      {copied ? "Link Copied!" : "Share Link"}
    </button>
  );
}
