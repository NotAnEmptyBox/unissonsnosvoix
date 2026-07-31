const organizations = [
    {
        name: "Lauberivière",
        logo: "images/Lauberivière.png",
        mission: "Refuge et centre multiservice qui accueille les personnes en situation d’itinérance ou de grande précarité. L’organisme offre hébergement, repas, accompagnement et soutien vers l’autonomie.",
        donateUrl: "https://www.jedonneenligne.org/fondationlaub/?FrmGroupUID=all&_ga=2.15911090.58093294.1780274618-1053640572.1780274618"
    },
    {
        name: "Pech",
        logo: "images/PECH_Principale_Renv_Coul_RGB.png",
        mission: "PECH accompagne les personnes vivant avec des problèmes de santé mentale afin de favoriser leur rétablissement, leur autonomie et leur participation à la vie en communauté.",
        donateUrl: "https://infopech.org/donnez/"
    },
    {
        name: "Projet L.U.N.E.",
        logo: "images/ProjetLune.png",
        mission: "Organisme qui accueille, accompagne et soutient les femmes en situation de vulnérabilité, particulièrement celles touchées par l’exploitation sexuelle, la violence ou l’itinérance.",
        donateUrl: "https://www.projet-lune.org/dons/"
    },
    {
        name: "La Dauphine",
        logo: "images/LaDauphine_logo-1200x701.jpg",
        mission: "La Dauphine prévient l’itinérance chez les jeunes de 12 à 35 ans et les accompagne dans le développement de leur pouvoir d’agir grâce à des services d’aide, d’éducation et d’insertion sociale.",
        donateUrl: "https://www.jedonneenligne.org/maisondauphine/DG/"
    },
    {
        name: "Projet Intervention Prostitution Québec (PIPQ)",
        logo: "images/ProjetInterventionProstitution.png",
        mission: "Le PIPQ soutient les personnes actives, anciennement actives ou à risque de vivre une situation de prostitution ou d’exploitation sexuelle par la prévention, l’éducation et l’accompagnement.",
        donateUrl: "https://www.canadahelps.org/fr/dn/84936"
    },
    {
        name: "Maison Revivre",
        logo: "images/Maison-Revivre-768x319.png",
        mission: "Maison d’hébergement pour hommes en situation d’itinérance qui offre accueil, hébergement, aide alimentaire et accompagnement afin de favoriser la réhabilitation sociale et la reprise en main de leur vie.",
        donateUrl: "https://maisonrevivre.ca/faire-un-don/"

    },
    {
        name: "Centre femmes aux 3A",
        logo: "images/CF3A.jpg",
        mission: "Favorise la réinsertion sociale des femmes de 18 ans et plus en les aidant à réorganiser leur vie et à en reprendre le contrôle.",
        donateUrl: "https://www.cf3a.ca/faire-un-don"
    },
    {
        name: "Autonhommie, Centre de ressources pour hommes",
        logo: "images/autonhommie.png",
        mission: "Accueille les hommes en difficulté et en cheminement, leur offre des moyens de répondre à leurs besoins et contribue à l’évolution positive de la condition masculine.",
        donateUrl: "https://www.canadahelps.org/fr/dn/3739"
    },
    {
        name: "Fondation communautaire du Saguenay-Lac-St-Jean",
        logo: "images/Logo-FCSLSJ_D.jpg",
        mission: "Recueille et gère des fonds philanthropiques afin de soutenir le développement communautaire de la région en redistribuant les revenus à divers organismes.",
        donateUrl: "https://www.canadahelps.org/fr/dn/99348"
    },
    {
        name: "Squat Basse-Ville",
        logo: "images/Squat.png",
        mission: "Accueille, accompagne et soutient les jeunes vivant une ou plusieurs réalités liées à l’itinérance afin de réduire ses conséquences et de favoriser leur inclusion sociale.",
        donateUrl: "https://www.paypal.com/ca/fundraiser/charity/3467717"
    }
];

function shuffleArray(array) {
    // Create a shallow copy to keep the original array immutable
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements using array destructuring
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}


const accordion = document.getElementById("organizationsAccordion");

let orgs = shuffleArray(organizations);

orgs.forEach((org, index) => {

    accordion.innerHTML += `
<div class="accordion-item">

    <div class="d-flex">

        <h2 class="accordion-header flex-grow-1">

            <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#org${index}">

                <img
                    src="${org.logo}"
                    alt="${org.name} logo"
                    class="org-logo">

                <span>${org.name}</span>

            </button>

        </h2>

        <a
            href="${org.donateUrl}"
            target="_blank"
            class="btn btn-success donate-btn">

            Donner

        </a>

    </div>

    <div
        id="org${index}"
        class="accordion-collapse collapse"
        data-bs-parent="#organizationsAccordion">

        <div class="accordion-body">
            <p>${org.mission}</p>
        </div>

    </div>

</div>
`;

});

let lastRatio = false;

function updatePlayer() {
    const iframe = document.getElementById("bandcampPlayer");
    let isMobileRatio = window.innerWidth / window.innerHeight < 3 / 2;
    if(isMobileRatio !== lastRatio){
        if (isMobileRatio) {
            // mobile / portrait
            iframe.src = "https://bandcamp.com/EmbeddedPlayer/album=1232490148/size=large/bgcol=333333/linkcol=0f91ff/artwork=small/transparent=true/";
        } else {
            // desktop / landscapee/";
            iframe. src = "https://bandcamp.com/EmbeddedPlayer/album=1232490148/size=large/bgcol=333333/linkcol=0f91ff/transparent=true/";
        }
    }
    lastRatio = isMobileRatio;
}

window.addEventListener("load", updatePlayer);
window.addEventListener("resize", updatePlayer);

const donationPanel = document.querySelector(".donation-panel");

donationPanel.addEventListener("scroll", () => {
    document.body.style.setProperty(
        "--scroll",
        donationPanel.scrollTop * 0.2 + "px"
    );
});