const wrapper = document.getElementById("wrapper")
const searchBar = document.getElementById("searchBar")
let bbCharacters = []

//search functionality 
searchBar.addEventListener('keyup', (e) => {
    let searchValue = e.target.value.toLowerCase();
    let match = bbCharacters.filter(character => {
        return (
            character.name.toLowerCase().includes(searchValue) || 
            character.nickname.toLowerCase().includes(searchValue)
        )
    })
    setter(match)
})


async function getter() {
    let data = await fetch('/breakingBad.json');
    bbCharacters = await data.json();
    setter(bbCharacters)
}

function setter(array) {
    let html = array.map(character => {
        return `
        <div class="character">
            <img src="${character.img}">
            <div class="mask"></div>
            <div class="details">
                <h1 class="header">Name: ${character.name}</h1>
                <p class="para">Nickname: ${character.nickname}</p>
            </div>
        </div>`
    }).join('')
    wrapper.innerHTML = html;
}

getter()
