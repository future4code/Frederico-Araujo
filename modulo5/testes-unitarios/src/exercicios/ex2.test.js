import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  test("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  test("retorna true para 'asa'", () => {
    const ehPalindromo = checaPalindromo("asa");
    expect(ehPalindromo).toEqual(true);
  });

  test("retorna false para 'casa'", () => {
    const ehPalindromo = checaPalindromo("casa");
    expect(ehPalindromo).toEqual(false);
  });
});
