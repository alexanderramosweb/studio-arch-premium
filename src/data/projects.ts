import casaAureaHeroDesktop from "../assets/images/projects/casa-aurea/hero-desktop.webp";
import casaAureaHeroMobile from "../assets/images/projects/casa-aurea/hero-mobile.webp";
import casaAureaStory from "../assets/images/projects/casa-aurea/story.webp";
import casaAureaGallery1 from "../assets/images/projects/casa-aurea/gallery-1.webp";
import casaAureaGallery2 from "../assets/images/projects/casa-aurea/gallery-2.webp";
import casaAureaGallery3 from "../assets/images/projects/casa-aurea/gallery-3.webp";

import vistaNorteHeroDesktop from "../assets/images/projects/vista-norte/hero-desktop.webp";
import vistaNorteHeroMobile from "../assets/images/projects/vista-norte/hero-mobile.webp";
import vistaNorteStory from "../assets/images/projects/vista-norte/story.webp";
import vistaNorteGallery1 from "../assets/images/projects/vista-norte/gallery-1.webp";
import vistaNorteGallery2 from "../assets/images/projects/vista-norte/gallery-2.webp";
import vistaNorteGallery3 from "../assets/images/projects/vista-norte/gallery-3.webp";

import lumenHeroDesktop from "../assets/images/projects/lumen-residences/hero-desktop.webp";
import lumenHeroMobile from "../assets/images/projects/lumen-residences/hero-mobile.webp";
import lumenStory from "../assets/images/projects/lumen-residences/story.webp";
import lumenGallery1 from "../assets/images/projects/lumen-residences/gallery-1.webp";
import lumenGallery2 from "../assets/images/projects/lumen-residences/gallery-2.webp";
import lumenGallery3 from "../assets/images/projects/lumen-residences/gallery-3.webp";

export const projects = [
  {
    title: "Casa Aurea",

    slug: "casa-aurea",

    location: "Bogotá, Colombia",

    heroImage: { desktop: casaAureaHeroDesktop, mobile: casaAureaHeroMobile },

    storyImage: casaAureaStory,

    gallery: [casaAureaGallery1, casaAureaGallery2, casaAureaGallery3],

    description:
      "Una residencia concebida como un santuario de calma, donde la luz cenital se funde con texturas minerales y una privacidad absoluta, redefiniendo el lujo contemporáneo en el corazón de Bogotá.",
    detailsTitle:
      "Equilibrio absoluto entre diseño atemporal, calidez y bienestar elevado.",

    details: [
      "Espacios amplios diseñados para capturar la luz del sol bogotano, priorizando el confort térmico y una atmósfera acogedora durante todo el día.",

      "Límites imperceptibles entre interior y exterior mediante ventanales tácticos que integran el paisaje como un elemento vivo de la decoración.",

      "Una curaduría de piedras, maderas y texturas orgánicas que crean un refugio de elegancia sobria y privacidad absoluta.",
    ],
  },

  {
    title: "Vista Norte",

    location: "Medellín, Colombia",

    slug: "vista-norte",

    heroImage: { desktop: vistaNorteHeroDesktop, mobile: vistaNorteHeroMobile },

    storyImage: vistaNorteStory,

    gallery: [vistaNorteGallery1, vistaNorteGallery2, vistaNorteGallery3],

    description:
      "Arquitectura abierta al paisaje, diseñada para conectar interiores cálidos con vistas panorámicas.",
    detailsTitle:
      "El encuentro perfecto entre vanguardia arquitectónica, frescura natural y una mirada infinita.",

    details: [
      "Diseño de vanguardia que prioriza la ventilación natural y la fluidez espacial, aprovechando el clima privilegiado para crear ambientes frescos y llenos de libertad.",

      "Grandes ventanales y terrazas profundas que eliminan las fronteras, convirtiendo la imponente vista del norte del valle en el escenario principal de tu hogar.",

      "Una selección de texturas orgánicas y acabados de alta gama que reflejan una sofisticación contemporánea, diseñada para quienes buscan exclusividad y confort absoluto.",
    ],
  },

  {
    title: "Lumen Residences",

    location: "Cartagena, Colombia",

    slug: "lumen-residences",

    heroImage: { desktop: lumenHeroDesktop, mobile: lumenHeroMobile },

    storyImage: lumenStory,

    gallery: [lumenGallery1, lumenGallery2, lumenGallery3],

    description:
      "Una escultura arquitectónica que dialoga con el sol y el mar; donde la luz se transforma en confort y la privacidad se vive entre la brisa del Caribe.",
    detailsTitle:
      "Sinfonía de luz, brisa marina y diseño de vanguardia en el Caribe.",

    details: [
      "Espacios concebidos para la ventilación cruzada y el confort térmico, capturando la luminosidad del Caribe sin sacrificar la frescura interior.",

      "Terrazas envolventes que integran el horizonte marino y la brisa, creando una experiencia de vida donde el exterior es una extensión del salón.",

      "Texturas minerales y acabados resistentes al entorno salino que aportan una elegancia orgánica, pensada para un estilo de vida náutico y sofisticado.",
    ],
  },
];
