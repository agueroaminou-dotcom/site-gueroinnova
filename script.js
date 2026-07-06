// MENU MOBILE TOGGLE
const mobileMenu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('is-active');
    
    const bars = mobileMenu.querySelectorAll('.bar');
    if(mobileMenu.classList.contains('is-active')) {
        bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
        bars[1].style.opacity = "0";
        bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
    } else {
        bars[0].style.transform = "none";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "none";
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('is-active');
        document.querySelectorAll('.bar').forEach(bar => bar.style.transform = "none");
        document.querySelectorAll('.bar')[1].style.opacity = "1";
    });
});

// ACCORDÉON FAQ DYNAMIQUE
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isOpen) {
            item.classList.add('active');
        }
    });
});

// EFFET NAVBAR FIXE AU SCROLL
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = "10px 0";
        navbar.style.backgroundColor = "rgba(15, 23, 42, 0.98)";
    } else {
        navbar.style.padding = "0";
        navbar.style.backgroundColor = "rgba(15, 23, 42, 0.95)";
    }
});

// ENVOI SÉCURISÉ ET FORMATE SUR WHATSAPP
function envoyerWhatsApp(event) {
    event.preventDefault(); // Bloque le rechargement pour valider le script

    // Numéro cible officiel configuré
    const monNumero = "22788434297"; 

    // Récupération des champs requis
    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const service = document.getElementById('service_demande').value;
    const commentaires = document.getElementById('commentaires').value.trim();

    // Construction du message WhatsApp encodé proprement
    const messageFinal = "Bonjour, une nouvelle demande de service a été soumise depuis le site web :\n\n" +
                         "*Nom :* " + nom + "\n" +
                         "*Prénom :* " + prenom + "\n" +
                         "*Service demandé :* " + service + "\n" +
                         "*Commentaires :* " + commentaires;

    const urlWhatsApp = "https://wa.me/" + monNumero + "?text=" + encodeURIComponent(messageFinal);
    
    // Ouverture de WhatsApp dans une nouvelle fenêtre
    window.open(urlWhatsApp, '_blank');
}