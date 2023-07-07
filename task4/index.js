let news = [
    "Новина 1",
    "Новина 2",
    "Новина 3",
    "Новина 4",
    "Новина 5",
    "Новина 6",
    "Новина 7",
    "Новина 8",
    "Новина 9",
    "Новина 10"
  ];

  let add_btn = document.getElementById("add_news");
  let container = document.getElementById("newsContainer");

  addNews = () =>{
    if(container.childElementCount<news.length){
        let child = document.createElement("div"); 
        child.innerHTML = `<div class="news-item">${news[container.childElementCount]}</div>`;
        container.appendChild(child);
    }
    
  }

  add_btn.addEventListener("click", addNews);



  
 
