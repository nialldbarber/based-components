import React, {ReactNode, ReactElement} from 'react';

export interface BreadcrumbsPropsT {
  children?: ReactNode;
}

function Breadcrumbs({children}): ReactElement {
  return <div>{children || ''}</div>;
}

export default Breadcrumbs;
