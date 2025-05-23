import { useRef, useEffect, useState, FormEvent } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { PhoneCall, Mail, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ContactProps {
  onSetActive: () => void;
}

const Contact = ({ onSetActive }: ContactProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.3 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { language } = useLanguage();

  const texts = {
    sectionTitle: language === 'es' ? 'Contacto' : 'Get In Touch',
    sectionDesc: language === 'es'
      ? 'Puedes contactarme a través de los siguientes canales o enviarme un mensaje directamente.'
      : 'Feel free to reach out through the following channels or send me a message directly.',
    contactInfo: language === 'es' ? 'Información de Contacto' : 'Contact Information',
    phone: language === 'es' ? 'Teléfono' : 'Phone',
    email: language === 'es' ? 'Correo' : 'Email',
    location: language === 'es' ? 'Ubicación' : 'Location',
    locationValue: language === 'es' ? 'Granada, Granada, España' : 'Granada, Granada, Spain',
    availability: language === 'es' ? 'Disponibilidad' : 'Availability',
    available: language === 'es'
      ? 'Actualmente disponible para trabajo freelance y abierto a nuevas oportunidades laborales.'
      : "I'm currently available for freelance work and open to discussing new job opportunities.",
    workingDays: language === 'es' ? 'Contactame' : 'Contact me',
    workingHours: language === 'es' ? 'Horario' : 'Availability',
    daysValue: language === 'es' ? 'Lunes - Viernes' : 'Monday - Friday',
    hoursValue: language === 'es' ? '8:00 - 19:00' : '8:00 AM - 7:00 PM',
    formTitle: language === 'es' ? 'Envíame un mensaje' : 'Send Me a Message',
    yourName: language === 'es' ? 'Tu Nombre' : 'Your Name',
    yourEmail: language === 'es' ? 'Tu Correo' : 'Your Email',
    subject: language === 'es' ? 'Asunto' : 'Subject',
    message: language === 'es' ? 'Mensaje' : 'Message',
    namePlaceholder: language === 'es' ? 'Introduce tu nombre' : 'Enter your name',
    emailPlaceholder: language === 'es' ? 'Introduce tu E-mail' : 'Enter your E-mail',
    subjectPlaceholder: language === 'es' ? 'Introduce el asunto' : 'Enter the subject',
    messagePlaceholder: language === 'es'
      ? 'Me gustaría hablar contigo sobre...'
      : 'I would like to talk to you about...',
    send: language === 'es' ? 'Enviar Mensaje' : 'Send Message',
    sending: language === 'es' ? 'Enviando...' : 'Sending...',
    success: language === 'es'
      ? '¡Mensaje enviado correctamente! Te responderé pronto.'
      : "Message sent successfully! I'll get back to you soon.",
    error: language === 'es'
      ? 'No se pudo enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'
      : 'Failed to send message. Please try again later.',
  };

  useEffect(() => {
    if (isInView) {
      onSetActive();
    }
  }, [isInView, onSetActive]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xbloeygr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  return (
    <div 
      ref={ref}
      className="py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{texts.sectionTitle}</h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            {texts.sectionDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{texts.contactInfo}</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <PhoneCall className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{texts.phone}</h4>
                  <p className="text-gray-700 dark:text-gray-300">+34 656 631 539</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{texts.email}</h4>
                  <p className="text-gray-700 dark:text-gray-300">simonlav94@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{texts.location}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{texts.locationValue}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{texts.availability}</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {texts.available}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">{texts.workingDays}</p>
                  <p className="text-gray-900 dark:text-white font-medium">{texts.daysValue}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">{texts.workingHours}</p>
                  <p className="text-gray-900 dark:text-white font-medium">{texts.hoursValue}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{texts.formTitle}</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {texts.yourName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    placeholder={texts.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {texts.yourEmail}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    placeholder={texts.emailPlaceholder}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {texts.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  placeholder={texts.subjectPlaceholder}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {texts.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white resize-none"
                  placeholder={texts.messagePlaceholder}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/50 text-white font-medium rounded-lg px-6 py-3 transition-colors ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>{texts.sending}</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>{texts.send}</span>
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 rounded-lg text-center">
                  {texts.success}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300 rounded-lg text-center">
                  {texts.error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;