import { Container, CountryList, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        const data = await getCountries();
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
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
