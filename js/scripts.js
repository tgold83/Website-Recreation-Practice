window.onload = function() {
const firstHeader = document.querySelector("h1");
firstHeader.remove('Favorite Things!');

const updatedFirstHeader = document.createElement("h1");
updatedFirstHeader.append("Webpage Recreation Practice");

const onlyParagraph = document.createElement("p");
onlyParagraph.append("The HTML of this webpage was created with JavaScript.");

const picture = document.createElement("img");
picture.src = "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900";
picture.alt = "This is an image of a Multicolored Tanager bird from birdsoftheworld.org";
picture.style = "width:50%";

const secondHeader = document.createElement("h1");
secondHeader.append("Facts about the Multicolored Tanager");

const ul = document.createElement("ul");
const liOne = document.createElement("li");
const liTwo = document.createElement("li");
liOne.append("It is endemic to the mountains of Colombia.");
liTwo.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");

const websiteHeader = document.createElement("h2");
websiteHeader.append("Source");

const website = document.createElement("a");
website.append("Wikipedia");
website.href ="https://en.wikipedia.org/wiki/Multicoloured_tanager";

const mainBody = document.querySelector("body");
mainBody.append(updatedFirstHeader, onlyParagraph, picture, secondHeader, ul, liOne, liTwo, websiteHeader, website);
}

