import FullResume from '../components/Resume';
import resumeData from '../data/resume';

function Resume() {
  return (
    <>
      <FullResume data={resumeData} />
    </>
  );
}

export default Resume;
