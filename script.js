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