import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'email est invalide';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
      {submitSuccess ? (
        <div className="text-center p-6">
          <div className="text-green-500 mb-4">
            <svg className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-blue-900 mb-2">Message envoyé!</h3>
          <p className="text-slate-600">Nous vous répondrons dans les meilleurs délais.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="text-2xl font-semibold text-blue-900 mb-6">Contactez-nous</h3>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
              Nom complet*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md focus:ring-2 focus:outline-none ${
                errors.name ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-200 focus:border-blue-500'
              }`}
              placeholder="Votre nom"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>
          
          <div className="mb-4">
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
          
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-200 focus:border-blue-500 focus:outline-none"
              placeholder="Votre numéro de téléphone"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`w-full p-3 border rounded-md focus:ring-2 focus:outline-none ${
                errors.message ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-200 focus:border-blue-500'
              }`}
              placeholder="Votre message"
            ></textarea>
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
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
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;