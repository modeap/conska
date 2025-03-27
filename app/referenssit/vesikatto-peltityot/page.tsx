"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import { Calendar } from "lucide-react"

export default function RoofingSheetMetalPage() {
  // Esimerkki projekteja
  const projects = [
    {
      title: "Pohjolankatu 17 Metsolantie 18, Helsinki",
      client: "Helsingin kaupunki",
      description: "Huoltorakennuksen vesikaton uusinta",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30f8d033b7582d72cee237c3b8ccd321-02ghJKr4e9kl5Lm82iYO7GeSZTerge.png",
      image2:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e4f4d87dddee9c5a07d753bf0a50c92f-AWH3CnOOTv5G7E5AqWqL54pHiQDsuc.png",
      image3:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f4960e8cf8fd3585aa62db8c5e3422b8-Rz3zOauSX0Sywh6S2wyZTVEsNDlpDm.png",
      details: [
        "Korjauksen kohteena on Helsingin Puu-Käpylässä sijaitsevan, Pohjolankatu 17 -nimiseen kiinteistöön kuuluvien huoltorakennusten vesikatteet.",
        "Rakennuksien katteina on kolmiorimakate. Uudet katteet tehtiin entisen mukaisesti kolmiorimakatteina.",
        "Projekti toteutettiin historiallisesti arvokkaalla alueella, mikä asetti erityisvaatimuksia työn toteutukselle.",
      ],
      year: "2024",
    },
    {
      title: "As Oy Helsingin Kattohelmi",
      description: "Kerrostalon vesikaton uusiminen ja peltityöt",
      image: "/placeholder.svg?height=300&width=500",
      details:
        "Projekti sisälsi 1960-luvun kerrostalon vesikaton täydellisen uusimisen. Vanha huopakatto purettiin ja tilalle asennettiin uusi peltikatto alusrakenteineen. Samalla uusittiin sadevesijärjestelmä ja kattoturvatuotteet.",
    },
    {
      title: "Omakotitalo, Espoo",
      description: "Tiilikaton vaihto peltikatoksi",
      image: "/placeholder.svg?height=300&width=500",
      details:
        "Vanha, vaurioitunut tiilikatto vaihdettiin moderniin peltikatteeseen. Projekti sisälsi myös aluskatteen uusimisen, räystäsrakenteiden korjauksen ja sadevesijärjestelmän päivityksen.",
    },
    {
      title: "Liikekiinteistö, Vantaa",
      description: "Tasakaton saneeraus ja peltityöt",
      image: "/placeholder.svg?height=300&width=500",
      details:
        "Laaja tasakaton saneeraus, jossa uusittiin vedeneristys, lämmöneristys ja peltipellitykset. Samalla parannettiin katon kallistuksia ja sadeveden poistoa.",
    },
  ]

  return (
    <div className="container py-12 md:py-24">
      <Link href="/referenssit" className="inline-flex items-center text-primary hover:underline mb-8">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Takaisin referensseihin
      </Link>

      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Vesikatto ja peltityöt</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Toteutamme vesikattojen uusimiset ja peltityöt ammattitaidolla ja laadukkailla materiaaleilla. Kattoremontti
            on yksi tärkeimmistä kiinteistön kunnossapitotoimenpiteistä.
          </p>
        </div>
      </div>

      {/* Featured Project */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image src="/placeholder.svg?height=600&width=800" alt="Vesikatto" fill className="object-cover" />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Kattoremontti ammattitaidolla</h2>
              <p className="text-muted-foreground mb-6">
                Vesikatto suojaa koko rakennusta, joten sen kunnossapito on ensiarvoisen tärkeää. Tarjoamme kattavia
                kattoremontteja ja peltitöitä kaiken tyyppisiin rakennuksiin.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-medium mb-1">Palveluihimme kuuluu:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Vesikattojen uusiminen</li>
                    <li>• Kattoturvatuotteet</li>
                    <li>• Sadevesijärjestelmät</li>
                    <li>• Peltityöt ja pellitykset</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Kattomateriaalit:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Peltikatteet</li>
                    <li>• Tiilikatteet</li>
                    <li>• Huopakatteet</li>
                    <li>• Kermikatteet</li>
                  </ul>
                </div>
              </div>
              <Button>Pyydä tarjous</Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Pohjolankatu 17 Project */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Pohjolankatu 17 Metsolantie 18, Helsinki</h2>
                <p className="text-lg text-muted-foreground mb-2">Helsingin kaupunki</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1 text-primary" />
                    <span>2024</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Projektin kuvaus:</h3>
                <p className="text-muted-foreground mb-4">
                  Korjauksen kohteena on Helsingin Puu-Käpylässä sijaitsevan, Pohjolankatu 17 -nimiseen kiinteistöön
                  kuuluvien huoltorakennusten vesikatteet. Rakennuksien katteina on kolmiorimakate. Uudet katteet
                  tehtiin entisen mukaisesti kolmiorimakatteina.
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Vanhan katteen purku ja alusrakenteiden tarkastus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Alusrakenteiden korjaus ja vahvistaminen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Uuden kolmiorimakatteen asennus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Läpivientien ja savupiippujen pellitykset</span>
                  </li>
                </ul>
              </div>

              <Button className="mt-4">Pyydä vastaava tarjous</Button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-40 w-full">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30f8d033b7582d72cee237c3b8ccd321-02ghJKr4e9kl5Lm82iYO7GeSZTerge.png"
                    alt="Pohjolankatu 17 kattoremontti"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg cursor-pointer hover:scale-[1.02] transition-transform"
                    onClick={() =>
                      window.open(
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30f8d033b7582d72cee237c3b8ccd321-02ghJKr4e9kl5Lm82iYO7GeSZTerge.png",
                        "_blank",
                      )
                    }
                  />
                </div>
                <div className="relative h-40 w-full">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e4f4d87dddee9c5a07d753bf0a50c92f-AWH3CnOOTv5G7E5AqWqL54pHiQDsuc.png"
                    alt="Pohjolankatu 17 katon rakenteet"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg cursor-pointer hover:scale-[1.02] transition-transform"
                    onClick={() =>
                      window.open(
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e4f4d87dddee9c5a07d753bf0a50c92f-AWH3CnOOTv5G7E5AqWqL54pHiQDsuc.png",
                        "_blank",
                      )
                    }
                  />
                </div>
                <div className="relative h-40 w-full col-span-2">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f4960e8cf8fd3585aa62db8c5e3422b8-Rz3zOauSX0Sywh6S2wyZTVEsNDlpDm.png"
                    alt="Pohjolankatu 17 uusi katto"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg cursor-pointer hover:scale-[1.02] transition-transform"
                    onClick={() =>
                      window.open(
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f4960e8cf8fd3585aa62db8c5e3422b8-Rz3zOauSX0Sywh6S2wyZTVEsNDlpDm.png",
                        "_blank",
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Projects */}
      <h2 className="text-2xl font-bold mb-8">Toteutettuja projekteja</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {Array.isArray(project.details) ? (
                <ul className="text-muted-foreground text-sm mb-4 space-y-1">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground text-sm mb-4">{project.details}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 py-10 px-6 bg-muted/40 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Tarvitseeko kiinteistösi kattoremonttia?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Ota yhteyttä ja pyydä ilmainen arvio kattosi kunnosta. Autamme sinua löytämään parhaan ratkaisun
          kiinteistöllesi.
        </p>
        <Button size="lg">Ota yhteyttä</Button>
      </div>
    </div>
  )
}

