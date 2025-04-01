
document.addEventListener("DOMContentLoaded", function main(){
    const imageSelector = document.querySelectorAll(".selections img") 
    const buttonSelector = document.querySelectorAll(".sizes button")

    imageSelector.forEach((img)=>{
        img.addEventListener("click", handleClick)
    })
    buttonSelector.forEach((button)=>{
        button.addEventListener("click", select)
    })

})

function handleClick(e){
    const image = document.querySelector(".display img");
    clearDecoration(e.target, "clicked")
    image.src = e.target.src;
    e.target.classList.toggle("clicked");
}
function select(e){
    clearDecoration(e.target, "selected")
    e.target.classList.toggle("selected");
}

function clearDecoration(element, c){
    let elements = element.parentNode.childNodes;
    elements.forEach((node)=>{
        if (node.classList){
            node.classList.remove(c)
        }
    })
}