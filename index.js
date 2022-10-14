var prev = document.getElementById("preview");
function oc(){
    document.getElementById("realfile").click();
    document.getElementById("fc").innerHTML = "* FILE CHOSEN *";
}

var file= document.getElementById("realfile")
file.addEventListener("change", function(){
    window.tempstor = URL.createObjectURL(event.target.files[0]);
})

function occ(){
    document.getElementById("ind").style.display = 'none'
    var tempimg = document.getElementById("tempimg")
    tempimg.style.display = 'block'
    tempimg.src = window.tempstor 
}
//the converter !!!!!
document.getElementById("tempimg").onload = function() {
    var c = document.getElementById("canv");
    var ctx = c.getContext("2d");
    var img = document.getElementById("tempimg");
    c.width = img.width
    c.height = img.height
    ctx.drawImage(img, 0, 0, 150, 150);
    var asciiart = document.getElementById("asciiart")
    var asciiletters = " .'`,^:;~-_+<>i!lI?*WMB8&%$#@"
    for(let a = 0; a < 150; a++){
        asciiart.innerHTML += "<br>"
        for(let i = 0; i < 150; i++){
            window.imgData = ctx.getImageData(i, a, 1, 1);
            var r = window.imgData.data[0]
            var g = window.imgData.data[1]
            var b = window.imgData.data[2]
            var rgb = Math.round((r += g += b) / 3)
            c.style.display = 'none'
            img.style.display = 'none'
           if(rgb > 245){
            asciiart.innerHTML += asciiletters[25]
           }
           else if (rgb > 235){
                asciiart.innerHTML += asciiletters[25]
            }
            else if (rgb > 225){
                asciiart.innerHTML += asciiletters[24]
            }
            else if (rgb > 215){
                asciiart.innerHTML += asciiletters[23]
            } 
            else if (rgb > 205){
                asciiart.innerHTML += asciiletters[22]
            } 
            else if (rgb > 195){
                asciiart.innerHTML += asciiletters[21]
            }
            else if (rgb > 185){
                asciiart.innerHTML+= asciiletters[20]
            }
            else if (rgb > 175){
                asciiart.innerHTML += asciiletters[19]
            }
            else if (rgb > 165){
                asciiart.innerHTML += asciiletters[18]
            }
            else if (rgb > 155){
              asciiart.innerHTML += asciiletters[17]
            }
            else if (rgb > 145){
                asciiart.innerHTML += asciiletters[16]
            }
            else if (rgb > 135){
                asciiart.innerHTML += asciiletters[15]
            }
            else if (rgb > 125){
                asciiart.innerHTML += asciiletters[14]
            }
            else if (rgb > 115){
                asciiart.innerHTML += asciiletters[13]
            }
            else if (rgb > 105){
                asciiart.innerHTML += asciiletters[12]
            }
            else if (rgb > 95){
                asciiart.innerHTML += asciiletters[11]
            }
            else if (rgb > 85){
                asciiart.innerHTML += asciiletters[10]
            }
            else if (rgb > 75){
                asciiart.innerHTML += asciiletters[9]
            }
            else if (rgb > 65){
               asciiart.innerHTML += asciiletters[8]
            }
            else if (rgb > 55){
                asciiart.innerHTML += asciiletters[7]
            }
            else if (rgb > 45){
                asciiart.innerHTML += asciiletters[6]
            }
            else if (rgb > 35){
                asciiart.innerHTML += asciiletters[5]
            }
            else if (rgb > 25){
               asciiart.innerHTML += asciiletters[4]
            }
            else if (rgb > 10){
                asciiart.innerHTML += asciiletters[3]
            }
            else if (rgb > 5){
                asciiart.innerHTML += asciiletters[2]
            }
            else if (rgb == 0){
                asciiart.innerHTML += asciiletters[0]
            }
        }
    }
    
    
    
}
