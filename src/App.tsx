import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { ArrowRight, CheckCircle, Zap, Clock, TrendingUp, Users, Star, MessageCircle } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-white font-space-grotesk">
                FS
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white/80 hover:text-white transition-colors">Startseite</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Methode</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Prozess</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Kundenstimmen</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Über uns</a>
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold">
              Erstgespräch vereinbaren
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 border-blue-500/30">
                <Zap className="w-4 h-4 mr-2" />
                Automatisierung die überzeugt
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight font-space-grotesk">
                So automatisieren{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  smarte Unternehmer
                </span>{" "}
                ihr Business
              </h1>
              
              <div className="text-xl text-white/90 space-y-2">
                <p className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  für mehr Umsatz
                </p>
                <p className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  weniger Stress
                </p>
                <p className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  und klare Prozesse
                </p>
              </div>
              
              <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 space-y-4">
                <p className="text-white/90 text-lg">
                  Schluss mit unnötigem Aufwand und ineffizienten Abläufen. Ich helfe 
                  <span className="text-orange-400 font-semibold"> Coaches, Dienstleistern, Agenturen und Unternehmern</span> dabei, 
                  ihr Tagesgeschäft zu automatisieren – komplett Done-for-You.
                </p>
                <p className="text-white/80">
                  Damit du dich wieder auf das konzentrieren kannst, was wirklich zählt: 
                  <span className="text-amber-400 font-semibold">Wachstum, Strategie und Kunden.</span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-lg px-8 py-6">
                  Kostenloses Erstgespräch vereinbaren
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Fallstudie ansehen
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-2xl blur-xl"></div>
              <Card className="relative bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="text-white">
                        <div className="text-3xl font-bold">95%</div>
                        <div className="text-sm text-white/70">Zeitersparnis</div>
                      </div>
                      <div className="text-white">
                        <div className="text-3xl font-bold">3x</div>
                        <div className="text-sm text-white/70">Mehr Umsatz</div>
                      </div>
                      <div className="text-white">
                        <div className="text-3xl font-bold">24/7</div>
                        <div className="text-sm text-white/70">Automation</div>
                      </div>
                    </div>
                    
                    <div className="h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <Clock className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                        <div className="text-white font-semibold">Effizienz</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                        <div className="text-white font-semibold">Wachstum</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <p className="text-white/80 text-lg mb-8">
              Automatisierung, die überzeugt – diese Unternehmen sind bereits einen Schritt voraus:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-6 h-20 flex items-center justify-center">
                <span className="text-white font-bold text-lg">DIAGONAL</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-6 h-20 flex items-center justify-center">
                <span className="text-white font-bold text-lg">DripDrip</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-6 h-20 flex items-center justify-center">
                <span className="text-white font-bold text-lg">SEMINARE</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-6 h-20 flex items-center justify-center">
                <span className="text-white font-bold text-lg">SOMMER&CO</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-6 h-20 flex items-center justify-center">
                <span className="text-white font-bold text-lg">PULP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 border-purple-500/30 mb-6">
              <Star className="w-4 h-4 mr-2" />
              Done-for-You Lösung
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-space-grotesk">
              Warum smarte Unternehmer auf{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Automatisierung
              </span>{" "}
              setzen
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Während andere noch manuell arbeiten, skalieren automatisierte Unternehmen mühelos 
              und gewinnen mehr Zeit für strategische Entscheidungen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-lg border-white/20 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Mehr Umsatz</h3>
                <p className="text-white/80">
                  Automatisierte Prozesse arbeiten 24/7 für dich. Mehr Leads, 
                  bessere Conversion, höhere Kundenzufriedenheit.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-900/40 to-teal-900/40 backdrop-blur-lg border-white/20 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Weniger Stress</h3>
                <p className="text-white/80">
                  Keine Überstunden mehr für Routineaufgaben. Fokus auf das, 
                  was wirklich wichtig ist – dein Business voranbringen.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg border-white/20 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Klare Prozesse</h3>
                <p className="text-white/80">
                  Standardisierte Abläufe, die immer funktionieren. 
                  Keine Fehler, keine Vergesslichkeit, nur Ergebnisse.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600/20 to-amber-600/20 backdrop-blur-sm border-y border-orange-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-space-grotesk">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Lass uns in einem kostenlosen Erstgespräch herausfinden, wie Automatisierung 
            dein Business auf das nächste Level bringt.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-lg px-12 py-6">
            Kostenloses Erstgespräch vereinbaren
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-4 font-space-grotesk">FS</div>
            <p className="text-white/60">
              © 2024 Business Automation Solutions. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App