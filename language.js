
const langButtom = document.getElementById('lang');

const host = "5500/"


const toggleLang = () => {
    const language = getCookie('lang');
    if (language === "eng") {
        document.cookie = 'lang=ar;';
    } else {
        document.cookie = 'lang=eng;';
    };

    // load another page here

    const url = window.location.href;

    console.log(url);

    const splittedUrl = url.split(host);

    console.log(splittedUrl);


    // location.reload();
    return
};

const addLanguageText = () => {
    const language = getCookie('lang');
    console.log(language);
    if (language === "eng") {
        langButtom.innerText = "Ar"
    } else {
        langButtom.innerText = "Eng"
    }
    return
};


const getCookie = (name) => {
    // Add the = sign
    name = name + '=';

    // Get the decoded cookie
    const decodedCookie = decodeURIComponent(document.cookie);

    // Get all cookies, split on ; sign
    const cookies = decodedCookie.split(';');

    // Loop over the cookies
    for (let i = 0; i < cookies.length; i++) {
        // Define the single cookie, and remove whitespace
        const cookie = cookies[i].trim();

        // If this cookie has the name of what we are searching
        if (cookie.indexOf(name) == 0) {
            // Return everything after the cookies name
            return cookie.substring(name.length, cookie.length);
        }
    }
};


addLanguageText();