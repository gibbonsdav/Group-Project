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
  $.get("https://obscure-tundra-54269.herokuapp.com/casual-dining", function(
    data
  ) {
    var apps = data.appetizers.map(function(item) {
      return `
    <div class="menu3">
    <h3 class="menutest">${item.name}</h3>
    <h3 class="menutest">$${item.price}</h3>
    <p class="menutest">${item.description}</p>
    </div>
    `
    })
    var entree = data.entrees.map(function(item) {
      return `
  <div class="menu4">
  <h3 class="menuentree">${item.name}</h3>
  <h3 class="menuentree">$${item.price}</h3>
  <p class="menuentree">${item.description}</p>
  </div>
  `
    })

    var desserts = data.desserts
      .map(function(item) {
        return `
  <div class="menu5">
  <h3 class="menuentree">${item.name}</h3>
  <h3 class="menuentree">$${item.price}</h3>
  <p class="menuentree">${item.description}</p>
  </div>
  `
      })
      // Below, if I send the apps, entrees, and desserts to different divs they will show up on the page but they will cover up stuff they shouldnt like the reservation and story content. If I send them to the same div as below, only the last one called will show up at all

      .join("\n")
    $("#menu3").html(apps)
    $("#menu4").html(entree)
    $("#menu5").html(desserts)
  })

  var slideIndex = 0
  showSlides()
  function showSlides() {
    var i
    var slides = document.getElementsByClassName("Specials")
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"
    }
    slideIndex++
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block"
    setTimeout(showSlides, 1800000)
  }

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
