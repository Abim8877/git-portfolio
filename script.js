let firstName = "Jubril";
let favoriteLanguage = "JavaScript";

console.log(`My name is ${firstName}.`);
console.log(`I am learning ${favoriteLanguage}.`);

function greet(name){
    console.log(`Hello ${name}`);
}

greet("Jubril");
greet("Frontend Developer");
greet("Future Software Engineer");

function introduce(name, language){
    console.log(`My name is ${name} and I am learning ${language}.`);
}
introduce("Jubril", "JavaScript");

let score = 70
 score = 40
if (score >= 50) {
    console.log("Pass")
} else {
    console.log("Fail")
}

let button = document.getElementById("contactButton")
let heading = document.getElementById("contactHeading")
let image = document.getElementById("profileImage")

button.addEventListener("click", function(){
    heading.textContent = "Thanks for contacting me!"
    heading.style.color = "purple"
    heading.style.fontSize = "36px"
    heading.style.backgroundColor = "lightyellow"
    if(image.src.includes("JB.jpg")) {
        image.src="JB2.jpg"
    } else {
        image.src="JB.jpg"
    }
})
let skills = ["HTML", "CSS", "JavaScript"]
skills.push("React")
console.log(skills)
let animal=["Dog", "Cat", "Goat"]
animal.push("Cow")
console.log(animal[animal.length - 1])