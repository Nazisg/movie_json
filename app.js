let box = document.getElementById("box")

fetch("https://api.themoviedb.org/3/movie/popular?api_key=8ae45c300d682e96e1824fe6b1d094b8")
.then(res => {
    console.log(res)
    if (res.ok == true && res.status === 200) {
        return res.json()
    } 
})
.then(res => {
    res.results.forEach(index => {
        console.log(index)
        box.innerHTML += `<div class="box">
        <a href="about.html?id=${index.id}"> 
            <img width="300px" height="400px" src="https://image.tmdb.org/t/p/w500/${index.poster_path} ">
            <h1 class="txt">${index.title}</h1>
            <span>${index.overview}</span>
            <h3>${index.release_date}</h3>
        </a>
        </div>`
    })
})

