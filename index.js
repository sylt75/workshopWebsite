let people = [ /* a variable that's an array of people */
    {
        id: 1, name: "Sylvia Tang", role: "dev", stream: "dev", desription: "blah blah",
        image_link: "img/avatar.svg"
    }, 
    {
        id: 2, name: "Emily Tou", role: "dev", stream: "dev"
    }
]

var button = document.createElement("button");
button.innerHTML = "Do something";

button.addEventListener("click", function() {
    alert("did something");
});