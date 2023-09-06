"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <>
      <div className="my-10">
        <h1 className="text-8xl font-bold">
          {" "}
          !!! Welcome to Awesome place !!!{" "}
        </h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={() => router.push("/contact")}
        >
          contact
        </button>
      </div>
    </>
  );
}
