import Image from "next/image"
import NetworkAnimation from "./network-animation"

export default function StaticBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90 z-10"></div>

      {/* Background image */}
      <Image
        src="/images/construction-background.jpg"
        alt="Construction background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Network animation overlay */}
      <NetworkAnimation />
    </div>
  )
}

