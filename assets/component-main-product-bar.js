const productBar = document.querySelector('.product-bar')
const scrollChange = 1
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