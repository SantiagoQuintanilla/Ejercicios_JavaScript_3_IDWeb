import * as ops from "./operaciones.js";

console.log("->Sumar 2 y 3: ",ops.sumar(2,3));
console.log("->Restar 5 y 2: ",ops.restar(5,2));
console.log("->Multiplicar 4 y 3: ",ops.multiplicar(4, 3));

import { sumar } from "./operaciones.js";

console.log("Se importó solo sumar! ->Sumar 7 y 8: ", sumar(7,8));