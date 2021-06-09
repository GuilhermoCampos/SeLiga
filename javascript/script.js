/*
https://www.themoviedb.org/documentation/api/discover
https://www.themoviedb.org/settings/api
https://developers.themoviedb.org/3/genres/get-movie-list

https://api.themoviedb.org/3/trending/movie/day?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt
https://api.themoviedb.org/3/ /movie/337404/images?api_key=e1258f69d2028209abb4b199f1cb534c
https://api.themoviedb.org/3/movie/337404/images?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt
https://api.themoviedb.org/3/movie/337404?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt&region=BR
https://api.themoviedb.org/3/movie/337404/videos?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR
https://api.themoviedb.org/3/movie/337404/videos?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR
https://api.themoviedb.org/3/movie/637649/videos?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR

https://www.youtube.com/watch?v=bpHtxx_wmqw
https://gist.github.com/prof3ssorSt3v3/bd984b862b71ebbe0a65aee4f2e6746d
https://developers.themoviedb.org/3/getting-started/regions

https://gist.github.com/prof3ssorSt3v3/d7946ea634448c501dd8287cbe3f2c0b

https://image.tmdb.org/t/p/w500/A0knvX7rlwTyZSKj8H5NiARb45.jpg


tmdb apikey e1258f69d2028209abb4b199f1cb534c

https://api.themoviedb.org/3/discover/movie?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR&region=BR&include_adult=true&page=1&with_genres=878,27

https://api.themoviedb.org/3/genre/movie/list?api_key=e1258f69d2028209abb4b199f1cb534c&language=en-US



newsapi apikey 8ec3aef178a94777be5e7b29b785f87a

https://newsapi.org/v2/everything?q=movies&language=pt&apiKey=8ec3aef178a94777be5e7b29b785f87a
*/

/* Modelo Destaques
<div class="col-sm-12 col-md-6 col-lg-3">
    <a href="#"><img src="" alt=""></a>
</div>
*/

/* modelo carrosell item
<div class="carousel-item active">
    <div class="row lancamento-conteudo">
        <div class="col-sm-12 col-md-6 trailer">
            <iframe width="100%" height="584px" src="https://www.youtube.com/embed/Yh-XpUlDjJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="col-sm-11 col-md-6 lancamento-text rainbow">
            <div>
                <h2>Raya E O Último Dragão</h2>  
                <div class="sinopse-mobile">
                    <button class="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Sinopse
                    </button>
                    </p>
                    <div class="collapse" id="collapseExample">
                    <div class="card card-body usuarios bg-dark">
                        <strong>Sinopse:</strong> Humanos e dragões viviam juntos em harmonia. Mas quando uma força maligna ameaçou a terra, os dragões se sacrificaram para salvar a humanidade. Agora, o mesmo mal voltou e cabe a uma guerreira solitária, Raya, rastrear o lendário dragão para restaurar sua terra .
                    </div>
                    </div>           
                </div>    
                <div class="sinopse-pc">                       
                <strong>Sinopse:</strong> Há muito tempo, no mundo de fantasia de Kumandra, humanos e dragões viviam juntos em harmonia. Mas quando uma força maligna ameaçou a terra, os dragões se sacrificaram para salvar a humanidade. Agora, 500 anos depois, o mesmo mal voltou e cabe a uma guerreira solitária, Raya, rastrear o lendário último dragão para restaurar a terra despedaçada e seu povo dividido. No entanto, ao longo de sua jornada, ela aprenderá que será necessário mais do que um dragão para salvar o mundo – também será necessário confiança e trabalho em equipe. Dos diretores Don Hall e Carlos López Estrada, codiretores Paul Briggs e John Ripa, produtores Osnat Shurer e Peter Del Vecho, e apresentando as vozes de Kelly Marie Tran como Raya e Awkwafina como o último dragão Sisu, da Walt Disney Animation Studios "Raya e O Último Dragão".
                </div>
                <br><strong>Diretores: </strong>Carlos López Estrada, Don Hall<strong>
                <br>Roteiro:</strong> Adele Lim, Qui Nguyen
                <br><strong>Estreia: </strong> 04/03/2021
                <br><strong>Elenco:</strong>
                Awkwafina | Kelly Marie Tran | Gemma Chan | Alan Tudyk 
                <br><Strong>Avaliação:</Strong>
                <span class="estrelas">★★★★☆</span>
            </div>
        </div>
    </div>
</div>
*/

var tmdbKey = 'e1258f69d2028209abb4b199f1cb534c';
var newsapiKey = '8ec3aef178a94777be5e7b29b785f87a';

function carregaPrincipal(){
    let xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://api.themoviedb.org/3/trending/movie/day?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt');
    xhr.send();

    console.log("carregando")
    setTimeout(()=>{
    let item = JSON.parse(xhr.responseText)["results"];
        let i = 0;
        loop = setInterval(()=>{
            
            console.log(item[i]["id"]);

            let ativo = '';
            if (i == 0){
                ativo = 'active';
            }

            let id = item[i]["id"];
            let titulo = item[i]["title"];
            let sinopse = item[i]["overview"];
            if (sinopse.length == 0){
                sinopse = 'Sinopse não encontrada'
            }

            xhr.open('GET', `https://api.themoviedb.org/3/movie/${id}/videos?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR`)
            xhr.send();
            console.log("enviando")
            setTimeout(()=>{
                console.log("recebeu")
                let chave = JSON.parse(xhr.response)["results"][0]["key"];
                let addItem = document.getElementById("addItem");
                addItem.innerHTML += `<div class="carousel-item ${ativo}">
                    <div class="row lancamento-conteudo">
                        <div class="col-sm-12 col-md-6 trailer">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${chave}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div class="col-sm-11 col-md-6 lancamento-text rainbow">
                            <div>
                                <h2>${titulo}</h2>      
                                <div class="sinopse">                       
                                <strong>Sinopse:</strong>
                                ${sinopse}
                                </div>
                                <br><strong>Diretores: </strong>Carlos López Estrada, Don Hall<strong>
                                <br>Roteiro:</strong> Adele Lim, Qui Nguyen
                                <br><strong>Estreia: </strong> 04/03/2021
                                <br><strong>Elenco:</strong>
                                Awkwafina | Kelly Marie Tran | Gemma Chan | Alan Tudyk 
                                <br><Strong>Avaliação:</Strong>
                                <span class="estrelas">★★★★☆</span>
                            </div>
                        </div>
                    </div>
                </div>`;
                console.log(chave);
                console.log(titulo);
                console.log(sinopse);
            }, 100);
            i++;
        }, 200);
        if( i==10);
        loop = clearInterval()
        
},100);
    
    console.log("carregado")
}

function numetoca(){

    let coloridos = document.getElementsByClassName('rainbow');
    
    for(let i=0; i < coloridos.length; i++){
        coloridos[i].style.border = '2px solid black';
        coloridos[i].style.borderRadius = '15px';
    }

    setInterval(() => rainbow(), 2);

    var audio = new Audio('dontouch.mp3');
    audio.play();

    console.log('foi rodado o secret.js');
    alert('Falei pra n me tocar');
    
}



window.onload = () => {

    dontTouch.onclick = numetoca
    carregaPrincipal();

};