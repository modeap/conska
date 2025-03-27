import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CookieSettings } from "@/components/cookie-consent"

export default function CookiePolicyPage() {
  return (
    <div className="container py-12 md:py-24">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Evästekäytäntö</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Tietoa siitä, miten käytämme evästeitä verkkosivustollamme
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link href="/">Takaisin etusivulle</Link>
          </Button>
        </div>

        <h2>Mitä evästeet ovat?</h2>
        <p>
          Evästeet ovat pieniä tekstitiedostoja, jotka tallennetaan laitteellesi (tietokone, tabletti tai mobiililaite)
          kun vierailet verkkosivustollamme. Evästeet auttavat meitä tunnistamaan laitteesi seuraavalla vierailullasi ja
          parantamaan käyttökokemustasi.
        </p>

        <h2>Miten käytämme evästeitä?</h2>
        <p>Käytämme evästeitä seuraaviin tarkoituksiin:</p>
        <ul>
          <li>
            <strong>Välttämättömät evästeet:</strong> Nämä evästeet ovat välttämättömiä verkkosivuston toiminnan
            kannalta, eikä niitä voi kytkeä pois käytöstä järjestelmissämme. Ne asetetaan yleensä vain toimenpiteiden
            vastauksena, kuten kieliasetukset tai lomakkeen täyttäminen. Voit asettaa selaimesi estämään nämä evästeet,
            mutta silloin jotkin sivuston osat eivät välttämättä toimi.
          </li>
          <li>
            <strong>Analytiikkaevästeet:</strong> Nämä evästeet auttavat meitä ymmärtämään, miten kävijät käyttävät
            sivustoamme. Voimme käyttää näitä tietoja parantaaksemme sivustoa ja käyttökokemusta.
          </li>
          <li>
            <strong>Markkinointievästeet:</strong> Näitä evästeitä käytetään seuraamaan kävijöitä verkkosivustoilla.
            Tarkoituksena on näyttää mainoksia, jotka ovat merkityksellisiä ja kiinnostavia yksittäiselle käyttäjälle.
          </li>
          <li>
            <strong>Asetusevästeet:</strong> Nämä evästeet mahdollistavat verkkosivuston tarjota parannettuja toimintoja
            ja personointia. Niitä voidaan asettaa meidän tai kolmansien osapuolten toimesta, joiden palveluita olemme
            lisänneet sivuillemme.
          </li>
        </ul>

        <h2>Evästeiden hallinta</h2>
        <p>
          Voit milloin tahansa muuttaa evästeasetuksiasi tai peruuttaa suostumuksesi evästeiden käyttöön. Useimmat
          selaimet antavat sinun hallita evästeitä selaimen asetusten kautta.
        </p>
        <div className="my-6">
          <CookieSettings />
        </div>

        <h2>GDPR ja tietosuoja</h2>
        <p>
          Noudatamme EU:n yleistä tietosuoja-asetusta (GDPR) ja kunnioitamme yksityisyyttäsi. Keräämme ja käsittelemme
          henkilötietojasi vain laillisiin tarkoituksiin ja suostumuksellasi.
        </p>

        <h3>Oikeutesi</h3>
        <p>GDPR:n mukaisesti sinulla on seuraavat oikeudet:</p>
        <ul>
          <li>Oikeus saada pääsy tietoihisi</li>
          <li>Oikeus tietojen oikaisemiseen</li>
          <li>Oikeus tietojen poistamiseen ("oikeus tulla unohdetuksi")</li>
          <li>Oikeus käsittelyn rajoittamiseen</li>
          <li>Oikeus siirtää tiedot järjestelmästä toiseen</li>
          <li>Vastustamisoikeus</li>
        </ul>

        <h3>Tietojen säilyttäminen</h3>
        <p>
          Säilytämme henkilötietojasi vain niin kauan kuin on tarpeen niiden tarkoitusten täyttämiseksi, joita varten ne
          on kerätty, mukaan lukien lakisääteisten, kirjanpidollisten tai raportointivaatimusten täyttäminen.
        </p>

        <h3>Tietojen jakaminen</h3>
        <p>Emme jaa henkilötietojasi kolmansille osapuolille ilman suostumustasi, paitsi jos laki sitä vaatii.</p>

        <h2>Yhteystiedot</h2>
        <p>Jos sinulla on kysyttävää evästekäytännöstämme tai tietosuojasta, ota yhteyttä:</p>
        <p>
          <strong>Conska Oy</strong>
          <br />
          Sähköposti: info@conska.fi
          <br />
          Puhelin: 041 3136339
          <br />
          Osoite: Punttikuja 5, 00730 Helsinki
        </p>

        <h2>Evästekäytännön päivitykset</h2>
        <p>
          Voimme päivittää tätä evästekäytäntöä ajoittain. Suosittelemme tarkistamaan tämän sivun säännöllisesti
          pysyäksesi ajan tasalla mahdollisista muutoksista.
        </p>
        <p>Viimeksi päivitetty: 26.3.2024</p>
      </div>
    </div>
  )
}

