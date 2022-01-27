import { useState } from "react";

export default function Home() {

  return (
    <div id="homepage">
      <div className={`flex items-center h-screen justify-center`}>
        <div class="space-y-20">
          <h1 className="text-4xl text-black ">Tailwind est installé.</h1>
        </div>
      </div>
    </div>
  );
}
