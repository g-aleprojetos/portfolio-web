import React from 'react';

const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return <svg {...props}>{props.children}</svg>;
};

export default SvgComponent;
