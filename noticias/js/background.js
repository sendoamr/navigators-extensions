var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {

  var data = JSON.parse(this.response)
  const noticias = document.getElementById('noticias');

  data.forEach(news => {
    
    const container = document.createElement('div')
    container.setAttribute('class', 'noticia')
    var noticia = document.createTextNode(news.title); 
    container.appendChild(noticia);
    app.appendChild(container);

  });
}

request.send()

chrome.contextMenus.create({
  'title': 'Enviar noticia',
  'contexts': ['link'],
  'onclick': onClickHandler
});

function onClickHandler(info) {
  var details = {}

  details.url = info.linkUrl;
  chrome.windows.create({ url: 'enviar.html', type: 'popup', width: 300, height: 200 }, function() {
    setTimeout(function() {
      chrome.runtime.sendMessage({ details: details }, function(response) {});
    }, 100);
  });
}
