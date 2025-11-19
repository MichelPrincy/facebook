import React, { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login clicked: " + email);
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-10 w-[90%] max-w-[900px]">

        {/* ---- LEFT SIDE ---- */}
        <div className="flex-1">
          <h1 className="text-[#1877f2] text-6xl font-bold mb-3">facebook</h1>
          <p className="text-2xl text-gray-700 font-normal w-[350px]">
            Avec Facebook, partagez et restez en contact avec votre entourage.
          </p>
        </div>

        {/* ---- RIGHT SIDE ---- */}
        <div className="flex-1">
          <div className="bg-white shadow-lg rounded-lg p-6 w-[350px]">

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Adresse e-mail ou numéro de tel."
                className="border border-gray-300 rounded-lg p-3 text-lg outline-none focus:border-[#1877f2]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Mot de passe"
                className="border border-gray-300 rounded-lg p-3 text-lg outline-none focus:border-[#1877f2]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="submit"
                className="bg-[#1877f2] text-white text-xl font-semibold p-3 rounded-lg hover:bg-[#166fe5]"
              >
                Se connecter
              </button>

              <a href="#" onClick={(e) => e.preventDefault()} className="text-[#1877f2] text-center text-sm hover:underline">
                Mot de passe oublié ?
              </a>

              <div className="flex items-center gap-3">
                <div className="h-[1px] bg-gray-300 flex-1"></div>
                <span className="text-gray-500">ou</span>
                <div className="h-[1px] bg-gray-300 flex-1"></div>
              </div>

              <button
                type="button"
                className="bg-[#42b72a] text-white text-lg font-semibold p-3 rounded-lg hover:bg-[#36a420]"
              >
                Créer un compte
              </button>
            </form>
          </div>

          <p className="text-sm text-center mt-4">
            <a href="#" className="font-bold hover:underline">Créer une Page</a> pour une célébrité, une marque ou une entreprise.
          </p>
        </div>
      </div>
    </div>
  );
}
