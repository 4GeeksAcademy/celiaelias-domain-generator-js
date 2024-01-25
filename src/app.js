/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let html = "";
let arr = [];

pronoun.forEach(pronoun => {
  adj.forEach(adj => {
    noun.forEach(noun => {
      html += "<li>" + pronoun + adj + noun + ".com" + "</li>";
      arr.push(pronoun + adj + noun + ".com");
    });
  });
});

console.log(arr);
