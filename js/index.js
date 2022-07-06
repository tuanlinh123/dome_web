// let index = 2;
// function changeImage() {
//    var imgs =["images/slider/slide1.png","images/slider/slide2.png","images/slider/slide3.png"];
//    document.getElementById('img').src =imgs[index];
//    index++;
//    if(index==3){
//      index = 0;
//    }
//    return index;
// }
// setInterval(changeImage,4000);
// function changeImageT() {
//    var imgs =["images/slider/slide1.png","images/slider/slide2.png","images/slider/slide3.png"];
//    document.getElementById('img').src =imgs[index];
//    index--;
//    if(index==0){
//     index = 3;
//    }
//    return index ;
// }

document.addEventListener('DOMContentLoaded', async function() {
  let endpoint = 'https://616a98c816e7120017fa1025.mockapi.io/api/'

  async function getProduct(id) {
    let product = await fetch(`${endpoint}Products/${id}`)
    return await product.json()
  }

  async function getProducts() {
    let product = await fetch(`${endpoint}Products`)
    return await product.json()
  }
  
  let pr = await getProduct(),
      prs = await getProducts()
  let prPview = document.querySelector('.body_product1')
      // img = prPview.querySelector('.review_pic img'),
      // name = document.querySelector('.review_text h1')

      // img.src = pr.image
  console.log(prs)
  let name = JSON.parse(localStorage.getItem("fullname"));
  if(name) {
    document.getElementById('login-btn').setAttribute('title', name)
  }
  document.addEventListener('click', e => {
    if(e.target.parentElement.id == 'btnsearch') {
      let s = document.getElementById('text-search').value.trim()
      if(s) {
        window.location.href = `catalog.html?s=${s}`
        // let results = prs.map(prd => prd.name == s ? prd : undefined)
        // results.map(res => {
        //   if(res) {
        //     img.src = res.image
        //     name.innerHTML = res.name
        //   }
        // })
      }
    }

  })

})