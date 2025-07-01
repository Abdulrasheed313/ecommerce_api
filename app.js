let getMian = document.querySelector("#main");

fetch('https://fakestoreapi.com/products')
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
    data.map((item) => {
      getMian.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card text-center  p-4" >
            <img src="${item.image}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description.substring(0, 50)}...</p>
              <p class="card-text"><b>Price:</b> $${item.price}</p>
              <a href="#" class="main_btn">Buy Now</a>
            </div>
          </div>
        </div>
      `;
    });
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });
