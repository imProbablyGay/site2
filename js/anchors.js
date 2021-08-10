const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    window.scrollTo({
      top: document.querySelector(`#${blockID}`).offsetTop - document.querySelector('.navigation').offsetHeight,
      behavior: 'smooth'
    });
  })
}