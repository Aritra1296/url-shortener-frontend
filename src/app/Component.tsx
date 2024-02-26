"use client";
import React, { FormEvent } from "react";
import { ComponentInterface } from "./types";
import Link from "next/dist/client/link";

function Component({ shortUrl, fullUrl }: ComponentInterface) {
  return (
    <div className="flex justify-between w-full gap-3">
      <div className="text-wrap: wrap w-1/2">{fullUrl}</div>
      <div className="w-1/4 flex items-center justify-end">
        {process.env.NEXT_PUBLIC_REACT_APP_API_BASEURL}/{shortUrl}
      </div>
      <Link
        target="_blank"
        href={fullUrl}
        className="w-1/4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        type="submit"
      >
        OPEN
      </Link>
    </div>
  );
}

export default Component;
