const images = document.querySelectorAll("img");
const content=document.getElementById("content")
const imageBox=document.getElementById("image-box")
const closeBtn=document.getElementById("close-btn")
closeBtn.addEventListener("click", ()=>{
    imageBox.style.display="none"
})
// console.log(images)
images.forEach((image) => {
  image.addEventListener("click", showImageBox);
});
function showImageBox() {
  console.log("This gives the click image source", this);

  imageBox.style.display="block"
  let image = document.createElement("img"); //<img/> tag banaucha

  image.src=this.src; // agi banako image ko source yeta aayera basxa
//   console.log(image);
  image.style.height=600;
  image.style.width=600;
  image.style.objectFit="cover"
  content.innerHTML=""
  content.append(image)
}

