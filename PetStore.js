let topRatedBox = document.getElementById("topRated-box")
let productbtn = document.querySelectorAll(".productbtn")
let headerLink = document.querySelectorAll("header ul li a")
headerLink[0].addEventListener("click", function () {
    headerLink[0].classList.add("activeLink")
    headerLink[1].classList.remove("activeLink")
    headerLink[2].classList.remove("activeLink")
    headerLink[3].classList.remove("activeLink")
})
headerLink[1].addEventListener("click", function () {
    headerLink[0].classList.remove("activeLink")
    headerLink[1].classList.add("activeLink")
    headerLink[2].classList.remove("activeLink")
    headerLink[3].classList.remove("activeLink")
})
headerLink[2].addEventListener("click", function () {
    headerLink[0].classList.remove("activeLink")
    headerLink[1].classList.remove("activeLink")
    headerLink[2].classList.add("activeLink")
    headerLink[3].classList.remove("activeLink")
})
headerLink[3].addEventListener("click", function () {
    headerLink[0].classList.remove("activeLink")
    headerLink[1].classList.remove("activeLink")
    headerLink[2].classList.remove("activeLink")
    headerLink[3].classList.add("activeLink")
})
productbtn[0].addEventListener("click", function () {
    showProduct("Top")
    productbtn[0].classList.add("btnactive")
    productbtn[1].classList.remove("btnactive")
    productbtn[2].classList.remove("btnactive")
    topRatedBox.style.display = "block"
})
productbtn[1].addEventListener("click", function () {
    showProduct("Best")
    productbtn[0].classList.remove("btnactive")
    productbtn[1].classList.add("btnactive")
    productbtn[2].classList.remove("btnactive")
    topRatedBox.style.display = "none"
})
productbtn[2].addEventListener("click", function () {
    showProduct("New")
    productbtn[0].classList.remove("btnactive")
    productbtn[1].classList.remove("btnactive")
    productbtn[2].classList.add("btnactive")
    topRatedBox.style.display = "none"
})

let topRatedArray = [
    {
        item: "ProductImages/consectetur-hamirginiap (4).jpg",
        title: "Dog House",
        price: "$999"
    },
    {
        item: "ProductImages/consectetur-hamirginiap (7).jpg",
        title: "Cat Pillow",
        price: "$99"
    },
    {
        item: "ProductImages/consectetur-hamirginiap (5).jpg",
        title: "Dog House",
        price: "$1999"
    },
    {
        item: "ProductImages/consectetur-hamirginiap (8).jpg",
        title: "Cat Tant House",
        price: "$99"
    },
    {
        item: "ProductImages/consectetur-hamirginiap (6).jpg",
        title: "Dog House",
        price: "$2999"
    },
    {
        item: "ProductImages/consectetur-hamirginiap (9).jpg",
        title: "Cat Tree House",
        price: "$999"
    },
    {
        item: "ProductImages/consectetur-hamirginiap (11).jpg",
        title: "Dog Food",
        price: "$149"
    },
    {
        item: "ProductImages/consectetur-hamirginiap (10).jpg",
        title: "Cat Food",
        price: "$199"
    },
    {
        item: "ProductImages/consectetur-hamirginiap (12).jpg",
        title: "Dog Food",
        price: "$2999"
    },
    {
        item: "ProductImages/consectetur-hamirginiap (7).jpg",
        title: "Cat Pillow",
        price: "$99"
    },
]
let bestSellerArray = [
    {
        item: "ProductImages/consectetur-hamirginiap (13).jpg",
        title: "Dog Food",
        price: "$99"
    },
    {
        item: "ProductImages/consectetur-hamirginiap (14).jpg",
        title: "Cat Food",
        price: "$49"
    }, {
        item: "ProductImages/consectetur-hamirginiap (15).jpg",
        title: "Dog Food",
        price: "$99"
    }, {
        item: "ProductImages/consectetur-hamirginiap (16).jpg",
        title: "Dog Food",
        price: "$79"
    }, {
        item: "ProductImages/consectetur-hamirginiap (17).jpg",
        title: "Cat Food",
        price: "$99"
    },
]
let newArriveArray = [
    {
        item: "ProductImages/consectetur-hamirginiap (18).jpg",
        title: "Dog Food",
        price: "$999"
    },
    {
        item: "ProductImages/consectetur-hamirginiap (19).jpg",
        title: "Cat Toy",
        price: "$999"
    },
    {
        item: "ProductImages/consectetur-hamirginiap (21).jpeg",
        title: "Pet Toy",
        price: "$999"
    },
    {
        item: "ProductImages/consectetur-hamirginiap (20).jpg",
        title: "Dog Food",
        price: "$999"
    },
    {
        item: "ProductImages/consectetur-hamirginiap (22).jpeg",
        title: "Pet Toy",
        price: "$999"
    },
]

function showProduct(tag) {
    if (tag == "Top") {
        let product, show = ''
        topRatedArray.map((elem) => {
            product = `
            <div class="product d-flex flex-column align-items-center justify-content-center p-2 rounded-3">
            <img src="${elem.item}" alt="">
            <h6 class="d-inline-block ">${elem.title}</h6>
            <div class="star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <div class="price d-flex">
                <p class="d-inline-block text-decoration-line-through m-0 opacity-50">$ 2000</p>
                <p class="d-inline-block m-0">${elem.price}</p>
            </div>
            <div class="w-100 cart d-flex justify-content-evenly align-items-center ">
                <i class="fa fa-minus  opacity-50 " data-id="${elem.id}" aria-hidden="true"></i>
                <span id="a">0</span>
                <i class="fa fa-plus " data-id="${elem.id}" aria-hidden="true"></i>
            </div>
            </div>
            `
            return show = show + product
        })
        topRatedBox.innerHTML = show
    }
    else if (tag == "Best") {
        let product, show = ''
        bestSellerArray.map((elem) => {
            product = `
            <div class="product d-flex flex-column align-items-center justify-content-center p-2 rounded-3">
            <img src="${elem.item}" alt="">
            <h6 class="d-inline-block ">${elem.title}</h6>
            <div class="star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <div class="price d-flex">
                <p class="d-inline-block text-decoration-line-through m-0 opacity-50">$ 2000</p>
                <p class="d-inline-block m-0">${elem.price}</p>
            </div>
            <div class="w-100 cart d-flex justify-content-evenly align-items-center ">
                <i class="fa fa-minus  opacity-50 " data-id="${elem.id}" aria-hidden="true"></i>
                <span id="a">0</span>
                <i class="fa fa-plus " data-id="${elem.id}" aria-hidden="true"></i>
            </div>
            </div>
            `
            return show = show + product
        })
        topRatedBox.innerHTML = show
    }
    else {
        let product, show = ''
        newArriveArray.map((elem) => {
            product = `
            <div class="product d-flex flex-column align-items-center justify-content-center p-2 rounded-3">
            <img src="${elem.item}" alt="">
            <h6 class="d-inline-block ">${elem.title}</h6>
            <div class="star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <div class="price d-flex">
                <p class="d-inline-block text-decoration-line-through m-0 opacity-50">$ 2000</p>
                <p class="d-inline-block m-0">${elem.price}</p>
            </div>
            <div class="w-100 cart d-flex justify-content-evenly align-items-center ">
                <i class="fa fa-minus  opacity-50 " data-id="${elem.id}" aria-hidden="true"></i>
                <span id="a">0</span>
                <i class="fa fa-plus " data-id="${elem.id}" aria-hidden="true"></i>
            </div>
            </div>
            `
            return show = show + product
        })
        topRatedBox.innerHTML = show
    }
}

let product, show = ''
topRatedArray.map((elem, i) => {
    product = `
            <div class="product d-flex flex-column align-items-center justify-content-center p-2 rounded-3">
            <img src="${elem.item}" alt="">
            <h6 class="d-inline-block ">${elem.title}</h6>
            <div class="star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <div class="price d-flex">
                <p class="d-inline-block text-decoration-line-through m-0 opacity-50">$ 2000</p>
                <p class="d-inline-block m-0">${elem.price}</p>
            </div>
            <div class="w-100 cart d-flex justify-content-evenly align-items-center ">
                <i class="fa fa-minus  opacity-50 " data-id="${elem.id}" aria-hidden="true"></i>
                <span id="${i}">0</span>
                <i class="fa fa-plus " data-id="${elem.id}" aria-hidden="true"></i>
            </div>
            </div>
            `
    return show = show + product
})
topRatedBox.innerHTML = show

let plusbtn = document.querySelectorAll(".fa-plus")
let minusbtn = document.querySelectorAll('.fa-minus');

plusbtn.forEach((element, i) => {
    element.addEventListener("click", function () {
        let spanEl = document.getElementById(i);
        let value = parseInt(spanEl.innerText);
        if (!isNaN(value)) {
            value++;
            spanEl.innerText = value;
            minusbtn[i].style.opacity = "1"
        } else {
            spanEl.innerText = '1';
        }
    })
});

minusbtn.forEach((element, i) => {
    element.addEventListener('click', function () {
        let spanEl = document.getElementById(i);
        let value = parseInt(spanEl.innerText);

        if (value > 0) {
            value--;
            spanEl.innerText = value;
        }
    })
});