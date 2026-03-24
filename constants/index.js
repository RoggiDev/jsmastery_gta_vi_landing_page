import { useMediaQuery } from 'react-responsive';

export const useMaskSettings = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  if (isMobile) {
    return {
      initialMaskPos: '50% 50%',
      initialMaskSize: '3000% 3000%',
      maskPos: '50% 14%',
      maskSize: '50% 50%',
    };
  }

  if (isTablet) {
    return {
      initialMaskPos: '50% 24%',
      initialMaskSize: '3900% 3900%',
      maskPos: '50% 24%',
      maskSize: '27% 27%',
    };
  }

  return {
    initialMaskPos: '50% 25%',
    initialMaskSize: '3900% 3900%',
    maskPos: '50% 25%',
    maskSize: '23% 23%',
  };
};
