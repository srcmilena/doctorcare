/* onScroll() { // Criação de função (on = ligar / ligar eventos)
    console.log("mensagem");
}*/

//onScroll() // Execução da função 

/*function onScroll() {
    //console.log(scrollY) //console = objeto / log = funcionalidade do objeto (console)
}*/

function onScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function openMenu() {
    document.body.classList('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}