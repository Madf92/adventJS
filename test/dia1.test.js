import contarOvejas from "../src/dia1";
describe("dia 1 challenge", () => {
  test("filtrar ovejas por color y nombre", () => {
    const ovejas = [
      {name: "Noa", color: "azul"},
      {name: "Euge", color: "rojo"},
      {name: "Navidad", color: "rojo"},
      {name: "Ki Na Ma", color: "rojo"},
      {name: "AAAAAaaaaa", color: "rojo"},
      {name: "Nnnnnnnn", color: "rojo"},
    ];

    expect(contarOvejas(ovejas)).toEqual([
      {name: "Navidad", color: "rojo"},
      {name: "Ki Na Ma", color: "rojo"},
    ]);
  });
});
