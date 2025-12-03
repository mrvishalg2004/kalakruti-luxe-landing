import whatsappIcon from "@/assets/whatsapp-icon.svg";

const WhatsAppButton = () => {
  const phoneNumber = "919225546913"; // +91 92255 46913 in international format without spaces
  const presetMessage = encodeURIComponent("Hi..");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${presetMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulsing Ring Effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        
        {/* Main Button */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 hover:scale-110 transition-all duration-300 cursor-pointer">
          <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
            Chat with us on WhatsApp
          </div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
