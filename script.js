let img = ["../IMG/cacoma.jfif","../IMG/Villager.jfif"]
let index = 0;

function Switch(){
if (index < 1){
    index = 1
}else{
    index = 0
}
document.getElementById("carousel").src = img[index]

}


setInterval(() => {
    Switch()
}, 5000);