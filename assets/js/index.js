const hamburger = document.getElementById('hamburguer');

hamburger.addEventListener('click',()=>{
    document.querySelector('.NavigationBar-menuContainer').classList.toggle(
        'NavigationBar-menuContainer--show'
    )
})