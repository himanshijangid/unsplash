daynightTheme = () => {
    let date = new Date();
    let hour = date.getHours();

    if (hour >= 7 && hour < 20) {
        document.body.style.backgroundImage = "url(image.jpg)";
        document.body.style.backgroundSize = "cover";
        document.body.style.color = "black";
        document.getElementById("#header").style.borderBottom = "black";
    } else {
        document.body.style.backgroundImage = "url(night.jpg)";
        document.body.style.backgroundSize = "cover";
        document.body.style.color = "white";
        document.getElementById("#header").style.borderBottom = "white";

        
    }
}

window, addEventListener('load', daynightTheme);


document.querySelector("#input").addEventListener("keydown",(event)=> { 
    if(event.key=="Enter")
    apirequest();
});

document.querySelector("#search").addEventListener("click", ()=> {
    apirequest();
});

apirequest = () => {
document.querySelector("#grid").innerHTML = "";

const url = 'https://api.unsplash.com/search/photos?query=' + input.value + '&per_page=30&client_id=B3PEYFRJBAO85HzrT8ZpUPml7Nrz88UltgVkQWuojmI';

fetch(url).then(response => {
    if(!response.ok)throw Error(response.statusText);
    return response.json()
}).then(data => {
    loadimages(data)
}).catch(error => console.log(error));

}
 loadimages = (data) => {
    for(let i = 0; i<data.results.length ; i++){
        console.log(data);
        let image = document.createElement("div");
        image.className = "img";
        image.style.backgroundImage = "url(" + data.results[i].urls.raw + "&w=1366&h=768" + ")" ;
        image.addEventListener("click", function () {
            window.open(data.results[i].links.download,'_blank');


        })
        document.querySelector("#grid").appendChild(image);
    }

 }




