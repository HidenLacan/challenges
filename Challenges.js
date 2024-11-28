

////////////////////////////////////////////////////////////////////
function sym(...args) {

   function dyfArray(arg1,arg2) {
    const arr1 = new Set(arg1);
    const arr2 = new Set(arg2);

    return [
      ...[...arr1].filter(x => !arr2.has(x)),
      ...[...arr2].filter(x => !arr1.has(x)),
    ] 
   }
   return args.reduce((acc, arg) => {
    return dyfArray(acc, arg);
   },[])
   .filter((value,index,self) => self.indexOf(value) === index);
  }

///////////////////////////////////////////////////////////////////

function updateInventory(arr1, arr2) {
  
  /// convert arr1 to a map

  const inventorymap = new Map(arr1.map(([quantity,item])=>[item,quantity]))
  
  /// update map compare arr1 than arr2 and add quantity of array 2

  for (const [quantity,item] of arr2){
    if (inventorymap.has(item)) {
      inventorymap.set(item, inventorymap.get(item) + quantity)
    } else {
      inventorymap.set(item,quantity);
    }
  }

  /// return map format
  return [...inventorymap]
  .map(([item, quantity])=>[quantity,item])
  .sort((a,b) => a[1].localeCompare(b[1]));
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

//updateInventory(curInv,newInv);


//console.log(updateInventory(curInv,newInv));

function updateInventory2(arg1,arg2){

  /// convert format
  const newinventory = new Map(arg1.map(([quantity,item])=>[item,quantity]));

  /// comprobation of arg2 than arg1
  for([quantity,item] of arg2){
    if (newinventory.has(item)) {
      newinventory.set(item,newinventory.get(item) + quantity)
    } else {
      newinventory.set(item,quantity);
      
    }

  }
  /// return format with sort 

  return [...newinventory]
  .map(([item,quantity]) =>[quantity,item])
  .sort((a,b) => a[1].localeCompare(b[1]))
}

console.log(updateInventory2(curInv,newInv));