/*
var opened = window.open("");
opened.document.write("<html><head><title>MyTitle</title></head><body>test</body></html>");

https://api.themoviedb.org/3/movie/${id}?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR
*/
function criaPagina(id){
    let xhr = new XMLHttpRequest;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/${id}?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR`);
    xhr.send()
    setInterval(()=>{
        let resposta = JSON.parse(xhr.responseText);
        console.log("estepora", resposta)
        return resposta;
    }, 100);
}
