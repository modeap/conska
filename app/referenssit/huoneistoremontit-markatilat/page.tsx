import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Calendar } from "lucide-react"

export default function ApartmentWetRoomsPage() {
  // Esimerkki projekteja
  const projects = [
    {
      title: "Huopalahdentie 3, Helsinki",
      description: "Taloyhtiön saunaosastojen saneeraus",
      image: "/images/wooden-sauna.jpeg",
      image2: "/images/white-sauna.jpeg",
      details: [
        "Helsingissä tehtiin 3 saunaston saneeraustyö.",
        "Purettiin vanhat saunat pois ja tehtiin kaikki uusiksi (seinät, lattiat, paneloinnit sekä lauteet).",
        "Asennettiin uudet ovet, jotka täyttävät paloluokituksen kriteerit.",
        "Projektiin sisältyi myös täydelliset LVI-S työt.",
      ],
      year: "2023",
    },
    {
      title: "Moderni keittiöremontti, Helsinki",
      description: "Täydellinen keittiön uudistus modernilla ilmeellä",
      image: "/images/gray-kitchen.jpeg",
      image2: "/images/galley-kitchen.jpeg",
      details:
        "Projekti sisälsi vanhan keittiön purkamisen ja täydellisen uudistuksen. Uusi keittiö toteutettiin modernilla ilmeellä, jossa harmaat kaapistot, valkoiset työtasot ja LED-valaistus luovat tyylikkään kokonaisuuden. Keittiöön asennettiin uudet kodinkoneet ja lattia uusittiin.",
    },
    {
      title: "Kylpyhuoneremontti, Espoo",
      description: "Täydellinen kylpyhuoneen uudistus kerrostaloasunnossa",
      image: "/images/modern-bathroom.jpeg",
      image2: "/images/walk-in-shower.jpeg",
      details:
        "Projekti sisälsi vanhan kylpyhuoneen purkamisen, vesieristyksen, laatoituksen, kalusteasennukset ja valaistuksen uusimisen. Lopputuloksena moderni ja toimiva kylpyhuone kiiltävillä laatoilla ja laadukkailla kalusteilla.",
    },
    {
      title: "Avara olohuone, Vantaa",
      description: "Olohuoneen täydellinen uudistus",
      image: "/images/modern-living-room.jpeg",
      image2: "/images/minimalist-living-room.jpeg",
      details:
        "Olohuoneen täydellinen uudistus, jossa vanha sisustus purettiin ja tila uudistettiin modernilla ilmeellä. Projektiin sisältyi lattian uusiminen, seinien maalaus, valaistuksen suunnittelu ja toteutus sekä takka-asennus.",
    },
    {
      title: "Huoneistoremontti, Vantaa",
      description: "Kolmion täydellinen remontti",
      image: "/images/modern-staircase.jpeg",
      details:
        "Koko asunnon kattava remontti, jossa uusittiin kaikki pinnat, keittiö ja kylpyhuone. Projektiin sisältyi myös tilamuutoksia, sähkö- ja putkitöitä sekä uudet kiintokalusteet. Portaikko uusittiin modernilla lasikaiteella.",
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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Huoneistoremontit & märkätilat
          </h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Toteutamme laadukkaat huoneistoremontit ja märkätilojen saneeraukset avaimet käteen -periaatteella. Kaikki
            kodin remontit saman katon alta.
          </p>
        </div>
      </div>

      {/* Featured Project */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src="/images/white-kitchen-black-counter.jpeg"
                alt="Moderni keittiö"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Kodin remontit ammattitaidolla</h2>
              <p className="text-muted-foreground mb-6">
                Tarjoamme kokonaisvaltaisia remonttiratkaisuja kotisi kaikkiin tiloihin. Erityisosaamistamme ovat
                märkätilojen remontit, joissa vedeneristys ja laadukas toteutus ovat avainasemassa.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-medium mb-1">Palveluihimme kuuluu:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Kylpyhuoneremontit</li>
                    <li>• Keittiöremontit</li>
                    <li>• Huoneistoremontit</li>
                    <li>• Pintaremontit</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Hyödyt:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Kaikki palvelut yhdeltä toimijalta</li>
                    <li>• Sertifioidut vedeneristykset</li>
                    <li>• Laadukkaat materiaalit</li>
                    <li>• Takuutyö</li>
                  </ul>
                </div>
              </div>
              <Button>Pyydä tarjous</Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Kitchen Showcase */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Modernit keittiöratkaisut</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image src="/images/open-concept-kitchen.jpeg" alt="Avara keittiö" fill className="object-cover" />
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="/images/modern-kitchen-white.jpeg"
              alt="Moderni valkoinen keittiö"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-4 bg-muted/30 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Keittiösuunnittelun asiantuntemus</h3>
          <p className="text-muted-foreground">
            Keittiö on kodin sydän, jossa toimivuus ja estetiikka kohtaavat. Suunnittelemme ja toteutamme keittiösi
            toiveidesi mukaan, huomioiden tilan erityispiirteet ja käyttötarpeesi. Käytämme laadukkaita materiaaleja ja
            kodinkoneita, jotka kestävät aikaa ja käyttöä.
          </p>
        </div>
      </div>

      {/* Bathroom Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Kylpyhuoneet ja märkätilat</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image src="/images/modern-bathroom.jpeg" alt="Moderni kylpyhuone" fill className="object-cover" />
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image src="/images/walk-in-shower.jpeg" alt="Tilava suihku" fill className="object-cover" />
          </div>
        </div>
        <div className="mt-4 bg-muted/30 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Märkätilojen erikoisosaaminen</h3>
          <p className="text-muted-foreground mb-4">
            Märkätilojen remontit vaativat erityistä osaamista ja tarkkuutta. Vedeneristys, ilmanvaihto ja
            kosteudenhallinta ovat avainasemassa onnistuneessa kylpyhuone- tai saunaremontissa. Käytämme vain
            sertifioituja vedeneristäjiä ja laadukkaita materiaaleja.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Sertifioidut vedeneristykset</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Laadukkaat laatoitukset</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Modernit kalusteet ja varusteet</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Toimivat tilaratkaisut</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Sauna Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Saunat</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image src="/images/white-sauna.jpeg" alt="Moderni valkoinen sauna" fill className="object-cover" />
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image src="/images/wooden-sauna.jpeg" alt="Perinteinen puusauna" fill className="object-cover" />
          </div>
        </div>
        <div className="mt-4 bg-muted/30 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Saunaremontit</h3>
          <p className="text-muted-foreground mb-4">
            Suunnittelemme ja toteutamme saunat yksilöllisesti asiakkaan toiveiden mukaan. Valikoimastamme löytyy sekä
            perinteisiä puusaunoja että moderneja vaaleasävyisiä saunoja. Kiuas valitaan tilan ja käyttötarpeen mukaan.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Perinteiset puupaneloidut saunat</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Modernit vaaleat saunat</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Laadukkaat kiukaat</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Tunnelmavalaistus</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Featured Sauna Renovation Project */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Huopalahdentie 3, Helsinki</h2>
                <p className="text-lg text-muted-foreground mb-2">Taloyhtiön saunaosastojen saneeraus</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1 text-primary" />
                    <span>2023</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Projektin kuvaus:</h3>
                <p className="text-muted-foreground mb-4">
                  Helsingissä tehtiin 3 saunaston saneeraustyö. Projektiin sisältyi vanhojen saunojen purkaminen ja
                  kaikkien osien uusiminen, mukaan lukien LVI-S työt.
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Vanhojen saunojen purku</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Seinien, lattioiden, panelointien ja lauteiden uusiminen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Paloluokituksen täyttävien ovien asennus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Täydelliset LVI-S työt</span>
                  </li>
                </ul>
              </div>

              <Button className="mt-4">Pyydä vastaava tarjous</Button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/wooden-sauna.jpeg"
                    alt="Taloyhtiön sauna"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative h-64 w-full">
                  <Image src="/images/white-sauna.jpeg" alt="Moderni sauna" fill className="object-cover rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Projects */}
      <h2 className="text-2xl font-bold mb-8">Toteutettuja projekteja</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="grid gap-4 p-6">
              <div className="space-y-2">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </div>

              <div className={project.image2 ? "grid grid-cols-2 gap-2" : ""}>
                <div className="relative h-48 w-full rounded-md overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>

                {project.image2 && (
                  <div className="relative h-48 w-full rounded-md overflow-hidden">
                    <Image
                      src={project.image2 || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              <div>
                {Array.isArray(project.details) ? (
                  <ul className="text-muted-foreground text-sm mb-4 space-y-1">
                    {project.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground text-sm mb-4">{project.details}</p>
                )}
                <Button variant="outline" size="sm">
                  Lue lisää
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 py-10 px-6 bg-muted/40 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Suunnitteletko kodin remonttia?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Ota yhteyttä ja kerro meille toiveistasi. Autamme sinua suunnittelussa ja toteutuksessa alusta loppuun.
        </p>
        <Button size="lg">Ota yhteyttä</Button>
      </div>
    </div>
  )
}

