import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  title: string
  imageSrc: string
  buttonText: string
  buttonHref: string
  isLensCard?: boolean
  className?: string
}

export function FeatureCard({ title, imageSrc, buttonText, buttonHref, isLensCard, className }: FeatureCardProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl aspect-[4/5] group", className)}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-6">
        <h2 className="text-white text-2xl font-bold">{title}</h2>

        <div className="flex justify-center">
          <Button asChild variant="secondary" className="bg-black/50 hover:bg-black/70 text-white border-0">
            <Link href={buttonHref}>{buttonText}</Link>
          </Button>
        </div>

        {/* Lens Effect Indicator */}
        {isLensCard && (
          <div className="absolute bottom-20 right-6 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full">Lens</div>
        )}
      </div>
    </div>
  )
}
