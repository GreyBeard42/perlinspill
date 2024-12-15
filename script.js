let c = "☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■"

function dorow(txt) {
    let row = document.createElement("div")
    row.classList.add("row")
    txt.forEach((t) => {
        let temp = document.createElement("p")
        temp.classList.add("item")
        if(mode.value == "Rainbow") {
            temp.style = `color: hsl(${t*c.length/50}, 100%, 60%);`
            temp.innerText = c[t]
        } else {
            temp.innerText = c[100]
            if(t < 50) {
                temp.style = `color: hsl(${200+Math.round(Math.random()*6-3)}, 60%, 40%);`
                temp.innerText = c[176]
            } else if(t < 60) {
                temp.style = `color: hsl(${190+Math.round(Math.random()*6-3)}, 80%, 50%);`
                temp.innerText = c[175]
            } else if(t < 80) {
                temp.style = `color: hsl(${180+Math.round(Math.random()*6-3)}, 100%, 80%);`
                temp.innerText = c[174]
            } else if(t < 90) {
                temp.style = `color: hsl(${50+Math.round(Math.random()*6-3)}, 100%, ${55+Math.round(Math.random()*20-10)}%);`
                temp.innerText = c[34]
            } else if(t < 110) {
                temp.style = `color: hsl(${80+Math.round(Math.random()*6-3)}, 50%, ${50+Math.round(Math.random()*20-10)}%);`
                temp.innerText = c[4]
            } else if(t < 130) {
                temp.style = `color: hsl(${100+Math.round(Math.random()*6-3)}, 50%, ${50+Math.round(Math.random()*20-10)}%);`
                if(Math.random() > 0.6) temp.innerText = c[4]
                else if(Math.random() > 0.3) temp.innerText = c[5]
                else {
                    if(Math.random() > 0.7) temp.innerText = c[37]
                    else if(Math.random() > 0.3) temp.innerText = c[36]
                    else temp.innerText = c[35]
                }
            } else if(t < 150) {
                temp.style = `color: hsl(${100+Math.round(Math.random()*6-3)}, 45%, ${50+Math.round(Math.random()*20-10)}%);`
                temp.innerText = c[201]
            } else if(t < 155) {
                temp.style = `color: hsl(${20+Math.round(Math.random()*6-3)}, 30%, ${50+Math.round(Math.random()*20-10)}%);`
                temp.innerText = c[20]
            } else if(t < 160) {
                temp.style = `color: hsl(${20+Math.round(Math.random()*6-3)}, 5%, ${55+Math.round(Math.random()*20-10)}%);`
                temp.innerText = c[252]
                if(Math.random() < 0.02) temp.innerText = c[29]
            } else if(t < 180) {
                temp.style = `color: hsl(${20+Math.round(Math.random()*6-3)}, 5%, ${65+Math.round(Math.random()*20-10)}%);`
                temp.innerText = c[7]
                if(Math.random() < 0.2) temp.innerText = c[29]
            } else {
                temp.style = `color: hsl(${20+Math.round(Math.random()*6-3)}, 5%, ${90+Math.round(Math.random()*20-10)}%);`
                temp.innerText = c[29]
            }

            if(t < 80 && Math.random() < 0.05) temp.innerText = c[15+Math.round(Math.random())]
            if(t > 90 && t < 150 && Math.random() < 0.03) {
                temp.innerText = "@"
                temp.style = `color: hsl(${100+Math.round(Math.random()*6-3)}, 50%, ${45+Math.round(Math.random()*20-10)}%);`
            }
            if(t > 100 && Math.random()-t/50000 < 0.01) {
                temp.innerText = "◙"
                temp.style = `color: hsl(${100+Math.round(Math.random()*6-3)}, 15%, ${60+Math.round(Math.random()*20-10)}%);`
            }
            if(t > 100 && t < 160 && Math.random()-t/5000 < 0.01) {
                temp.style = `color: hsl(${20+Math.round(Math.random()*6-3)}, 30%, ${50+Math.round(Math.random()*20-10)}%);`
                temp.innerText = c[20]
            } 
        }
        row.appendChild(temp)
    })
    content.appendChild(row)
}

let y, x

function setup() {
    for(y=0; y<100; y++) {
        let list = [] 
        for(x=0; x<(window.innerWidth/10); x++) {
            list.push(Math.round(noise((x+500)*0.015, (y+500)*0.02)*(c.length-1)))
        }
        dorow(list)
    }
}

setInterval(() => {
    while(Math.ceil(window.innerHeight+window.scrollY) >= document.body.offsetHeight-200) {
        y++
        let list = [] 
        for(x=0; x<(window.innerWidth/10); x++) {
            list.push(Math.round(noise((x+500)*0.015, (y+500)*0.02)*(c.length-1)))
        }
        dorow(list)
    }
}, 10)

mode.addEventListener("change", () => {
    content.innerHTML = ""
    for(y=0; y<100; y++) {
        let list = [] 
        for(x=0; x<(window.innerWidth/10); x++) {
            list.push(Math.round(noise((x+500)*0.015, (y+500)*0.02)*(c.length-1)))
        }
        dorow(list)
    }
})

let time = 0
setInterval(() => {
    window.scroll(0, time)
    time += 0.1
}, 1)