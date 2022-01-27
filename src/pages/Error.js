import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen" id="errorpage">
      <div >
        <h1 className="text-4xl text-black mb-6">Page introuvable</h1>
        <Link to="../Home">
          <p className="mx-auto bg-blue-400 w-24 text-indigo-50 font-semibold flex justify-center items-center py-4 rounded">
            Accueil
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Error;
