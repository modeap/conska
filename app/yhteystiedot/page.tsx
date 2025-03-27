import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone, FileText, Clock, Building, Users, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-24">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Conska Oy</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Yrityksemme toimisto sijaitsee Helsingissä osoitteessa Punttikuja 5. Ota yhteyttä ja kerro meille
            projektistasi. Toteutamme rakennushankkeesi ammattitaidolla alusta loppuun.
          </p>
        </div>
      </div>

      {/* Company Information */}
      <div className="mb-16 bg-muted/30 p-8 rounded-lg">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold mb-4">Tietoa yrityksestä</h2>
            <p className="text-muted-foreground mb-6">
              Conska Oy on vuonna 2012 perustettu rakennusalan yritys, joka tarjoaa kokonaisvaltaisia palveluita
              rakentamiseen ja remontointiin. Toimintamme perustuu ammattitaitoon, laatuun ja asiakaslähtöisyyteen.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <Building className="h-5 w-5 text-primary mt-1 mr-3" />
                <div>
                  <p className="font-medium">Conska Oy</p>
                  <p className="text-muted-foreground">Y-tunnus: 2469661-2</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary mt-1 mr-3" />
                <div>
                  <p className="font-medium">Toimiston aukioloajat</p>
                  <p className="text-muted-foreground">Arkisin 8:00 - 16:00</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-5 w-5 text-primary mt-1 mr-3" />
                <div>
                  <p className="font-medium">Henkilöstö</p>
                  <p className="text-muted-foreground">
                    Ammattitaitoinen tiimimme palvelee sinua kaikissa rakentamiseen liittyvissä tarpeissa
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="h-5 w-5 text-primary mt-1 mr-3" />
                <div>
                  <p className="font-medium">Sertifikaatit ja luokitukset</p>
                  <p className="text-muted-foreground">AAA-luottoluokitus, Suomen Vahvimmat -sertifikaatti</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                <Image src="/images/aaa-logo.png" alt="AAA-luottoluokitus" width={120} height={60} className="h-auto" />
              </div>
              <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                <Image
                  src="/images/finlands-strongest-platinum.svg"
                  alt="Suomen Vahvimmat"
                  width={100}
                  height={80}
                  className="h-auto"
                />
              </div>
              <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                <Image
                  src="/images/bisnode-dnb-riskiluokka-1.jpeg"
                  alt="Bisnode DNB"
                  width={80}
                  height={80}
                  className="h-auto"
                />
              </div>
              <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                <Image
                  src="/images/luotettava-kumppani-green.png"
                  alt="Luotettava Kumppani"
                  width={120}
                  height={40}
                  className="h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Persons Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Yhteyshenkilöt</h2>
        <p className="text-center text-muted-foreground mb-10">
          Ota yhteyttä suoraan yhteyshenkilöihimme. Olemme valmiina auttamaan sinua rakennusprojektisi jokaisessa
          vaiheessa.
        </p>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Muhamet Hajdari */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mt-4">Muhamet Hajdari</h3>
                <p className="text-primary font-medium mb-2">Aluejohtaja</p>
                <p className="text-muted-foreground mb-4">Rakennusinsinööri (Ylempi AMK)</p>

                <div className="flex items-center justify-center gap-2 mb-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>041 3136339</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>muhamet@conska.fi</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Uvejsa Seferi */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mt-4">Uvejsa Seferi</h3>
                <p className="text-primary font-medium mb-2">Toimisto ja taloushallinto</p>
                <p className="text-muted-foreground mb-4">Hallituksen puheenjohtaja</p>

                <div className="flex items-center justify-center gap-2 mb-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>045 6606230</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>uvejsa@conska.fi</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto mb-16">
        {/* Phone */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              Puhelin
            </CardTitle>
            <CardDescription>Soita meille arkisin 8-16</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium">041 3136339</p>
          </CardContent>
        </Card>

        {/* Email */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Sähköposti
            </CardTitle>
            <CardDescription>Lähetä meille sähköpostia</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium">info@conska.fi</p>
          </CardContent>
        </Card>

        {/* Office */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Toimipisteemme
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <p className="text-muted-foreground">
                <strong>Conska Oy</strong>
                <br />
                Punttikuja 5<br />
                00730 Helsinki
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Links Section */}
      <div className="text-center mb-16 flex flex-wrap justify-center gap-4">
        <div className="inline-flex items-center gap-2 bg-muted/40 p-4 rounded-lg">
          <FileText className="h-5 w-5 text-primary" />
          <span className="font-medium">Laskutustiedot:</span>
          <Button variant="link" asChild className="p-0">
            <Link href="/laskutusohje">Katso laskutusohjeet</Link>
          </Button>
        </div>

        <div className="inline-flex items-center gap-2 bg-muted/40 p-4 rounded-lg">
          <Users className="h-5 w-5 text-primary" />
          <span className="font-medium">Yhteistyö:</span>
          <Button variant="link" asChild className="p-0">
            <Link href="/kumppanit">Kumppanit ja alihankkijat</Link>
          </Button>
        </div>
      </div>

      {/* Map and Office Image */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Map - 2/3 width */}
        <div className="md:col-span-2 aspect-[16/9] w-full rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.1536568343365!2d25.0457423!3d60.2267957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469209c5a4c1c1c5%3A0x9e9a3c8a5d7a5c5a!2sPunttikuja%205%2C%2000730%20Helsinki!5e0!3m2!1sfi!2sfi!4v1616661234567!5m2!1sfi!2sfi"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Conska Oy sijainti kartalla"
            className="h-full"
          ></iframe>
        </div>

        {/* Office Image - 1/3 width */}
        <div className="relative aspect-[3/4] md:aspect-auto w-full rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yhteyst.jpg-6r6OyAKgEJhKYKZydTDP7ABHA6aMhg.jpeg"
            alt="Conska Oy toimisto ja pakettiauto"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 py-10 px-6 bg-muted/40 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ota yhteyttä ja kerro projektistasi</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Olemme valmiina auttamaan sinua rakennusprojektisi suunnittelussa ja toteutuksessa. Ota yhteyttä ja kerro
          meille tarpeistasi.
        </p>
        <Button size="lg">Pyydä tarjous</Button>
      </div>
    </div>
  )
}

