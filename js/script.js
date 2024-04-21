
/* Lightbox Gallery Start */

let currentIndex = 0;
const images = ["images/certificate.png", "images/certificate.png", "images/certificate.png","images/certificate.png"]; // Add more image filenames as needed

function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    document.getElementById('lightbox').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        document.getElementById('lightbox').style.opacity = '1';
    }, 50); 
}

function closeLightbox() {
    document.getElementById('lightbox').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('lightbox').style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300); 
}

function changeImage(delta) {
    currentIndex = (currentIndex + delta + images.length) % images.length;
    updateLightboxContent();
}

function updateLightboxContent() {
    document.getElementById('lightbox-img').src = images[currentIndex];
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeLightbox();
    } else if (event.key === 'ArrowLeft') {
        changeImage(-1);
    } else if (event.key === 'ArrowRight') {
        changeImage(1);
    }
});

/* Lightbox Gallery End */

/* scroll to top button start */

myButton = document.getElementById("myBtn")
window.onscroll = function(){
scrollFunction()
}
function scrollFunction(){
if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  myButton.style.display = "block"
}else{
  myButton.style.display = "none"
}
}

function topFunction(){
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0 
}

/* scroll to top button end */

/* Search Products Start */

function searchProducts() {
    var searchInput = document.getElementById("searchInput");
    var filter = searchInput.value.toUpperCase();
    var products = document.querySelectorAll('.product');

    products.forEach(function(product) {
        var productName = product.dataset.name.toUpperCase();
        var displayStyle = productName.includes(filter) ? 'block' : 'none';
        product.style.display = displayStyle;
    });
}

/* Search Products End */

/* Home Slider Section Start */

$('.testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite:true,
    dots:false,
    arrows:true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });

/* Home Slider Section End */

/* Aos Animation Start */

AOS.init();

/* Aos Animation End */

/* Counter Section Start */

$('.count').counterUp({
    delay:10,
    time:3000
})

/* Counter Section End */

