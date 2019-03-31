// Default DevCorner JavaScript Setting
const containerOneHeader = document.createElement('h1');
// containerOneHeader.innerHTML = 'Simple VanillaJs Splitter Bar';
document.body.appendChild(containerOneHeader);

const containerOne = document.createElement('div');
containerOne.classList.add('containerOne');
document.body.appendChild(containerOne);



const div1 = document.createElement('div');
div1.style.backgroundColor = 'var(--wh-)';

const div2 = document.createElement('div');
div2.style.backgroundColor = 'var(--dc-)';


const div1Content = document.createElement('div');
div1Content.innerHTML = 'Left side';
div1Content.classList.add('div-1-content')
div1.appendChild(div1Content);

const div2Content = document.createElement('div');
div2Content.innerHTML = 'Right side';
div2Content.classList.add('div-2-content')
div2.appendChild(div2Content);

const splitterBar = new SplitterBar(containerOne, div1, div2);
