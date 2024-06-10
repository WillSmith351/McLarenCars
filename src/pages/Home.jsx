import React from 'react';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCar, 
  faGasPump, 
  faCogs, 
  faBriefcase, 
  faWrench, 
  faShieldAlt 
} from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';

const Home = () => {
  useDocumentTitle('McLaren Cars - Home');

  const models = [
    {
      image: '/images/mclaren-p1.jpg',
      title: 'McLaren P1',
      description: 'Un modèle emblématique combinant performance et innovation.',
    },
    {
      image: '/images/mclaren-720s.jpg',
      title: 'McLaren 720S',
      description: 'Découvrez l\'incroyable McLaren 720S, où l\'excellence rencontre la vitesse.',
    },
    {
      image: '/images/mclaren-senna.jpg',
      title: 'McLaren Senna',
      description: 'Un hommage à Ayrton Senna, alliant puissance et légèreté.',
    },
  ];

  const dailyPoints = [
    { icon: faCar, title: 'Confort de conduite', description: 'Un confort exceptionnel pour vos trajets quotidiens.' },
    { icon: faGasPump, title: 'Efficacité énergétique', description: 'Des performances optimales avec une consommation réduite.' },
    { icon: faCogs, title: 'Technologie avancée', description: 'Des fonctionnalités innovantes pour une expérience de conduite moderne.' },
    { icon: faBriefcase, title: 'Design élégant', description: 'Un style distinctif qui attire tous les regards.' },
    { icon: faWrench, title: 'Fiabilité', description: 'Une fiabilité inégalée pour une tranquillité d\'esprit au quotidien.' },
    { icon: faShieldAlt, title: 'Sécurité', description: 'Des systèmes de sécurité de pointe pour protéger ce qui compte le plus.' },
  ];

  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/video/McLaren765LT.mp4"
          autoPlay
          loop
          muted
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 p-8">
          <h1 className="text-[10vw] font-extrabold text-orange-500 text-center uppercase">McLaren</h1>
          <h2 className="text-4xl font-semibold text-white mt-4 text-center">Découvrez l'excellence automobile</h2>
          <p className="text-xl text-white mt-4 text-center max-w-3xl">
            Explorez nos modèles emblématiques, notre engagement en course et notre héritage inégalé
            en matière de performance et de design.
          </p>
          <Link to="/collection" className="mt-8">
            <button className="bg-orange-500 text-white text-xl font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition duration-300">
              Découvrir
            </button>
          </Link>
        </div>
      </div>
      <div className="p-8 bg-white">
        <h2 className="text-4xl font-bold mb-2 text-left">Nos derniers modèles</h2>
        <div className="h-1 w-24 bg-orange-500 mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model) => (
            <div key={model.title} className="bg-white rounded-lg overflow-hidden">
              <Link to="/collection">
                <img src={model.image} alt={model.title} className="w-full h-64 object-cover rounded-lg" />
              </Link>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
                <p className="text-gray-700">{model.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-8 bg-black text-orange-500">
        <h2 className="text-4xl font-bold mb-8 text-center">Votre Daily</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {dailyPoints.map((point, index) => (
            <div key={index} className="flex flex-col items-center">
              <FontAwesomeIcon icon={point.icon} className="text-white text-4xl mb-4" />
              <h3 className="text-lg font-normal">{point.title}</h3>
              <p className="text-sm font-light mt-2">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-8 bg-gray-100">
        <h2 className="text-4xl font-bold mb-2 text-left">À propos de nous</h2>
        <div className="h-1 w-24 bg-orange-500 mb-8"></div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img src="/images/mclaren_wheels.jpg" alt="McLaren Wheels" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg text-gray-700 mb-4">
              McLaren Automotive est une entreprise britannique qui conçoit et fabrique des voitures de sport de haute performance. Depuis notre création, nous avons toujours cherché à repousser les limites de la technologie et de l'ingénierie. Nos véhicules sont le fruit de décennies d'expérience en compétition, combinée à une passion inébranlable pour l'innovation et la performance. Chaque modèle McLaren est conçu pour offrir une expérience de conduite inégalée, alliant vitesse, agilité et esthétique. Notre engagement envers l'excellence se reflète dans chaque détail, de la conception initiale à la finition finale.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Nos ingénieurs travaillent sans relâche pour s'assurer que chaque voiture qui porte le badge McLaren représente le summum de la technologie automobile. Nous utilisons les matériaux les plus avancés et les techniques de fabrication les plus sophistiquées pour créer des voitures qui non seulement surpassent la concurrence en termes de performance, mais qui sont également un plaisir à conduire au quotidien. Chez McLaren, nous croyons que la véritable performance ne se mesure pas seulement en chiffres, mais aussi en sensations.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Rejoignez-nous dans notre quête incessante de l'excellence et découvrez ce qui fait de McLaren une marque à part. Que vous soyez un passionné de sport automobile ou simplement à la recherche d'une expérience de conduite exceptionnelle, McLaren vous offre un monde de possibilités où chaque trajet devient une aventure. Visitez notre collection pour en savoir plus sur nos derniers modèles et notre engagement envers l'innovation.
            </p>
            <Link to="/about" className="mt-8 inline-block">
              <button className="bg-orange-500 text-white text-xl font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition duration-300">
                En savoir plus
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
