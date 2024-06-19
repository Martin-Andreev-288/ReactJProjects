import { createClient } from "contentful";
/* ideqta na poslednite 2 lekcii (355 i 356) e da vzemem space ID i access token ot contentful sayta, da syzdaem tozi fayl i da gi vnedrim.
inache predi tova go instalirahme s npm i contentful */
const client = createClient({
  space: "gqk0veg6v1tk",
  environment: "master",
  accessToken: "wgGncEGBL-EYU0SA66iQtLnO2OjUdWhXKqBIBR8rOzA",
});

/*
Tezi dve neshta gi vzehme ot contentful sayta (i sega gi vnedrqvame gore):
Space ID - gqk0veg6v1tk
Access Token - wgGncEGBL-EYU0SA66iQtLnO2OjUdWhXKqBIBR8rOzA
*/

/* imeto na content_type-a dolu e imeto, koeto sme dali na proektite v contentful sayta */
client
  .getEntries({ content_type: "projects" })
  .then((response) => console.log(response));
