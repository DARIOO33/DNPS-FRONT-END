import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import { CheckBadgeIcon, ArrowPathIcon, HomeModernIcon, TrashIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Nos Services | DéBarras Pro',
  description: 'Découvrez nos services complets de débarras, nettoyage et recyclage en France',
}

export default function Services() {
  const services = [
    {
      title: "Débarras complet",
      description: "Vidage professionnel de tous types de biens avec tri sélectif et gestion des encombrants.",
      icon: <HomeModernIcon className="h-10 w-10 text-green-600" />,
      features: [
        "Évaluation gratuite sur place",
        "Enlèvement de tous types d'objets",
        "Traitement des encombrants",
        "Équipement professionnel"
      ],
      bgColor: "bg-green-50"
    },
    {
      title: "Nettoyage technique",
      description: "Services spécialisés pour situations sensibles avec protocoles sanitaires stricts.",
      icon: <ArrowPathIcon className="h-10 w-10 text-green-600" />,
      features: [
        "Désinfection complète",
        "Produits professionnels",
        "Normes sanitaires",
        "Intervention discrète"
      ],
      bgColor: "bg-blue-50"
    },
    {
      title: "Revalorisation écologique",
      description: "Gestion responsable des objets avec tri, recyclage et dons aux associations.",
      icon: <TrashIcon className="h-10 w-10 text-green-600" />,
      features: [
        "70% des objets réutilisés",
        "Partenariats locaux",
        "Certification de recyclage",
        "Bilan écologique"
      ],
      bgColor: "bg-amber-50"
    }
  ]

  const stats = [
    { value: "24h", label: "Délai moyen d'intervention" },
    { value: "70%", label: "Objets recyclés" },
  ]

  return (
    <>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/pattern.svg" 
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-28 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Solutions de débarras <br className="hidden md:block" />sur mesure
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Des services professionnels adaptés à chaque situation, avec une approche écologique et humaine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/devis" 
              className="bg-white hover:bg-gray-100 text-green-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-md"
            >
              Demander un devis
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-700 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Nos services
            </span>
            <h2 className="text-3xl text-black md:text-4xl font-bold mb-4">
              Des solutions <span className="text-green-700">clé en main</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous prenons en charge l'intégralité du processus pour vous simplifier la vie
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`${service.bgColor} rounded-2xl overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg`}
              >
                <div className="p-8">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-black">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckBadgeIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className='text-black'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/devis" 
                    className="inline-flex items-center text-green-700 font-semibold hover:text-green-800 group"
                  >
                    Demander un devis
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-black md:text-4xl font-bold mb-4">
              Comment <span className="text-green-700">ça marche</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus simple et transparent pour un service sans stress
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Contact",
                description: "Appel ou demande de devis en ligne"
              },
              {
                step: "2",
                title: "Évaluation",
                description: "Audit gratuit sur place ou à distance"
              },
              {
                step: "3",
                title: "Intervention",
                description: "Équipe professionnelle à votre service"
              },
              {
                step: "4",
                title: "Finalisation",
                description: "Remise des clés et certificat de recyclage"
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-4 top-0 h-full w-px bg-gray-200 md:hidden"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xl font-bold mb-4 relative">
                    {item.step}
                    {index < 3 && (
                      <div className="hidden md:block absolute -right-12 top-1/2 h-px w-12 bg-gray-200"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Témoignages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ils nous ont <span className="text-green-700">fait confiance</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Service exceptionnel. L'équipe a vidé la maison de ma mère en une journée avec beaucoup de respect et de professionnalisme.",
                author: "Marie D.",
                location: "Lyon",
                rating: 5
              },
              {
                quote: "Dans des circonstances difficiles, ils ont fait preuve d'une grande discrétion et humanité. Tout a été parfaitement nettoyé et désinfecté.",
                author: "Pierre T.",
                location: "Paris",
                rating: 5
              },
              {
                quote: "Impresssionné par leur engagement écologique. Plus de 70% des objets ont été donnés ou recyclés. Service rapide et tarif transparent.",
                author: "Sophie L.",
                location: "Marseille",
                rating: 4
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="font-medium">
                  <div className="text-gray-900">{testimonial.author}</div>
                  <div className="text-green-700">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à débarrasser votre espace ?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contactez-nous pour une évaluation gratuite et sans engagement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-100 text-green-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-md"
            >
              Nous contacter
            </Link>
            <Link 
              href="/devis" 
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}