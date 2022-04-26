var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var checkIcon = document.querySelector("#check-icon");
var xIcon = document.querySelector("#x-icon");
var i = 0; 

container3.addEventListener("keydown", (event) => {
    if(event.code == "Enter")
        createNote();
})

xIcon.addEventListener("click", () => {
    typeNote();
})

checkIcon.addEventListener("click", () => {
    createNote();
})

function typeNote(){
    if(container3.style.display == "none"){
        container3.style.display = "block";
    }
    else{
        container3.style.display = "none";
    }
}

function createNote(){
    var noteText = document.getElementById("note-text").value;

    var node0 = document.createElement("div");
    var node1 = document.createElement("h1");

    node1.innerHTML = noteText;
    node1.setAttribute("style", "width:250px; height:250px; font-size:26px; padding:25px; margin:20px; margin-top:10px; overflow:hidden; box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.75); border-radius:2px;");

    node1.style.transform = rotate();
    node1.style.background = color();

    node0.appendChild(node1);

    container2.insertAdjacentElement("beforeend", node0);

    node0.style.wordBreak = "normal";
    
    node0.addEventListener("mouseenter", () => {
        node0.style.transform = "scale(1.1)";
    })

    node0.addEventListener("mouseleave", () => {
        node0.style.transform = "scale(1)"; 
    })

    node0.addEventListener("dblclick", () => {
        node0.remove();
    })

    document.getElementById("note-text").value = '';
}

function rotate(){
    var random_rotate = ["rotate(3deg)", "rotate(4deg)", "rotate(2deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-2deg)", "rotate(-4deg)", "rotate(-3deg)", "rotate(0)"];

    return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

function color(){
    var random_color = ["lightblue", "lightgreen", "lightcyan", "lightgoldenrodyellow", "lightseagreen" , "lightsalmon"];

    return random_color[Math.floor(Math.random() * random_color.length)];
}