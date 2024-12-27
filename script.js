let translations = {};

fetch('./translations.json')
    .then(response => response.json())
    .then(data => {
        translations = data;
        console.log(translations); // Debugging line
    })
    .catch(error => console.error('Error loading translations:', error));

function toggleLanguageMenu() {
    const langMenu = document.getElementById("lang-menu");
    langMenu.style.display = langMenu.style.display === "block" ? "none" : "block";
}

function toggleLanguageMenuFooter() {
    const langMenuFooter = document.getElementById("lang-menu-footer");
    langMenuFooter.style.display = langMenuFooter.style.display === "block" ? "none" : "block";
}

function changeLanguage(lang) {
    document.getElementById("menu").innerText = translations[lang].menu;
    document.getElementById("business").innerText = translations[lang].business;
    document.getElementById("teach").innerText = translations[lang].teach;
    document.getElementById("welcome-text").innerText = translations[lang].welcomeText;
    document.getElementById("footer-text").innerText = translations[lang].footerText;

    // Hide both language menus after selection
    document.getElementById("lang-menu").style.display = "none";
    document.getElementById("lang-menu-footer").style.display = "none";
}
