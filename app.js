let getMian = document.querySelector("#main");

fetch('https://fakestoreapi.com/products')
  .then((data) => data.json())
  .then((data) => {
    data.map((item) => {
      getMian.innerHTML += `
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card text-center p-4">
            <img src="${item.image}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description.substring(0, 50)}...</p>
              <p class="card-text"><b>Price:</b> $${item.price}</p>
              <a href="#" class="main_btn addtocart" data-id="${item.id}">Add To Cart</a>
            </div>
          </div>
        </div>
      `;
    });

    // Select all "Add To Cart" buttons
    let AddBtn = document.querySelectorAll('.addtocart');

    AddBtn.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        let productId = button.getAttribute("data-id");
        
      

        // Redirect to addtocart.html with query string (optional)
        window.location.href = `addtocart.html?id=${productId}`;
      });
    });
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });
