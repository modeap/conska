import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ReferencesPage() {
  const categories = [
    {
      title: "Julkisivu & parvekesaneeraus",
      description: "Julkisivujen ja parvekkeiden kunnostus- ja saneeraustyöt",
      image: "/images/julkisivu-telineet-ilmakuva.png",
      link: "/referenssit/julkisivu-parvekesaneeraus",
    },
    {
      title: "Hiekkapuhallus",
      description: "Märkähiekkapuhallus Torbo-menetelmällä monipuolisiin käyttökohteisiin",
      image: "/images/torbo-equipment.jpeg",
      link: "/referenssit/hiekkapuhallus",
    },
    {
      title: "Korjausrakentaminen",
      description: "Vanhojen rakennusten korjaus- ja kunnostustyöt",
      image: "/images/korjausrakentaminen.jpeg",
      link: "/referenssit/korjausrakentaminen",
    },
    {
      title: "Vesikatto ja peltityöt",
      description: "Vesikattojen uusiminen ja peltityöt",
      image: "/images/vesikatto.jpeg",
      link: "/referenssit/vesikatto-peltityot",
    },
    {
      title: "Huoneistoremontit & märkätilat",
      description: "Asuntojen ja märkätilojen remontit",
      image: "/images/gray-kitchen.jpeg",
      link: "/referenssit/huoneistoremontit-markatilat",
    },
    {
      title: "Museokohteet",
      description: "Historiallisten ja suojeltujen kohteiden kunnostustyöt",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5781196110580ca5d21bce66dc2c5c61-N35Zp9SyJfyANM6ges1bM8ZVyZtdw9.png",
      link: "/referenssit/museokohteet",
    },
  ]

  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Referenssit</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Tutustu toteutettuihin projekteihin ja osaamisalueisiimme. Valitse kategoria nähdäksesi lisää.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <Link href={category.link} key={index} className="group">
            <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Katso projektit
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

