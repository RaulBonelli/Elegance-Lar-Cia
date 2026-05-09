let bannerImg = ["./IMG/cacoma.jfif","./IMG/Villager.jfif","./IMG/noBitches.jpg"]
let comment1IMG = ["./IMG/noBitches.jpg","./IMG/cacoma.jfif","./IMG/Villager.jfif"]
let banner = document.getElementById("carousel")
let comment1 = document.getElementById("comment1")
let comment2 = document.getElementById("comment2")

class switchImages {
    constructor(imgs,id) {
        this.images = imgs;
        this.imgsLength = this.images.length;
        this.id = id;
        this.index = 0;
    }
    switchImages(){
        if (this.index < this.images.length -1){
            this.index++
        }else{
            this.index = 0
        }
        this.id.src = this.images[this.index]
        
    }
}

let bannerAnimation = new switchImages(bannerImg,banner);
let commentsAnimation = new switchImages(comment1IMG,comment1)
let commentAnimation= new switchImages(bannerImg,comment2)

setInterval(() => {
    bannerAnimation.switchImages();
    commentsAnimation.switchImages();
    commentAnimation.switchImages();
}, 1000);
