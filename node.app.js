// The code for the domain name generator project is below.
// Type "node ./node.app.js" in the codespace terminal below to see the domain name generator at work.
// [To run this code in the browser inspect console, go to ...
// (src/app.js)]

let pronouns = ["the", "our"];
let adjs = ["great", "big"];
let nouns = ["jogger", "racoon", "AI"];
let tlds = [".com", ".org", ".gov"];

for (let pronoun of pronouns) {
  for (let adj of adjs) {
    for (let noun of nouns) {
      for (let tld of tlds) {
        console.log(`${pronoun}-${adj}-${noun}${tld}`);
      }
    }
  }
}
