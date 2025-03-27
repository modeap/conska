import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"

export default function BillingInstructionsPage() {
  return (
    <div className="container py-12 md:py-24">
      <Link href="/yhteystiedot" className="inline-flex items-center text-primary hover:underline mb-8">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Takaisin yhteystietoihin
      </Link>

      {/* Header Section */}
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Laskutusohje</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Tältä sivulta löydät Conska Oy:n laskutustiedot ja -ohjeet.
          </p>
        </div>
      </div>

      {/* Billing Information */}
      <div className="max-w-3xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Verkkolaskutustiedot</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Nimi</th>
                    <th className="text-left py-3 px-4">Verkkolaskuosoite</th>
                    <th className="text-left py-3 px-4">Operaattoritunnus</th>
                    <th className="text-left py-3 px-4">Välittäjä</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">Conska Oy</td>
                    <td className="py-3 px-4">003724696612</td>
                    <td className="py-3 px-4">003708599126</td>
                    <td className="py-3 px-4">Open Text Oy</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Yritystiedot</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Perustiedot</h3>
                <p className="text-muted-foreground mb-1">
                  <strong>Yritys:</strong> Conska Oy
                </p>
                <p className="text-muted-foreground mb-1">
                  <strong>Y-tunnus:</strong> 2469661-2
                </p>
                <p className="text-muted-foreground mb-1">
                  <strong>Osoite:</strong> Punttikuja 5, 00730 Helsinki
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Laskutuksen yhteystiedot</h3>
                <p className="text-muted-foreground mb-1">
                  <strong>Sähköposti:</strong> laskutus@conska.fi
                </p>
                <p className="text-muted-foreground mb-1">
                  <strong>Puhelin:</strong> 045 6606230
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Laskutusohjeet</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Pyydämme toimittamaan laskut ensisijaisesti verkkolaskuina yllä olevien tietojen mukaisesti. Mikäli
                verkkolaskutus ei ole mahdollista, voitte lähettää laskut sähköpostitse osoitteeseen laskutus@conska.fi.
              </p>
              <p className="text-muted-foreground">Laskussa tulee olla seuraavat tiedot:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Laskun päivämäärä</li>
                <li>Eräpäivä (14 päivää netto)</li>
                <li>Laskun numero</li>
                <li>Y-tunnus</li>
                <li>Arvonlisäverokanta</li>
                <li>Viitteenä projektin nimi tai numero</li>
                <li>Yhteyshenkilön nimi</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Mikäli teillä on kysyttävää laskutukseen liittyen, ottakaa yhteyttä laskutus@conska.fi tai soittakaa
                numeroon 045 6606230.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

