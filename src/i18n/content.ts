export type Lang = 'fr' | 'en' | 'es'

/** Subdominio del sitio actual para las páginas internas que la landing no cubre. */
export const siteBase: Record<Lang, string> = {
  fr: 'https://www.tanana-expedition.com',
  en: 'https://en.tanana-expedition.com',
  es: 'https://es.tanana-expedition.com',
}

type Slide = { script: string; title: string; text?: string; buttons: { label: string; href: string }[] }
type Card = { title: string; text: string; href: string }

export type Dict = {
  topbar: { contact: string; follow: string }
  nav: { home: string; boat: string; destinations: string; dest: { antarctica: string; lofoten: string; skiSail: string; spitsbergen: string }; program: string; charter: string; reviews: string; more: string; about: string }
  slides: Slide[]
  intro: { text: string; strong: string }
  south: { title: string; text: string; cards: Card[] }
  north: { title: string; text: string; cards: Card[] }
  boat: { title: string; p: string[]; cta: string; rif: string }
  skipper: { about: string; story: string[]; kicker: string; name: string; bio: string; quote: string[]; flaw: string; sef: string }
  expeditions: { title: string; p: string[]; cta: string; gallery: string; galleryHint: string }
  moment: { kicker: string; title: string; lead: string; text: string; cta: string }
  reviews: { title: string; more: string; less: string; readAll: string; items: { who: string; trip: string; text: string }[] }
  contact: { title: [string, string]; cta: string; text: string; name: string; email: string; phone: string; subject: string; message: string; consent: string; send: string }
  footer: { about: string; links: string; follow: string; rights: string; legal: string; privacy: string }
}

export const content: Record<Lang, Dict> = {
  /* ─────────────── FRANÇAIS (texte original du site) ─────────────── */
  fr: {
    topbar: { contact: 'Contact', follow: 'Suivez-nous' },
    nav: {
      home: 'Bienvenue', boat: 'Le bateau', destinations: 'Destinations',
      dest: { antarctica: 'Antarctique', lofoten: 'Norvège Lofoten', skiSail: 'Norvège ski - voile', spitsbergen: 'Spitzberg' },
      program: 'Programme de navigation', charter: 'Privatisation', reviews: 'Ils disent de nous', more: 'Plus', about: 'Qui sommes-nous',
    },
    slides: [
      { script: 'Antarctique', title: 'avec TÁNANA EXPÉDITION', buttons: [{ label: 'Découvrir cette destination', href: '/antarctique' }] },
      {
        script: 'Prêts pour l’aventure', title: 'TÁNANA EXPÉDITION',
        text: 'Embarquez à bord de Tánana, voilier d’expédition de 24 mètres, pour découvrir la Péninsule Antarctique, la Géorgie du Sud, les îles Malouines…',
        buttons: [{ label: 'Découvrir le bateau', href: '#bateau' }, { label: 'Découvrir nos destinations', href: '#destinations' }],
      },
      { script: 'Le Grand Sud', title: 'Expéditions en voilier en Antarctique et dans les îles australes', buttons: [{ label: 'Nos expéditions', href: '#expeditions' }] },
    ],
    intro: {
      text: 'Que vous ayez une âme d’aventurier, de marin, de photographe, de plongeur, de kayakiste, de skieur, que vous soyez un rêveur ou que vous ayez simplement l’envie de découvrir de nouveaux horizons…',
      strong: 'Le voyage de votre vie vous attend ici !',
    },
    south: {
      title: 'Le Grand Sud',
      text: 'Où la nature sauvage et les paysages à couper le souffle se rencontrent, offrent une expérience inoubliable et exaltante qui appelle à l’aventure et à l’exploration.',
      cards: [
        { title: 'L’Antarctique', text: 'Le Grand Sud comme vous ne l’avez jamais imaginé. Une expédition au cœur du continent blanc, avec des glaciers gigantesques en toile de fond, et des baleines, phoques et manchots tout autour de vous.', href: '/antarctique' },
      ],
    },
    north: {
      title: 'Le Grand Nord',
      text: 'Une étendue mystérieuse et envoûtante, où les glaces éternelles rencontrent les nuits étoilées, éveillant un sentiment d’aventure et de découverte inégalé.',
      cards: [
        { title: 'Les îles Lofoten', text: 'Cap sur l’archipel des Lofoten pour 7 jours d’exploration, d’île en île, à la découverte de fjords majestueux — sous le spectacle envoûtant des aurores boréales.', href: '/norvege-lofoten' },
        { title: 'Ski & voile en Norvège', text: 'Skier les sommets des Alpes de Lyngen le jour, retrouver le confort du voilier le soir : un mélange unique d’aventure hivernale et maritime.', href: '/norvege-ski-voile' },
        { title: 'Le Spitzberg', text: 'Une navigation de 12 jours aux frontières de l’Arctique, sur les traces de l’ours polaire, le long de la côte ouest de l’archipel du Svalbard.', href: '/spitzberg' },
      ],
    },
    boat: {
      title: 'Le bateau',
      p: [
        'Tánana, un voilier de 24 mètres conçu par Gilles Vaton, allie vitesse et sécurité grâce à sa coque en aluminium renforcée et ses 280 m² de voilure.',
        'Équipé d’un moteur turbo de 250 ch, il est prêt à affronter toutes les conditions.',
        'Avec 6 cabines, 4 salles d’eau et un grand carré, il accueille confortablement 12 personnes.',
        'Inscrit au Registre International Français (RIF) et approuvé comme Navire d’Utilisation Commerciale (NUC) par les affaires maritimes françaises, il répond aux normes de sécurité et de navigabilité les plus exigeantes au niveau international.',
      ],
      cta: 'Découvrir le bateau',
      rif: 'Le bateau et son équipage professionnel ont été agréés par les affaires maritimes et le navire fait partie du RIF (Registre International Français) : c’est un gage de sécurité et de fiabilité !',
    },
    skipper: {
      about: 'À propos de nous',
      story: [
        'Comme souvent, les belles histoires commencent par une rencontre !',
        'Celle-ci s’est faite sur un bateau en naviguant vers le Cap Horn, entre un skipper, un kayakiste ancien athlète de haut niveau, un skieur de randonnée de grande expérience et un alpiniste. Ensemble, ils décident de racheter ce superbe bateau capable de naviguer sur toutes les mers et océans de la planète, et de créer Tánana Expédition.',
      ],
      kicker: 'Le skipper', name: 'Patrick',
      bio: 'Capitaine de Marine marchande à la voile, ingénieur en prévention des risques technologiques, il a beaucoup pratiqué l’alpinisme — et c’est notamment pour pratiquer la montagne à bord de son bateau qu’il a découvert les montagnes de Patagonie.',
      quote: [
        'Après une carrière partagée entre les domaines sportifs, la gestion du risque et l’entrepreneuriat, je me suis passionné pour les aventures qui ont du sens et j’ai fondé, avec l’aide d’amis, la compagnie TÁNANA EXPÉDITION.',
        'Accompagner en sécurité des passionnés, scientifiques ou aventuriers à naviguer sous des contrées aussi difficiles d’accès qu’extraordinaires. Partager avec eux des valeurs d’écologie, de connaissance du milieu, dans la convivialité et la rigueur nécessaires à ces expéditions polaires.',
        'Avec TÁNANA, nous allons aller encore plus loin et dans de meilleures conditions pour ceux qui nous feront l’honneur de nous donner leur confiance.',
      ],
      flaw: 'Son principal défaut ? Il est capable de chanter à tue-tête du Luis Mariano dans le Drake.',
      sef: 'Patrick est membre de la Société des Explorateurs Français',
    },
    expeditions: {
      title: 'Nos expéditions',
      p: [
        'Vous rêvez d’admirer les aurores australes, d’observer les baleines à bosse, les manchots royaux, les orques ou les phoques léopards ?',
        'De naviguer sur les mers du Grand Sud, de parcourir le canal Beagle, de traverser le détroit de Drake ?',
        'De plonger sous les glaces, de skier dans l’immensité du continent blanc, de pagayer en kayak au milieu des icebergs de la Péninsule Antarctique ?',
        'Ou encore de suivre les traces de l’ours blanc au Spitzberg, de skier dans les majestueuses Alpes de Lyngen, de découvrir les merveilleuses îles des Lofoten ?',
        'Tout cela est possible à bord de Tánana avec nos expéditions !',
      ],
      cta: 'Découvrir les destinations',
      gallery: 'La vie à bord, en images',
      galleryHint: 'Photos de nos dernières expéditions',
    },
    moment: {
      kicker: 'L’expédition du moment', title: 'L’Antarctique',
      lead: 'Découvrez le Grand Sud d’une manière que vous n’auriez jamais imaginée.',
      text: 'Partez en expédition au cœur du continent blanc, où des glaciers gigantesques servent de toile de fond à un spectacle vivant de baleines, phoques et manchots qui vous entourent.',
      cta: 'En savoir plus',
    },
    reviews: {
      title: 'Ils disent de nous !', more: 'Lire la suite', less: 'Réduire', readAll: 'En lire plus',
      items: [
        { who: 'Mariane', trip: 'Antarctique · janvier 2026', text: 'Magique Antarctique ! C’est mon deuxième voyage à bord de Tanana et j’adore. La découverte de ce continent magique sur un voilier renforce le sentiment de communion avec cette nature époustouflante. On navigue de baie en baie calmement en laissant le moins d’impact possible. Patrick est particulièrement concerné par la protection de cet environnement et tout à bord est fait pour. On rencontre avec respect des milliers de manchots, aperçoit des baleines, des lions de mer, des cormorans, des phoques, des pétrels, des albatros… bref la vie est belle ! Surtout que nous sommes régalés par Eugénia, une merveilleuse cuisinière qui pourrait officier dans un restaurant gastronomique tant ses petits plats sont un délice. Merci à tout cet équipage sympa et compétent, à Patrick qui mène son bateau de main de maître et à Sam qui l’assiste avec tant de bonne humeur.' },
        { who: 'Eric', trip: 'Antarctique · janvier 2026', text: 'J’étais allé en Antarctique avec Tanana et Patrick en 2023. C’était tellement magique que je voulais partager ces moments privilégiés avec mes 3 filles. C’est ce que nous avons fait cette année, car l’Antarctique ne se décrit pas… elle se vit. Et mes filles et moi l’avons vécue, en toute sécurité, convivialité, dans une super ambiance, grâce à Tanana et son super équipage. Magique !' },
        { who: 'Clarisse', trip: 'Antarctique · janvier 2026', text: 'Un mois d’expédition en Antarctique à bord du voilier Tanana, c’était bien plus qu’un voyage : une expérience humaine et maritime hors du commun. Naviguer au milieu des glaces, observer une nature brute et majestueuse, partager le quotidien du bord… tout était magique. Un immense merci à Patrick, le capitaine, pour son professionnalisme, sa sérénité et sa passion communicative. Et un énorme bravo à Eugénia, dont la cuisine a été un vrai réconfort chaque jour : généreuse, savoureuse et toujours préparée avec le sourire, même dans les conditions les plus extrêmes. Je repars avec des souvenirs gravés à vie. Je recommande les yeux fermés !' },
      ],
    },
    contact: {
      title: ['Une question ?', 'Un renseignement ?'], cta: 'Contactez-nous',
      text: 'Contactez-nous en remplissant le formulaire ci-dessous. Nous vous répondrons dans les meilleurs délais.',
      name: 'Nom', email: 'E-mail', phone: 'Téléphone', subject: 'Objet', message: 'Message',
      consent: 'En cochant cette case, j’accepte la politique de confidentialité de Tánana Expédition', send: 'Envoyer',
    },
    footer: {
      about: 'Tánana Expédition vous invite à l’aventure à bord de son voilier d’exception. Conçu pour naviguer en toute sécurité et en tout confort, il offre une expérience inoubliable, que ce soit pour admirer la faune marine, traverser des régions mythiques ou explorer des terres glacées.',
      links: 'Navigation', follow: 'Suivez-nous sur les réseaux', rights: 'Tous droits réservés', legal: 'Mentions légales', privacy: 'Politique de confidentialité',
    },
  },

  /* ─────────────── ENGLISH ─────────────── */
  en: {
    topbar: { contact: 'Contact', follow: 'Follow us' },
    nav: {
      home: 'Welcome', boat: 'The boat', destinations: 'Destinations',
      dest: { antarctica: 'Antarctica', lofoten: 'Norway · Lofoten', skiSail: 'Norway · ski & sail', spitsbergen: 'Spitsbergen' },
      program: 'Sailing programme', charter: 'Private charter', reviews: 'What they say', more: 'More', about: 'About us',
    },
    slides: [
      { script: 'Antarctica', title: 'with TÁNANA EXPEDITION', buttons: [{ label: 'Discover this destination', href: '/antarctique' }] },
      {
        script: 'Ready for adventure', title: 'TÁNANA EXPEDITION',
        text: 'Come aboard Tánana, a 24-metre expedition sailing yacht, to discover the Antarctic Peninsula, South Georgia, the Falkland Islands…',
        buttons: [{ label: 'Discover the boat', href: '#bateau' }, { label: 'Discover our destinations', href: '#destinations' }],
      },
      { script: 'The Deep South', title: 'Sailing expeditions to Antarctica and the southern islands', buttons: [{ label: 'Our expeditions', href: '#expeditions' }] },
    ],
    intro: {
      text: 'Whether you have the soul of an adventurer, a sailor, a photographer, a diver, a kayaker or a skier — whether you’re a dreamer or simply long to discover new horizons…',
      strong: 'The journey of a lifetime awaits you here!',
    },
    south: {
      title: 'The Deep South',
      text: 'Where wild nature meets breathtaking landscapes — an unforgettable, exhilarating experience that calls for adventure and exploration.',
      cards: [
        { title: 'Antarctica', text: 'The Deep South as you have never imagined it. An expedition to the heart of the white continent, with giant glaciers as a backdrop and whales, seals and penguins all around you.', href: '/antarctique' },
      ],
    },
    north: {
      title: 'The Far North',
      text: 'A mysterious, enchanting expanse where eternal ice meets starry nights, awakening an unrivalled sense of adventure and discovery.',
      cards: [
        { title: 'The Lofoten Islands', text: 'Set course for the Lofoten archipelago for 7 days of island-hopping among majestic fjords — beneath the spellbinding show of the northern lights.', href: '/norvege-lofoten' },
        { title: 'Ski & sail in Norway', text: 'Ski the peaks of the Lyngen Alps by day, return to the comfort of the yacht by night: a unique blend of winter and maritime adventure.', href: '/norvege-ski-voile' },
        { title: 'Spitsbergen', text: 'A 12-day voyage on the edge of the Arctic, following in the footsteps of the polar bear along the west coast of the Svalbard archipelago.', href: '/spitzberg' },
      ],
    },
    boat: {
      title: 'The boat',
      p: [
        'Tánana, a 24-metre sailing yacht designed by Gilles Vaton, combines speed and safety thanks to her reinforced aluminium hull and 280 m² of sail.',
        'Fitted with a 250 hp turbo engine, she is ready to face any conditions.',
        'With 6 cabins, 4 bathrooms and a large saloon, she comfortably hosts 12 people.',
        'Registered with the French International Register (RIF) and approved as a Commercial Use Vessel (NUC) by the French Maritime Affairs, she meets the most demanding international standards of safety and seaworthiness.',
      ],
      cta: 'Discover the boat',
      rif: 'The boat and her professional crew are approved by the Maritime Affairs, and the vessel is part of the RIF (French International Register): a guarantee of safety and reliability!',
    },
    skipper: {
      about: 'About us',
      story: [
        'As so often, great stories begin with a meeting!',
        'This one happened aboard a boat sailing towards Cape Horn, between a skipper, a kayaker and former top-level athlete, a highly experienced ski-tourer and a mountaineer. Together they decided to buy this superb boat, able to sail every sea and ocean on the planet, and to create Tánana Expedition.',
      ],
      kicker: 'The skipper', name: 'Patrick',
      bio: 'A sailing Merchant Navy captain and an engineer in technological risk prevention, he has done a great deal of mountaineering — and it was largely to combine the mountains with his boat that he discovered the peaks of Patagonia.',
      quote: [
        'After a career spanning sport, risk management and entrepreneurship, I became passionate about adventures with meaning, and with the help of friends I founded TÁNANA EXPEDITION.',
        'Safely taking enthusiasts, scientists and adventurers to sail through lands as hard to reach as they are extraordinary. Sharing with them values of ecology and knowledge of the environment, with the warmth and the rigour these polar expeditions demand.',
        'With TÁNANA we will go even further, and in even better conditions, for those who honour us with their trust.',
      ],
      flaw: 'His main flaw? He has been known to belt out Luis Mariano songs in the Drake Passage.',
      sef: 'Patrick is a member of the Société des Explorateurs Français (French Explorers Society)',
    },
    expeditions: {
      title: 'Our expeditions',
      p: [
        'Do you dream of admiring the southern lights, watching humpback whales, king penguins, orcas or leopard seals?',
        'Of sailing the seas of the Deep South, cruising the Beagle Channel, crossing the Drake Passage?',
        'Of diving beneath the ice, skiing the vastness of the white continent, paddling a kayak among the icebergs of the Antarctic Peninsula?',
        'Or of following the polar bear’s tracks in Spitsbergen, skiing the majestic Lyngen Alps, discovering the wonderful Lofoten Islands?',
        'All this is possible aboard Tánana with our expeditions!',
      ],
      cta: 'Discover the destinations',
      gallery: 'Life on board, in pictures',
      galleryHint: 'Photos from our latest expeditions',
    },
    moment: {
      kicker: 'Current expedition', title: 'Antarctica',
      lead: 'Discover the Deep South in a way you never imagined.',
      text: 'Set off on an expedition to the heart of the white continent, where giant glaciers form the backdrop to a living show of whales, seals and penguins all around you.',
      cta: 'Learn more',
    },
    reviews: {
      title: 'What they say about us!', more: 'Read more', less: 'Show less', readAll: 'Read more reviews',
      items: [
        { who: 'Mariane', trip: 'Antarctica · January 2026', text: 'Magical Antarctica! This is my second voyage aboard Tanana and I love it. Discovering this magical continent on a sailing yacht deepens the feeling of communion with this breathtaking nature. We sail calmly from bay to bay, leaving as little impact as possible. Patrick is deeply committed to protecting this environment and everything on board is done with that in mind. We respectfully meet thousands of penguins and spot whales, sea lions, cormorants, seals, petrels, albatrosses… in short, life is good! Especially as we were spoilt by Eugénia, a wonderful cook who could run a gourmet restaurant, her dishes are that delicious. Thank you to the whole friendly and skilled crew, to Patrick who runs his boat masterfully, and to Sam who assists him with such good humour.' },
        { who: 'Eric', trip: 'Antarctica · January 2026', text: 'I first went to Antarctica with Tanana and Patrick in 2023. It was so magical that I wanted to share those precious moments with my 3 daughters. We did it this year, because Antarctica can’t be described… it has to be lived. And my daughters and I lived it — safely, warmly, in a great atmosphere — thanks to Tanana and her wonderful crew. Magical!' },
        { who: 'Clarisse', trip: 'Antarctica · January 2026', text: 'A month-long expedition to Antarctica aboard the sailing yacht Tanana was much more than a trip: an extraordinary human and maritime experience. Sailing among the ice, observing raw and majestic nature, sharing daily life on board… everything was magical. A huge thank you to Patrick, the captain, for his professionalism, his calm and his infectious passion. And a big bravo to Eugénia, whose cooking was a true comfort every day: generous, tasty and always made with a smile, even in the most extreme conditions. I leave with memories engraved for life. I recommend it without hesitation!' },
      ],
    },
    contact: {
      title: ['A question?', 'Need information?'], cta: 'Contact us',
      text: 'Get in touch by filling in the form below. We will reply as soon as possible.',
      name: 'Name', email: 'Email', phone: 'Phone', subject: 'Subject', message: 'Message',
      consent: 'By ticking this box, I accept the Tánana Expedition privacy policy', send: 'Send',
    },
    footer: {
      about: 'Tánana Expedition invites you to adventure aboard her exceptional sailing yacht. Designed to sail in complete safety and comfort, she offers an unforgettable experience — whether admiring marine wildlife, crossing legendary waters or exploring frozen lands.',
      links: 'Navigation', follow: 'Follow us on social media', rights: 'All rights reserved', legal: 'Legal notice', privacy: 'Privacy policy',
    },
  },

  /* ─────────────── ESPAÑOL ─────────────── */
  es: {
    topbar: { contact: 'Contacto', follow: 'Síguenos' },
    nav: {
      home: 'Bienvenida', boat: 'El barco', destinations: 'Destinos',
      dest: { antarctica: 'Antártida', lofoten: 'Noruega · Lofoten', skiSail: 'Noruega · esquí y vela', spitsbergen: 'Spitsbergen' },
      program: 'Programa de navegación', charter: 'Privatización', reviews: 'Dicen de nosotros', more: 'Más', about: 'Quiénes somos',
    },
    slides: [
      { script: 'Antártida', title: 'con TÁNANA EXPEDICIÓN', buttons: [{ label: 'Descubre este destino', href: '/antarctique' }] },
      {
        script: 'Listos para la aventura', title: 'TÁNANA EXPEDICIÓN',
        text: 'Embárcate a bordo de Tánana, velero de expedición de 24 metros, para descubrir la Península Antártica, Georgia del Sur, las Islas Malvinas…',
        buttons: [{ label: 'Descubre el barco', href: '#bateau' }, { label: 'Descubre nuestros destinos', href: '#destinations' }],
      },
      { script: 'El Gran Sur', title: 'Expediciones en velero a la Antártida y las islas australes', buttons: [{ label: 'Nuestras expediciones', href: '#expeditions' }] },
    ],
    intro: {
      text: 'Tanto si tienes alma de aventurero, marinero, fotógrafo, buceador, kayakista o esquiador, como si eres un soñador o simplemente quieres descubrir nuevos horizontes…',
      strong: '¡El viaje de tu vida te espera aquí!',
    },
    south: {
      title: 'El Gran Sur',
      text: 'Donde la naturaleza salvaje y los paisajes impresionantes se encuentran: una experiencia inolvidable y emocionante que invita a la aventura y la exploración.',
      cards: [
        { title: 'La Antártida', text: 'El Gran Sur como nunca lo has imaginado. Una expedición al corazón del continente blanco, con glaciares gigantescos de fondo y ballenas, focas y pingüinos a tu alrededor.', href: '/antarctique' },
      ],
    },
    north: {
      title: 'El Gran Norte',
      text: 'Una extensión misteriosa y cautivadora, donde el hielo eterno se encuentra con las noches estrelladas y despierta un sentido de aventura y descubrimiento sin igual.',
      cards: [
        { title: 'Las Islas Lofoten', text: 'Rumbo al archipiélago de Lofoten para 7 días de exploración, navegando de isla en isla entre fiordos majestuosos, bajo el espectáculo cautivador de la aurora boreal.', href: '/norvege-lofoten' },
        { title: 'Esquí y vela en Noruega', text: 'Esquiar las cumbres de los Alpes de Lyngen de día y volver al confort del velero por la noche: una mezcla única de aventura invernal y marítima.', href: '/norvege-ski-voile' },
        { title: 'Spitsbergen', text: 'Una navegación de 12 días en las fronteras del Ártico, siguiendo los pasos del oso polar a lo largo de la costa oeste del archipiélago de Svalbard.', href: '/spitzberg' },
      ],
    },
    boat: {
      title: 'El barco',
      p: [
        'Tánana, un velero de 24 metros diseñado por Gilles Vaton, combina velocidad y seguridad gracias a su casco de aluminio reforzado y sus 280 m² de superficie vélica.',
        'Equipado con un motor turbo de 250 hp, está preparado para afrontar cualquier condición.',
        'Con 6 camarotes, 4 baños y un amplio salón, acoge cómodamente a 12 personas.',
        'Matriculado en el Registro Internacional Francés (RIF) y aprobado como Buque de Uso Comercial (NUC) por Asuntos Marítimos de Francia, cumple las normas internacionales de seguridad y navegabilidad más exigentes.',
      ],
      cta: 'Descubre el barco',
      rif: 'El barco y su tripulación profesional están aprobados por Asuntos Marítimos y el buque forma parte del RIF (Registro Internacional Francés): ¡una garantía de seguridad y fiabilidad!',
    },
    skipper: {
      about: 'Quiénes somos',
      story: [
        'Como tantas veces, ¡las buenas historias empiezan con un encuentro!',
        'Este ocurrió a bordo de un barco navegando hacia el Cabo de Hornos, entre un capitán, un kayakista ex atleta de alto rendimiento, un esquiador de travesía con gran experiencia y un alpinista. Juntos decidieron comprar este magnífico barco, capaz de navegar por todos los mares y océanos del planeta, y crear Tánana Expedición.',
      ],
      kicker: 'El capitán', name: 'Patrick',
      bio: 'Capitán de la Marina Mercante a vela e ingeniero en prevención de riesgos tecnológicos, ha practicado mucho alpinismo; y fue justamente para combinar la montaña con su barco que descubrió las montañas de la Patagonia.',
      quote: [
        'Después de una carrera repartida entre el deporte, la gestión de riesgos y el emprendimiento, me apasioné por las aventuras con sentido y fundé, con la ayuda de amigos, la compañía TÁNANA EXPEDICIÓN.',
        'Acompañar con total seguridad a apasionados, científicos o aventureros a navegar por regiones tan difíciles de alcanzar como extraordinarias. Compartir con ellos valores de ecología y de conocimiento del entorno, con la convivencia y el rigor que exigen estas expediciones polares.',
        'Con TÁNANA iremos aún más lejos, y en mejores condiciones, para quienes nos hagan el honor de confiar en nosotros.',
      ],
      flaw: '¿Su principal defecto? Es capaz de cantar a todo pulmón canciones de Luis Mariano en pleno Drake.',
      sef: 'Patrick es miembro de la Société des Explorateurs Français (Sociedad de Exploradores Franceses)',
    },
    expeditions: {
      title: 'Nuestras expediciones',
      p: [
        '¿Sueñas con admirar la aurora austral, observar ballenas jorobadas, pingüinos rey, orcas o focas leopardo?',
        '¿Con navegar los mares del Gran Sur, recorrer el Canal Beagle, cruzar el Pasaje de Drake?',
        '¿Con bucear bajo el hielo, esquiar en la inmensidad del continente blanco, remar en kayak entre los icebergs de la Península Antártica?',
        '¿O con seguir las huellas del oso polar en Spitsbergen, esquiar en los majestuosos Alpes de Lyngen, descubrir las maravillosas Islas Lofoten?',
        '¡Todo esto es posible a bordo de Tánana con nuestras expediciones!',
      ],
      cta: 'Descubre los destinos',
      gallery: 'La vida a bordo, en imágenes',
      galleryHint: 'Fotos de nuestras últimas expediciones',
    },
    moment: {
      kicker: 'La expedición del momento', title: 'La Antártida',
      lead: 'Descubre el Gran Sur como nunca lo imaginaste.',
      text: 'Embárcate en una expedición al corazón del continente blanco, donde glaciares gigantescos son el telón de fondo de un espectáculo vivo de ballenas, focas y pingüinos a tu alrededor.',
      cta: 'Más información',
    },
    reviews: {
      title: '¡Dicen de nosotros!', more: 'Leer más', less: 'Mostrar menos', readAll: 'Leer más opiniones',
      items: [
        { who: 'Mariane', trip: 'Antártida · enero 2026', text: '¡Mágica Antártida! Es mi segundo viaje a bordo de Tanana y me encanta. Descubrir este continente mágico en velero refuerza la sensación de comunión con esta naturaleza impresionante. Navegamos tranquilamente de bahía en bahía, dejando el menor impacto posible. Patrick está especialmente comprometido con la protección de este entorno y todo a bordo está pensado para ello. Nos cruzamos con respeto con miles de pingüinos, vemos ballenas, lobos marinos, cormoranes, focas, petreles, albatros… en resumen, ¡la vida es bella! Sobre todo porque nos deleitó Eugénia, una cocinera maravillosa que podría estar al frente de un restaurante gastronómico, de tan deliciosos que son sus platos. Gracias a toda la tripulación, simpática y competente, a Patrick, que lleva su barco con mano maestra, y a Sam, que lo asiste con tan buen humor.' },
        { who: 'Eric', trip: 'Antártida · enero 2026', text: 'Había ido a la Antártida con Tanana y Patrick en 2023. Fue tan mágico que quise compartir esos momentos privilegiados con mis 3 hijas. Lo hicimos este año, porque la Antártida no se describe… se vive. Y mis hijas y yo la vivimos, con total seguridad, en un ambiente cálido y genial, gracias a Tanana y su gran tripulación. ¡Mágico!' },
        { who: 'Clarisse', trip: 'Antártida · enero 2026', text: 'Un mes de expedición en la Antártida a bordo del velero Tanana fue mucho más que un viaje: una experiencia humana y marítima fuera de lo común. Navegar entre el hielo, observar una naturaleza salvaje y majestuosa, compartir el día a día a bordo… todo fue mágico. Un enorme gracias a Patrick, el capitán, por su profesionalismo, su serenidad y su pasión contagiosa. Y un gran aplauso para Eugénia, cuya cocina fue un verdadero consuelo cada día: generosa, sabrosa y siempre preparada con una sonrisa, incluso en las condiciones más extremas. Me llevo recuerdos grabados para toda la vida. ¡Lo recomiendo con los ojos cerrados!' },
      ],
    },
    contact: {
      title: ['¿Una pregunta?', '¿Necesitas información?'], cta: 'Contáctanos',
      text: 'Ponte en contacto con nosotros completando el siguiente formulario. Te responderemos lo antes posible.',
      name: 'Nombre', email: 'Correo electrónico', phone: 'Teléfono', subject: 'Asunto', message: 'Mensaje',
      consent: 'Al marcar esta casilla, acepto la política de privacidad de Tánana Expedición', send: 'Enviar',
    },
    footer: {
      about: 'Tánana Expedición te invita a la aventura a bordo de su excepcional velero. Diseñado para navegar con total seguridad y comodidad, ofrece una experiencia inolvidable, ya sea para admirar la fauna marina, atravesar regiones míticas o explorar tierras heladas.',
      links: 'Navegación', follow: 'Síguenos en redes', rights: 'Todos los derechos reservados', legal: 'Aviso legal', privacy: 'Política de privacidad',
    },
  },
}
