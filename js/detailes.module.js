

export async function getDetails(id = '508') {
    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fa99987249msh486ed981dd8bcc1p12f883jsn521aae9b00e1',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    }      
        $('.loading').addClass('d-flex')
    let detailesData = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
    let response = await detailesData.json()
    console.log(response)
    $('.loading').removeClass('d-flex')
    showDetailes(response)

}

export function showDetailes(element) {
    let   temp = `<div class="col-md-4">
                       <img src="${element.thumbnail}" class="w-100" alt="gameImage" id=${element.id}>
                       </div>
                       <div class="col-md-8">
                       <h3 class="text-white">Title: ${element.title}</h3>
                       <p class="text-white">Category: <span class="badge text-bg-info">${element.genre} </span> </p>
                       <p class="text-white">PlatForm: <span class="badge text-bg-info">${element.platform}</span> </p>
                       <p class="text-white">Status: <span class="badge text-bg-info"> ${element.status}</span> </p>
                       <p class="pDetails text-white">${element.description} </p>
                       <a class="btn btn-outline-warning" target="_blank" href="${element.game_url}">Show Game</a>
               </div>`
       document.querySelector('#detailes').innerHTML = temp
   }