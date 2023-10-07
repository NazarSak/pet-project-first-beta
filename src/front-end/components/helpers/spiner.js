import { FidgetSpinner } from 'react-loader-spinner';
import { SpinerContainer } from '../header/header.styled';

export const Spiner = () => {
  return (
    <SpinerContainer>
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={['#ff0000', '#00ff00', '#0000ff']}
        backgroundColor="#F4442E"
      />
    </SpinerContainer>
  );
};
