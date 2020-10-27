console.log("Inserting a new user into the database...");
const graduate = new Graduate();
graduate.firstName = "Alena ";
graduate.lastName = "Izakson";
graduate.age = 19;
await connection.manager.save(graduate);
console.log("Saved a new graduate with id: " + graduate.id);

console.log("Loading graduates from the database...");
const graduates = await connection.manager.find(Graduate);
console.log("Loaded graduates: ", graduates);

console.log("Here you can setup and run express/koa/any other framework.");
