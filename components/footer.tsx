import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, FileText } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-8 md:py12">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Logo and Company Info */}
          <div className="flex flex-col space-y-4">
            <Image src="/images/conska-logo.png" alt="Conska Oy Logo" width={120} height={30} className="h-auto" />
            <p className="text-sm text-muted-foreground">Rakentaminen on palveluala</p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Conska Oy. Kaikki oikeudet pidätetään.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Yhteystiedot</h3>
            <div className="flex items-start space-x-2">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm">
                  <strong>Conska Oy</strong>
                  <br />
                  Punttikuja 5<br />
                  00730 Helsinki
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-sm">041 3136339</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-sm">info@conska.fi</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-primary" />
              <Link href="/laskutusohje" className="text-sm hover:underline">
                Laskutusohjeet
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Palvelumme</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/palvelut" className="text-sm hover:underline">
                Kaikki palvelut
              </Link>
              <Link href="/referenssit/julkisivu-parvekesaneeraus" className="text-sm hover:underline">
                Julkisivu & parvekesaneeraus
              </Link>
              <Link href="/referenssit/hiekkapuhallus" className="text-sm hover:underline">
                Hiekkapuhallus
              </Link>
              <Link href="/referenssit/korjausrakentaminen" className="text-sm hover:underline">
                Korjausrakentaminen
              </Link>
              <Link href="/referenssit/huoneistoremontit-markatilat" className="text-sm hover:underline">
                Huoneistoremontit
              </Link>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Tietoa</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/yhteystiedot" className="text-sm hover:underline">
                Yhteystiedot
              </Link>
              <Link href="/kumppanit" className="text-sm hover:underline">
                Kumppanit
              </Link>
              <Link href="/evastekaytanto" className="text-sm hover:underline">
                Evästekäytäntö
              </Link>
              <Link href="/tietosuoja" className="text-sm hover:underline">
                Tietosuoja
              </Link>
              <Link href="/ehdot" className="text-sm hover:underline">
                Käyttöehdot
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

