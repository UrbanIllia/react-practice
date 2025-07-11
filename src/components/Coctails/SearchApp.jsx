import { useEffect, useState } from 'react';
import SearchCoctailBar from './SearchCoctailBar';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getCocktailsByQuery } from './services/theCoctailAPI';
import CoctailsList from './CoctailsList';
import LoaderUser from '../DZ5/LMS/LoaderUser';

const SearchApp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [coctails, setCoctails] = useState(null);
  const [loader, setLoader] = useState(false);
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoader(true);
        const response = await getCocktailsByQuery(query);
        setCoctails(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    getData();
  }, [query]);

  const handleSearch = (newQuery) => {
    searchParams.set('query', newQuery);
    setSearchParams(searchParams);
  };
  if (!coctails) return <p>Loading or no data...</p>;
  if (loader) return <LoaderUser />;
  return (
    <div
      className="flex min-h-screen flex-col items-center"
      style={{
        backgroundImage: `url('/images/124.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <SearchCoctailBar handleSearch={handleSearch} />
      {coctails.length > 0 && (
        <ul className="grid max-w-[1000px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coctails.map((item) => (
            <CoctailsList key={item.id} item={item} state={location} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchApp;
