//all images and btn,img and count need jinish loylam 11 number line porjonto
const pictures=[
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
]
const btn=document.querySelectorAll(".btn");
const imgageDiv=document.querySelector(".img-container");
let counter=0;

btn.forEach(function(faBtn){
faBtn.addEventListener("click",function(e){
//bamor button or lagi
if(faBtn.classList.contains('btn-left')){
 counter--;
if(counter<0){
counter=pictures.length -1;//jokon minus o jaibo gi tokon 4 number picture o anbo
}
imgageDiv.style.backgroundImage=`url('./img/${pictures[counter]}.jpeg')`;
}
//dinor button or lagi
if(faBtn.classList.contains('btn-right')){
  counter++;
if(counter>pictures.length -1){
counter=0;//0 taki suru oubo
}
imgageDiv.style.backgroundImage=`url('./img/${pictures[counter]}.jpeg')`
}



})
})

