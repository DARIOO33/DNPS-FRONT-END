import Header from '@/components/Header'
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Contact | DéBarras Pro',
  description: 'Contactez-nous pour un devis ou des informations',
}

export default function Contact() {
  return (
    <>
      <main className="pt-24 pb-16 bg-white ">
        {/* Contact Hero */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 opacity-90"></div>
          <div className="container mx-auto px-4 py-28 text-center relative z-10 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nous contacter</h1>
            <p className="text-xl max-w-3xl mx-auto">Une question ? Un projet ? Notre équipe vous répond en 1h</p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 order-2 md:order-1">
              <h2 className="text-2xl font-bold mb-6 text-black">Envoyez-nous un message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="devis">Demande de devis</option>
                    <option value="info">Demande d'information</option>
                    <option value="urgence">Intervention urgente</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-colors"
                >
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className='order-1 md:order-2'>
              <h2 className="text-2xl font-bold mb-6 text-black">Nos coordonnées</h2>
              <div className="space-y-6">
                <div className="flex items-start">


                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <PhoneIcon className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-black">Téléphone</h3>
                    <p className="text-gray-600">07 49 40 90 58</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <EnvelopeIcon className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-black">Email</h3>
                    <p className="text-gray-600">debarrasnettoyage75@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <ClockIcon className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-black">Horaires</h3>
                    <p className="text-gray-600">Lundi-Vendredi : 8h-20h</p>
                    <p className="text-gray-600">Samedi : 9h-19h</p>
                    <p className="text-gray-600">Urgences 7j/7</p>
                  </div>
                </div>
              </div>

              {/* Map */}

            </div>
          </div>
        </section>
      </main>
    </>
  )
}