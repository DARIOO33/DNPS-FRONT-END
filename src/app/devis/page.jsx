import Header from '@/components/Header'

export const metadata = {
  title: 'Demande de Devis | DéBarras Pro',
  description: 'Obtenez un devis gratuit pour vos besoins de débarras',
}

export default function Devis() {
  return (
    <>
      
      <main className="pt-24 pb-16">
        {/* Devis Hero */}
        <section className="bg-green-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Devis Gratuit</h1>
            <p className="text-xl max-w-3xl mx-auto">Recevez une estimation précise sous 24h</p>
          </div>
        </section>

        {/* Devis Process */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  step: "1",
                  title: "Décrivez votre besoin",
                  description: "Remplissez notre formulaire en 2 minutes"
                },
                {
                  step: "2",
                  title: "Évaluation",
                  description: "Nous analysons votre demande"
                },
                {
                  step: "3",
                  title: "Devis personnalisé",
                  description: "Recevez une offre précise par email"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Devis Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-8">Formulaire de demande</h2>
              <form className="space-y-6">
                {/* Personal Info */}
                <fieldset className="border border-gray-200 rounded-lg p-6">
                  <legend className="px-2 text-lg font-medium text-gray-700">Informations personnelles</legend>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet*</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone*</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Adresse*</label>
                      <input 
                        type="text" 
                        id="address" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </fieldset>

                {/* Project Details */}
                <fieldset className="border border-gray-200 rounded-lg p-6">
                  <legend className="px-2 text-lg font-medium text-gray-700">Détails du projet</legend>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Type de bien*</label>
                      <select 
                        id="type" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        required
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="house">Maison</option>
                        <option value="apartment">Appartement</option>
                        <option value="office">Bureau</option>
                        <option value="cellar">Cave/Grenier</option>
                        <option value="cellar">Jardin</option>
                        <option value="cellar">Après chantier</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="surface" className="block text-sm font-medium text-gray-700 mb-1">Surface (m²)*</label>
                      <input 
                        type="number" 
                        id="surface" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description détaillée*</label>
                      <textarea 
                        id="description" 
                        rows="4" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        placeholder="Décrivez ce qui doit être débarrassé, l'état des lieux, les objets volumineux..."
                        required
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Services nécessaires*</label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          "Débarras complet",
                          "Nettoyage après débarras",
                          "Tri et recyclage",
                          "Nettoyage après décès",
                          "Déménagement des objets",
                          "Autre"
                        ].map((service, index) => (
                          <div key={index} className="flex items-center">
                            <input 
                              type="checkbox" 
                              id={`service-${index}`}
                              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            />
                            <label htmlFor={`service-${index}`} className="ml-2 text-sm text-gray-700">
                              {service}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">Urgence*</label>
                      <select 
                        id="urgency" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        required
                      >
                        <option value="normal">Sous 1 semaine</option>
                        <option value="urgent">Sous 48h (supplément urgent)</option>
                        <option value="flexible">Date flexible</option>
                      </select>
                    </div>
                  </div>
                </fieldset>

                {/* Photos Upload */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <label className="block text-lg font-medium text-gray-700 mb-4">Ajouter des photos (optionnel)</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none"
                        >
                          <span>Uploader des fichiers</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                        </label>
                        <p className="pl-1">ou glisser-déposer</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF jusqu'à 10MB</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                    J'accepte que mes données soient utilisées pour traiter ma demande *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-800 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors shadow-md"
                >
                  Envoyer ma demande de devis
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}