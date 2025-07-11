import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getCocktailDetails } from './services/theCoctailAPI';
import CocktailInfo from './CocktailInfo';
import { BackLink } from './BackLink';
import LoaderUser from '../DZ5/LMS/LoaderUser';
import ErrorMessage from '../DZ4/DZ/ErrorMessage/ErrorMessage';

const CoctailDetails = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { coctailId } = useParams();
  const backLinkHref = location.state ?? '/coctails';

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getCocktailDetails(coctailId);
        setDetails(response);
      } catch (error) {
        setError(error.message || 'Failed to fetch cocktail details');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [coctailId]);

  if (loading) return <LoaderUser />;
  if (error) return <ErrorMessage error={error} />;
  if (!details) return <p>Loading or no data...</p>;

  return (
    <div>
      <CocktailInfo {...details} backLinkHref={backLinkHref} />
    </div>
  );
};

export default CoctailDetails;
