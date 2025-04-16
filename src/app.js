function insertCastDiv (name, last_name){
    document.querySelector('.cast-grid').innerHTML += `
    <a href = "https://loveisland.fandom.com/wiki/${name}_${last_name}">
        <div class = "contestant">
                <img class = "cast-pic" src = "./media/${name}.jpg">
                <p class = "name">${name}</p>
        </div>
    </a>
    `
}

async function displayCast(){

    const response = await fetch('/contestants');
    const data = await response.json();
    data.forEach(contestant => {
        insertCastDiv(contestant.Name, contestant.last_name);
        console.log('Inserted')
    })

}

document.addEventListener('DOMContentLoaded', displayCast);