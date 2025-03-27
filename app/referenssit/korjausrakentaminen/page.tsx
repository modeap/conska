"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Calendar, EuroIcon } from "lucide-react"

export default function RenovationConstructionPage() {
  // Esimerkki projekteja
  const projects = [
    {
      title: "Kankarepolku 5 E ja F, Helsinki",
      client: "Heka",
      description: "Porrashuoneiden ja kellarikerroksen kunnostustyöt",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8b4400358ac2692afedf3f82c33b339c-bl5y2dFoTo9fSoDafwi02Dt7YY1mVi.png",
      image2:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0e8b3e91d53ab1603247ea9d90f85dcc-9XgbJPAl62ELucYH6eCVV3yGcqFr3u.png",
      image3:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0b9b500a31cb896a58193fde32925040-5ht8uOmCsbws7YkOCqannJSImQGScq.png",
      image4:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/899eb1ab73f043014bdd8be60d9ea293-AiDKSBu5kZEK3SYXsSSgldc9kTUXfh.png",
      details: [
        "Porrashuoneisiin: Tasoite ja hiontatyöt, maalaustyöt.",
        "Kaiteiden maalaustyöt, kaiteiden käsijohteiden uusinta.",
        "Jalkalistojen uusinta.",
        "Jokaiseen kerroksen tehtiin läpiviennit.",
        "Asuntojen välisen seinien läpiviennit.",
        "Kellarikerroksen tehtiin palokatkotyöt.",
        "Tehosteseinien maalaus.",
        "Porrashuoneen koteloinnit.",
        "Porrashuoneiden kerrosnumerointi.",
        "Kellarikerrokseen: Seinien, lattian, putkien, ja ovien maalaustyö.",
      ],
      year: "2024",
      value: "700 000",
    },
    {
      title: "Historiallinen asuinrakennus, Helsinki",
      description: "1900-luvun alun jugendtalon peruskorjaus",
      image: "/placeholder.svg?height=300&width=500",
      details:
        "Projekti sisälsi rakennuksen perusteellisen kunnostuksen alkuperäistä arkkitehtuuria kunnioittaen. Työ käsitti rakenteiden vahvistamisen, talotekniikan nykyaikaistamisen ja alkuperäisten yksityiskohtien entisöinnin.",
    },
    {
      title: "Toimistorakennus, Espoo",
      description: "1980-luvun toimistorakennuksen muutos nykyaikaiseksi monitilatoimistoksi",
      image: "/placeholder.svg?height=300&width=500",
      details:
        "Vanha toimistorakennus uudistettiin vastaamaan nykyaikaisen työympäristön vaatimuksia. Projektissa uusittiin talotekniikka, tilajaot ja pintamateriaalit energiatehokkuutta parantaen.",
    },
    {
      title: "Rivitaloyhtiö, Vantaa",
      description: "1970-luvun rivitaloyhtiön peruskorjaus",
      image: "/placeholder.svg?height=300&width=500",
      details:
        "Laaja peruskorjaus, jossa uusittiin vesikatto, julkisivut, ikkunat ja ovet sekä LVIS-järjestelmät. Samalla parannettiin rakennusten energiatehokkuutta ja päivitettiin piha-alueet.",
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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Korjausrakentaminen</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Toteutamme vaativat korjausrakentamisen projektit ammattitaidolla ja kokemuksella. Erikoisalamme on vanhojen
            rakennusten kunnostus ja peruskorjaus niiden arvoa kunnioittaen.
          </p>
        </div>
      </div>

      {/* Featured Project - Kankarepolku 5 E ja F */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Kankarepolku 5 E ja F, Helsinki</h2>
                <p className="text-lg text-muted-foreground mb-2">Heka</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1 text-primary" />
                    <span>2024</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <EuroIcon className="h-4 w-4 mr-1 text-primary" />
                    <span>700 000</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Projektin kuvaus:</h3>
                <p className="text-muted-foreground mb-4">
                  Kankarepolku 5E Rakennustyöt Talo A-F rappu. Projektissa toteutettiin porrashuoneiden ja
                  kellarikerroksen kunnostustyöt.
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  {projects[0].details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="mt-4">Pyydä vastaava tarjous</Button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-40 w-full">
                  <img
                    src={projects[0].image || "/placeholder.svg"}
                    alt="Kankarepolku 5 E ja F porrashuone"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg cursor-pointer hover:scale-[1.02] transition-transform"
                    onClick={() => window.open(projects[0].image, "_blank")}
                  />
                </div>
                <div className="relative h-40 w-full">
                  <img
                    src={projects[0].image2 || "/placeholder.svg"}
                    alt="Kankarepolku 5 E ja F kellarikerros"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg cursor-pointer hover:scale-[1.02] transition-transform"
                    onClick={() => window.open(projects[0].image2, "_blank")}
                  />
                </div>
                <div className="relative h-40 w-full">
                  <img
                    src={projects[0].image3 || "/placeholder.svg"}
                    alt="Kankarepolku 5 E ja F ovi"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg cursor-pointer hover:scale-[1.02] transition-transform"
                    onClick={() => window.open(projects[0].image3, "_blank")}
                  />
                </div>
                <div className="relative h-40 w-full">
                  <img
                    src={projects[0].image4 || "/placeholder.svg"}
                    alt="Kankarepolku 5 E ja F käytävä"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg cursor-pointer hover:scale-[1.02] transition-transform"
                    onClick={() => window.open(projects[0].image4, "_blank")}
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Featured Project */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image src="/images/renovation-expertise.jpg" alt="Korjausrakentaminen" fill className="object-cover" />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Korjausrakentamisen asiantuntemus</h2>
              <p className="text-muted-foreground mb-6">
                Korjausrakentaminen vaatii erityistä osaamista ja ymmärrystä vanhoista rakenteista ja rakennustavoista.
                Meillä on vankka kokemus erilaisten kohteiden kunnostamisesta ja peruskorjauksesta.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-medium mb-1">Palveluihimme kuuluu:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Kuntokartoitukset</li>
                    <li>• Peruskorjaukset</li>
                    <li>• Tilamuutokset</li>
                    <li>• Talotekniikan uusiminen</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Hyödyt:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Rakennuksen käyttöiän pidentäminen</li>
                    <li>• Energiatehokkuuden parantaminen</li>
                    <li>• Tilojen toiminnallisuuden parantaminen</li>
                    <li>• Rakennuksen arvon säilyttäminen</li>
                  </ul>
                </div>
              </div>
              <Button>Pyydä tarjous</Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Projects */}
      <h2 className="text-2xl font-bold mb-8">Toteutettuja projekteja</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(1).map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">{project.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 py-10 px-6 bg-muted/40 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Suunnitteletko korjausrakentamisen projektia?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Ota yhteyttä ja kerro meille projektistasi. Autamme sinua suunnittelussa ja toteutuksessa alusta loppuun.
        </p>
        <Button size="lg">Ota yhteyttä</Button>
      </div>
    </div>
  )
}

