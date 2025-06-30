let getMian = document.querySelector("#main");


fetch("https://api.escuelajs.co/api/v1/products")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data)
    data.map((item)=>{
        getMian.innerHTML += `<div class="col-md-4">
        <div class="card" style="width: 18rem;">
  <img src="${item.images[0]}" class="card-img-top" alt="...">
  <div class="card-body">
   <h5 class="card-title">${item.id}</h5>
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.description}</p>
    <p class="card-text"><b>Price:</b> ${item.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        
        
        </div>`
    })
  })
  .catch((err) => {
    console.error("Fetch error:", err);
  });
