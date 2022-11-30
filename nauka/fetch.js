const section = document.querySelector(".book-info");

const newPromise = new Promise((resolve, reject) => {
    try{
        resolve(fetch("https://www.dnd5eapi.co/api/classes"))
    } catch (error) {
        reject(error);
    }
})

newPromise.then((response) => {
    return response.json()
}).then((object) =>{
    console.log(object)
    object.results.forEach((x) =>{
        const elementH1 = document.createElement("h1");
        elementH1.innerText = x.name;
        section.appendChild(elementH1);
    })
})

