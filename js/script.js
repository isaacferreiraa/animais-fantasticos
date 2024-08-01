const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('active')


    function handleActiveTab(index) {
        tabContent.forEach((section) => {
            section.classList.remove('active')
        })
        tabContent[index].classList.add('active');
    }

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            handleActiveTab(index);
        });
    });
};


function scrollSuave() {
    const linksInternos = document.querySelectorAll('a[href^="#"]');


    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        
        section.scrollIntoView({
            behavior: "smooth"
        })
    }

    linksInternos.forEach((link) => {   
        link.addEventListener('click', scrollToSection);
    });
};

scrollSuave();