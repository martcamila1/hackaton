const arrayMovie = ["tt0096895", "tt1201607", "tt4667248", "tt0230600", "tt6155172", "tt3453754"]


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

    const hiddenAlone = document.getElementById("alone");
    hiddenAlone.style.display="none";

})

const btnAlone = document.getElementById("btn-alone");
btnAlone.addEventListener ("click", fetchMovie);

function fetchMovie()
{arrayMovie.map(function(movieID){
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
 

/* estos son de fetchMovie*/





/*function showAlone (array) {
    let empty="";
        for (i=0; i <array.length; i++){
            empty+="<br>"+array[i];
        }
        document.getElementById("showAloneMovie").innerHTML=empty
}


*/
