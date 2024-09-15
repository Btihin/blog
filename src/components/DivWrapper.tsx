import { PropsWithChildren } from 'react';
import '../App.css';

const DivWrapper = (props: PropsWithChildren) => {
  return <div className='card'>{props.children}</div>;
};

export default DivWrapper;
