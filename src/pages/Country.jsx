import { Container, CountryInfo, GoBackBtn, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';
// import { Link } from 'react-router-dom';

export const Country = () => {
  const { countryId } = useParams();

  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCountry(countryId);
        console.log(data);
        setCountry(data);
      } catch (e) {
        console.log('error');
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
    //
  }, [countryId]);
  // ;
  return (
    <Section>
      <Container>
        <GoBackBtn />
        {country && <CountryInfo country={country} />}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
