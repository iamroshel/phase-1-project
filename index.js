
makeUpApi = 'http://makeup-api.herokuapp.com/api/v1/products.json'
let makeUpBrandsArray = []
const idTag = document.getElementById("brands")
const submitTag = document.querySelector('input')
const imageDiv = document.querySelector('div'); 

function selectMakeUpBrand() {
    fetch(makeUpApi)
    .then(res => res.json())  
    .then(json => renderMakeups(json))
    }

function renderMakeups(makeUps){
   
   
   makeUps.forEach(makeUp => {
      if ((!makeUpBrandsArray.includes(makeUp.brand)) &&
          (makeUp.brand != null)) {
         makeUpBrandsArray.push(makeUp.brand);
         
         const opt = document.createElement('option')
         opt.innerHTML = makeUp.brand.toUpperCase();
         opt.value = makeUp.brand;
         idTag.appendChild(opt);
      }
          
      idTag.addEventListener('change', 
          (event) => getProductsPerBrand(event)
       ) 

      function getProductsPerBrand(event) {
         imageDiv.innerHTML = ' '; // not working for second fetch 
         let selected = event.target.value
         let fetchMe = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${selected}`
          fetch(fetchMe)
          .then(res => res.json())
          .then(json => showProducts(json))  
        }
      function showProducts(products) {
         products.slice(0,5); // not working & infinite loop 
         console.log(products);
         products.forEach(product => {
            imageDiv.innerHTML += 
              `<img src = ${product.image_link} id = ${product.id} >`
            
        })
   
      }  

   }
      )

}

selectMakeUpBrand();





