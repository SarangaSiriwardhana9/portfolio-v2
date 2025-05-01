import { PropsWithChildren } from 'react';

const AppProvider = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export default AppProvider;
