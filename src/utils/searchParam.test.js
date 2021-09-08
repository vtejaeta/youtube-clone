import getSearchParam from "./searchParam.utils";

test("should have search param as marvel", () => {
  const result = getSearchParam(
    { href: "http://localhost:3000/result?search_term=marvel" },
    "search_term"
  );
  const expected = "marvel";
  expect(result).toBe(expected);
});

test("should have search param as empty string value", () => {
  const result = getSearchParam(
    { href: "http://localhost:3000/result?search_term=" },
    "search_term"
  );
  const expected = "";
  expect(result).toBe(expected);
});

test("should return value null for mispelled search param key", () => {
  const result = getSearchParam(
    { href: "http://localhost:3000/result?searh_term=marvel" },
    "search_term"
  );
  expect(result).toBeNull();
});

test("should return value null for no search Param", () => {
  const result = getSearchParam(
    { href: "http://localhost:3000/result" },
    "search_term"
  );
  expect(result).toBeNull();
});
