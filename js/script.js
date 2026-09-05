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
    },
    {
        name: "Service d'hébergement St-Denis",
        logo: "images/Logo-principal_couleurs.jpg",
        mission: "Auberge qui héberge et accompagne des jeunes de 15 à 20 ans en difficulté, en leur offrant un lieu sécuritaire pour se poser, reprendre confiance en eux et développer les outils nécessaires vers l'autonomie.",
        donateUrl: "https://hebergementstdenis.com/don/"
    },
    {
        name: "R.A.P. Jeunesse Québec",
        logo: "images/Logo-rap-1.png",
        mission: "Organisme d'action communautaire autonome qui va à la rencontre des jeunes de 14 ans et plus vivant diverses problématiques (pauvreté, toxicomanie, exploitation sexuelle, violence, itinérance) sur les territoires d'Ahuntsic, Bordeaux-Cartierville, Parc-Extension, Saint-Laurent et Montréal-Nord.",
        donateUrl: "https://www.canadahelps.org/fr/dn/11751"
    },
    {
        name: "La Butineuse de Vanier",
        logo: "images/logo-butineuse.jpg",
        mission: "Depuis 1993, La Butineuse œuvre auprès des enfants et des familles de Vanier en offrant un accompagnement alimentaire et éducatif afin de combattre l'insécurité alimentaire et de promouvoir la saine alimentation.",
        donateUrl: "https://www.labutineusedevanier.com/about-5"
    },
    {
        name: "RSIQ",
        logo: "images/RSIQ_Complet_Ambre.png",
        mission: "Le Réseau Solidarité Itinérance du Québec regroupe les organismes en itinérance de la province et milite pour l'amélioration des conditions de vie des personnes en situation d'itinérance ou à risque de l'être, notamment par l'accès au logement social et la défense de leurs droits.",
        donateUrl: "https://itinerance.ca/faire-un-don/"
    },
    {
        name: "Fonds Guylaine Potvin",
        logo: "images/fonds-guylaine-potvin.jpg",
        mission: "Fonds perpétuel créé pour honorer la mémoire de Guylaine Potvin et perpétuer sa mission d'aider son prochain, en offrant une aide financière à des organismes de santé et d'éducation de la région du Saguenay–Lac-Saint-Jean.",
        donateUrl: "https://guylainepotvin.ca/faire-un-don/"
    },
    {
        name: "Amicale Alfa De Québec",
        logo: "images/amicale-alfa-de-quebec.jpg",
        mission: "Organisme de bienfaisance enregistré situé à Québec (secteur Vanier); les informations publiques sur sa mission précise étant limitées, nous vous invitons à consulter directement l'organisme pour confirmer ses activités avant publication.",
        donateUrl: "https://www.canadahelps.org/en/charities/amicale-alfa-de-quebec/"
    },
    {
        name: "Réseau d'aide aux personnes seules et itinérantes de Montréal (RAPSIM)",
        logo: "images/rapsim-logo.png",
        mission: "Regroupement montréalais en itinérance et plus importante concertation du milieu, le RAPSIM rassemble des organismes communautaires œuvrant auprès des personnes seules et itinérantes de Montréal et défend leurs droits et leurs conditions de vie.",
        donateUrl: "https://www.zeffy.com/fr-CA/donation-form/391684a2-a777-45ef-a3ed-cc3c6e5e276a"
    },
    {
        name: "Sac à dos (Action-Réinsertion)",
        logo: "images/SAD-Logo-couleur-web.png",
        mission: "Organisme actif depuis plus de 15 ans qui offre des services (centre de jour, logement social, programmes d'intervention psychosociale) aux personnes itinérantes et à risque de le devenir, dans une démarche de réinsertion sociale.",
        donateUrl: "https://lesacados.org/faire-un-don/"
    },
    {
        name: "Le Centre de Référence du Grand Montréal",
        logo: "images/logo-crgm-fr.png",
        mission: "Organisme sans but lucratif créé en 1956 qui gère les services 211 Grand Montréal, Drogue : aide et référence et Jeu : aide et référence, afin d'informer et de référer les citoyens vers les ressources communautaires et publiques dont ils ont besoin.",
        donateUrl: "https://crgm.ca/fondation/faire-un-don/"
    },
    {
        name: "Médecins du Monde Canada",
        logo: "images/medecins-du-monde-logo.png",
        mission: "Organisme qui a pour mission d'assurer et de défendre l'accès à la santé pour les personnes exclues ou en situation de vulnérabilité, notamment via une clinique mobile destinée aux personnes en situation d'itinérance et aux personnes autochtones à Montréal.",
        donateUrl: "https://dons.medecinsdumonde.ca/JLT2017GENERAL/?lng=0"
    },
    {
        name: "Le P.A.S. de la rue",
        logo: "images/pas-de-la-rue-logo.jpg",
        mission: "Organisme qui aide les aînés de 55 ans et plus en situation d'itinérance ou à risque de le devenir à reprendre le contrôle de leur vie, par des centres de jour, des repas, du soutien psychosocial et un accompagnement en logement.",
        donateUrl: "https://pasdelarue.org/donner/"
    },
    {
        name: "Les Œuvres de la Maison du Père",
        logo: "images/maison-du-pere-logo.jpg",
        mission: "Depuis plus de 55 ans, la Maison du Père prévient l'itinérance chez les hommes de 25 ans et plus et met en place l'accompagnement nécessaire pour s'en sortir : refuge, réinsertion sociale, maintien en logement, résidence pour aînés et soins de santé.",
        donateUrl: "https://wl.donorperfect.net/weblink/weblink.aspx?name=E363220QF&id=2"
    },
    {
        name: "Auberge du cœur Le Transit",
        logo: "images/logo-auberge-du-coeur.png",
        mission: "Auberge du cœur de la région de Rimouski qui offre hébergement, accompagnement et activités aux jeunes en difficulté, dans le but de favoriser leur autonomie et leur intégration sociale.",
        donateUrl: "https://www.aubergeducoeurletransit.net/faire-un-don"
    },
    {
        name: "Maison Richelieu Hébergement Jeunesse",
        logo: "images/maison-richelieu.jpg",
        mission: "Auberge du cœur active depuis 1985 dans la région de Québec qui offre aide, soutien et hébergement aux adolescentes vivant des difficultés personnelles, familiales et sociales, afin de favoriser le développement de leur pouvoir d'agir et leur intégration sociale.",
        donateUrl: "https://maisonrichelieu.org/jappuie-la-maison/dons/"
    },
    {
        name: "Maison Marie-Frédéric",
        logo: "images/logo-maison-marie-frederic.jpg",
        mission: "Fondée en 1987, la Maison Marie-Frédéric a comme mission de soutenir et d'accompagner les jeunes adultes en difficulté dans le développement de leur autonomie, en respectant chaque personne dans sa globalité.",
        donateUrl: "https://maisonmariefrederic.com/faire-un-don/"
    },
    {
        name: "L'ADOberge Chaudière-Appalaches",
        logo: "images/logo-adoberge.png",
        mission: "Ressource d'hébergement qui offre des services d'intervention et d'accompagnement faisant une différence dans la vie de centaines d'adolescents vivant des difficultés chaque année, dans la région Chaudière-Appalaches.",
        donateUrl: "https://adoberge.com/don/"
    },
    {
        name: "Maison Mère-Mallet",
        logo: "images/maison-mere-mallet-logo.png",
        mission: "Fondée en 1849 par la congrégation des Sœurs de la Charité et reprise en 2014 par la Fondation famille Jules-Dallaire, la Maison Mère-Mallet est une maison accueillante dédiée aux gens démunis de la Ville de Québec, où « chacun est quelqu'un ».",
        donateUrl: "https://ffjd.ca/ce-que-nous-faisons/maison-mere-mallet/mission-valeurs-et-histoire"
    },
    {
        name: "Le Partage St-François",
        logo: "images/Logo_PSF_blanc_600Ombre.png",
        mission: "Depuis 1983, le Partage St-François offre un accueil inconditionnel et respectueux aux personnes en situation d'itinérance ou à risque de le devenir à Sherbrooke, en leur fournissant refuge, services essentiels et accompagnement adapté.",
        donateUrl: "https://partagestfrancois.ca/pour-donner/"
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

function updateParallax() {
    const maxScroll =
        donationPanel.scrollHeight - donationPanel.clientHeight;

    const progress =
        donationPanel.scrollTop / maxScroll;

    document.body.style.setProperty("--scroll-progress", progress);
}

donationPanel.addEventListener("scroll", updateParallax);
updateParallax();