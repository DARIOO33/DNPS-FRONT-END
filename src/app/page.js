import Header from "../components/Header";
import Link from "next/link";
import "./globals.css";
export default function Home() {
  const services = [
    {
      id: 1,
      title: "Débarras complet",
      description:
        "Vidage professionnel de maisons, appartements, caves et greniers avec gestion des encombrants.",
      startingPrice: 250,
      features: [
        "Évaluation gratuite",
        "Enlèvement de tous types d'objets",
        "Équipement professionnel",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Nettoyage technique",
      description:
        "Services spécialisés après décès, sinistres ou avant location avec protocoles sanitaires stricts.",
      startingPrice: 350,
      features: [
        "Désinfection complète",
        "Produits professionnels",
        "Normes sanitaires",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Revalorisation écologique",
      description:
        "Gestion responsable des objets avec tri, recyclage et dons aux associations partenaires.",
      startingPrice: 150,
      features: [
        "70% des objets réutilisés",
        "Partenariats locaux",
        "Certification de recyclage",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
          />
        </svg>
      ),
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center text-white overflow-hidden isolate">
        {/* Enhanced Background with Darker Treatment */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Darker background with stronger filter */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 animate-verySlowZoom"
            style={{
              backgroundImage: "url('/images/hero-bg.webp')",
              filter: "brightness(0.5) contrast(1.3) saturate(1.2)",
              willChange: "transform",
            }}
          ></div>

          {/* Stronger gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>

          {/* Subtle particle animation - reduced opacity */}
          <div className="absolute inset-0 opacity-15">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${
                    Math.random() * 10 + 10
                  }s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Content with adjusted spacing */}
        <div className="container px-4 mx-auto relative z-10 py-20">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="inline-block animate-fadeInUp delay-100">
                Obtenez votre devis
              </span>
              <br className="hidden md:block" />
              <span className="inline-block animate-fadeInUp delay-200">
                gratuit en 1 minute
              </span>
            </h1>

            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fadeInUp delay-300">
              Réponse sous 1h {" "}
              <span className="font-semibold text-green-300">
                Intervention sous 24h
              </span>{" "}
              Devis gratuit & sans engagement{" "}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-400">
              <Link
                href="/contact"
                className="relative overflow-hidden group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="relative z-10">Contact express</span>
                <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>

              <Link
                href="/services"
                className="relative overflow-hidden group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="relative z-10">Découvrir nos services</span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </div>
          </div>
        </div>

        {/* Fixed scroll indicator at bottom of viewport */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-50">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/80 rounded-full mt-2 animate-scrollIndicator"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              NOS SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Solutions <span className="text-green-600">professionnelles</span>{" "}
              adaptées
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des services complets pour tous vos besoins de débarras et
              nettoyage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Débarras complet",
                description:
                  "Vidage professionnel de maisons, appartements, caves et greniers avec gestion des encombrants.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                ),
                features: [
                  "Évaluation gratuite sur place",
                  "Enlèvement de tous types d'objets",
                  "Équipement professionnel",
                  "Traitement des encombrants",
                ],
                color: "text-green-600",
                bg: "bg-green-50",
              },
              {
                title: "Nettoyage technique",
                description:
                  "Services spécialisés après décès, sinistres ou avant location avec protocoles sanitaires stricts.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                ),
                features: [
                  "Désinfection complète",
                  "Produits professionnels",
                  "Normes sanitaires",
                  "Intervention discrète",
                ],
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                title: "Revalorisation écologique",
                description:
                  "Gestion responsable des objets avec tri, recyclage et dons aux associations partenaires.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                    />
                  </svg>
                ),
                features: [
                  "70% des objets réutilisés",
                  "Partenariats locaux",
                  "Certification de recyclage",
                  "Bilan écologique fourni",
                ],
                color: "text-amber-600",
                bg: "bg-amber-50",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 ${service.bg} opacity-90`}
                ></div>
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className={`${service.color} mb-6`}>{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-black">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className={`h-5 w-5 ${service.color} mr-2 mt-0.5 flex-shrink-0`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/devis"
                    className={`mt-auto inline-flex items-center ${service.color} font-semibold group`}
                  >
                    Demander un devis
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Decorative element */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 ${service.bg.replace(
                    "50",
                    "300"
                  )} group-hover:h-2 transition-all duration-300`}
                ></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
            >
              Voir tous nos services
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-green-600 text-3xl mb-4 ">✓</div>
              <h3 className="text-xl font-bold mb-3 text-black">
                Transparence
              </h3>
              <p className="text-gray-600">
                Devis gratuit sans engagement avec tarification claire avant
                toute intervention
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-green-600 text-3xl mb-4">♻</div>
              <h3 className="text-xl font-bold mb-3 text-black">Écologie</h3>
              <p className="text-gray-600">
                70% minimum des objets recyclés ou donnés à nos partenaires
                associatifs
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-green-600 text-3xl mb-4">⏱</div>
              <h3 className="text-xl font-bold mb-3 text-black">Rapidité</h3>
              <p className="text-gray-600">
                Interventions en 48h maximum après validation du devis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Questions sur <span className="text-green-600">nos tarifs</span>
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir sur notre politique tarifaire
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Comment sont calculés vos prix ?",
                answer:
                  "Nos tarifs dépendent du volume à débarrasser, de l'accessibilité des lieux et du type d'objets. Nous fournissons toujours une estimation précise après évaluation.",
              },
              {
                question: "Y a-t-il des frais cachés ?",
                answer:
                  "Absolument pas. Le prix convenu dans le devis est définitif, sauf modification explicite de votre part du scope de l'intervention.",
              },
              {
                question: "Proposez-vous des réductions ?",
                answer:
                  "Oui, pour les surfaces importantes (+100m²) ou les interventions récurrentes, nous accordons des remises pouvant aller jusqu'à 20%.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-900 group-open:text-green-600">
                      {item.question}
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 group-open:hidden"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <svg
                      className="h-5 w-5 text-green-600 hidden group-open:block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                  </summary>
                  <p className="mt-3 text-gray-600">{item.answer}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial with Price Reference */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-50 p-8 md:p-12 rounded-2xl shadow-sm border border-green-100">
              <div className="flex items-center mb-6">
                <div className="text-4xl text-green-600 mr-4">“</div>
                <div>
                  <p className="text-xl italic text-gray-800">
                    L'équipe a vidé notre maison de 120m² en moins d'une journée
                    pour 950€, ce qui était bien en dessous des autres devis
                    reçus. Leur professionnalisme et leur transparence sur les
                    tarifs nous ont convaincus.
                  </p>
                  <div className="mt-6 font-medium text-gray-900">
                    — Sophie M., Lyon
                  </div>
                  <div className="text-sm text-gray-500">
                    Débarras complet avec recyclage
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
