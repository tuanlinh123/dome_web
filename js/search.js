document.addEventListener('DOMContentLoaded', async function () {
  let endpoint = 'https://616a98c816e7120017fa1025.mockapi.io/api/'

  async function getProducts() {
    let product = await fetch(`${endpoint}Products`)
    return await product.json()
  }
  async function getProductsHTML() {
    let allProductsDOM = document.querySelector(".show_product");
    allProductsDOM.innerHTML=`<div class="loading"><img src="https://cdn.dribbble.com/users/46390/screenshots/1191953/loading.gif"></div>`
    let prsData = await getProducts();
    let allProductsHTML = '';
    if (prsData.length) {
      for (let j = 0; j < prsData.length; j++) {
        console.log(prsData[j]);
        if (prsData[j] != undefined) {
          const itemProduct = `
            <div class="card">
              <div class="items"><div class="image">
              <a href="detail.html?id=${prsData[j].id}">
              <img src="${prsData[j].image}" alt="">
              </a>
          </div>
                  <div class="text">
                      <h3>${prsData[j].name}</h3>
                      <p>${prsData[j].price} đ</p>
                      <input type="number" min="1" max="15" value="1">
                  </div>
  
                <div class="button">
                  <a onclick="themvaogiohang(this)" href="#">Add</a>
                </div>
                </div>
              </div>
          </div>`;

          allProductsHTML += itemProduct;
        }
      }
      allProductsDOM.innerHTML = allProductsHTML;
    }
  }
  let prs = await getProducts()

  
  function search(s) {
    let results = prs.filter(prd => prd.name.indexOf(s)!=-1 )
    console.log(results);
    let list = document.querySelector(".show_product");
        list.innerHTML = ``;
        let list_product =``;
    results.map(res => {
        let innerHTML = ``;
        innerHTML += `
        <div class="card">
<div class="items">
<a href="detail.html?id=${res.id}"><div class="image">
    <img src="${res.image}" alt="">
    </a>
</div>
<div class="text">
    <h3>${res.name}</h3>
    <p>${res.price} đ</p>
</div>
<div class="nut">
<div class="infor">
</div>
<div class="button">
<a onclick="themvaogiohang(this) href="#">Add</a>
</div>
</div>
</div>
</div>`;
        // console.log(innerHTML);
        return list_product += innerHTML;
        
      
     
    })
    console.log(list_product);
      list.innerHTML = list_product
  }

  if(window.location.search) {
    let _s = window.location.search.split("=")[1]
        search(_s)
  } else {
  await getProductsHTML()
  }

  document.addEventListener('click', e => {
    if (e.target.parentElement.id == 'btnsearch') {
      let s = document.getElementById('text-search').value.trim().toUpperCase()
      if (s) {
        search(s)
        console.log(s);
      }
    }
  })
})
