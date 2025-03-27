"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Calendar, EuroIcon } from "lucide-react"

export default function FacadeBalconyPage() {
  // Esimerkki projekteja
  const projects = [
    {
      title: "Pasilan Puistotie 5, Helsinki",
      client: "Heka",
      description: "Parvekekaiteiden korjaus (30 parveketta)",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b971833a08d5060290e3bf4bfd513557-2xvqG0tQAm1v3wZcYnT9NsC2j1yzfD.png",
      image2:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1246bd29f4517249a100d86f2d7c51cb%20%281%29-UT293kiYe057UF9xy2RgoQd2aHbLGC.png",
      image3:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5e0989ed8667d152105e170efde55d19-xGc9NWQHI0XkCOeh06sScXC298siD0.png",
      image4:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/402ca979bad1bf8362073a6e4e933c3e-rZs6ALb4SthBlM8knJipfthOz2i6hs.png",
      details: [
        "Parvekekaiteiden puuelementit on purettu, uusittu ja maalattu.",
        "Parvekekaiteiden rautaosat on pesty painepesurilla ja maalattu.",
        "Parvekkeiden betoni otsapinnat on pesty, laitettu praimeri ja lopuksi vielä maalattu.",
      ],
      year: "2024",
      value: "",
    },
    {
      title: "Lipunkantajankatu 7 & 22, Turku",
      client: "Asunto Oy Lipunkantajankatu 7 & 22",
      description: "Parvekkeiden ja julkisivujen saneeraus (144 asuntoa)",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/99c5e262-82f7-45d9-8966-2eba5af28e7e-ERufElpOJfHHld2dRtCEiVg5D6w1Hp.jpeg",
      image2:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d3def173-a074-4a74-929d-bc2daa410c04-MjVW2SoSonheRbCLHOyXReeNLPjwJo.jpeg",
      image3:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/93c72f2a2f5391ce9a69a10bb5f1c2d0-XToiQXg5sBZdiZvgYDbai7iQrankpj.png",
      image4:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2bc2bee3e06c5a9fd5791c89c385c4ad-5cZWWnBnKCSXH36HEZsAG7MJP5Zn7O.png",
      details: [
        "Parvekerakenteiden Märkähiekkapuhallus.",
        "Parvekerakenteiden perusteellinen betoni- ja pinnoituskorjaus.",
        "Parvekelaattojen kaatojen kunnostus ja vedeneristyspinnoitus.",
        "Vedenpoistoputkien kunnon tarkistus ja tarvittaessa uusinta.",
        "Kaikkien parvekkeiden liittyvien elementtisaumojen uusinta.",
        "Parveketaustaseinien ikkunavesipeltien saumojen uusiminen.",
        "Parvekeovien kynnyspeltien uusiminen.",
        "Uusien parvekekaiteiden ja parvekelasien asentaminen.",
      ],
      year: "2024",
      value: "750 000",
    },
    {
      title: "Minkkitie 16, Vantaa",
      client: "Asunto Oy Minkkitie 16",
      description: "Parvekkeiden ja julkisivujen saneeraus (80 kpl)",
      image: "/images/minkkitie-1.png",
      image2: "/images/minkkitie-2.png",
      details: [
        "Julkisivun, sokkelin ja tukimuurirakenteiden kuumakorkeapainepesu.",
        "Betoni- ja pinnoituskorjaukset julkisivun, sokkelin ja tukimuurien betonipinnoilla.",
        "Tiilipintojen impregnointi.",
        "Parvekerakenteiden märkähiekkapuhallus ja perusteellinen betoni- ja pinnoituskorjaus.",
        "Parvekealustan kaatojen kunnostus ja vedeneristyspinnoitus.",
        "Parvekkeisiin liittyvien elementtisaumojen uusinta.",
        "Parveketaustaseinien ikkunavesipeltien saumojen uusinta ja parvekeoven kynnyspellin uusinta.",
        "Uusien parvekekaiteiden ja parvekelasien asentaminen.",
      ],
      year: "2023",
      value: "600 000",
    },
    {
      title: "Pertunpellonraitti 2, Helsinki",
      client: "Asunto Oy Pertunpellonraitti 2",
      description: "Julkisivu- ja parvekesaneeraus",
      image: "/images/pertunpellonraitti-1.png",
      image2: "/images/pertunpellonraitti-2.png",
      details: [
        "62 asunnon",
        "Vanhojen ikkunoiden, ikkunaovien ja parveke- sekä terassiovien poisto ja uusinta.",
        "Kaikkien ikkunoiden ja ovien uusinta.",
        "Elementtisaumojen uusinta julkisivuilla.",
        "Teräsbetonikorroosiovauriokorjaukset.",
        "Julkisivujen pesut ja huoltomaalaukset, mukaan lukien impregnoinnit.",
        "Julkisivujen puuosien huoltomaalaukset kaikilta pinnoiltaan (myös aidat, piharakennukset, parvekekaiteet, räystäslaudat jne.).",
        "Parvekelaattojen pinnoitukset.",
        "Parvekekattojen ja kaiteiden (laudoitusten) uusinta.",
      ],
      year: "2023",
      value: "900 000",
    },
    {
      title: "Laurantie 11, Vantaa",
      client: "VAV Asunnot Oy",
      description: "Parveke ja Julkisivusaneeraus",
      image: "/images/laurantie-1.jpeg",
      image2: "/images/laurantie-4.jpeg",
      image3: "/images/laurantie-2.jpeg",
      image4: "/images/laurantie-3.jpeg",
      details: [
        "36 kpl",
        "Parvekkeiden kunnostus.",
        "Parvekerakenteiden märkähiekkapuhallus.",
        "Parvekerakenteiden perusteellinen betoni- ja pinnoituskorjaus.",
        "Parvekelaattojen kaatojen kunnostus ja lattioiden pinnoitus.",
        "Vedenpoistoputkien uusinta.",
        "Kaikkien parvekkeisiin liittyvien elementtisaumojen uusinta.",
        "Julkisivujen elastisaumojen uusinta ja huoltomaalaus.",
      ],
      year: "2023",
      value: "270 000",
    },
    {
      title: "Omenamäenkatu 3, Helsinki",
      client: "Helsingin asunnot Oy",
      description: "Parvekkeiden ja julkisivujen kunnostus",
      image: "/images/omenamaki-1.png",
      image2: "/images/omenamaki-2.png",
      details: [
        "Julkisivupuupanelien kunnostus ja maalaus.",
        "Parvekkeiden korjaukset ja maalaukset.",
        "Parvekerakenteiden märkähiekkapuhallus.",
        "Parvekerakenteiden perusteellinen betoni- ja pinnoituskorjaus.",
        "Parvekelaattojen kaatojen kunnostus ja lattioiden pinnoitus.",
        "Vedenpoistoputkien uusinta.",
        "Kaikkien parvekkeisiin liittyvien elementtisaumojen uusinta.",
        "Julkisivujen elastisaumojen uusinta ja huoltomaalaus.",
      ],
      year: "2023",
      value: "185 000",
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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Julkisivu & parvekesaneeraus</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Toteutamme julkisivujen ja parvekkeiden kunnostus- ja saneeraustyöt ammattitaidolla ja laadukkailla
            materiaaleilla. Meillä on vankka kokemus erilaisista julkisivumateriaaleista ja -tekniikoista.
          </p>
        </div>
      </div>

      {/* Featured Project - Lipunkantajankatu */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Lipunkantajankatu 7 & 22, Turku</h2>
                <p className="text-lg text-muted-foreground mb-2">Asunto Oy Lipunkantajankatu 7 & 22</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1 text-primary" />
                    <span>2024</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <EuroIcon className="h-4 w-4 mr-1 text-primary" />
                    <span>750 000</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Projektin kuvaus:</h3>
                <ul className="space-y-1 text-muted-foreground">
                  {projects[1].details.map((detail, i) => (
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
                    src={projects[1].image || "/placeholder.svg"}
                    alt="Lipunkantajankatu julkisivu"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="relative h-40 w-full">
                  <img
                    src={projects[1].image2 || "/placeholder.svg"}
                    alt="Lipunkantajankatu julkisivu"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="relative h-40 w-full">
                  <img
                    src={projects[1].image3 || "/placeholder.svg"}
                    alt="Lipunkantajankatu parveke"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="relative h-40 w-full">
                  <img
                    src={projects[1].image4 || "/placeholder.svg"}
                    alt="Lipunkantajankatu työmaa"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Featured Project - Pasilan Puistotie 5 */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Pasilan Puistotie 5, Helsinki</h2>
                <p className="text-lg text-muted-foreground mb-2">Heka</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1 text-primary" />
                    <span>2024</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Projektin kuvaus:</h3>
                <p className="text-muted-foreground mb-4">Parvekekaiteiden korjaus (30 parveketta)</p>
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
                    alt="Pasilan Puistotie 5 parvekekaide"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="relative h-40 w-full">
                  <img
                    src={projects[0].image2 || "/placeholder.svg"}
                    alt="Pasilan Puistotie 5 julkisivu"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="relative h-40 w-full">
                  <img
                    src={projects[0].image3 || "/placeholder.svg"}
                    alt="Pasilan Puistotie 5 julkisivu"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="relative h-40 w-full">
                  <img
                    src={projects[0].image4 || "/placeholder.svg"}
                    alt="Pasilan Puistotie 5 parvekekaide ennen"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* New Balcony Renovation Showcase */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Parvekeremontit</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image src="/images/renovated-balcony.jpeg" alt="Kunnostettu parveke" fill className="object-cover" />
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image src="/images/balcony-renovation.jpeg" alt="Parveke remontti" fill className="object-cover" />
          </div>
        </div>
        <div className="mt-4 bg-muted/30 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Parvekkeiden kunnostus</h3>
          <p className="text-muted-foreground mb-4">
            Parvekkeiden kunnostus on tärkeä osa kiinteistön ylläpitoa. Hyvin hoidetut parvekkeet lisäävät
            asumismukavuutta ja kiinteistön arvoa. Toteutamme parvekkeiden kunnostukset ammattitaidolla ja laadukkailla
            materiaaleilla.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Parvekerakenteiden märkähiekkapuhallus</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Betoni- ja pinnoituskorjaukset</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Parvekelaattojen kaatojen kunnostus</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Parvekekaiteiden ja -lasien asennus</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Apartment Building Showcase */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Julkisivuremontit</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="/images/apartment-renovation-aerial.jpeg"
              alt="Julkisivuremontti ilmasta"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image src="/images/apartment-building.jpeg" alt="Kerrostalo" fill className="object-cover" />
          </div>
        </div>
        <div className="mt-4 bg-muted/30 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Julkisivujen kunnostus</h3>
          <p className="text-muted-foreground mb-4">
            Julkisivujen kunnostus parantaa rakennuksen energiatehokkuutta ja ulkonäköä. Toteutamme julkisivuremontit
            huolellisesti ja ammattitaidolla, huomioiden rakennuksen erityispiirteet ja asiakkaan toiveet.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Julkisivujen pesu ja puhdistus</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Elementtisaumojen uusinta</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Julkisivujen maalaus ja pinnoitus</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Ikkunoiden ja ovien vaihto</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Pertunpellonraitti 2 Project */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Pertunpellonraitti 2, Helsinki</h2>
                <p className="text-lg text-muted-foreground mb-2">Asunto Oy Pertunpellonraitti 2</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1 text-primary" />
                    <span>2023</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <EuroIcon className="h-4 w-4 mr-1 text-primary" />
                    <span>900 000</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Projektin kuvaus:</h3>
                <ul className="space-y-1 text-muted-foreground">
                  {projects[2].details.map((detail, i) => (
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
                <div className="relative h-64 w-full">
                  <img
                    src={projects[2].image || "/placeholder.svg"}
                    alt="Pertunpellonraitti 2 julkisivu"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="relative h-64 w-full">
                  <img
                    src={projects[2].image2 || "/placeholder.svg"}
                    alt="Pertunpellonraitti 2 julkisivu"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Minkkitie 16 Project */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Minkkitie 16, Vantaa</h2>
                <p className="text-lg text-muted-foreground mb-2">Asunto Oy Minkkitie 16</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1 text-primary" />
                    <span>2023</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <EuroIcon className="h-4 w-4 mr-1 text-primary" />
                    <span>600 000</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Projektin kuvaus:</h3>
                <ul className="space-y-1 text-muted-foreground">
                  {projects[1].details.map((detail, i) => (
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
                <div className="relative h-64 w-full">
                  <img
                    src={projects[1].image || "/placeholder.svg"}
                    alt="Minkkitie 16 julkisivu"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="relative h-64 w-full">
                  <img
                    src={projects[1].image2 || "/placeholder.svg"}
                    alt="Minkkitie 16 parvekkeet"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Laurantie 11 Project */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Laurantie 11, Vantaa</h2>
                <p className="text-lg text-muted-foreground mb-2">VAV Asunnot Oy</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1 text-primary" />
                    <span>2023</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <EuroIcon className="h-4 w-4 mr-1 text-primary" />
                    <span>270 000</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Projektin kuvaus:</h3>
                <ul className="space-y-1 text-muted-foreground">
                  {projects[3].details.map((detail, i) => (
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
                    src={projects[3].image || "/placeholder.svg"}
                    alt="Laurantie 11 julkisivu"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="relative h-40 w-full">
                  <img
                    src={projects[3].image2 || "/placeholder.svg"}
                    alt="Laurantie 11 julkisivu"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="relative h-40 w-full">
                  <img
                    src={projects[3].image3 || "/placeholder.svg"}
                    alt="Laurantie 11 parveke"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="relative h-40 w-full">
                  <img
                    src={projects[3].image4 || "/placeholder.svg"}
                    alt="Laurantie 11 parveke"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Omenamäenkatu 3 Project */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Omenamäenkatu 3, Helsinki</h2>
                <p className="text-lg text-muted-foreground mb-2">Helsingin asunnot Oy</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1 text-primary" />
                    <span>2023</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <EuroIcon className="h-4 w-4 mr-1 text-primary" />
                    <span>185 000</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Projektin kuvaus:</h3>
                <ul className="space-y-1 text-muted-foreground">
                  {projects[4].details.map((detail, i) => (
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
                <div className="relative h-64 w-full">
                  <img
                    src={projects[4].image || "/placeholder.svg"}
                    alt="Omenamäenkatu 3 julkisivu"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="relative h-64 w-full">
                  <img
                    src={projects[4].image2 || "/placeholder.svg"}
                    alt="Omenamäenkatu 3 julkisivu"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* General Info */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image src="/images/julkisivu-rappaus.jpeg" alt="Julkisivusaneeraus" fill className="object-cover" />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Julkisivusaneeraus asiantuntijalta</h2>
              <p className="text-muted-foreground mb-6">
                Julkisivun kunto vaikuttaa merkittävästi kiinteistön arvoon ja energiatehokkuuteen. Tarjoamme
                kokonaisvaltaisia julkisivusaneerauksia, jotka parantavat rakennuksen ulkonäköä, energiatehokkuutta ja
                kestävyyttä.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-medium mb-1">Palveluihimme kuuluu:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Julkisivujen kuntokartoitukset</li>
                    <li>• Rappaus- ja levytystyöt</li>
                    <li>• Parvekkeiden kunnostus</li>
                    <li>• Parvekelasitukset</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Hyödyt:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Kiinteistön arvon nousu</li>
                    <li>• Energiatehokkuuden paraneminen</li>
                    <li>• Rakenteiden pidempi käyttöikä</li>
                    <li>• Parantunut asumismukavuus</li>
                  </ul>
                </div>
              </div>
              <Button>Pyydä tarjous</Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Other Projects */}
      <h2 className="text-2xl font-bold mb-8">Muita toteutettuja projekteja</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.slice(5).map((project, index) => (
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
        <h2 className="text-2xl font-bold mb-4">Suunnitteletko julkisivu- tai parvekesaneerausta?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Ota yhteyttä ja kerro meille projektistasi. Autamme sinua suunnittelussa ja toteutuksessa alusta loppuun.
        </p>
        <Button size="lg">Ota yhteyttä</Button>
      </div>
    </div>
  )
}

