
makeUpApi = 'http://makeup-api.herokuapp.com/api/v1/products.json'
let makeUpBrandsArray = []
let newMakeUpBrandArray = [];
let superNewArray = [];
const idTag = document.getElementById("lang")


function selectMakeUpBrand() {
    fetch(makeUpApi)
    .then(res => res.json())  
    .then(json => renderMakeups(json))
    }

function renderMakeups(makeUps) {
   makeUps.forEach(makeUp => {
      const brands = makeUp.brand; 
      makeUpBrandsArray.push(brands);  
      makeUpBrandsArray.sort();

      makeUpBrandsArray.forEach(brand => {
      if (!newMakeUpBrandArray.includes(brand)) {
         newMakeUpBrandArray.push(brand); 

         //const opt = document.createElement('option')
         //opt.innerHTML = brand;
         //idTag.appendChild(opt);
        
      }   
      }
         )  
            //superNewArray = newMakeUpBrandArray;
            //console.log(superNewArray[6]);
            //for (const brandName of superNewArray) {
            //   const opt = document.createElement('option');
            //   opt.innerHTML = brandName;
            //   idTag.appendChild(opt);
           // }
            superNewArray = newMakeUpBrandArray;
            superNewArray.forEach(brandName => {
               const opt = document.createElement('option');
               opt.innerHTML = brandName;
               idTag.appendChild(opt);
            })

            for (let i = 0; i < superNewArray.length; i++){
               console.log(superNewArray[i]);
              
            }
            console.log(superNewArray.length);
            
         
   }      
      )
}   

selectMakeUpBrand();
