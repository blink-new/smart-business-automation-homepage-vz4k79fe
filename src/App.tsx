import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { ArrowRight, Zap, Clock, TrendingUp, Users, Star, MessageCircle, Sparkles, BarChart3, Shield, Workflow, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

function App() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-black/50 backdrop-blur-2xl border-b border-white/10 sticky top-0 z-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur opacity-75"></div>
                  <div className="relative bg-black border border-white/20 rounded-lg px-4 py-2">
                    <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      FS
                    </span>
                  </div>
                </div>
              </motion.div>
              
              <div className="hidden md:flex items-center space-x-8">
                {["Startseite", "Methode", "Prozess", "Kundenstimmen", "Über uns"].map((item, index) => (
                  <motion.a 
                    key={item}
                    href="#" 
                    className="text-white/70 hover:text-white transition-all duration-300 relative group"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                ))}
              </div>
              
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold border-0 px-6 py-3 rounded-full relative overflow-hidden group">
                  <span className="relative z-10">Erstgespräch vereinbaren</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                className="space-y-8"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-200 border-cyan-500/30 px-4 py-2 text-base font-medium rounded-full">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Automatisierung der Zukunft
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  className="text-5xl lg:text-7xl font-bold text-white leading-tight"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  So automatisieren{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                    smarte Unternehmer
                    <motion.div 
                      className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 1.2 }}
                    ></motion.div>
                  </span>{" "}
                  ihr Business
                </motion.h1>
                
                <motion.div 
                  className="text-xl text-white/90 space-y-4"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {[
                    { icon: TrendingUp, text: "für mehr Umsatz", color: "text-green-400" },
                    { icon: Zap, text: "weniger Stress", color: "text-yellow-400" },
                    { icon: Shield, text: "und klare Prozesse", color: "text-blue-400" }
                  ].map((item, index) => (
                    <motion.p 
                      key={index}
                      className="flex items-center"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1 + index * 0.2 }}
                    >
                      <item.icon className={`w-6 h-6 ${item.color} mr-4 flex-shrink-0`} />
                      {item.text}
                    </motion.p>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="bg-gradient-to-r from-black/40 to-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  <p className="text-white/90 text-lg leading-relaxed">
                    Schluss mit unnötigem Aufwand und ineffizienten Abläufen. Ich helfe{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
                      Coaches, Dienstleistern, Agenturen und Unternehmern
                    </span>{" "}
                    dabei, ihr Tagesgeschäft zu automatisieren – komplett Done-for-You.
                  </p>
                  <p className="text-white/80">
                    Damit du dich wieder auf das konzentrieren kannst, was wirklich zählt:{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400 font-semibold">
                      Wachstum, Strategie und Kunden.
                    </span>
                  </p>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold text-lg px-8 py-6 rounded-full shadow-2xl shadow-purple-500/25 border-0">
                      Kostenloses Erstgespräch vereinbaren
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Fallstudie ansehen
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <motion.div 
                  className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                
                <Card className="relative bg-black/40 backdrop-blur-2xl border border-white/20 overflow-hidden rounded-3xl">
                  <CardContent className="p-10">
                    <div className="space-y-8">
                      <div className="grid grid-cols-3 gap-6">
                        {[
                          { value: "95%", label: "Zeitersparnis", color: "from-green-400 to-emerald-600" },
                          { value: "3x", label: "Mehr Umsatz", color: "from-blue-400 to-cyan-600" },
                          { value: "24/7", label: "Automation", color: "from-purple-400 to-pink-600" }
                        ].map((stat, index) => (
                          <motion.div 
                            key={index}
                            className="text-center"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.5 + index * 0.2 }}
                          >
                            <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                              {stat.value}
                            </div>
                            <div className="text-sm text-white/70 mt-1">{stat.label}</div>
                          </motion.div>
                        ))}
                      </div>
                      
                      <motion.div 
                        className="h-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, delay: 2 }}
                      ></motion.div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        {[
                          { icon: BarChart3, label: "Analytics", color: "from-orange-400 to-red-500" },
                          { icon: Workflow, label: "Automation", color: "from-teal-400 to-blue-500" }
                        ].map((item, index) => (
                          <motion.div 
                            key={index}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 2.2 + index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mx-auto mb-3`}>
                              <item.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-white font-semibold text-sm">{item.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/60 cursor-pointer"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </section>

        {/* Trust Section */}
        <motion.section 
          className="py-20 bg-black/30 backdrop-blur-sm border-y border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-white/80 text-xl mb-12">
                Automatisierung, die überzeugt – diese Unternehmen sind bereits einen Schritt voraus:
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {["DIAGONAL", "DripDrip", "SEMINARE", "SOMMER&CO", "PULP"].map((company, index) => (
                <motion.div 
                  key={company}
                  className="text-center"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-24 flex items-center justify-center border border-white/10 group hover:border-purple-500/30 transition-all duration-300">
                    <span className="text-white/60 group-hover:text-white font-bold text-lg transition-colors duration-300">
                      {company}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-20"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-gradient-to-r from-pink-500/20 to-violet-500/20 text-pink-200 border-pink-500/30 mb-8 px-6 py-3 text-lg rounded-full">
                <Star className="w-5 h-5 mr-2" />
                Done-for-You Lösung
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Warum smarte Unternehmer auf{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Automatisierung
                </span>{" "}
                setzen
              </h2>
              <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Während andere noch manuell arbeiten, skalieren automatisierte Unternehmen mühelos 
                und gewinnen mehr Zeit für strategische Entscheidungen.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: "Mehr Umsatz",
                  description: "Automatisierte Prozesse arbeiten 24/7 für dich. Mehr Leads, bessere Conversion, höhere Kundenzufriedenheit.",
                  gradient: "from-green-500 to-emerald-600",
                  bgGradient: "from-green-900/40 to-emerald-900/40"
                },
                {
                  icon: Clock,
                  title: "Weniger Stress", 
                  description: "Keine Überstunden mehr für Routineaufgaben. Fokus auf das, was wirklich wichtig ist – dein Business voranbringen.",
                  gradient: "from-blue-500 to-cyan-600",
                  bgGradient: "from-blue-900/40 to-cyan-900/40"
                },
                {
                  icon: Users,
                  title: "Klare Prozesse",
                  description: "Standardisierte Abläufe, die immer funktionieren. Keine Fehler, keine Vergesslichkeit, nur Ergebnisse.",
                  gradient: "from-purple-500 to-pink-600",
                  bgGradient: "from-purple-900/40 to-pink-900/40"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className={`bg-gradient-to-br ${benefit.bgGradient} backdrop-blur-2xl border-white/20 hover:border-white/40 transition-all duration-500 h-full group cursor-pointer overflow-hidden`}>
                    <CardContent className="p-10 text-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <motion.div 
                        className={`bg-gradient-to-r ${benefit.gradient} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 relative z-10`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <benefit.icon className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-6 relative z-10">{benefit.title}</h3>
                      <p className="text-white/80 text-lg leading-relaxed relative z-10">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          className="relative py-32 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"></div>
          
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Bereit für den{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                nächsten Schritt?
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Lass uns in einem kostenlosen Erstgespräch herausfinden, wie Automatisierung 
              dein Business auf das nächste Level bringt.
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold text-xl px-16 py-8 rounded-full shadow-2xl shadow-purple-500/25 border-0 relative overflow-hidden group">
                <span className="relative z-10 flex items-center">
                  Kostenloses Erstgespräch vereinbaren
                  <ArrowRight className="w-6 h-6 ml-3" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur opacity-75"></div>
                <div className="relative bg-black border border-white/20 rounded-lg px-6 py-3">
                  <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    FS
                  </span>
                </div>
              </div>
              <p className="text-white/60 text-lg">
                © 2024 Business Automation Solutions. Alle Rechte vorbehalten.
              </p>
            </motion.div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App