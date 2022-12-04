
const langButtom = document.getElementById('lang');


const toggleLang = () => {
    const language = getCookie('lang');
    if (language === "eng") {
        document.cookie = 'lang=ar;';
    } else {
        document.cookie = 'lang=eng;';
    }
    location.reload()
    return
}

const addLanguageText = () => {
    const language = getCookie('lang');
    console.log(language);
    if (language === "eng") {
        langButtom.innerText = "Ar"
    } else {
        langButtom.innerText = "Eng"
    }
    return
}

const checkLanInCookie = () => {
    const language = getCookie('lang');
    if (language) {
        displayLang(language);
        return
    }
    displayLang("eng")
}

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
}

const displayLang = ()=> {
    return
}

addLanguageText()
checkLanInCookie()