import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Phone, CheckCircle, Hammer, Construction, Paintbrush } from "lucide-react"
import HeroBanner from "@/components/hero-banner"

export default function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Quality Building Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-[800px]">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Rakennamme laatua</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Tarjoamme laadukkaita rakennus-, asennus- ja sisustussuunnittelupalveluita asiakkaan toivomusten
                mukaisesti ja joustavilla aikatauluilla. Kauttamme saat kaikki rakentamiseen ja remontointiin liittyvät
                palvelut yhdestä paikasta.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Hammer className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardTitle>Julkisivu & parvekesaneeraus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Julkisivujen ja parvekkeiden kunnostus- ja saneeraustyöt ammattitaidolla ja laadukkailla
                  materiaaleilla.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Construction className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardTitle>Korjausrakentaminen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Vanhojen rakennusten korjaus- ja kunnostustyöt niiden arvoa kunnioittaen.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Paintbrush className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardTitle>Huoneistoremontit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Asuntojen ja märkätilojen remontit avaimet käteen -periaatteella.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="w-full py-12 md:py-24 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                KAIKKI PALVELUT YHDESTÄ PAIKASTA
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
                Conska Oy tarjoaa kattavat rakentamisen ja remontoinnin palvelut saman katon alta. Säästät aikaa ja
                vaivaa, kun kaikki hoituu yhden kumppanin kautta.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="relative w-full h-48 mb-4 rounded-t-lg overflow-hidden">
                  <Image
                    src="/images/julkisivu-telineet-ilmakuva.png"
                    alt="Julkisivu & parvekesaneeraus"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>Julkisivu & parvekesaneeraus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Julkisivujen ja parvekkeiden kunnostus- ja saneeraustyöt ammattitaidolla ja laadukkailla
                  materiaaleilla.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/referenssit/julkisivu-parvekesaneeraus">Lue lisää</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="relative w-full h-48 mb-4 rounded-t-lg overflow-hidden">
                  <Image src="/images/torbo-equipment.jpeg" alt="Hiekkapuhallus" fill className="object-cover" />
                </div>
                <CardTitle>Hiekkapuhallus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Märkähiekkapuhallus Torbo-menetelmällä monipuolisiin käyttökohteisiin uusimmalla TorboCar AC 84
                  -kalustolla.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/referenssit/hiekkapuhallus">Lue lisää</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="relative w-full h-48 mb-4 rounded-t-lg overflow-hidden">
                  <Image
                    src="/images/korjausrakentaminen.jpeg"
                    alt="Korjausrakentaminen"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>Korjausrakentaminen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Vanhojen rakennusten korjaus- ja kunnostustyöt niiden arvoa kunnioittaen.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/referenssit/korjausrakentaminen">Lue lisää</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="relative w-full h-48 mb-4 rounded-t-lg overflow-hidden">
                  <Image src="/images/vesikatto.jpeg" alt="Vesikatto ja peltityöt" fill className="object-cover" />
                </div>
                <CardTitle>Vesikatto ja peltityöt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Vesikattojen uusiminen ja peltityöt ammattitaidolla ja laadukkailla materiaaleilla.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/referenssit/vesikatto-peltityot">Lue lisää</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="relative w-full h-48 mb-4 rounded-t-lg overflow-hidden">
                  <Image
                    src="/images/gray-kitchen.jpeg"
                    alt="Huoneistoremontit & märkätilat"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>Huoneistoremontit & märkätilat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Asuntojen ja märkätilojen remontit avaimet käteen -periaatteella.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/referenssit/huoneistoremontit-markatilat">Lue lisää</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="relative w-full h-48 mb-4 rounded-t-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5781196110580ca5d21bce66dc2c5c61-N35Zp9SyJfyANM6ges1bM8ZVyZtdw9.png"
                    alt="Museokohteet"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>Museokohteet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Historiallisten ja suojeltujen kohteiden kunnostustyöt niiden arvoa kunnioittaen.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/referenssit/museokohteet">Lue lisää</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interior Design Showcase */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Modernit sisätilat</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
                Toteutamme tyylikkäät ja toimivat sisätilat, jotka vastaavat tarpeitasi ja toiveitasi.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image src="/images/open-concept-kitchen.jpeg" alt="Moderni keittiö" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-bold">Modernit keittiöt</h3>
                  <p className="text-sm">Toimivat ja tyylikkäät keittiöratkaisut</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image src="/images/modern-living-room.jpeg" alt="Olohuone" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-bold">Viihtyisät olohuoneet</h3>
                  <p className="text-sm">Kodin sydän, jossa viihdytään</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image src="/images/modern-staircase.jpeg" alt="Portaikko" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-bold">Näyttävät portaikot</h3>
                  <p className="text-sm">Tyylikäs yksityiskohta kodin ilmeeseen</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/referenssit/huoneistoremontit-markatilat">
                Tutustu huoneistoremontteihin
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-24 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Miksi valita Conska Oy?</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
                Olemme luotettava ja ammattitaitoinen rakennusalan yritys, joka toteuttaa projektit sovitussa
                aikataulussa ja budjetissa.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 py-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Ammattitaito</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Kokeneet ammattilaiset ja jatkuva kouluttautuminen takaavat laadukkaan lopputuloksen.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>Kokonaisvaltaisuus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hoidamme koko projektin suunnittelusta toteutukseen ja viimeistelyyn.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>Luotettavuus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Pidämme kiinni sovituista aikatauluista ja kustannusarvioista.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>Asiakaslähtöisyys</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Kuuntelemme asiakkaan toiveita ja toteutamme ne parhaalla mahdollisella tavalla.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/minimalist-living-room.jpeg" alt="Moderni sisustus" fill className="object-cover" />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ota yhteyttä ja pyydä tarjous</h2>
                <p className="text-muted-foreground md:text-xl">
                  Kerro meille projektistasi ja me autamme sinua toteuttamaan sen. Pyydä tarjous tai soita meille!
                </p>
              </div>
              <div className="flex items-center gap-2 text-lg font-medium mb-4">
                <Phone className="h-5 w-5 text-primary" />
                <span>Soita: 041 313 6339</span>
              </div>
              <Button size="lg" className="w-full md:w-auto">
                Pyydä tarjous
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Performance Section */}
      <section className="w-full py-12 md:py-24 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Vahva talous, luotettava kumppani
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
                Conska Oy on vakavarainen ja kasvava yritys, jonka taloudellinen asema on erinomainen. Olemme luotettava
                kumppani kaikissa rakennushankkeissa.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Vahva taloudellinen asema</h3>
                <p className="text-muted-foreground">
                  Conska Oy:n taloudellinen asema on erinomainen. Yrityksemme on kasvattanut liikevaihtoaan tasaisesti
                  viime vuosina, ja kannattavuutemme on toimialan kärkitasoa. Korkea omavaraisuusaste takaa toimintamme
                  vakauden ja mahdollistaa pitkäjänteisen kehittämisen.
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Kasvava yritys</h3>
                <p className="text-muted-foreground">
                  Conska Oy on kasvava yritys, joka investoi jatkuvasti toimintansa kehittämiseen. Tavoitteenamme on
                  olla yksi toimialamme johtavista yrityksistä. Henkilöstömme määrä on kasvanut merkittävästi viime
                  vuosina, ja projektien määrä on lisääntynyt tasaisesti. Kasvumme on hallittua ja perustuu
                  pitkäaikaisiin asiakassuhteisiin sekä korkeaan laatuun.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Luotettava kumppani</h3>
                <p className="text-muted-foreground mb-6">
                  Conska Oy kuuluu Luotettava Kumppani -palveluun, mikä takaa, että yrityksemme on hoitanut kaikki
                  lakisääteiset velvoitteensa. Olemme myös saaneet korkeimmat luottoluokitukset.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-items-center">
                  <div className="p-2 bg-white rounded-lg flex items-center justify-center h-24 w-full">
                    <Image
                      src="/images/goldcert.jpeg"
                      alt="Suomen Vahvimmat Kulta 2023"
                      width={100}
                      height={120}
                      className="h-auto max-h-full"
                    />
                  </div>
                  <div className="p-2 bg-white rounded-lg flex items-center justify-center h-24 w-full">
                    <Image
                      src="/images/bisnode-dnb-riskiluokka-1.jpeg"
                      alt="Bisnode DNB Riskiluokka 1"
                      width={80}
                      height={80}
                      className="h-auto max-h-full"
                    />
                  </div>
                  <div className="p-2 bg-white rounded-lg flex items-center justify-center h-24 w-full">
                    <Image
                      src="/images/dun-bradstreet.jpeg"
                      alt="Dun & Bradstreet"
                      width={120}
                      height={40}
                      className="h-auto max-h-full"
                    />
                  </div>
                  <div className="p-2 bg-white rounded-lg flex items-center justify-center h-24 w-full">
                    <Image
                      src="/images/luotettava-kumppani-green.png"
                      alt="Luotettava Kumppani"
                      width={120}
                      height={40}
                      className="h-auto max-h-full"
                    />
                  </div>
                  <div className="p-2 bg-white rounded-lg flex items-center justify-center h-24 w-full">
                    <Image
                      src="/images/aaa-logo.png"
                      alt="AAA Korkein Luottoluokitus"
                      width={120}
                      height={60}
                      className="h-auto max-h-full"
                    />
                  </div>
                  <div className="p-2 bg-white rounded-lg flex items-center justify-center h-24 w-full">
                    <Image
                      src="/images/finlands-strongest-platinum.svg"
                      alt="Suomen Vahvimmat Platinum"
                      width={100}
                      height={80}
                      className="h-auto max-h-full"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Miksi valita Conska Oy?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Vakavarainen ja luotettava yritys</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Kaikki lakisääteiset velvoitteet hoidettu</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Korkein luottoluokitus (AAA)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Suomen Vahvimmat -sertifikaatti</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Kasvava ja kehittyvä yritys</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full py-12 md:py-24 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">YHTEISTYÖKUMPPANIT</h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-o2KNGBUWlfSfxjWlfuHAmy8gQyeJ3Q.jpeg"
                alt="Puutavara ja rakennusmateriaalit"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Ammattitaitoiset yhteistyökumppanit</h3>
              <p className="text-muted-foreground">
                Conska Oy toimii tiiviissä yhteistyössä ammattitaitoisten yhteistyökumppaneiden kanssa. Verkostoomme
                kuuluu eri alojen ammattilaisia, jotka täydentävät palvelutarjontaamme. Yhteistyökumppaneidemme ansiosta
                voimme tarjota asiakkaillemme kokonaisvaltaisia ratkaisuja rakentamiseen ja remontointiin.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Alihankkijat ja urakoitsijat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Materiaalitoimittajat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Suunnittelijat ja arkkitehdit</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/kumppanit">Lue lisää kumppaneistamme</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

