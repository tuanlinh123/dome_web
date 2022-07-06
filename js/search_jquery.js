$( document ).ready(async function() {
  let endpoint = 'https://616a98c816e7120017fa1025.mockapi.io/api/'

  async function getProduct(id) {
    let product = await fetch(`${endpoint}Products/${id}`)
    return await product.json()
  }

  async function getProducts() {
    let product = await fetch(`${endpoint}Products`)
    return await product.json()
  }

  // khai baa ham lay tat ca product
  async function getProductsHTML() {
    let prsData = await getProducts()
    let allProductsHTML = '';
    if(prsData.length) {
      for(let j = 0; j < prsData.length; j++){
        console.log(prsData[j]);
        if(prsData[j] != undefined) {
          const itemProduct = `
            <div class="card">
              <div class="items">
                  <div class="image">
                      <img src="${prsData[j].image}" alt="">
                  </div>
                  <div class="text">
                      <h3>${prsData[j].name}</h3>
                      <p>${prsData[j].price} đ</p>
                  </div>
                <div class="button">
                  <a href="#">Add</a>
                </div>
                <div class="infor">
                  <button class="show-product" data-id="${prsData[j].id}" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Show</button>
                </div>
              </div>
          </div>`;

          allProductsHTML += itemProduct;
        }
      }

      $('.show_product').html(allProductsHTML);
    }
  }

  // chay ham lay tat ca product va in ra HTML
  await getProductsHTML();

  // lay tat ca product
  var prs = await getProducts();

  // khai bao ham tim kiem sp
  function searchProductByName() {
    let s = $('#text-search').val().trim();
    if(s) {
      let results = prs.map(prd => prd.name == s ? prd : undefined)
      results.map(res => {
        if (res) {
          let innerHTML = ``;
          innerHTML += `
          <div class="card">
            <div class="items">
                <div class="image_search">
                    <img src="${res.image}" alt="">
                </div>
                <div class="text_search">
                    <h3>${res.name}</h3>
                    <h3>${res.category}</h3>
                    <h3>${res.dvt}</h3>
                    <p>${res.price} đ</p>
                </div>
              <div class="button_search">
                <a href="#">Add</a>
              </div>
            </div>
          </div>`;
          
          $('.body_product').html(innerHTML);
        }
      })
    }
  }

  // khi click tim kiem se chay ham tim kiem
  $("#btnsearch").click(function() {
    searchProductByName()
  })

  // show modal product by id
  $( "body" ).on( "click", ".show-product", async function() {
    var idProduct = $(this).attr('data-id');
    let dataProductById = await getProduct(idProduct);
    
    let innerHTML = ``;
    innerHTML += `
    <div class="card">
      <div class="items">
          <div class="image_search">
              <img src="${dataProductById.image}" alt="">
          </div>
          <div class="text_search">
              <h3>${dataProductById.name}</h3>
              <h3>${dataProductById.category}</h3>
              <h3>${dataProductById.dvt}</h3>
              <p>${dataProductById.price} đ</p>
          </div>
      </div>
    </div>`

    $('.modal-product').html(innerHTML);
  })
})