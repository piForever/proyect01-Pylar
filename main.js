

let url = '';
let ol = document.getElementById('songs');
function inputSearch (){
   let input = document.getElementById('input').value;
   let url= 'https://itunes.apple.com/search?limit=10&term=' + input ; 
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      let songs = data.results;
      return songs.map(function(song) {
        let li = createNode('li'),
            img = createNode('img'),
            span = createNode('span');
        img.src = song.artworkUrl100;
        span.innerHTML = `${song.collectionName}`;
        append(li, img);
        append(li, span);
        append(ol, li);
      })
    })
    .catch(function(error) {
      console.log(error);
    });   
    
}

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}


//  prueba para borrar: 
let h2 = document.getElementById("heading")
function changeColor () {
 h2.style.color = "blue";
}
h2.addEventListener("click" , changeColor)


let li=  ol.getElementsByTagName("li");
// let img = li.getElementsByTagName("img");



function showArtwork (liNumber) { 
    let li=  ol.getElementsByTagName("li")[liNumber];
    let img = li.getElementsByTagName("img")[0] ;
  return img.style.display = 'block'
}

for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click', function () {
          showArtwork (li[i].value) ; 
       })
       }        
    

/*

function hideImage(letter){
  let id = "image-" + letter;
  let img = document.getElementById(id)
  if(img.style.display === "none") {
    img.style.display = "block";
  }
  else {
    img.style.display = "none";
  }
}

*/



