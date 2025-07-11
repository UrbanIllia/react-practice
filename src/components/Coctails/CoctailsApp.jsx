import { useEffect, useState } from 'react';
import { getCoctail } from './services/theCoctailAPI';
import ErrorMessage from '../DZ4/DZ/ErrorMessage/ErrorMessage';
import LoaderUser from '../DZ5/LMS/LoaderUser';
import CoctailsList from './CoctailsList';

const CoctailsApp = () => {
  const [coctails, setCoctails] = useState([]);
  const [isError, setIsError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      setIsError(null);
      try {
        setCoctails([]);
        setLoading(true);
        const response = await getCoctail(controller.signal);
        setCoctails(response);
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-gray-800 py-10"
      style={{
        backgroundImage: `url('/images/123.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {isError && (
        <p className="mb-6 text-red-400">
          <ErrorMessage error="Короче фігня якась)" />
        </p>
      )}
      {loading && <LoaderUser />}
      {coctails.length > 0 && (
        <ul className="grid max-w-[1000px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coctails.map((item) => (
            <CoctailsList key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CoctailsApp;
