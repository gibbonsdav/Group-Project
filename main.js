$(document).ready(function(e) {
  $("#tabs").on("click", "a", function(e) {
    e.preventDefault()
    $(".content").removeClass("show")
    $("a").removeClass("active")
    $(this).addClass("active")
    $(this)
      .find("+ .content")
      .addClass("show")
  })
  $.get(“https://obscure-tundra-54269.herokuapp.com/casual-dining”, function(
    data
  ) {
    var apps = data.appetizers.map(function(item) {
      return `
    <div id=“#menudisplay”>
    <p class=“menutest”>${item.name}</p>
    <h3>${item.price}</h3>
  <h6>${item.description}</h6>
  <h6>${item.extra}</h6>
    </div>
    `
    })
    var entree = data.entrees.map(function(item) {
      return `
  <div class=“menu4">
  <p class=“menutest2”>${item.name}</p>
  <h3>${item.price}</h3>
  <h6>${item.description}</h6>
  <h6>${item.extra}</h6>
  </div>
  `
    })
    var dessert = data.desserts
      .map(function(item) {
        return `
  <div class=“menu4">
  <h3>${item.price}</h3>
  <p class=“menutest2”>${item.name}</p>
  <h3>${item.price}</h3>
  <h6>${item.description}</h6>
  <h6>${item.extra}</h6>
  </div>
`
      })
.join("\n")
   $("#menudisplay").html(apps)
   })





  // $.get("https://obscure-tundra-54269.herokuapp.com/casual-dining", function(
  //   data
  // ) {
  //   var apps = data.appetizers
  //     .map(function(item) {
  //       return `
  //   <div class="menu3>
  //   <p class="menutest>${item.name}</p>
  //   </div>
  //   ` })
  //   var entree = data.entrees
  //   .map(function(item) {
  //     return `
  // <div class="menu3>
  // <p class="menutest>${item.name}</p>
  // </div>
  // `

  //     .join("\n")
  //   $("#menudisplay").html(apps)
  // })

  //   .get("https://obscure-tundra-54269.herokuapp.com/casual-dining").data()

  //   const html = items.results
  //   .map(function(item) {
  //     return `
  //    <div class="product">
  //    <img class="itemimg" src=${item.Images[0].url_fullxfull} />
  //    <p class="title">${item.title.substr(0, 27)}</p>
  //    <p class="shop">${item.Shop.shop_name}</p>
  //    <p class="price">$${item.price}</p>
  //    <p class="shipping">FREE shipping</p>

  // //    <img class="heart" src="./assets/heart.png" />

  // //    </div>
  // // `
  // //   })
  // //   .join("\n")

  //   .get("https://obscure-tundra-54269.herokuapp.com/casual-dining").data()
})
