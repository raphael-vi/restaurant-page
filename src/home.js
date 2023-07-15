const home = function(){
    const title = document.createElement('h2');
    const home = document. createElement('div')
    const slogan = document.createElement('h1');
    const p = document.createElement('p');
    const fakeButton = document.createElement('div');
    fakeButton.classList.add('fake-button')
    fakeButton.textContent = 'Download our App!'


    p.textContent = 'The best experience, a hundred years legacy.'
    slogan.classList.add('slogan')
    slogan.textContent = 'The delight of just being there';
    
    title.textContent = 'Resty';
    
    home.appendChild(title)
    home.appendChild(slogan)
    home.appendChild(p)
    home.appendChild(fakeButton);
    return home
}

export default home;
