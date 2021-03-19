import { createContext } from 'react';

const watchGalleryContext = createContext({
  current: null,
  setCurrent: () => null,
});

export default watchGalleryContext;
