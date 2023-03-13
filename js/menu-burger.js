document.querySelector("#burger").addEventListener('click', () => {
    const aside = document.querySelector('aside');
    const toggle = aside.classList.toggle('active');
    const burger = document.querySelector('#burger');
    console.log(toggle)
    if (toggle) {
        burger.src ='/images/croix.png';
    } else {
        burger.src = '/images/burger.png';
    }
} )