import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import GalleryItem from '../components/ui/GalleryItem';
import { galleryItems, GalleryItem as GalleryItemType } from '../data/galleryData';

const Gallery: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = searchParams.get('filter') || 'all';
  
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [filteredItems, setFilteredItems] = useState<GalleryItemType[]>(galleryItems);

  useEffect(() => {
    if (initialFilter && initialFilter !== 'all') {
      setActiveFilter(initialFilter);
      setFilteredItems(galleryItems.filter(item => item.category === initialFilter));
    } else {
      setActiveFilter('all');
      setFilteredItems(galleryItems);
    }
  }, [initialFilter]);

  const filterCategories = [
    { value: 'all', label: 'Tous' },
    { value: 'nettoyage', label: 'Nettoyage' },
    { value: 'immobilier', label: 'Immobilier' },
    { value: 'accueil', label: 'Accueil' },
    { value: 'decoration', label: 'Décoration' }
  ];

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    
    if (filter === 'all') {
      setFilteredItems(galleryItems);
      setSearchParams({});
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === filter));
      setSearchParams({ filter });
    }
  };

  return (
    <>
      <div className="pt-20 bg-blue-900 text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Réalisations</h1>
            <p className="text-xl text-blue-100">
              Découvrez nos projets récents dans les domaines du nettoyage, de l'immobilier, de l'accueil et de la décoration événementielle.
            </p>
          </div>
        </div>
      </div>

      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-white rounded-lg shadow-md">
              {filterCategories.map(category => (
                <button
                  key={category.value}
                  onClick={() => handleFilterChange(category.value)}
                  className={`px-4 py-2 rounded-md transition-all duration-300 ${
                    activeFilter === category.value
                      ? 'bg-blue-600 text-white'
                      : 'bg-transparent text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <GalleryItem
                key={item.id}
                imageSrc={item.imageSrc}
                title={item.title}
                description={item.description}
                category={
                  item.category === 'nettoyage' ? 'Nettoyage' :
                  item.category === 'immobilier' ? 'Immobilier' :
                  item.category === 'accueil' ? 'Accueil' :
                  'Décoration'
                }
                delay={index * 100}
              />
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-slate-500">Aucun résultat trouvé pour cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 md:p-12 text-white">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Vous avez un projet similaire ?
              </h2>
              <p className="text-lg mb-8 text-blue-100">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/booking" className="btn bg-white text-blue-700 hover:bg-blue-50">
                  Prendre rendez-vous
                </a>
                <a href="/contact" className="btn bg-blue-700 text-white border border-white hover:bg-blue-600">
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;