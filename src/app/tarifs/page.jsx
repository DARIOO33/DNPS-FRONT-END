import Link from 'next/link'
import Header from '@/components/Header'

export const metadata = {
  title: 'Nos Tarifs | DéBarras Pro',
  description: 'Tarifs transparents pour nos services de débarras et nettoyage',
}

export default function Tarifs() {
  return (
    <>
      
      <main className="pt-24 pb-16">
        {/* Pricing Hero */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Tarifs Transparents</h1>
            <p className="text-xl max-w-3xl mx-auto">Des forfaits adaptés à chaque situation</p>
          </div>
        </section>

        {/* Pricing Tables */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Débarras standard",
                price: "€490",
                description: "Pour un volume moyen (studio/T2)",
                features: [
                  "Vidage complet",
                  "Tri des objets",
                  "Enlèvement des encombrants",
                  "Durée : 1 journée"
                ],
                popular: false
              },
              {
                title: "Débarras complet",
                price: "€790",
                description: "Maison jusqu'à 80m²",
                features: [
                  "Tout inclus dans Standard",
                  "+ Nettoyage basique",
                  "+ Valorisation des objets",
                  "Durée : 1-2 jours"
                ],
                popular: true
              },
              {
                title: "Solution sur mesure",
                price: "Sur devis",
                description: "Pour les grandes surfaces ou besoins spécifiques",
                features: [
                  "Audit gratuit",
                  "Solution personnalisée",
                  "Nettoyage professionnel",
                  "Certificat de recyclage"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`relative rounded-xl border-2 ${plan.popular ? 'border-green-600 shadow-lg' : 'border-gray-200'} overflow-hidden`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 text-sm font-bold">
                    Le plus choisi
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <div className="text-4xl font-bold mb-2">{plan.price}</div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/devis" 
                    className={`block text-center py-3 px-6 rounded-lg font-semibold ${plan.popular ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                  >
                    {plan.price === "Sur devis" ? "Demander un devis" : "Choisir ce forfait"}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="max-w-3xl mx-auto mt-16 bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Informations complémentaires</h3>
            <div className="space-y-4">
              <p>
                <strong>Tarifs indicatifs :</strong> Nos prix varient selon le volume, la localisation et la complexité de l'intervention. 
                Un audit gratuit nous permet de vous fournir un prix exact.
              </p>
              <p>
                <strong>Éco-participation :</strong> 10% de réduction si plus de 60% des objets sont recyclables ou donnés à des associations.
              </p>
              <p>
                <strong>Règlement :</strong> 30% à la commande, solde à la fin de l'intervention. Nous acceptons les chèques et virements.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}