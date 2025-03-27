import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-24">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Palvelumme</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Tarjoamme kokonaisvaltaisia palveluita rakentamiseen ja remontointiin. Kaikki palvelut saman katon alta.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Julkisivu & parvekesaneeraus */}
        <Card className="flex flex-col">
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
            <CardDescription className="text-base">
              Julkisivujen ja parvekkeiden kunnostus- ja saneeraustyöt ammattitaidolla ja laadukkailla materiaaleilla.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <ul className="space-y-2 mb-6 flex-1">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Julkisivujen kunnostus</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Parvekkeiden saneeraus</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Elementtisaumojen uusinta</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Parvekekaiteet ja -lasitukset</span>
              </li>
            </ul>
            <Button variant="outline" size="sm" className="w-fit">
              Lue lisää
            </Button>
          </CardContent>
        </Card>

        {/* Hiekkapuhallus - NEW SERVICE */}
        <Card className="flex flex-col">
          <CardHeader className="pb-2">
            <div className="relative w-full h-48 mb-4 rounded-t-lg overflow-hidden">
              <Image src="/images/torbo-equipment.jpeg" alt="Hiekkapuhallus" fill className="object-cover" />
            </div>
            <CardTitle>Hiekkapuhallus</CardTitle>
            <CardDescription className="text-base">
              Märkähiekkapuhallus Torbo-menetelmällä monipuolisiin käyttökohteisiin uusimmalla TorboCar AC 84
              -kalustolla.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <ul className="space-y-2 mb-6 flex-1">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Märkähiekkapuhallus</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Soodapuhallus</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Lasipuhallus</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Pintojen karhennus ja puhdistus</span>
              </li>
            </ul>
            <Button variant="outline" size="sm" className="w-fit" asChild>
              <Link href="/referenssit/hiekkapuhallus">Lue lisää</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Korjausrakentaminen */}
        <Card className="flex flex-col">
          <CardHeader className="pb-2">
            <div className="relative w-full h-48 mb-4 rounded-t-lg overflow-hidden">
              <Image src="/images/korjausrakentaminen.jpeg" alt="Korjausrakentaminen" fill className="object-cover" />
            </div>
            <CardTitle>Korjausrakentaminen</CardTitle>
            <CardDescription className="text-base">
              Vanhojen rakennusten korjaus- ja kunnostustyöt niiden arvoa kunnioittaen.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <ul className="space-y-2 mb-6 flex-1">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Peruskorjaukset</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Tilamuutokset</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Talotekniikan uusiminen</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Kuntokartoitukset</span>
              </li>
            </ul>
            <Button variant="outline" size="sm" className="w-fit">
              Lue lisää
            </Button>
          </CardContent>
        </Card>

        {/* Vesikatto ja peltityöt */}
        <Card className="flex flex-col">
          <CardHeader className="pb-2">
            <div className="relative w-full h-48 mb-4 rounded-t-lg overflow-hidden">
              <Image src="/images/vesikatto.jpeg" alt="Vesikatto ja peltityöt" fill className="object-cover" />
            </div>
            <CardTitle>Vesikatto ja peltityöt</CardTitle>
            <CardDescription className="text-base">
              Vesikattojen uusiminen ja peltityöt ammattitaidolla ja laadukkailla materiaaleilla.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <ul className="space-y-2 mb-6 flex-1">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Vesikattojen uusiminen</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Kattoturvatuotteet</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Sadevesijärjestelmät</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Peltityöt ja pellitykset</span>
              </li>
            </ul>
            <Button variant="outline" size="sm" className="w-fit">
              Lue lisää
            </Button>
          </CardContent>
        </Card>

        {/* Huoneistoremontit & märkätilat */}
        <Card className="flex flex-col">
          <CardHeader className="pb-2">
            <div className="relative w-full h-48 mb-4 rounded-t-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0268-682x1024.jpg-xAjSYeGuinfxofxsYVakfA58d5VIRF.jpeg"
                alt="Huoneistoremontit & märkätilat"
                fill
                className="object-cover"
              />
            </div>
            <CardTitle>Huoneistoremontit & märkätilat</CardTitle>
            <CardDescription className="text-base">
              Asuntojen ja märkätilojen remontit avaimet käteen -periaatteella.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <ul className="space-y-2 mb-6 flex-1">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Kylpyhuoneremontit</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Keittiöremontit</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Huoneistoremontit</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Pintaremontit</span>
              </li>
            </ul>
            <Button variant="outline" size="sm" className="w-fit">
              Lue lisää
            </Button>
          </CardContent>
        </Card>

        {/* Museokohteet */}
        <Card className="flex flex-col">
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
            <CardDescription className="text-base">
              Historiallisten ja suojeltujen kohteiden kunnostustyöt niiden arvoa kunnioittaen.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <ul className="space-y-2 mb-6 flex-1">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Restaurointi</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Konservointi</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Rakenteiden vahvistaminen</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <span>Perinteiset rakennustekniikat</span>
              </li>
            </ul>
            <Button variant="outline" size="sm" className="w-fit">
              Lue lisää
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="mt-20 py-12 px-6 bg-muted/40 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Tarvitsetko apua projektissasi?</h2>
          <p className="text-muted-foreground mb-8 md:text-lg">
            Ota yhteyttä ja kerro meille tarpeistasi. Autamme sinua toteuttamaan projektisi alusta loppuun.
          </p>
          <Button size="lg" className="px-8">
            Pyydä tarjous
          </Button>
        </div>
      </div>
    </div>
  )
}

