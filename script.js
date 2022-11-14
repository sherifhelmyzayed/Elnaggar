// Sidebar Open & close functions

sidebar = document.getElementsByClassName('sidebar')[0];
overlay = document.getElementsByClassName('page-overlay')[0];

const openSidebar = () => {
    sidebar.style.right = '0px';
    sidebar.style.opacity = 1;
    sidebar.style.zIndex = 100;

    overlay.style.opacity = 0.65;
    overlay.style.zIndex = 50;
}

const closeSideBar = () => {
    sidebar.style.right = '-100px';
    sidebar.style.opacity = 0;
    sidebar.style.zIndex = -5;

    overlay.style.opacity = 0;
    overlay.style.zIndex = -5;
}





// Sector Cards Open and close functions


const openSectorCard = (ev) => {
    const textEl = event.target.parentElement.parentElement;
    textEl.style.opacity = 0
    textEl.style.zIndex = -1

    const container = textEl.parentElement
    const hiddenEl = container.getElementsByClassName('project-card-text-hidden')[0]
    hiddenEl.style.opacity = 1
    hiddenEl.style.zIndex = 50
}

const closeSectorCard = (ev) => {
    console.log();
    const container = event.target.parentElement.parentElement.parentElement;


    const textEl = container.getElementsByClassName('project-card-text')[0]
    textEl.style.opacity = 1
    textEl.style.zIndex = 1

    const hiddenEl = container.getElementsByClassName('project-card-text-hidden')[0]
    hiddenEl.style.opacity = 0
    hiddenEl.style.zIndex = -1

}


// Multiple Slider

// let items = document.querySelectorAll('.carousel .carousel-item')
// 		items.forEach((el) => {
// 			const minPerSlide = 2
// 			let next = el.nextElementSibling
// 			for (var i=1; i<minPerSlide; i++) {
// 				if (!next) {
//             // wrap carousel by using first child
//             next = items[0]
//         }
//         let cloneChild = next.cloneNode(true)
//         el.appendChild(cloneChild.children[0])
//         next = next.nextElementSibling
//     }
// })