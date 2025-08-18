"use client"
import { useState } from 'react';

export default function Devis() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    type: '',
    surface: '',
    description: '',
    urgency: '',
    photos: null,
    consent: false
  });
  const [errors, setErrors] = useState({});

  const toggleService = (service) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files : type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    } else if (!/^[0-9 +-]+$/.test(formData.phone)) {
      newErrors.phone = 'Numéro invalide';
    }
    if (!formData.address.trim()) newErrors.address = 'L\'adresse est requise';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.type) newErrors.type = 'Veuillez sélectionner un type de bien';
    if (!formData.surface) {
      newErrors.surface = 'La surface est requise';
    } else if (isNaN(formData.surface)) {
      newErrors.surface = 'La surface doit être un nombre';
    } else if (formData.surface <= 0) {
      newErrors.surface = 'La surface doit être positive';
    }
    if (!formData.description.trim()) newErrors.description = 'La description est requise';
    if (selectedServices.length === 0) newErrors.services = 'Veuillez sélectionner au moins un service';
    if (!formData.urgency) newErrors.urgency = 'Veuillez sélectionner un niveau d\'urgence';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (!formData.consent) newErrors.consent = 'Vous devez accepter les conditions';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate final step before submission
    if (!validateStep3()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 2000);
  };

  const nextStep = () => {
    if (currentStep === 1 && !validateStep1()) return;
    if (currentStep === 2 && !validateStep2()) return;
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => setCurrentStep(prev => prev - 1);

  return (
    <>
      <main className="pt-24 pb-16 bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-700 to-green-800 text-white py-24">
          <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')]"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Devis Gratuit</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6">Recevez une estimation précise en moins d’une heure</p>
            <div className="flex justify-center gap-2">
              {[1, 2, 3].map(step => (
                <div 
                  key={step}
                  className={`w-3 h-3 rounded-full transition-all ${currentStep >= step ? 'bg-white scale-110' : 'bg-white/50'}`}
                ></div>
              ))}
            </div>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="container mx-auto px-4 py-12 -mt-10">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-3">
              {[
                { step: 1, label: "Vos informations" },
                { step: 2, label: "Détails du projet" },
                { step: 3, label: "Confirmation" }
              ].map(item => (
                <div 
                  key={item.step}
                  className={`py-4 text-center border-b-4 ${currentStep >= item.step ? 'border-green-600 text-green-700' : 'border-gray-200 text-gray-400'}`}
                >
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Multi-step Form */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {submitSuccess ? (
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-6">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">Demande envoyée avec succès!</h2>
                <p className="text-gray-600 mb-6">Nous avons bien reçu votre demande de devis. Notre équipe vous contactera dans les plus brefs délais.</p>
                <button
                  onClick={() => {
                    setSubmitSuccess(false);
                    setCurrentStep(1);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      address: '',
                      type: '',
                      surface: '',
                      description: '',
                      urgency: '',
                      photos: null,
                      consent: false
                    });
                    setSelectedServices([]);
                  }}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none"
                >
                  Faire une nouvelle demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Step 1: Personal Info */}
                {currentStep === 1 && (
                  <div className="p-8 md:p-12">
                    <h2 className="text-2xl font-bold mb-6 text-black">Informations personnelles</h2>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet*</label>
                          <input 
                            type="text" 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all`}
                          />
                          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                          <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all`}
                          />
                          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone*</label>
                          <input 
                            type="tel" 
                            id="phone" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all`}
                          />
                          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                        </div>
                        <div>
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Adresse*</label>
                          <input 
                            type="text" 
                            id="address" 
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all`}
                          />
                          {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
                        </div>
                      </div>
                      <div className="flex justify-end pt-4">
                        <button
                          type="button"
                          onClick={nextStep}
                          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none"
                        >
                          Suivant
                          <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Project Details */}
                {currentStep === 2 && (
                  <div className="p-8 md:p-12">
                    <h2 className="text-2xl font-bold mb-6">Détails du projet</h2>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Type de bien*</label>
                          <select 
                            id="type" 
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border ${errors.type ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all`}
                          >
                            <option value="">Sélectionnez...</option>
                            <option value="house">Maison</option>
                            <option value="apartment">Appartement</option>
                            <option value="office">Bureau</option>
                            <option value="cellar">Cave/Grenier</option>
                            <option value="garden">Jardin</option>
                            <option value="construction">Après chantier</option>
                            <option value="other">Autre</option>
                          </select>
                          {errors.type && <p className="mt-1 text-sm text-red-600">{errors.type}</p>}
                        </div>
                        <div>
                          <label htmlFor="surface" className="block text-sm font-medium text-gray-700 mb-1">Surface (m²)*</label>
                          <input 
                            type="number" 
                            id="surface" 
                            name="surface"
                            value={formData.surface}
                            onChange={handleChange}
                            min="1"
                            className={`w-full px-4 py-3 border ${errors.surface ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all`}
                          />
                          {errors.surface && <p className="mt-1 text-sm text-red-600">{errors.surface}</p>}
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description détaillée*</label>
                        <textarea 
                          id="description" 
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          rows={4} 
                          className={`w-full px-4 py-3 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all`}
                          placeholder="Décrivez ce qui doit être débarrassé, l'état des lieux, les objets volumineux..."
                        ></textarea>
                        {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">Services nécessaires*</label>
                        {errors.services && <p className="mt-1 text-sm text-red-600 mb-2">{errors.services}</p>}
                        <div className="grid md:grid-cols-2 gap-4">
                          {[
                            "Débarras complet",
                            "Nettoyage après débarras",
                            "Tri et recyclage",
                            "Nettoyage après décès",
                            "Déménagement des objets",
                            "Autre"
                          ].map((service, index) => (
                            <div 
                              key={index} 
                              className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${selectedServices.includes(service) ? 'bg-green-50 border border-green-200' : 'bg-gray-50 hover:bg-gray-100'}`}
                              onClick={() => toggleService(service)}
                            >
                              <input 
                                type="checkbox" 
                                id={`service-${index}`}
                                checked={selectedServices.includes(service)}
                                onChange={() => toggleService(service)}
                                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                              />
                              <label htmlFor={`service-${index}`} className="ml-2 text-sm text-gray-700 cursor-pointer">
                                {service}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">Urgence*</label>
                        {errors.urgency && <p className="mt-1 text-sm text-red-600 mb-2">{errors.urgency}</p>}
                        <div className="grid md:grid-cols-3 gap-4">
                          {[
                            { value: "normal", label: "Sous 1 semaine", desc: "Standard" },
                            { value: "urgent", label: "Sous 48h", desc: "Supplément urgent" },
                            { value: "flexible", label: "Date flexible", desc: "Meilleur prix" }
                          ].map((option, index) => (
                            <div key={index} className="relative">
                              <input 
                                type="radio" 
                                id={`urgency-${option.value}`}
                                name="urgency"
                                value={option.value}
                                checked={formData.urgency === option.value}
                                onChange={handleChange}
                                className="sr-only peer"
                              />
                              <label 
                                htmlFor={`urgency-${option.value}`}
                                className="block p-4 border border-gray-300 rounded-lg cursor-pointer peer-checked:border-green-500 peer-checked:bg-green-50 hover:bg-gray-50 transition-all"
                              >
                                <div className="font-medium">{option.label}</div>
                                <div className="text-sm text-gray-500">{option.desc}</div>
                              </label>
                              <div className="absolute top-3 right-3 hidden peer-checked:block">
                                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between pt-4">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                        >
                          <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Précédent
                        </button>
                        <button
                          type="button"
                          onClick={nextStep}
                          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none"
                        >
                          Suivant
                          <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Confirmation */}
                {currentStep === 3 && (
                  <div className="p-8 md:p-12">
                    <h2 className="text-2xl font-bold mb-6">Confirmation</h2>
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-medium text-lg mb-4">Récapitulatif de votre demande</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">Nom</h4>
                            <p>{formData.name}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">Email</h4>
                            <p>{formData.email}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">Téléphone</h4>
                            <p>{formData.phone}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">Adresse</h4>
                            <p>{formData.address}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">Type de bien</h4>
                            <p>
                              {formData.type === 'house' ? 'Maison' :
                               formData.type === 'apartment' ? 'Appartement' :
                               formData.type === 'office' ? 'Bureau' :
                               formData.type === 'cellar' ? 'Cave/Grenier' :
                               formData.type === 'garden' ? 'Jardin' :
                               formData.type === 'construction' ? 'Après chantier' :
                               formData.type === 'other' ? 'Autre' : ''}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">Surface</h4>
                            <p>{formData.surface} m²</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">Services</h4>
                            <p>{selectedServices.join(', ')}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">Urgence</h4>
                            <p>
                              {formData.urgency === 'normal' ? 'Sous 1 semaine' :
                               formData.urgency === 'urgent' ? 'Sous 48h' :
                               formData.urgency === 'flexible' ? 'Date flexible' : ''}
                            </p>
                          </div>
                        </div>
                      </div>
                      
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
                            <div className="flex text-sm text-gray-600 justify-center">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none"
                              >
                                <span>Uploader des fichiers</span>
                                <input 
                                  id="file-upload" 
                                  name="photos"
                                  type="file" 
                                  className="sr-only" 
                                  multiple 
                                  onChange={handleChange}
                                />
                              </label>
                              <p className="pl-1">ou glisser-déposer</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF jusqu'à 10MB</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <input
                          id="consent"
                          name="consent"
                          type="checkbox"
                          checked={formData.consent}
                          onChange={handleChange}
                          className={`h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-1 ${errors.consent ? 'border-red-500' : ''}`}
                        />
                        <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                          J'accepte que mes données soient utilisées pour traiter ma demande. J'ai pris connaissance de la politique de confidentialité.*
                        </label>
                      </div>
                      {errors.consent && <p className="mt-1 text-sm text-red-600">{errors.consent}</p>}
                      
                      <div className="flex justify-between pt-4">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                        >
                          <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Précédent
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${isSubmitting ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'} focus:outline-none`}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Envoi en cours...
                            </>
                          ) : 'Envoyer ma demande'}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </section>

        {/* Process Steps */}
        <section className="container mx-auto px-4 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Comment ça marche ?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Demande de devis",
                  description: "Remplissez notre formulaire simple en quelques minutes"
                },
                {
                  step: "2",
                  title: "Évaluation rapide",
                  description: "Nos experts analysent votre demande en moins d’une heure"
                },
                {
                  step: "3",
                  title: "Devis personnalisé",
                  description: "Recevez une offre détaillée sans engagement"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="relative mx-auto mb-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-green-700 ">{item.step}</span>
                    </div>
                    {index < 2 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-16 h-1 bg-green-100 transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}