const header = function () {
    const header = document.createElement('header');
    const logo = document.createElement ('h1');
    logo.classList.add('logo')
    logo.textContent = 'Resty'
    header.appendChild(logo)
    const nav = document.createElement('nav');

    const home = document.createElement('button');
    home.textContent = 'Home';
    home.id = 'home'
    const menu = document.createElement('button');
    menu.textContent = 'Menu';
    menu.id ='menu'

    const about = document.createElement('button');
    about.id ='about'
    about.textContent = 'About';


    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(about);

    header.appendChild(nav);

    return header;
};

const footer = function(){
    const footer = document.createElement('footer');
    footer.textContent ='R'
    return footer;
}

export { header, footer};
