const wrapper = document.querySelector('#container');

const firstRow = document.createElement('div');
firstRow.setAttribute('class', 'row');
wrapper.appendChild(firstRow);

const secondRow = document.createElement('div');
secondRow.setAttribute('class', 'row');
wrapper.appendChild(secondRow);

const thirdRow = document.createElement('div');
thirdRow.setAttribute('class', 'row');
wrapper.appendChild(thirdRow);

const fourthRow = document.createElement('div');
fourthRow.setAttribute('class', 'row');
wrapper.appendChild(fourthRow);

const div1 = document.createElement('div');
div1.style.border = '1px solid black';
div1.style.width = '100px';
div1.style.height = '100px';
div1.addEventListener("mouseover", () => {
    div1.style.backgroundColor = randomColor();
})
div1.addEventListener('mouseleave', () => {
    div1.style.backgroundColor = 'white';
})
firstRow.appendChild(div1);

const div2 = document.createElement('div');
div2.style.border = '1px solid black';
div2.style.width = '100px';
div2.style.height = '100px';
div2.addEventListener("mouseover", () => {
    div2.style.backgroundColor = randomColor();
})
div2.addEventListener('mouseleave', () => {
    div2.style.backgroundColor = 'white';
})
firstRow.appendChild(div2);


const div3 = document.createElement('div');
div3.style.border = '1px solid black';
div3.style.width = '100px';
div3.style.height = '100px';
div3.addEventListener("mouseover", () => {
    div3.style.backgroundColor = randomColor();
})
div3.addEventListener('mouseleave', () => {
    div3.style.backgroundColor = 'white';
})
firstRow.appendChild(div3);

const div4 = document.createElement('div');
div4.style.border = '1px solid black';
div4.style.width = '100px';
div4.style.height = '100px';
div4.addEventListener("mouseover", () => {
    div4.style.backgroundColor = randomColor();
})
div4.addEventListener('mouseleave', () => {
    div4.style.backgroundColor = 'white';
})
firstRow.appendChild(div4);

firstRow.style.display = 'flex'

const div5 = document.createElement('div');
div5.style.border = '1px solid black';
div5.style.width = '100px';
div5.style.height = '100px';
div5.addEventListener("mouseover", () => {
    div5.style.backgroundColor = randomColor();
})
div5.addEventListener('mouseleave', () => {
    div5.style.backgroundColor = 'white';
})
secondRow.appendChild(div5);

const div6 = document.createElement('div');
div6.style.border = '1px solid black';
div6.style.width = '100px';
div6.style.height = '100px';
div6.addEventListener("mouseover", () => {
    div6.style.backgroundColor = randomColor();
})
div6.addEventListener('mouseleave', () => {
    div6.style.backgroundColor = 'white';
})
secondRow.appendChild(div6);

const div7 = document.createElement('div');
div7.style.border = '1px solid black';
div7.style.width = '100px';
div7.style.height = '100px';
div7.addEventListener("mouseover", () => {
    div7.style.backgroundColor = randomColor();
})
div7.addEventListener('mouseleave', () => {
    div7.style.backgroundColor = 'white';
})
secondRow.appendChild(div7);

const div8 = document.createElement('div');
div8.style.border = '1px solid black';
div8.style.width = '100px';
div8.style.height = '100px';
div8.addEventListener("mouseover", () => {
    div8.style.backgroundColor = randomColor();
})
div8.addEventListener('mouseleave', () => {
    div8.style.backgroundColor = 'white';
})
secondRow.appendChild(div8);

secondRow.style.display = 'flex';

const div9 = document.createElement('div');
div9.style.border = '1px solid black';
div9.style.width = '100px';
div9.style.height = '100px';
div9.addEventListener("mouseover", () => {
    div9.style.backgroundColor = randomColor();
})
div9.addEventListener('mouseleave', () => {
    div9.style.backgroundColor = 'white';
})
thirdRow.appendChild(div9);

const div10 = document.createElement('div');
div10.style.border = '1px solid black';
div10.style.width = '100px';
div10.style.height = '100px';
div10.addEventListener("mouseover", () => {
    div10.style.backgroundColor = randomColor();
})
div10.addEventListener('mouseleave', () => {
    div10.style.backgroundColor = 'white';
})
thirdRow.appendChild(div10);

const div11 = document.createElement('div');
div11.style.border = '1px solid black';
div11.style.width = '100px';
div11.style.height = '100px';
div11.addEventListener("mouseover", () => {
    div11.style.backgroundColor = randomColor();
})
div11.addEventListener('mouseleave', () => {
    div11.style.backgroundColor = 'white';
})
thirdRow.appendChild(div11);

const div12 = document.createElement('div');
div12.style.border = '1px solid black';
div12.style.width = '100px';
div12.style.height = '100px';
div12.addEventListener("mouseover", () => {
    div12.style.backgroundColor = randomColor();
})
div12.addEventListener('mouseleave', () => {
    div12.style.backgroundColor = 'white';
})
thirdRow.appendChild(div12);

thirdRow.style.display = 'flex'

const div13 = document.createElement('div');
div13.style.border = '1px solid black';
div13.style.width = '100px';
div13.style.height = '100px';
div13.addEventListener("mouseover", () => {
    div13.style.backgroundColor = randomColor();
})
div13.addEventListener('mouseleave', () => {
    div13.style.backgroundColor = 'white';
})
fourthRow.appendChild(div13);

const div14 = document.createElement('div');
div14.style.border = '1px solid black';
div14.style.width = '100px';
div14.style.height = '100px';
div14.addEventListener("mouseover", () => {
    div14.style.backgroundColor = randomColor();
})
div14.addEventListener('mouseleave', () => {
    div14.style.backgroundColor = 'white';
})
fourthRow.appendChild(div14);

const div15 = document.createElement('div');
div15.style.border = '1px solid black';
div15.style.width = '100px';
div15.style.height = '100px';
div15.addEventListener("mouseover", () => {
    div15.style.backgroundColor = randomColor();
})
div15.addEventListener('mouseleave', () => {
    div15.style.backgroundColor = 'white';
})
fourthRow.appendChild(div15);

const div16 = document.createElement('div');
div16.style.border = '1px solid black';
div16.style.width = '100px';
div16.style.height = '100px';
div16.addEventListener("mouseover", () => {
    div16.style.backgroundColor = randomColor();
})
div16.addEventListener('mouseleave', () => {
    div16.style.backgroundColor = 'white';
})
fourthRow.appendChild(div16);

fourthRow.style.display = 'flex';

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
} 

const btn = document.createElement('button')
btn.textContent = 'button';
btn.style.border = '1px solid black';
btn.style.borderRadius = '12px ';
btn.style.padding = '10px 20px';
btn.addEventListener('click', getTotal )
wrapper.appendChild(btn)

function getTotal () {
    question = prompt("how many divs would you like");
    firstRow.innerHTML=''
    secondRow.innerHTML=''
    thirdRow.innerHTML=''
    fourthRow.innerHTML=''
    multipleRows = document.getElementsByClassName('row')
    for (let i = 0; i < question; i++) {
        const moreDivs = document.createElement('div');
        moreDivs.style.border = '1px solid black';
        moreDivs.style.height = '100px';
        moreDivs.style.width = '100px';
        moreDivs.addEventListener("mouseover", () => {
        moreDivs.style.backgroundColor = randomColor();
        })
        moreDivs.addEventListener('mouseleave', () => {
        moreDivs.style.backgroundColor = 'white';
        })
        firstRow.append(moreDivs)
    }
}
