function readNews() {
    fetch("rss.json")
        .then((r) => r.json())
        .then(renderNews);
}

function renderNews(news) {
    let items = news.items;
    for (let item of items) {
      renderItem(item);            
    }
}

function renderItem(item) {
    let box = document
    .createElement('dev')

    let title = document
    .createElement('h1');

    let desc = document
    .createElement('p');

    title
    .innerText = item.title;

     desc
     .innerText = item.summary.substring(0, 120);

    box.append(title, desc);
    document
        .getElementById("rss")
        .append(box);
}

window.addEventListener("load", readNews);