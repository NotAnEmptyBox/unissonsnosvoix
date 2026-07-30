const organizations = [
    {
        name: "Lauberivière",
        logo: "images/Lauberivière.png",
        mission: "Mission goes here.",
        donateUrl: "https://www.jedonneenligne.org/fondationlaub/?FrmGroupUID=all&_ga=2.15911090.58093294.1780274618-1053640572.1780274618"
    },
    {
        name: "Pech",
        logo: "images/PECH_Principale_Renv_Coul_RGB.png",
        mission: "Mission goes here.",
        donateUrl: "https://infopech.org/donnez/"
    },
    {
      name: "Projet L.U.N.E.",
      logo: "images/ProjetLune.png",
      mission: "Mission goes here.",
      donateUrl: "https://www.projet-lune.org/dons/"
    },
    {
      name: "La Dauphine",
      logo: "images/LaDauphine_logo-1200x701.jpg",
      mission: "Mission goes here.",
      donateUrl: "https://www.jedonneenligne.org/maisondauphine/DG/"
    },
    {
      name: "Projet Intervention Prostitution Québec (PIPQ)",
      logo: "images/ProjetInterventionProstitution.png",
      mission: "Mission goes here.",
      donateUrl: "https://www.canadahelps.org/fr/dn/84936"
    }
];

const accordion = document.getElementById("organizationsAccordion");

organizations.forEach((org, index) => {

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