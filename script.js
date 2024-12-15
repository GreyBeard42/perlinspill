let b = []
let c = "☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■"

function dorow(txt) {
    let row = document.createElement("div")
    row.classList.add("row")
    txt.forEach(t => {
        let temp = document.createElement("p")
        temp.classList.add("item")
        temp.style = `color: hsl(${t*c.length}, 100%, 60%);`
        temp.innerText = c[t]
        row.appendChild(temp)
    });
    content.appendChild(row)
}

function setup() {
    for(y=0; y<500; y++) {
        let list = [] 
        for(x=0; x<120; x++) {
            list.push(Math.round(noise((x+500)*0.015, (y+500)*0.02)*(c.length-1)))
        }
        dorow(list)
    }
}