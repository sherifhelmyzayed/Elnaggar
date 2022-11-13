function readMore() {

    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("readMoreBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        btnText.innerHTML = `
        <p>Read More</p>
        <i class="fas fa-chevron-double-down"></i>
        `
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        btnText.innerHTML = `
        <p>Read Less</p>
        <i class="fas fa-chevron-double-up"></i>
        `
    }
}

function readMore1() {


    const dots1 = document.getElementById("dots1");
    const moreText1 = document.getElementById("more1");
    const btnText1 = document.getElementById("readMoreBtn1");

    if (dots1.style.display === "none") {
        dots1.style.display = "inline";
        moreText1.style.display = "none";
        btnText1.innerHTML = `
        <p>Read More</p>
        <i class="fas fa-chevron-double-down"></i>
        `
    } else {
        dots1.style.display = "none";
        moreText1.style.display = "inline";
        btnText1.innerHTML = `
        <p>Read Less</p>
        <i class="fas fa-chevron-double-up"></i>
        `
    }
}


function readMore2() {


    const dots2 = document.getElementById("dots2");
    const moreText2 = document.getElementById("more2");
    const btnText2 = document.getElementById("readMoreBtn2");

    if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        moreText2.style.display = "none";
        btnText2.innerHTML = `
        <p>Read More</p>
        <i class="fas fa-chevron-double-down"></i>
        `
    } else {
        dots2.style.display = "none";
        moreText2.style.display = "inline";
        btnText2.innerHTML = `
        <p>Read Less</p>
        <i class="fas fa-chevron-double-up"></i>
        `
    }
}

function readMore3() {

    const dots3 = document.getElementById("dots3");
    const moreText3 = document.getElementById("more3");
    const btnText3 = document.getElementById("readMoreBtn3");

    if (dots3.style.display === "none") {
        dots3.style.display = "inline";
        moreText3.style.display = "none";
        btnText3.innerHTML = `
        <p>Read More</p>
        <i class="fas fa-chevron-double-down"></i>
        `
    } else {
        dots3.style.display = "none";
        moreText3.style.display = "inline";
        btnText3.innerHTML = `
        <p>Read Less</p>
        <i class="fas fa-chevron-double-up"></i>
        `
    }
}

function readMore4() {

    const dots4 = document.getElementById("dots4");
    const moreText4 = document.getElementById("more4");
    const btnText4 = document.getElementById("readMoreBtn4");

    if (dots4.style.display === "none") {
        dots4.style.display = "inline";
        moreText4.style.display = "none";
        btnText4.innerHTML = `
        <p>Read More</p>
        <i class="fas fa-chevron-double-down"></i>
        `
    } else {
        dots4.style.display = "none";
        moreText4.style.display = "inline";
        btnText4.innerHTML = `
        <p>Read Less</p>
        <i class="fas fa-chevron-double-up"></i>
        `
    }
}

function readMore5() {

    const moreText5 = document.getElementById("more5");
    const btnText5 = document.getElementById("readMoreBtn5");

    moreText5.style.display = "inline";
    btnText5.style.display = "none";

}



const mainSuppliers = document.getElementById('main-suppliers')

mainSuppliers.innerHTML = `
    <div class="container text-center">
    <h4>ABOUT US</h4>
    <h2>Our Main Suppliers</h2>
    </div>

    <div class="d-flex justify-content-center align-items-center">
    <img src="../Assets/home/supplier1.png" alt="">
    <img src="../Assets/home/supplier2.png" alt="">
    <img src="../Assets/home/supplier3.png" alt="">
    <img src="../Assets/home/supplier4.png" alt="">
    </div>
`