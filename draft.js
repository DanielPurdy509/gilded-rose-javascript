// Item class we can't touch for some reason -----------------------------

class Item {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }

  
  // BaseItem ----------------------------------------------------------------
  
  class BaseItem extends Item {
      constructor(name,sellIn,quality){
          super(name,sellIn,quality);
          if(this.quality > 50){
              this.quality = 50;
            }
        }
        updateQuality(){
            if(this.sellIn > 0){
                this.quality --;
                this.sellIn --;
            }
            else if(this.sellIn < 0){
                this.quality - 2;
                this.sellIn --;
            }
        }
    }

    
    // Aged Brie ---------------------------------------------------------------
    
    class AgedBrie extends Item {
    constructor(name,sellIn,quality){
        super(name,sellIn,quality);
    }
    updateQuality(){
        if(this.quality < 50){
            if(this.sellIn > -1){
                this.quality ++;
                this.sellIn --;
            }
            else if(this.sellIn < 0){
                this.quality += 2;
                this.sellIn --;
            }
        }
        else{
            this.sellIn --;
        }
    }
}

// Hand ----------------------------------------------------------------------------

class Hand extends Item {
    constructor(name,sellIn,quality){
        super(name,sellIn,quality);
    }
    updateQuality(){}
}

// Passes ----------------------------------------------------------------------------

class Passes extends Item {
    constructor(name,sellIn,quality){
        super(name,sellIn,quality);
    }
    updateQuality(){
        if(this.sellIn > 10){
            this.quality ++;
            this.sellIn --;
        }
        if(this.sellIn < 11 > 5){
            this.quality += 2;
            this.sellIn --;
        }
        if(this.sellIn < 6 > 0){
            this.quality += 3;
            this.sellIn --;
        }
        else{
            this.quality = 0;
            this.sellIn --;
        }
    }
}

// Conjured ------------------------------------------------------------------------------

class Conjured extends Item {
    constructor(name,sellIn,quality){
        super(name,sellIn,quality);
    }
    updateQuality(){
        if(this.sellIn > 0){
            this.quality - 2;
            this.sellIn --;
        }
        else if(this.sellIn < 0){
            this.quality - 4;
            this.sellIn --;
        }
    }
}
// Items with classes -----------------------------------------------------

let items = [];

items.push(new BaseItem("+5 Dexterity Vest", 10, 20));
items.push(new AgedBrie("Aged Brie", 2, 0));
items.push(new BaseItem("Elixir of the Mongoose", 5, 7));
items.push(new Hand("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Passes("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Conjured("Conjured Mana Cake", 3, 6));

// Function ---------------------------------------------------------------------------------

const updateQuality = () => {
    for (let item of items) {
        item.updateQuality();
    }
}

const updateQualityTest = (testItem,numberOfIterations) => {
    var item = testItem;
    console.log(`[Start] Quality:${item.quality}. Sell Date: ${item.sellIn}`);
    for(let i = 1; i <= numberOfIterations; i++){
        item.updateQuality();
        console.log(`[Iteration ${i}] Quality:${item.quality}. Sell Date: ${item.sellIn}`);
    }
}

export {Item,items,BaseItem,AgedBrie,Hand,Passes,Conjured,updateQualityTest};

console.log(items);