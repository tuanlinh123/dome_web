const idProduct = window.location.search.split("=")[1];
console.log(idProduct);
document.addEventListener('DOMContentLoaded', async function () {
    let endpoint = 'https://616a98c816e7120017fa1025.mockapi.io/api/'
  
    async function getProducts() {
      let product = await fetch(`${endpoint}Products`)
      return await product.json()
    }
  
    async function getProductsHTML() {
      let allProductsDOM = document.querySelector(".content");
      allProductsDOM.innerHTML=`<div class="loading"><img src="https://cdn.dribbble.com/users/46390/screenshots/1191953/loading.gif"></div>`
      let prsData = await getProducts();
      let allProductsHTML = '';
          console.log(prsData[idProduct-1]);
            const itemProduct = `
            <div class="container_product">
        <div class="container_photo">
            <div class="photo_api"><img src="${prsData[idProduct-1].image}"></div>
        </div>
        <div class="container_text">
            <div class="container_name">${prsData[idProduct-1].name}</div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <div class="price">${prsData[idProduct-1].price} VND<span>25000000VND</span> </div>
            <div class="container_content">Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu...</div>
            <div class="contrainer_ingredient">${prsData[idProduct-1].ingredient}</div>
            <div class="category">${prsData[idProduct-1].category}</div>
            <div class="butoon"> <a href="#" class="btn">Đặt Ngay</a></div>
        </div>
    </div>
</div>`;
  
            allProductsHTML += itemProduct;
        allProductsDOM.innerHTML = allProductsHTML;
      
    }
    await getProductsHTML()
})  