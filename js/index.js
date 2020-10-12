let moviescont = document.querySelector('.movies-cont')
let aud = document.querySelector('.aud')
let srch = document.querySelector('.inpsearch')
// fetch movies
let strtbtn = document.querySelector('.startbtn')
strtbtn.addEventListener('click', function(e){
  e.preventDefault();
  setInterval(getRandomMovies,5000)
  aud.play()
})
function getRandomMovies(){
  fetch('movies-coming-soon.json')
  .then((res) =>{
  return res.json()
  })
  .then((data) =>{
    
    data.forEach((i)=>{
      let div = document.createElement('div');
      let img = document.createElement('img');
      let title = document.createElement('h5');
      title.setAttribute('class', 'title')
      div.innerHTML = `
      <div class="card">
          <div class="card-header"><h6 class="title">${i.title}</h6></div>
          <div class="card-body">
            <img src ='${i.posterurl}'>
          </div>
          <div class="card-footer">
            <span>Year Produce:<span class="badge badge-success">${i.year}</span> <br> </span>
            <span><b>Actors:</b>[${i.actors}]</br></span>
            <span><b>Genres:</b>[${i.genres}] </span>
          </div>
        </div>
      `
      moviescont.appendChild(div)
      document.body.appendChild(moviescont)
    })
    
  })
}getRandomMovies()
srch.addEventListener('input', function(e){
  e.preventDefault()
  moviescont.style.visibility = "visible"
  let filter, txtval, h6, card,err;
  err = document.querySelector('.alert');
  filter = srch.value.toUpperCase();
  h6 = document.querySelectorAll('.title')
  card = document.querySelectorAll('.card');
  for(var i=0; i<h6.length; i++){
    txtval = h6[i].innerHTML;
    if (txtval.toUpperCase().indexOf(filter) > -1) {
      card[i].style.display = ""
    } else {
      card[i].style.display = "none"
    }
    
  }
})
