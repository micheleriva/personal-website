import { Heading } from '@chakra-ui/react';
import FullResume from '../components/Resume';
import resumeData from '../data/resume';

function Resume() {
  return (
    <>
      <Heading mb="2rem">
        <span role="image">👀</span> My resume
      </Heading>
      <FullResume data={resumeData} />
    </>
  );
}

export default Resume;
