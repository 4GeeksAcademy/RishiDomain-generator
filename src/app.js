/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon", "AI"];
  let tlds = [".com", ".org", ".gov"];

  const generatorElement = document.querySelector("#generator");
  let domainNames = "";

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          console.log(`${pronoun}-${adj}-${noun}${tld}`);
          domainNames += `${pronoun}-${adj}-${noun}${tld}<br>`;
        }
      }
    }
  }
  generatorElement.innerHTML = domainNames;
};
