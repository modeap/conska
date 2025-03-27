"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

type CookieConsent = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

const defaultConsent: CookieConsent = {
  necessary: true, // Aina päällä, ei voi poistaa
  analytics: false,
  marketing: false,
  preferences: false,
}

export default function CookieConsentBanner() {
  const [open, setOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent)

  useEffect(() => {
    // Tarkista onko käyttäjä jo hyväksynyt evästeet
    const savedConsent = localStorage.getItem("cookieConsent")

    if (!savedConsent) {
      // Jos ei ole hyväksynyt, näytä banneri
      setShowBanner(true)
    } else {
      // Jos on hyväksynyt, aseta tallennetut asetukset
      setConsent(JSON.parse(savedConsent))
    }
  }, [])

  const handleAcceptAll = () => {
    const fullConsent: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    }

    saveConsent(fullConsent)
  }

  const handleAcceptNecessary = () => {
    saveConsent(defaultConsent)
  }

  const handleCustomize = () => {
    setShowCustomize(true)
  }

  const handleSavePreferences = () => {
    saveConsent(consent)
  }

  const saveConsent = (consentData: CookieConsent) => {
    localStorage.setItem("cookieConsent", JSON.stringify(consentData))
    setConsent(consentData)
    setShowBanner(false)
    setShowCustomize(false)

    // Tässä voisi olla logiikka eri evästeiden asettamiselle
    // esim. Google Analytics vain jos analytics: true
  }

  const openSettings = () => {
    setShowBanner(true)
    setShowCustomize(true)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Evästebanneri */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t shadow-lg">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Tämä sivusto käyttää evästeitä</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Käytämme evästeitä parantaaksemme sivuston käyttökokemusta ja analysoidaksemme liikennettä. Voit valita,
                mitä evästeitä sallit.{" "}
                <Link href="/evastekaytanto" className="text-primary hover:underline">
                  Lue lisää evästeistä
                </Link>
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {!showCustomize ? (
                <>
                  <Button variant="outline" size="sm" onClick={handleAcceptNecessary}>
                    Vain välttämättömät
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleCustomize}>
                    Mukauta
                  </Button>
                  <Button size="sm" onClick={handleAcceptAll}>
                    Hyväksy kaikki
                  </Button>
                </>
              ) : (
                <div className="w-full space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="necessary" checked disabled />
                      <label
                        htmlFor="necessary"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Välttämättömät (aina päällä)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="analytics"
                        checked={consent.analytics}
                        onCheckedChange={(checked) => setConsent({ ...consent, analytics: checked === true })}
                      />
                      <label htmlFor="analytics" className="text-sm font-medium leading-none">
                        Analytiikka
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="marketing"
                        checked={consent.marketing}
                        onCheckedChange={(checked) => setConsent({ ...consent, marketing: checked === true })}
                      />
                      <label htmlFor="marketing" className="text-sm font-medium leading-none">
                        Markkinointi
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="preferences"
                        checked={consent.preferences}
                        onCheckedChange={(checked) => setConsent({ ...consent, preferences: checked === true })}
                      />
                      <label htmlFor="preferences" className="text-sm font-medium leading-none">
                        Asetukset
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" onClick={() => setShowCustomize(false)}>
                      Takaisin
                    </Button>
                    <Button size="sm" onClick={handleSavePreferences}>
                      Tallenna asetukset
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Tämä komponentti voidaan käyttää evästeasetuksien avaamiseen muualta sivustolta
export function CookieSettings() {
  const openCookieSettings = () => {
    // Poista tallennettu suostumus, jolloin banneri näytetään uudelleen
    localStorage.removeItem("cookieConsent")
    // Päivitä sivu, jotta banneri tulee näkyviin
    window.location.reload()
  }

  return (
    <Button variant="link" onClick={openCookieSettings} className="p-0">
      Evästeasetukset
    </Button>
  )
}

