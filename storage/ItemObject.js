import uom from "./uom";

function itemObject(item, quantity, checked) {
  this.item = item;
  this.quantity = quantity;
  this.checked = checked;
}

const createItemObject = inputText => {
  // converts inputted text to an item.
  // Uses "of" as indicator of quantiy.

  const inputTextArray = inputText.split(" ");
  const amount = parseInt(inputTextArray[0]);
  if (
    inputTextArray[0] &&
    !isNaN(parseInt(inputTextArray[0])) &&
    inputTextArray[1] &&
    uom.includes(inputTextArray[1])
  ) {
    // assume the thing has a quantity
    // todo: remove "of" if it is in the beginning of the item name
    return new itemObject(
      inputTextArray.slice(2).join(" "),
      inputTextArray.slice(0, 2).join(" "),
      false
    );
  } else {
    //todo: implement if there is no space between number and quantity
    return new itemObject(inputText, null, false);
  }
};

export { createItemObject };
