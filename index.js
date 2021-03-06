
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested .target")
} 

function increaseRankBy(n){
  const ranked = document.querySelectorAll(".ranked-list li")
  for(let i = 0; i < ranked.length; i++){
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n
  }
}

function deepestChild(){
  var divs = document.querySelectorAll("div#grand-node div")
  return divs[divs.length-1]
}