import { expect, describe, it } from "vitest";
import { Item, items, updateQuality } from "./gilded-rose.js";

// Testing dynamics of basic items -------------------------------------------------------------

// describe("basicUpdateQuality", () => {
//   it("reduces quality and sellIn of basic items by 1", () => {
//     const testItem = new Item("basic", 5, 3);
//     items.push(testItem);

//     updateQuality();

//     expect(testItem.quality).toBe(2);
//     expect(testItem.sellIn).toBe(4);
//   });
// });

// Testing dynamics of Dexterity Vest -------------------------------------------------

// describe("vestQuality", () => {
//   it("reduces quality and sellIn of dexterity vest by 1", () => {
//     const testItem = items[0];

//     updateQuality();

//     expect(testItem.sellIn).toBe(9);
//     expect(testItem.quality).toBe(19);
//   });
// });

// Testing dynamics of Aged Brie -----------------------------------------------------------

// describe("brieQuality", () => {
//   it("increases quality as item gets older, but does not exceed 50 quality", () => {
//     const testItem = items[1];

//     updateQuality();

//     expect(testItem.sellIn).toBe(1);
//     expect(testItem.quality).toBe(1);
//   });
// });

// Testing dynamics of Elixir -------------------------------------------------------------

// describe("elixirQuality", () => {
//   it("reduces quality and sellIn of Elixir of Mongoose by 1", () => {
//     const testItem = items[2];

//     updateQuality();

//     expect(testItem.sellIn).toBe(4);
//     expect(testItem.quality).toBe(6);
//   });
// });

// Testing dynamics of Hand ----------------------------------------------------------------

// describe("handQuality", () => {
//   it("quality and sellIn of Sulfuras, Hand of Ragnaros remains constant", () => {
//     const testItem = items[3];

//     updateQuality();

//     expect(testItem.sellIn).toBe(0);
//     expect(testItem.quality).toBe(80);
//   });
// });

// Testing dynamics of Backstage Passes -------------------------------------------------------

// describe("passQuality", () => {
//   it("quality increases as concert(sellIn) approaches, after which quality is 0", () => {
//     const testItem = items[4];

//     updateQuality();

//     expect(testItem.sellIn).toBe(14);
//     expect(testItem.quality).toBe(21);
//   });
// });

// Testing dynamics of Conjured Mana Cake ------------------------------------------------------

describe("cakeQuality", () => {
  it("quality decreases twice as fast as basic items for each day closer to sellIn date", () => {
    const testItem = items[5];

    updateQuality();

    expect(testItem.sellIn).toBe(2);
    expect(testItem.quality).toBe(4);
  });
});