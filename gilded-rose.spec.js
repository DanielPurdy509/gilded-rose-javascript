import { expect, describe, it } from "vitest";
// import { Item, items, updateQuality } from "./gilded-rose.js";
import {Item,items,BaseItem,AgedBrie,Hand,Passes,Conjured,updateQualityTest} from "./draft.js";

// Testing dynamics of basic items -------------------------------------------------------------

// describe("basicUpdateQuality", () => {
//   it("reduces quality and sellIn of basic items by 1", () => {
//     // const testItem = new BaseItem("basic", 5, 3);
//     const testItem = items[0];

//     testItem.updateQuality();

//     expect(testItem.sellIn).toBe(9);
//     expect(testItem.quality).toBe(19);
//   });
// });

// Testing dynamics of Dexterity Vest -------------------------------------------------

// describe("vestQuality", () => {
//   it("reduces quality and sellIn of dexterity vest by 1", () => {
//     const testItem = items[0];

//     updateQuality();
//     console.log(`[Iteration 1] Quality:${testItem.quality}. Sell Date: ${testItem.sellIn}`);


//     expect(testItem.sellIn).toBe(9);
//     expect(testItem.quality).toBe(19);
//   });
// });

// Testing dynamics of Aged Brie -----------------------------------------------------------
// 1 Iteration

// describe("brieQuality", () => {
  // it("Aged Brie increases quality as item gets older, but does not exceed 50 quality [1 iteration]", () => {
  //   const testItem = items[1];

  //   updateQuality();
  //   console.log(`[Iteration 1] Quality:${testItem.quality}. Sell Date: ${testItem.sellIn}`);


  //   expect(testItem.sellIn).toBe(1);
  //   expect(testItem.quality).toBe(1);
  // });
// });

// 5 Iterations

describe("brieQuality", () => {
  it("Aged Brie increases quality twice as fast if sellIN date is less than 0, but does not exceed 50 quality [5 iterations]", () => {
    const testItem = items[1];

    // updateQuality();
    //   console.log(`[Iteration 1] Quality:${testItem.quality}. Sell Date: ${testItem.sellIn}`);
    // updateQuality();
    //   console.log(`[Iteration 2] Quality:${testItem.quality}. Sell Date: ${testItem.sellIn}`);
    // updateQuality();
    //   console.log(`[Iteration 3] Quality:${testItem.quality}. Sell Date: ${testItem.sellIn}`);
    // updateQuality();
    //   console.log(`[Iteration 4] Quality:${testItem.quality}. Sell Date: ${testItem.sellIn}`);
    // updateQuality();
    //   console.log(`[Iteration 5] Quality:${testItem.quality}. Sell Date: ${testItem.sellIn}`);

    updateQualityTest(testItem,5);
    
    expect(testItem.sellIn).toBe(-3);
    expect(testItem.quality).toBe(7);
  });
});

// Testing dynamics of Elixir -------------------------------------------------------------

// describe("elixirQuality", () => {
//   it("reduces quality and sellIn of Elixir of Mongoose by 1", () => {
//     const testItem = items[2];

//     console.log(`[Start] Quality:${testItem.quality}. Sell Date: ${testItem.sellIn}`);
//     updateQuality();
//     console.log(`[Iteration 1] Quality:${testItem.quality}. Sell Date: ${testItem.sellIn}`);


//     expect(testItem.sellIn).toBe(4);
//     expect(testItem.quality).toBe(6);
//   });
// });

// Testing dynamics of Hand ----------------------------------------------------------------

// describe("handQuality", () => {
//   it("quality and sellIn of Sulfuras, Hand of Ragnaros remains constant", () => {
//     const testItem = items[3];

//     console.log(`[Start] Quality:${testItem.quality}. Sell Date: ${testItem.sellIn}`);
//     updateQuality();
//     console.log(`[Iteration 1] Quality:${testItem.quality}. Sell Date: ${testItem.sellIn}`);

//     expect(testItem.sellIn).toBe(0);
//     expect(testItem.quality).toBe(80);
//   });
// });

// Testing dynamics of Backstage Passes -------------------------------------------------------

// describe("passQuality", () => {
//   it("quality increases as concert(sellIn) approaches, after which quality is 0", () => {
//     const testItem = items[4];

//     console.log(`[Start] Quality:${testItem.quality}. Sell Date: ${testItem.sellIn}`);
//     updateQuality();
//     console.log(`[Iteration 1] Quality:${testItem.quality}. Sell Date: ${testItem.sellIn}`);

//     expect(testItem.sellIn).toBe(14);
//     expect(testItem.quality).toBe(21);
//   });
// });

// Testing dynamics of Conjured Mana Cake ------------------------------------------------------

// describe("cakeQuality", () => {
//   it("quality decreases twice as fast as basic items for each day closer to sellIn date", () => {
//     const testItem = items[5];

//     updateQuality();

//     expect(testItem.sellIn).toBe(2);
//     expect(testItem.quality).toBe(4);
//   });
// });