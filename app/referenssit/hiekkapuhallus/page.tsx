import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"

export default function SandblastingPage() {
  // Esimerkki projekteja
  const projects = [
    {
      title: "Julkisivun puhdistus, Helsinki",
      description: "Tiilipintaisen julkisivun puhdistus märkähiekkapuhalluksella",
      image: "/images/sandblasted-wall.jpeg",
      details:
        "Projekti sisälsi kerrostalon tiilipintaisen julkisivun puhdistuksen märkähiekkapuhalluksella. Työ toteutettiin Torbo-menetelmällä, joka mahdollisti tehokkaan puhdistuksen ilman pölyhaittoja.",
    },
    {
      title: "Betonipinnan karhennus, Espoo",
      description: "Betonipinnan karhennus pinnoitusta varten",
      image: "/images/sandblasting-surface.png",
      details:
        "Betonipinnan karhennus märkähiekkapuhalluksella ennen uutta pinnoitusta. Torbo-menetelmä mahdollisti tarkan työskentelyn ja optimaalisen pinnan karheuden uudelle pinnoitteelle.",
    },
    {
      title: "Teollisuuskohde, Vantaa",
      description: "Teollisuushallin metallipintojen puhdistus",
      image: "/images/conska-sandblasting.jpeg",
      details:
        "Teollisuushallin metallipintojen puhdistus ja karhennus ennen uudelleenmaalausta. Työ toteutettiin uusimmalla TorboCar AC 84 -kalustolla, joka mahdollisti tehokkaan ja tarkan työskentelyn.",
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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hiekkapuhallus</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Toteutamme märkähiekkapuhallukset Torbo-menetelmällä monipuolisiin käyttökohteisiin. Uusinta mallia oleva
            TorboCar AC 84 -kalusto takaa laadukkaan lopputuloksen.
          </p>
        </div>
      </div>

      {/* Featured Project */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image src="/images/torbo-equipment.jpeg" alt="TorboCar AC 84" fill className="object-cover" />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Märkähiekkapuhallus ammattitaidolla</h2>
              <p className="text-muted-foreground mb-6">
                Conska Oy tarjoaa märkähiekkapuhallusta Torbo-menetelmällä. Käytössämme on uusinta mallia oleva TorboCar
                AC 84 (v. 2023), joka on yksi sarjan suurimmista ja modernimmista laitteista.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-medium mb-1">Palveluihimme kuuluu:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Torbo-märkäpuhallus</li>
                    <li>• Soodapuhallus</li>
                    <li>• Lasipuhallus</li>
                    <li>• Hiekkapuhallus</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Käyttökohteet:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Pinnoitteiden poisto</li>
                    <li>• Pintojen karhennus</li>
                    <li>• Julkisivujen puhdistus</li>
                    <li>• Graffitien poisto</li>
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
              <p className="text-muted-foreground text-sm mb-4">{project.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Applications Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Märkähiekkapuhalluksen käyttökohteet</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Monipuoliset käyttökohteet</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Pinnoitteen, esim. kattopinnoitteen poisto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Maalin poisto betoni- ja kivipinnoista sekä rapatuista pinnoista</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Pintojen karhennus pinnoituksia varten</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Rappauksen poisto tiilipinnalta</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Rakennusten julkisivun ja parvekkeiden pesu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Tiili- ja peltikaton pesu</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Erikoiskohteet</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Betonin pesu, betoniliiman poisto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Graffitin poisto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Teollisuuden puhallustyöt</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Laivojen maalipinnoitteiden poisto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Vaativat erikoispuhallukset</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Equipment Section */}
      <div className="mt-16">
        <Card>
          <div className="grid md:grid-cols-2">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4">Moderni kalusto</h2>
              <p className="text-muted-foreground mb-6">
                Conska Oy:n uusi TorboCar AC 84 (v. 2023) on yksi sarjan suurimmista ja modernimmista laitteista.
                Kalusto mahdollistaa tehokkaan ja ympäristöystävällisen työskentelyn erilaisissa kohteissa.
              </p>
              <h3 className="font-medium mb-2">Menetelmät:</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Torbo-märkäpuhallus - vähentää pölyhaittoja ja mahdollistaa työskentelyn herkissäkin kohteissa
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Soodapuhallus - hellävarainen menetelmä aroille pinnoille</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Lasipuhallus - tarkka ja tehokas menetelmä monille pinnoille</span>
                </li>
              </ul>
              <Button>Pyydä tarjous</Button>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="/images/conska-sandblasting.jpeg"
                alt="Conska Oy hiekkapuhallus"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* CTA */}
      <div className="mt-16 py-10 px-6 bg-muted/40 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Tarvitsetko hiekkapuhallusta?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Ota yhteyttä ja kerro meille projektistasi. Autamme sinua löytämään parhaan ratkaisun tarpeisiisi.
        </p>
        <Button size="lg">Ota yhteyttä</Button>
      </div>
    </div>
  )
}

