import { useState } from "react";
import Header from "./layouts/header";

function App() {
  return (
    <div className="h-screen">
      <Header></Header>
      <div className="px-6 h-full">
        <form className="pt-8 mx-auto w-full max-w-4xl" onSubmit={() => {}}>
          <p>Email</p>
          <input className="mb-[10px]" />
          <p>Password</p>
          <input className="mb-[10px]" />
          <div className="flex space-x-1 mb-6">
            <input type="checkbox" className="w-4 h-4" />
            <label>
              I agree with the{" "}
              <a className="text-blue-700 font-medium">
                The terms and condition
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white w-full py-2 text-xl rounded-md"
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
