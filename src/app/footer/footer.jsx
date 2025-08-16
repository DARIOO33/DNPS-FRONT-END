export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">DéBarras<span className="font-light">Pro</span></h3>
            <p className="text-gray-400 mb-4">
              Service professionnel de débarras et nettoyage dans toute la France.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social}
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center">
                    {/* Ici vous pourriez utiliser des icônes réelles */}
                    {social.charAt(0).toUpperCase()}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {[
                ['Accueil', '/'],
                ['Services', '/services'],
                ['Contact', '/contact'],
                ['Devis', '/devis'],
              ].map(([title, path]) => (
                <li key={title}>
                  <a
                    href={path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos services</h4>
            <ul className="space-y-2">
              {[
                'Débarras maison',
                'Vidage appartement',
                'Nettoyage après décès',
                'Débarras cave/grenier',
                'Recyclage écologique',
                'Nettoyage professionnel'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-gray-400 space-y-3">
              <p>12 Rue du Débarras<br />75000 Paris</p>
              <p>
                <a href="tel:0749409058" className="hover:text-white transition-colors">
                  07 49 40 90 58
                </a>
              </p>
              <p>
                <a href="mailto:contact@debarraspro.fr" className="hover:text-white transition-colors">
                  contact@debarraspro.fr
                </a>
              </p>
              <p>Lundi-Vendredi : 8h-20h</p>
              <p>Samedi : 9h-19h</p>
              <p>Urgences 7j/7</p>





            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DéBarrasPro. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Conditions générales
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
