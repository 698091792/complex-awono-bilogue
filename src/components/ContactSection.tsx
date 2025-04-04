import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import Section from "./Section";
import Button from "./Button";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <Section light id="contact">
      <Header />
      <div className="container mx-auto">
        
        <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="heading-lg mb-4 animate-reveal">{t("contactTitle")}</h2>
          <p className="text-muted-foreground ">
            {t("contactSubtitle")}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
          <div className="lg:col-span-2 space-y-8 ">
            <div className="bg-white rounded-xl p-6 shadow-subtle border border-border/50">
              <h3 className="heading-sm mb-6">{t("contactInfo")}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-md text-lime-500 flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{t("contactAddressTitle")}</h4>
                    <p className="text-muted-foreground">{t("contactAddress")}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-md text-lime-500 flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{t("contactPhoneTitle")}</h4>
                    <p className="text-muted-foreground">{t("contactPhone")}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-md text-lime-500 flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{t("contactEmailTitle")}</h4>
                    <p className="text-muted-foreground">{t("contactEmailValue")}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-2">{t("contactHoursTitle")}</h4>
                <div className="text-muted-foreground">
                  <p>{t("contactHoursWeekday")}</p>
                  <p>{t("contactHoursWeekend")}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 ">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-subtle border border-border/50">
              <h3 className="heading-sm mb-6">{t("contactMessageTitle")}</h3>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
                  <p className="font-medium">{t("contactMessageSuccess")}</p>
                  <p className="text-sm">{t("contactMessageSuccessDetail")}</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t("contactName")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-colors"
                      placeholder={t("contactNamePlaceholder")}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t("contactEmailLabel")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-colors"
                      placeholder={t("contactEmailPlaceholder")}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    {t("contactPhoneOptional")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-colors"
                    placeholder={t("contactPhonePlaceholder")}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t("contactMessage")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder={t("contactMessagePlaceholder")}
                  ></textarea>
                </div>
                
                <div>
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t("contactSending")}
                      </span>
                    ) : (
                      <span className="flex items-center">
                        {t("contactSend")}
                        <Send size={16} className="ml-2" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </Section>
  );
};

export default ContactSection;
