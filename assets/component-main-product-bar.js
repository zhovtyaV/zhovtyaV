const productBar = document.querySelector('.product-bar')
const windowHeight = window.innerHeight
const scrollChange = windowHeight
const addClassOnScroll = () => productBar.classList.add("active")
const removeClassOnScroll = () => productBar.classList.remove("active")

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;

    if (scrollpos >= scrollChange) {
        addClassOnScroll()
    } else {
        removeClassOnScroll()
    }
})