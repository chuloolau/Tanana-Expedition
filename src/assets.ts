import type { Lang } from './i18n/content'

const m = (n: number) => `/media/foto-${String(n).padStart(2, '0')}.jpg`
const wix = (id: string, ext = 'jpg') => `https://static.wixstatic.com/media/${id}~mv2.${ext}`

/** Recursos gráficos del sitio actual (logo, sello RIF, pictograma). */
export const brand = {
  logo: wix('b3c363_e5be3376327f4b75ad5345509ec809ba', 'png'),
  logoWhite: wix('b3c363_33b885aa6ddb407ca6a1085a0ed4d864', 'png'),
  picto: wix('b3c363_adfe02e9c9574e1889e45a0df667667a', 'png'),
  rif: wix('9c771b_3727bd1fed22405894576217f2923681'),
  patrick: wix('9c771b_3539b9ae66da4cbc8dbafcc62c91909e'),
  sef: wix('9c771b_dfc560d8be3e4f9bacfea136037688ea', 'png'),
}

/** Fotos cargadas por el cliente (public/media/foto-XX.jpg). */
export const img = {
  slides: [m(16), m(24), m(21)],
  south: [m(26)],
  north: [m(1), wix('9c771b_66f37caf111d49da8d15fae86fae20bf'), m(2)],
  boat: m(4),
  boat2: m(6),
  expeditions: m(22),
  moment: m(23),
  /** Video de dron: Tánana junto a una ballena (comprimido, sin audio) */
  momentVideo: '/media/dron-ballena.mp4',
  momentPoster: '/media/dron-ballena-poster.jpg',
  contact: m(31),
}

type Cap = Record<Lang, string>
export const gallery: { src: string; cap: Cap; tall?: boolean }[] = [
  { src: m(31), cap: { fr: 'Coucher de soleil antarctique depuis le pont', en: 'Antarctic sunset from the deck', es: 'Atardecer antártico desde cubierta' } },
  { src: m(23), cap: { fr: 'Baleine à bosse en plein saut', en: 'Humpback whale breaching', es: 'Ballena jorobada saltando' } },
  { src: m(10), cap: { fr: 'Empanadas maison dans le carré', en: 'Homemade empanadas in the saloon', es: 'Empanadas caseras en el salón' } },
  { src: m(27), cap: { fr: 'Manchot royal', en: 'King penguin', es: 'Pingüino rey' } },
  { src: m(13), cap: { fr: 'À la barre', en: 'At the helm', es: 'Al timón' } },
  { src: m(28), cap: { fr: 'Manchots papous en plein vol', en: 'Gentoo penguins porpoising', es: 'Pingüinos papúa en pleno salto' } },
  { src: m(20), cap: { fr: 'Phoque léopard', en: 'Leopard seal', es: 'Foca leopardo' } },
  { src: m(9), cap: { fr: 'Fête à bord', en: 'Celebration on board', es: 'Fiesta a bordo' } },
  { src: m(17), cap: { fr: "Arche de glace", en: "Ice arch", es: "Arco de hielo" }, tall: true },
  { src: m(25), cap: { fr: 'Manchot à jugulaire', en: 'Chinstrap penguin', es: 'Pingüino barbijo' }, tall: true },
  { src: m(14), cap: { fr: 'Baleine en plongée', en: 'Whale diving', es: 'Ballena sumergiéndose' } },
  { src: m(8), cap: { fr: 'Une passagère clandestine', en: 'A stowaway', es: 'Una polizona a bordo' } },
  { src: m(30), cap: { fr: 'Manchot papou et son petit', en: 'Gentoo penguin and chick', es: 'Pingüino papúa y su cría' } },
  { src: m(7), cap: { fr: 'Coucher de soleil en mer', en: 'Sunset at sea', es: 'Atardecer en altamar' } },
  // — a partir de acá se ven con "Ver todas" —
  { src: m(32), cap: { fr: 'Mer formée dans le Grand Sud', en: 'Heavy seas in the Deep South', es: 'Mar embravecido en el Gran Sur' } },
  { src: m(34), cap: { fr: 'Île australe sous les nuages', en: 'Southern island under the clouds', es: 'Isla austral bajo las nubes' } },
  { src: m(3), cap: { fr: 'Morses dans l’Arctique', en: 'Walruses in the Arctic', es: 'Morsas en el Ártico' } },
  { src: m(5), cap: { fr: 'Dauphin à l’étrave', en: 'Dolphin at the bow', es: 'Delfín en la proa' } },
  { src: m(33), cap: { fr: 'Rafales et embruns', en: 'Gusts and sea spray', es: 'Ráfagas y rociones' } },
  { src: m(19), cap: { fr: 'Phoques crabiers sur la glace', en: 'Crabeater seals on the ice', es: 'Focas cangrejeras sobre el hielo' } },
  { src: m(29), cap: { fr: 'Poussin de manchot papou', en: 'Gentoo penguin chick', es: 'Pichón de pingüino papúa' } },
  { src: m(11), cap: { fr: 'L’équipage au travail', en: 'The crew at work', es: 'La tripulación en acción' } },
  { src: m(15), cap: { fr: 'Manchot papou sur la grève', en: 'Gentoo penguin on the shore', es: 'Pingüino papúa en la costa' } },
  { src: m(18), cap: { fr: 'Goéland au-dessus des glaciers', en: 'Gull above the glaciers', es: 'Gaviota sobre los glaciares' } },
]

/** Cantidad de fotos visibles antes de "Ver todas". */
export const GALLERY_PREVIEW = 14
