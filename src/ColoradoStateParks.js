import React from "react";
import HowManyParks from "./parks/howManyParks";
import MesaVerdePark from "./parks/MesaVerde";
import {trees as parkTrees, wildlife as parkWildlife } from "./parks/RockyMountain";
import * as RMFunctions from "./parks/RockyMountain";


function ColoradoStateParks() {
  // howManyParks(); // => "42 parks!"

  // return <h1>Colorado State Parks!</h1>;
  return (
    <div>
      <h1>Colorado State Parks!</h1>
      {/* <HowManyParks /> */}
      <MesaVerdePark />
      
    </div>
  )
}


export default ColoradoStateParks;