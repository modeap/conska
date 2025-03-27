import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PartnersPage() {
  return (
    <div className="container py-12 md:py-24">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Kumppanit</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Rakennamme menestystä yhdessä kumppaneidemme kanssa. Etsimme jatkuvasti luotettavia ja ammattitaitoisia
            yhteistyökumppaneita, jotka jakavat arvomme laadukkaasta ja vastuullisesta rakentamisesta.
          </p>
        </div>
      </div>

      {/* Partnership Section */}
      <div className="grid gap-12 md:grid-cols-2 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Yhteistyökumppanuus</h2>
          <p className="text-muted-foreground mb-6">
            Conska Oy etsii jatkuvasti ammattitaitoisia kumppaneita rakennusprojekteihinsa. Arvostamme pitkäaikaisia
            kumppanuussuhteita, jotka perustuvat molemminpuoliseen luottamukseen ja yhteisiin tavoitteisiin.
          </p>

          <h3 className="text-xl font-semibold mb-4">Etsimme erityisesti seuraavien alojen ammattilaisia:</h3>
          <ul className="space-y-2 text-muted-foreground mb-6">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Sähköurakoitsijat</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>LVI-urakoitsijat</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Maalausliikkeet</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Laatoitusliikkeet</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Purkutyöurakoitsijat</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Muut rakennusalan erikoisosaajat</span>
            </li>
          </ul>

          <p className="text-muted-foreground">
            Jos olet kiinnostunut yhteistyöstä kanssamme, ota yhteyttä sähköpostitse osoitteeseen{" "}
            <a href="mailto:info@conska.fi" className="text-primary hover:underline">
              info@conska.fi
            </a>
            . Kerro viestissäsi yrityksestäsi, osaamisestasi ja mahdollisista referensseistäsi.
          </p>
        </div>

        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-76fxeNfqyj2rq8EDMvUhglVCvhL3NP.jpeg"
            alt="Rakennustarvikemyymälä ja maalipurkit"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Suppliers Section */}
      <div className="grid gap-12 md:grid-cols-2 mb-16">
        <div className="relative h-[400px] rounded-lg overflow-hidden md:order-1 order-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-hb4vTNBwhlnDZF6qX760HHvpIqZg3Y.jpeg"
            alt="Sementti ja betoni rakennusmateriaalina"
            fill
            className="object-cover"
          />
        </div>

        <div className="md:order-2 order-1">
          <h2 className="text-2xl font-bold mb-6">Tavarantoimittajat</h2>
          <p className="text-muted-foreground mb-6">
            Etsimme luotettavia tavarantoimittajia, jotka voivat tarjota laadukkaita rakennusmateriaaleja ja
            -tarvikkeita kilpailukykyiseen hintaan. Arvostamme toimittajia, jotka pystyvät vastaamaan nopeasti
            muuttuviin tarpeisiimme ja tarjoamaan joustavia toimitusaikoja.
          </p>

          <h3 className="text-xl font-semibold mb-4">Olemme kiinnostuneita erityisesti seuraavista tuoteryhmistä:</h3>
          <ul className="space-y-2 text-muted-foreground mb-6">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Rakennusmateriaalit</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Työkalut ja koneet</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Kiinnitystarvikkeet</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Pintamateriaalit</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>LVI- ja sähkötarvikkeet</span>
            </li>
          </ul>

          <p className="text-muted-foreground">
            Jos haluat tarjota tuotteitasi tai palveluitasi, lähetä tietoa valikoimastasi ja hinnoittelustasi
            osoitteeseen{" "}
            <a href="mailto:info@conska.fi" className="text-primary hover:underline">
              info@conska.fi
            </a>
            .
          </p>
        </div>
      </div>

      {/* Responsibility Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Vastuullisuus ja läpinäkyvyys</h2>
        <p className="text-muted-foreground mb-10 text-center max-w-3xl mx-auto">
          Conska Oy toimii vastuullisesti ja edellyttää samaa myös kumppaneiltaan. Varmistamme, että kaikki
          yhteistyökumppanimme noudattavat lakeja ja määräyksiä sekä toimivat eettisesti kestävällä tavalla.
        </p>

        <div className="relative h-[300px] rounded-lg overflow-hidden mb-10">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-LIskbTuNthXs3h0XQJXHv6tQnf9cV6.jpeg"
            alt="Muuraustyö ja laastin levitys"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Tilaajavastuulaki</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Edellytämme kaikilta alihankkijoiltamme, että heillä on tilaajavastuulain edellyttämät asiat kunnossa.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Ennakkoperintä- ja työnantajarekisteröinti</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Arvonlisäverovelvollisuus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Verojen maksu ja verovelkatiedot</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Eläkevakuutusten ottaminen ja maksaminen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Työehtosopimuksen noudattaminen</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Ympäristövastuu</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Conska Oy toimii ympäristövastuullisesti ja meillä on oma jätteenhallinta-, kierrätys- ja
                ympäristösuunnitelma.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Tehokas jätteiden lajittelu ja kierrätys</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Materiaalien tehokas käyttö ja hävikin minimointi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Energiatehokkaat työmenetelmät</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Ympäristöystävällisten materiaalien suosiminen</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Arvomme</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <h3 className="font-semibold mb-1">Luotettavuus</h3>
                  <p>Arvostamme kumppaneita, jotka pitävät kiinni sovituista aikatauluista ja laatuvaatimuksista.</p>
                </li>
                <li>
                  <h3 className="font-semibold mb-1">Vastuullisuus</h3>
                  <p>
                    Etsimme kumppaneita, jotka jakavat arvomme vastuullisesta liiketoiminnasta ja ympäristön
                    huomioimisesta.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold mb-1">Pitkäjänteisyys</h3>
                  <p>
                    Tavoitteenamme on rakentaa pitkäaikaisia kumppanuussuhteita, jotka hyödyttävät molempia osapuolia.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-muted/40 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ota yhteyttä</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Jos olet kiinnostunut yhteistyöstä kanssamme, ota rohkeasti yhteyttä. Kerro meille yrityksestäsi ja siitä,
          miten voisimme tehdä yhteistyötä.
        </p>
        <Button size="lg" asChild>
          <a href="mailto:info@conska.fi">Lähetä sähköpostia</a>
        </Button>
      </div>
    </div>
  )
}

