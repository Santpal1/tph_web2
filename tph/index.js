function gotta_show4(id){
    var element = document.getElementById(id);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}
function clearAll() {
    const meme = document.querySelector('.meme-content');
    meme.innerHTML = '';
    const copyPasta = document.querySelector('.copypasta');
    copyPasta.innerHTML = '';
}
function clear(){
    const meme = document.querySelector('.meme-content');
    meme.innerHTML = '';
}
function showMeme() {
    const randomMemeUrl = getRandomData('memes');
    
    const memeContainer = document.querySelector('.meme-content');
    const newMeme = document.createElement('img');
    newMeme.setAttribute('src', randomMemeUrl);
    
    clearAll();
    
    memeContainer.appendChild(newMeme);
}
function showPasta(){
    const pasta = "Crazy?\nI was crazy once.\nThey locked me in a room.\nA rubber room.\nA rubber room with rats.\nAnd rats make me crazy.\n(It would've been crazier if i looped this)";
    const pastaContainer = document.querySelector('.copypasta');
    const newPasta = document.createElement('p');
    newPasta.textContent = pasta;
    clear();
    pastaContainer.appendChild(newPasta);
}
const memes = ['https://images3.memedroid.com/images/UPLOADED424/63f6e165077e6.webp', 'https://images7.memedroid.com/images/UPLOADED672/651e4965bfe7a.webp', 'https://images3.memedroid.com/images/UPLOADED805/64b9c776a6066.webp', 'https://images3.memedroid.com/images/UPLOADED357/64688c69a8793.webp'];
function rn(len) {
    return Math.floor(Math.random() * len);
}
  
const data = {
    memes
};
function getRandomData(type) {
    return data[type][rn(data[type].length)];
}
