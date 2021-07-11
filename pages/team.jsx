import Contact from '../components/Contact';
import PageContainer from '../components/PageContainer';
import Team from '../components/Team';

export default function TeamPage() {
  return (
    <PageContainer isDark>
      <Team />
      <Contact />
    </PageContainer>
  );
}
