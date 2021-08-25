import React from 'react';
import {H} from 'based-components';
import {MdBugReport, MdAssessment} from 'react-icons/md';

export default function App() {
  return (
    <>
      <H text="Heading 1" level={1} />
      <H text="Heading 2" weight={900} level={2} />
      <H text="Heading 3" level={3} />
      <H text="Icon start test" level={1} iconPre={<MdBugReport size={40} />} />
      <H text="Icon end test" level={1} iconEnd={<MdAssessment size={40} />} />
    </>
  );
}
