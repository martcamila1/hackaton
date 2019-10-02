
const arrayMovie1 = ["tt0096895", "tt1201607", "tt4667248", "tt0230600", "tt6155172", "tt3453754"]


/*const btnShowMovie = document.getElementById("show");
btnShowMovie.addEventListener("click", fetchMovie);*/

const showAlone = document.getElementById("btn-alone");
showAlone.addEventListener("click", () => {

    const showAloneContainer = document.getElementById("alone");
    showAloneContainer.style.display="block"; 

    const hiddenPeople = document.getElementById("people");
    hiddenPeople.style.display="none";

})

const showPeople = document.getElementById("btn-people");
showPeople.addEventListener("click", () => {
    
    const showPeopleContainer = document.getElementById("people");
    showPeopleContainer.style.display="block";

    const hiddenSelectPeople = document.getElementById("genderMovies");
    hiddenSelectPeople.style.display="block"

    const hiddenDurationPeople = document.getElementById("durationMovies");
    hiddenDurationPeople.style.display="block"

    const hiddenRatingPeople = document.getElementById("ratingMovies");
    hiddenRatingPeople.style.display="block"

    const hiddenAlone = document.getElementById("alone");
    hiddenAlone.style.display="none";

})

const btnAlone = document.getElementById("btn-alone");
btnAlone.addEventListener ("click", fetchMovie);

function fetchMovie()
{arrayMovie1.map(function(movieID){
    fetch ("http://www.omdbapi.com/?i="+movieID+"&apikey=1eac7cef")
    .then (answer => answer.json())
    .then (data => {
        document.getElementById("showAloneMovie").innerHTML +=
            `<div class="cards">
                <p>${data.Title}</p>
           </div>`

    let random = Math.floor(Math.random()*(data.length));
    selection = data[random]
           console.log(random)
    })
    })
}
 

//parte camila mart
const arrayMovie = [
    ["tt0096895", "tt1201607", "tt4667248"],
    ["tt0110912" , "tt0109830" , "tt1345836" , "tt0816692" , "tt0060315" , "tt0172495" , "tt0372784" , "tt0102926" , "tt0361748" , "tt0076759"],
    ["tt0110912"] 
]

const btnShowMovie1 = document.getElementById("genderMovies");
btnShowMovie1.addEventListener("change", () =>{
document.getElementById("showMovie").innerHTML="";
let valueGenderMovies = document.getElementById("genderMovies").value 
const arraySelected = arrayMovie[valueGenderMovies]; 
console.log(arraySelected);
 
//})
 
//const btnShowMovie = document.getElementById("show");
//btnShowMovie.addEventListener("click", ()=>{
 
//function fetchMovie () {
    arraySelected.forEach((Id) =>{
        fetch ("http://www.omdbapi.com/?i=" + Id + "&apikey=a0d21d4f")
        .then (answer => 
            { return answer.json()})
        .then (data=> {
            let container = document.getElementById("showMovie");
            container.innerHTML += 
            `<div class="cards">
                <h3>${data.Title}</h3>
                <img src=${data.Poster}>
                <p>${data.Genre}</p>
           </div>`
    }
    
)

 })

});

const btnShowMovie2 = document.getElementById("durationMovies");
btnShowMovie2.addEventListener("change", ()=>{
    document.getElementById("showMovie").innerHTML="";
let valueCandy = document.getElementById("durationMovies").value 
const arraySelected = arrayMovie[valueCandy]; 
console.log(arraySelected);
arraySelected.map(function(Id){
    fetch ("http://www.omdbapi.com/?i=" + Id + "&apikey=a0d21d4f")
    .then (answer => 
        { return answer.json()})
    .then (data=> {
        let container = document.getElementById("showMovie");
        container.innerHTML += 
        `<div class="cards">
            <h3>${data.Title}</h3>
            <img src=${data.Poster}>
            <p>${data.Genre}</p>
       </div>`
}

)

})

});

