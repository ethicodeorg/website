import About from '../components/About';
import Contact from '../components/Contact';
import PageContainer from '../components/PageContainer';

export default function AboutPage() {
  return (
    <PageContainer isDark>
      <About />
      <Contact />
    </PageContainer>
  );
}
