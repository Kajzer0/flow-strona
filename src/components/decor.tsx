/* Decorative SVG elements: the flowing wave (brand signature) and autumn leaves. */

type LeafProps = {
  className?: string
  fill: string
  vein?: string
  size?: number
  style?: React.CSSProperties
}

/** A single stylised leaf, echoing the leaves drifting through the FLOW logo. */
export function Leaf({ className, fill, vein = 'rgba(255,255,255,.35)', size = 22, style }: LeafProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={style}
    >
      <path d="M3 21C3 11.5 11.5 3 21 3c0 9.5-8.5 18-18 18Z" fill={fill} />
      <path
        d="M3 21C8 15.5 14.5 9 21 3"
        stroke={vein}
        strokeWidth="1.1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

/**
 * Wave divider between a dark band and a light one.
 * Rendered inside the dark band; `fill` is the colour of the neighbouring light section.
 */
export function WaveDivider({ fill, flip = false }: { fill: string; flip?: boolean }) {
  return (
    <svg
      className={flip ? 'wave wave--top' : 'wave wave--bottom'}
      viewBox="0 0 1440 110"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,64 C240,110 480,18 760,42 C1040,66 1250,96 1440,50 L1440,110 L0,110 Z"
        fill={fill}
      />
      <path
        d="M0,54 C240,100 480,8 760,32 C1040,56 1250,86 1440,40"
        stroke="rgba(168,216,207,.38)"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  )
}

/** Large flowing ribbon used as ambient background inside dark bands. */
export function FlowRibbon({ className, id }: { className?: string; id: string }) {
  const grad = `ribbon-grad-${id}`
  return (
    <svg className={className} viewBox="0 0 900 620" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={grad} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#4fb3ad" />
          <stop offset="1" stopColor="#a8d8cf" />
        </linearGradient>
      </defs>
      <path
        d="M-60,500 C180,410 270,220 470,180 C670,140 760,60 960,20"
        stroke={`url(#${grad})`}
        strokeWidth="130"
        strokeLinecap="round"
        opacity=".10"
      />
      <path
        d="M-60,560 C210,470 320,280 520,230 C720,180 810,100 970,70"
        stroke={`url(#${grad})`}
        strokeWidth="52"
        strokeLinecap="round"
        opacity=".16"
      />
      <path
        d="M-60,610 C240,520 360,340 560,280 C760,220 850,150 980,120"
        stroke="#a8d8cf"
        strokeWidth="1.6"
        opacity=".45"
      />
    </svg>
  )
}

/**
 * Hero-specific ribbon that spans the whole section and exits at the bottom-left corner.
 * Keeps the same stroke weights, colours and opacity as FlowRibbon.
 */
export function HeroRibbon({ className, id }: { className?: string; id: string }) {
  const grad = `hero-ribbon-grad-${id}`
  return (
    <svg
      className={className}
      viewBox="0 0 1600 900"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={grad} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#4fb3ad" />
          <stop offset="1" stopColor="#a8d8cf" />
        </linearGradient>
      </defs>
      <path
        d="M1480,30 C1180,60 880,230 630,380 C380,530 80,680 -120,900"
        stroke={`url(#${grad})`}
        strokeWidth="130"
        strokeLinecap="round"
        opacity=".10"
      />
      <path
        d="M1510,85 C1210,115 910,285 660,435 C410,585 110,735 -90,900"
        stroke={`url(#${grad})`}
        strokeWidth="52"
        strokeLinecap="round"
        opacity=".16"
      />
      <path
        d="M1540,140 C1240,170 940,340 690,490 C440,640 140,790 -60,900"
        stroke="#a8d8cf"
        strokeWidth="1.6"
        opacity=".45"
      />
    </svg>
  )
}
