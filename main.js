
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
    
    const hiddenPeopleContainer = document.getElementById("people");
    hiddenPeopleContainer.style.display="block";

    const showPeopleStuff = document.getElementById("peopleStuff");
    showPeopleStuff.style.display="block";

    const hiddenbuttonPeople = document.getElementById("buttonPeople");
    hiddenbuttonPeople.style.display="none";

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
                <p>${data.Id} </p>
                </div>`
                
            })
        })
}

//crear buscador

let container = document.getElementById("showMovie");
sendInfoMovie =document.getElementById("send")
sendInfoMovie.addEventListener("click",()=>{
let search = document.getElementById("searchMovies").value    
const request = new Request('http://www.omdbapi.com/?i=tt3896198&apikey=a0d21d4f&s='+ search)    

fetch(request)
.then(response => response.json())
.then(data =>{ 
    document.getElementById("showMovie").innerHTML="";
    const data1= data.Search
    data1.forEach(elemnt=> {
            container.innerHTML += 
            `<div class="cards"> 
            <div class="cards2"> 
            <div class="cards3">  
                <h3 class="title">${elemnt.Title}</h3>
                <img class="imgPoster" src=${elemnt.Poster}>
                <p>${elemnt.Year}</p>
                </div>
                </div>
           </div>`
           
           
    })
    //const data1= data.Search.
})
})

//parte camila mart
const arrayMovie = [
    ["tt0848228" ,"tt1392190" ,"tt5611648" ,"tt3397884" ,"tt2872732","tt2911666"],
    ["tt1637725","tt0196229","tt1119646" ,"tt0109830" ,"tt0367594" ,"tt0033563"],
    ["tt1621780","tt0120338","tt2263570","tt0296915","tt0210843","tt0376873"],
    ["tt0462499"] ,
    ["tt0097474","tt0103644","tt0117571","tt7784604","tt0110978","tt1758820","tt0441529"],
    ["tt0107688","tt0114709","tt1156398","tt1269696"],
    ["tt0325950","tt0110912"],
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
            <div class="cards2"> 
            <div class="cards3">
            <h3 class="title">${data.Title}</h3>
            <img class="imgPoster" src=${data.Poster}>
            <p>${data.Genre}</p>
       </div>
       </div>
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
            <div class="cards2"> 
            <div class="cards3">
            <h3 class="title">${data.Title}</h3>
            <img class="imgPoster" src=${data.Poster}>
            <p>${data.Genre}</p>
       </div>
       </div>
       </div>`
}

)

})

});

