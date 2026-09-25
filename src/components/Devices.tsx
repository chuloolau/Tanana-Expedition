/**
 * Mockup de la landing en iMac 24", MacBook Pro e iPhone (reemplaza la imagen de
 * dispositivos viejos del footer del sitio actual). Todo en CSS: nítido a cualquier tamaño.
 * Todas las medidas son % del ancho del contenedor para que escale entero.
 */
const shot = { imac: '/media/mockup-imac.jpg', macbook: '/media/mockup-macbook.jpg', iphone: '/media/mockup-iphone.jpg' }

export function Devices({ className = '' }: { className?: string }) {
  return (
    <div className={`relative aspect-[16/11] w-full select-none ${className}`} aria-hidden>
      {/* iMac 24" */}
      <div className="absolute left-[20%] top-0 w-[62%]">
        <div className="rounded-t-[3.2%/5%] bg-gradient-to-b from-[#f4f5f7] to-[#e3e6ea] p-[2.4%] pb-0 shadow-[0_20px_40px_-18px_rgba(0,0,0,.55)]">
          <img src={shot.imac} alt="" loading="lazy" className="block aspect-[16/10] w-full rounded-[1%] object-cover object-top" />
        </div>
        {/* mentón de color */}
        <div className="h-0 rounded-b-[3.2%/40%] bg-gradient-to-b from-[#b6c9e6] to-[#9fb6da] pb-[9%] shadow-[0_14px_28px_-16px_rgba(0,0,0,.6)]" />
        {/* pie */}
        <div className="mx-auto h-0 w-[26%] bg-gradient-to-b from-[#c9ccd2] to-[#e8eaee] pb-[13%] [clip-path:polygon(8%_0,92%_0,100%_100%,0_100%)]" />
        <div className="mx-auto h-0 w-[30%] rounded-b-md bg-[#d4d7dc] pb-[1.2%]" />
      </div>

      {/* MacBook Pro */}
      <div className="absolute bottom-[6%] left-0 w-[50%]">
        <div className="relative mx-auto w-[88%] rounded-t-[4%/6%] bg-[#1c1c1e] p-[2.2%] pb-[1.4%] shadow-[0_18px_36px_-16px_rgba(0,0,0,.7)] ring-1 ring-black/40">
          <img src={shot.macbook} alt="" loading="lazy" className="block aspect-[16/10] w-full rounded-[.6%] object-cover object-top" />
          {/* notch */}
          <span className="absolute left-1/2 top-[2.2%] h-[3.2%] w-[11%] -translate-x-1/2 rounded-b-[30%] bg-[#1c1c1e]" />
        </div>
        {/* base */}
        <div className="relative h-0 rounded-b-[45%/100%] bg-gradient-to-b from-[#dfe2e6] via-[#c7cbd1] to-[#a9aeb6] pb-[3.4%] shadow-[0_10px_18px_-8px_rgba(0,0,0,.6)]">
          <span className="absolute left-1/2 top-0 h-[40%] w-[16%] -translate-x-1/2 rounded-b-md bg-[#b3b8bf]" />
        </div>
      </div>

      {/* iPhone */}
      <div className="absolute bottom-0 right-[3%] w-[18%]">
        <div className="relative rounded-[18%/8.5%] bg-[#1c1c1e] p-[4.5%] shadow-[0_18px_36px_-14px_rgba(0,0,0,.75)] ring-[1.5px] ring-[#6b6f76]">
          <img src={shot.iphone} alt="" loading="lazy" className="block aspect-[9/19.5] w-full rounded-[14%/6.5%] object-cover object-top" />
          {/* Dynamic Island */}
          <span className="absolute left-1/2 top-[4.2%] h-[3.6%] w-[32%] -translate-x-1/2 rounded-full bg-black" />
        </div>
      </div>
    </div>
  )
}
