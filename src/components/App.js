import React from "react";
import { Sidebar } from "./smallerComponents/Sidebar";



export const App = () => {
  return (
    <div className="flex flex-row justify-between">

      <Sidebar />

      <div className="bg-gray-700">
        <p>Yeet 2</p>
      </div>
    
      <div className="bg-zinc-200">
        <p>Yeet 3</p>
      </div>

    </div>
    
  )
}