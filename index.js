const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./Model/user");
mongoose.set("strictQuery", false);
const app = express();
dotenv.config();

mongoose.connect(process.env.DB_URL).then(console.log("DB Connected"));

// ********** Create Many Records with model.create() **********

// async function start() {
//   const arrayOfPeople = [
//     { name: "Kais", age: 40, favoriteFoods: ["Pizza", "Pasta", "Cola"] },
//     { name: "Yassine", age: 39, favoriteFoods: ["Pizza", "Lablebi", "Coffee"] },
//     { name: "Saif", age: 26, favoriteFoods: ["Ojja", "Pasta", "Fanta"] },
//     { name: "Yassmine", age: 10, favoriteFoods: ["Pizza", "Pasta", "Juice"] },
//     { name: "John", age: 40, favoriteFoods: ["Pasta", "Salad", "Soda"] },
//   ];
//   await User.create(arrayOfPeople);
// }

// start();

// ********** Find all people **********

// async function start() {
//   const people = await User.find();
//   console.log(people);
// }

// start();

// ********** Find one person by his name **********

// async function start() {
//   const person = await User.findOne({ name: "Kais" });
//   console.log(person);
// }

// start();

// ********** Find by ID **********

// async function start() {
//   const person = await User.findById("64a70daa2ab3a9531969c42c");
//   console.log(person);
// }

// start();

// ********** Find by ID And Update **********

// async function start() {
//   const person = await User.findByIdAndUpdate("64a70daa2ab3a9531969c42c", {
//     $push: { favoriteFoods: "Hamburger" },
//   });
//   console.log(person);
// }

// start();

// ********** Find by Name And Update **********

// async function start() {
//   const person = await User.findOneAndUpdate(
//     { name: "John" },
//     { age: 20 },
//     { new: true }
//   );
//   console.log(person);
// }

// start();

// ********** Find by ID And Remove **********

// async function start() {
//   const person = await User.findByIdAndRemove("64a70daa2ab3a9531969c42e");
// }

// start();

// ********** Specific Search **********

// async function start() {
//   const specificSearch = await User.find({ favoriteFoods: "Pizza" })
//     .sort({ name: 1 })
//     .limit(2)
//     .select("name");
//   console.log(specificSearch);
// }

// start();

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
