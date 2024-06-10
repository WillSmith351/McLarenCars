import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">McLaren Cars</h2>
            <p className="text-gray-400">© 2024 McLaren Cars. Tous droits réservés.</p>
          </div>
          <div>
            <div className="flex mb-4">
              <a href="#" className="text-white hover:text-orange-500 transition duration-300 mx-2">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#" className="text-white hover:text-orange-500 transition duration-300 mx-2">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="#" className="text-white hover:text-orange-500 transition duration-300 mx-2">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
            <div className="text-gray-400">
              <p className="flex items-center"><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> contact@mclarencars.com</p>
              <p className="flex items-center mt-2"><FontAwesomeIcon icon={faPhone} className="mr-2" /> +33 1 23 45 67 89</p>
              <p className="flex items-center mt-2"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> 123 Rue de Paris, Paris, France</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
