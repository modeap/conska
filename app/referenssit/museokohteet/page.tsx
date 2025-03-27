"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Calendar } from "lucide-react"

export default function MuseumProjectsPage() {
  // Esimerkki projekteja
  const projects = [
    {
      title: "Mäkelänkatu 37, Helsinki",
      description: "Historiallisen pylväsjärjestelmän restaurointi",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c889030ab63ad937caede6ca6485312d-8lGwIEv5eqXsTzU5WyKE4bbg64JgIt.png",
      image2:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5781196110580ca5d21bce66dc2c5c61-N35Zp9SyJfyANM6ges1bM8ZVyZtdw9.png",
      image3:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09cff4ccc1b84e032a6e0f5c705a3cda-kHBPPeoEg1CSgxaV4RMsLJHxtzzGbu.png",
      details: [
        "Conska Oy on toteuttanut perusteellisen pylväsjärjestelmän paikkauksen ja korjauksen historiallisessa, vuonna 1924 rakennetussa museokohteessa.",
        "Työ on tehty huolella alkuperäisen arkkitehtuurin laadukasta restaurointityötä, jossa on otettu huomioon kohteen historiallinen arvo ja estetiikka.",
        "Projektissa on kunnostettu rakennuksen julkisivun koristeelliset elementit alkuperäistä tyyliä kunnioittaen.",
      ],
      year: "2024",
    },
    {
      title: "Historiallinen museo, Helsinki",
      description: "1800-luvun museorakennuksen restaurointi",
      image: "/placeholder.svg?height=300&width=500",
      details:
        "Projekti sisälsi historiallisesti arvokkaan museorakennuksen julkisivun ja sisätilojen restauroinnin. Työssä käytettiin alkuperäisiä rakennustekniikoita ja materiaaleja rakennuksen historiallisen arvon säilyttämiseksi.",
    },
    {
      title: "Kartanomuseo, Espoo",
      description: "1700-luvun kartanon kunnostus ja konservointi",
      image: "/placeholder.svg?height=300&width=500",
      details:
        "Vanhan kartanorakennuksen kunnostus museokäyttöön. Projektissa korjattiin rakenteita, konservoitiin alkuperäisiä pintoja ja uusittiin talotekniikka hienovaraisesti historiallista arvoa kunnioittaen.",
    },
    {
      title: "Kulttuurihistoriallinen kohde, Porvoo",
      description: "Vanhan puutalon restaurointi näyttelytilaksi",
      image: "/placeholder.svg?height=300&width=500",
      details:
        "Suojellun puutalon restaurointi ja muutos näyttelytilaksi. Projektissa korjattiin hirsirakenteet, kunnostettiin ikkunat ja ovet sekä palautettiin alkuperäiset pintamateriaalit ja värit.",
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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Museokohteet</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Toteutamme vaativat museokohteiden restauroinnit ja kunnostukset historiallista arvoa kunnioittaen. Meillä
            on erityisosaamista suojeltujen rakennusten korjaamisessa.
          </p>
        </div>
      </div>

      {/* Featured Project - Mäkelänkatu 37 */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Mäkelänkatu 37, Helsinki</h2>
                <p className="text-lg text-muted-foreground mb-2">Historiallisen pylväsjärjestelmän restaurointi</p>
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
                  Conska Oy on toteuttanut perusteellisen pylväsjärjestelmän paikkauksen ja korjauksen historiallisessa,
                  vuonna 1924 rakennetussa museokohteessa. Työ on tehty huolella alkuperäisen arkkitehtuurin laadukasta
                  restaurointityötä, jossa on otettu huomioon kohteen historiallinen arvo ja estetiikka.
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Koristeellisten elementtien restaurointi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Alkuperäisten materiaalien ja tekniikoiden käyttö</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Historiallisen arvon säilyttäminen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Yhteistyö museoviranomaisten kanssa</span>
                  </li>
                </ul>
              </div>

              <Button className="mt-4">Pyydä vastaava tarjous</Button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-40 w-full">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c889030ab63ad937caede6ca6485312d-8lGwIEv5eqXsTzU5WyKE4bbg64JgIt.png"
                    alt="Mäkelänkatu 37 restauroitu pylväs"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg cursor-pointer hover:scale-[1.02] transition-transform"
                    onClick={() =>
                      window.open(
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c889030ab63ad937caede6ca6485312d-8lGwIEv5eqXsTzU5WyKE4bbg64JgIt.png",
                        "_blank",
                      )
                    }
                  />
                </div>
                <div className="relative h-40 w-full">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5781196110580ca5d21bce66dc2c5c61-N35Zp9SyJfyANM6ges1bM8ZVyZtdw9.png"
                    alt="Mäkelänkatu 37 restauroitu pylväs"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg cursor-pointer hover:scale-[1.02] transition-transform"
                    onClick={() =>
                      window.open(
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5781196110580ca5d21bce66dc2c5c61-N35Zp9SyJfyANM6ges1bM8ZVyZtdw9.png",
                        "_blank",
                      )
                    }
                  />
                </div>
                <div className="relative h-40 w-full col-span-2">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09cff4ccc1b84e032a6e0f5c705a3cda-kHBPPeoEg1CSgxaV4RMsLJHxtzzGbu.png"
                    alt="Mäkelänkatu 37 pylvään restaurointi"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg cursor-pointer hover:scale-[1.02] transition-transform"
                    onClick={() =>
                      window.open(
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09cff4ccc1b84e032a6e0f5c705a3cda-kHBPPeoEg1CSgxaV4RMsLJHxtzzGbu.png",
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

      {/* Featured Project */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image src="/images/historical-building-restoration.jpg" alt="Museokohde" fill className="object-cover" />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Historiallisten kohteiden erikoisosaamista</h2>
              <p className="text-muted-foreground mb-6">
                Museokohteiden ja suojeltujen rakennusten kunnostaminen vaatii erityistä osaamista ja ymmärrystä
                vanhoista rakennustekniikoista ja materiaaleista. Meillä on kokemusta vaativien restaurointiprojektien
                toteuttamisesta.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-medium mb-1">Palveluihimme kuuluu:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Restaurointi</li>
                    <li>• Konservointi</li>
                    <li>• Rakenteiden vahvistaminen</li>
                    <li>• Pintakäsittelyt</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Erikoisosaamisemme:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Historialliset rakennustekniikat</li>
                    <li>• Perinteiset materiaalit</li>
                    <li>• Suojeltujen kohteiden vaatimukset</li>
                    <li>• Yhteistyö museoviranomaisten kanssa</li>
                  </ul>
                </div>
              </div>
              <Button>Pyydä tarjous</Button>
            </div>
          </div>
        </Card>
      </div>

      {/* CTA */}
      <div className="mt-16 py-10 px-6 bg-muted/40 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Onko sinulla historiallinen kohde kunnostettavana?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Ota yhteyttä ja kerro meille projektistasi. Meillä on kokemusta ja osaamista vaativien kohteiden
          kunnostamisesta.
        </p>
        <Button size="lg">Ota yhteyttä</Button>
      </div>
    </div>
  )
}

