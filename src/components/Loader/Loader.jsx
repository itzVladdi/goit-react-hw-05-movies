import { LoaderWrapper } from './Loader.styled';
import { ProgressBar } from 'react-loader-spinner';

export function Loader({ isLoading }) {
  return (
    <LoaderWrapper>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="black"
        barColor="tomato"
        visible={isLoading}
      />
    </LoaderWrapper>
  );
}
