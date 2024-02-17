import { Container, ExchangeForm, Heading, Section } from 'components';
import { useSelector } from 'react-redux';
import { selectExchangeInfo } from '../reduxState/currency/selectors';

const Home = () => {
  const isError = false;
  const exchangeInfo = useSelector(selectExchangeInfo);

  return (
    <Section>
      <Container>
        <Heading info title="What currencies do you want to exchange?🙂" />
        <ExchangeForm />
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
        {exchangeInfo?.result}
      </Container>
    </Section>
  );
};

export default Home;
