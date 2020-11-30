import FullResume from '../components/Resume';
import resumeData from '../data/resume';

export function getStaticProps() {
  return {
    props: {},
  };
}

function Resume() {
  return (
    <>
      <FullResume data={resumeData} />
    </>
  );
}

export default Resume;
