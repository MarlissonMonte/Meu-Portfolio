const element = document.querySelector("#text");
const text = "Hello world, Sou Marlisson!"
const interval = 160;

function showText(element, text, interval){

    const char = text.split("").reverse();

    console.log(char);

    const type = setInterval(() => {
       if(!char.length){
        return clearInterval(type);
       } 

       const next = char.pop();

       element.innerHTML += next; 
    }, interval);

}

showText(element, text, interval);
