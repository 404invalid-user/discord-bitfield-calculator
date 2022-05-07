import { genPermissions, genBitfield } from "../index";

test("Generate permissions from bitfield", () => {
  expect(genPermissions(0x0000000000000001)).toStrictEqual([
    "CREATE_INSTANT_INVITE",
  ]);
});

test("Generate bitfield from permissions", () => {
  expect(genBitfield("CREATE_INSTANT_INVITE")).toBe(0x1);
});
