import Team from '../components/Team';
import PageContainer from '../components/PageContainer';
import Contact from '../components/Contact';

export default function TeamPage() {
  return (
    <PageContainer isDark>
      <Team />
      <Contact />
    </PageContainer>
  );
}
