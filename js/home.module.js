import {getDetails} from './detailes.module.js'

let navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach((element) => {
    element.addEventListener('click', function (event) {
        let cate = event.target.getAttribute('data-category')
        getData(cate)
    })
})

$('.nav-link').on('click', function (event) {
    $(event.target).addClass('active').parent().siblings().children().removeClass('active')
})
let close = document.querySelector('#btnClose')
close.addEventListener('click', function () {
    home.classList.remove('d-none')
    detailes.classList.add('d-none')

})



$(document).ready(function () {
    $('.loading').fadeOut(2000, function () {
        $('.loading').removeClass('d-flex')
    })
})



export async function getData(category = 'mmorpg') {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fa99987249msh486ed981dd8bcc1p12f883jsn521aae9b00e1',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
    let data = await response.json()
    console.log(data);
    
    showGames(data)

}

export function showGames(element) {
    let temp = ''
    for (let i = 0; i < element.length; i++) {
        temp += ` 
        <div class="col" >
                    <div id="${element[i].id}" class="card h-100 bg-transparent">
                            <img src="${element[i].thumbnail}" class="card-img-top p-2 rounded-top-4" alt="images/thumbnail.jpg">
                            <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h6 class="text-white">${element[i].title}</h6>
                                <span class="text-white rounded-2 btnFree">Free</span>
                            </div>
                            <p class="card-text text-white-50">${element[i].short_description}</p>
                            </div>
                            <footer class="card-footer d-flex justify-content-between">

                                <span class="spanFooter text-white rounded-3">${element[i].genre}</span>
                                <span class="spanFooter text-white rounded-3">${element[i].platform}</span>

                            </footer>
                    </div>
        </div>
        
       `
    }
    document.querySelector('#data').innerHTML = temp
    navegateData()

}

let detailes = document.querySelector('.detailes')
let home = document.querySelector('.home')
export function navegateData() {
    document.querySelectorAll('.card').forEach((element) => {
        element.addEventListener('click', function () {
           
            home.classList.add('d-none')
            detailes.classList.remove('d-none')
            getDetails(element.id)
        })

    })

}



