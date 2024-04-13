import {
  Container,
  CountryList,
  Loader,
  SearchForm,
  Section,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const region = searchParams.get('region') ?? '';

  useEffect(() => {
    if (!region) return;

    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        const data = await fetchByRegion(region);
        console.log(data);
        setCountries(data);
      } catch (e) {
        console.log('error');
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
    //
  }, [region]);

  const handleSubmit = region => {
    setSearchParams({ region });
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSubmit} />
        <CountryList countries={countries} />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
