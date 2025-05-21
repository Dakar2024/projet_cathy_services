import React, { useState } from 'react';
import { Calendar, Clock, Send } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    date: '',
    time: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    date: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const serviceTypes = [
    { value: '', label: 'Sélectionnez un service' },
    { value: 'nettoyage', label: 'Nettoyage' },
    { value: 'immobilier', label: 'Immobilier' },
    { value: 'accueil', label: 'Accueil' },
    { value: 'decoration', label: 'Décoration Événementielle' }
  ];

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      serviceType: '',
      date: ''
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'email est invalide';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
      isValid = false;
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Veuillez sélectionner un service';
      isValid = false;
    }

    if (!formData.date) {
      newErrors.date = 'La date est requise';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          serviceType: '',
          date: '',
          time: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
      {submitSuccess ? (
        <div className="text-center p-6">
          <div className="text-green-500 mb-4">
            <svg className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-blue-900 mb-2">Rendez-vous confirmé!</h3>
          <p className="text-slate-600">Nous vous contacterons prochainement pour confirmer votre rendez-vous.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
                Prénom*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md focus:ring-2 focus:outline-none ${
                  errors.firstName ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-200 focus:border-blue-500'
                }`}
                placeholder="Votre prénom"
              />
              {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
                Nom*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md focus:ring-2 focus:outline-none ${
                  errors.lastName ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-200 focus:border-blue-500'
                }`}
                placeholder="Votre nom"
              />
              {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md focus:ring-2 focus:outline-none ${
                  errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-200 focus:border-blue-500'
                }`}
                placeholder="Votre email"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                Téléphone*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md focus:ring-2 focus:outline-none ${
                  errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-200 focus:border-blue-500'
                }`}
                placeholder="Votre numéro de téléphone"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>
          </div>
          
          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-1">
              Type de service*
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md focus:ring-2 focus:outline-none ${
                errors.serviceType ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-200 focus:border-blue-500'
              }`}
            >
              {serviceTypes.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.serviceType && <p className="mt-1 text-sm text-red-500">{errors.serviceType}</p>}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-1">
                Date souhaitée*
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="date"
                  name="date"
                  min={today}
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md focus:ring-2 focus:outline-none ${
                    errors.date ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-200 focus:border-blue-500'
                  }`}
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
              </div>
              {errors.date && <p className="mt-1 text-sm text-red-500">{errors.date}</p>}
            </div>
            
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-slate-700 mb-1">
                Heure souhaitée
              </label>
              <div className="relative">
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-200 focus:border-blue-500 focus:outline-none"
                />
                <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
              Message ou détails supplémentaires
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-200 focus:border-blue-500 focus:outline-none"
              placeholder="Précisez vos besoins ou toute information utile..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn btn-primary flex items-center justify-center"
          >
            {isSubmitting ? (
              <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <Send size={20} className="mr-2" />
            )}
            {isSubmitting ? 'Envoi en cours...' : 'Prendre rendez-vous'}
          </button>
        </form>
      )}
    </div>
  );
};

export default BookingForm;