import listGifts from "../src/dia2";

describe("dia 2 challenge", () => {
  test("should returns an object with gifts", () => {
    const letter = "bici coche balón _playstation bici coche peluche";

    expect(listGifts(letter)).toEqual({
      bici: 2,
      coche: 2,
      balón: 1,
      peluche: 1,
    });
  });
});


