let painter = {
  tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
  uniform: "white overalls",
  cost_per_hour: 25.00,
  insured: true,
  paint: function() {
    return this.cost_per_hour * workHours;
}
}
/*Add an action that the painter can perform 
( a property whose value is a function ).
Have her take that action by execucting the method you created.
BONUS: Add a method that allows us to add new tools for the painter.
*/


let workHours = 8;
painter.paint();
console.log(painter.paint())

/*const tools = ["brush", "roller", "caulk", "sandpaper", "dropcloth"];
const count = painter.tools.push('paint');
console.log(count);
console.log(tools);
*/

//cost newTools = "paint";
const newTools = painter.tools.push(`paint`);
painter.paint();
console.log(`${painter.tools}`);
console.log(painter.paint());


