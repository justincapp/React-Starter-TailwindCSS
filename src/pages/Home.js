import { useState } from "react";

export default function Home() {


  const [bg, setBg] = useState("bg-white")

  return (
    <div id="homepage">


      <div className={`flex items-center h-screen justify-center ${bg}`}>
     <div class="space-y-20">
     <h1 className="text-4xl text-black ">Tailwind est installé.</h1>
        <div className="flex items-center justify-between">
          <p className="cursor-pointer" onClick={()=>setBg("bg-white")}>Blanc</p>
          <p className="cursor-pointer" onClick={()=>setBg("bg-red-400")}>Rouge</p>
          <p className="cursor-pointer" onClick={()=>setBg("bg-blue-400")}>Bleu</p>
          <p className="cursor-pointer" onClick={()=>setBg("bg-yellow-400")}>Jaune</p>
          <p className="cursor-pointer" onClick={()=>setBg("bg-indigo-400")}>Indigo</p>
          <p className="cursor-pointer" onClick={()=>setBg("bg-purple-400")}>Violet</p>
          <p className="cursor-pointer" onClick={()=>setBg("bg-gray-400")}>Gris</p>
        </div>
     </div>
    </div>




    </div>
  );
}
