/**
 * count sheeps.
 * @param  {any} ovejas The first number.
 * @returns {any} The sum of the two numbers.
 */

export default function contarOvejas(ovejas) {
  const ovejasFiltradas = ovejas
      .filter((ovejas)=>
        ovejas.color === "rojo" &&
        ovejas.name.includes("a")&&
        ovejas.name.includes("n") ||
        ovejas.color === "rojo" &&
        ovejas.name.includes("A")&&
        ovejas.name.includes("n") ||
        ovejas.color === "rojo" &&
        ovejas.name.includes("a")&&
        ovejas.name.includes("N"));
  return ovejasFiltradas;
}
