//Implement all your function here to make it a working application.
const genres=document.getElementById('genres');
const movieInfo=document.getElementById('movieInfo');
const nextBtn=document.getElementById('likebtn');
const srcBtn=document.getElementById('playBtn');
genres.addEventListener('change',()=>{
    let genID=genres.value;
    srcBtn.addEventListener('click',()=>{
        getGenre(genID);
    })
} )
function getGenre(genID){
    const request = new XMLHttpRequest();
    const YOUR_API_KEY = "2cf374672dbb2bdcdf9d6a91178b89d1";
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${YOUR_API_KEY}&with_genres=${genID}&page=1&sort_by=popularity.desc
    `;
    request.open('GET', url); 
    request.send();
    request.addEventListener('load', function() {
        if (this.status === 200) {
            const data = JSON.parse(this.responseText);
            console.log(genID);
            console.log(data); 
            renderHtml(data);
         }
    } ) 
}
    function renderHtml(data){
        let id=0;
     let imageBaseUrl = "https://image.tmdb.org/t/p/";
    let imageSize = "w300"; 
    let posterPath = data.results[id].poster_path; // Extract this from the API response// Extract this from the API response
    let fullImageUrl = imageBaseUrl + imageSize + posterPath; 
    
    
    let movieIn=` <div id="moviePoster"><img src="${fullImageUrl}" alt="hello"></div>
    <div id="movieText"><h1>${data.results[id].overview}</h1></div>
    `
    movieInfo.innerHTML=movieIn;
    

    nextBtn.addEventListener('click',()=>{
        const posterPath = data.results[id++].poster_path; // Extract this from the API response
        const fullImageUrl = imageBaseUrl + imageSize + posterPath; 
    
    
        const movieIn=` <div id="moviePoster"><img src="${fullImageUrl}" alt="hello"></div>
        <div id="movieText"><h1>${data.results[id++].overview}</h1></div>
    `
      movieInfo.innerHTML=movieIn;
    
    })
}
    
     
    
    
 