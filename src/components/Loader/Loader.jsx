import { Grid } from 'react-loader-spinner';
import { BallTriangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <Grid
        color="#00BFFF"
        height={50}
        width={50}
        wrapperStyle={{
          position: 'absolute',
          bottom: '-40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};
export const LoaderButton = () => {
  return (
    <>
      <BallTriangle color="#00BFFF" height={18} width={18} />
    </>
  );
};
