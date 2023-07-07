const linkList = document.getElementById('link-list');
const links = linkList.getElementsByTagName('a');

const setStyle = () => {
    for (var i = 0; i < links.length; i++) {
    if (links[i].href.indexOf('http://') === 0) {
      links[i].classList.add('external-link');
    }
}
}
setStyle();