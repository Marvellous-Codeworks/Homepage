import {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const HERO_SLIDES = [
  {
    eyebrow: 'Marvellous Codeworks',
    title: 'The Great-er Tab Discarder',
    subtitle:
      'Helps Chrome, Edge, and Chromium browsers load and run faster by freeing up memory and resources used by inactive or old tabs.',
    ctaPrimary: { label: 'Download TGD', to: '/docs/download#the-great-er-tab-discarder'},
    ctaSecondary: {label: 'Latest from blog', to: '/blog'},
    backgroundImage: '/img/TGD_Mascotte_Crop.jpg',
  },
  {
    eyebrow: 'Marvellous Codeworks',
    title: 'The Marvellous Suspender',
    subtitle:
      'The community-driven successor to The Great Suspender: tab suspension, better performance, and continuous updates.',
    ctaPrimary: { label: 'Download TMS', to: '/docs/download#the-marvellous-suspender' },
    ctaSecondary: { label: 'Latest from blog', to: '/blog/tags/tms' },
    backgroundImage: '/img/TMS_Mascotte_Crop.jpg',
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = index => setActiveSlide(index);
  const goPrev = () =>
    setActiveSlide(prev => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const goNext = () => setActiveSlide(prev => (prev + 1) % HERO_SLIDES.length);

  useEffect(() => {
    if (HERO_SLIDES.length <= 1 || isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    if (HERO_SLIDES.length <= 1) {
      return undefined;
    }

    const handleKeyDown = event => {
      const target = event.target;
      const tagName = target?.tagName;

      if (
        target?.isContentEditable ||
        tagName === 'INPUT' ||
        tagName === 'TEXTAREA' ||
        tagName === 'SELECT'
      ) {
        return;
      }

      if (event.key === 'ArrowLeft') {
        goPrev();
      }

      if (event.key === 'ArrowRight') {
        goNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentSlide = HERO_SLIDES[activeSlide];

  return (
    <Layout
      title="Marvellous Codeworks"
      description="Official website of Marvellous Codeworks, home to its open-source projects and related documentation.">
      <main>
        <section
          className={styles.hero}
          style={{backgroundImage: `url(${currentSlide.backgroundImage})`}}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}>
          <div className={styles.heroOverlay} />
          <div className="container">
            <p className={styles.eyebrow}>{currentSlide.eyebrow}</p>
            <Heading as="h1" className={styles.title}>
              {currentSlide.title}
            </Heading>
            <p className={styles.subtitle}>{currentSlide.subtitle}</p>
            <div className={styles.actions}>
              <Link className="button button--primary button--lg" to={currentSlide.ctaPrimary.to}>
                {currentSlide.ctaPrimary.label}
              </Link>
              <Link className="button button--secondary button--lg" to={currentSlide.ctaSecondary.to}>
                {currentSlide.ctaSecondary.label}
              </Link>
            </div>

            {HERO_SLIDES.length > 1 && (
              <>
                <div className={styles.dots}>
                  {HERO_SLIDES.map((slide, index) => (
                    <button
                      key={slide.title}
                      type="button"
                      aria-label={`Go to slide ${index + 1}`}
                      className={`${styles.dot} ${index === activeSlide ? styles.dotActive : ''}`}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        <section className={styles.section}>
          <div className={`container ${styles.grid}`}>
            <article className={styles.card}>
              <Heading as="h2">What We Build</Heading>
              <p>
                Marvellous Codeworks collects community-driven browser tools and
                supporting resources, with a focus on reliability, security, and
                practical maintenance over time.
              </p>
            </article>
            <article className={styles.card}>
              <Heading as="h2">Projects and Downloads</Heading>
              <p>
                The current catalog includes projects such as The Great-<em>er</em> Tab Discarder and The Marvellous
                Suspender, with downloads,
                release notes, and source repositories collected in one place.
              </p>
              <p>
                <Link to="/docs/download">Downloads</Link>{' '}
                · <Link to="/docs/intro">About</Link>{' '}
                · <a href="https://github.com/Marvellous-Codeworks">GitHub</a>
              </p>
            </article>
            <article className={styles.card}>
              <Heading as="h2">News and Documentation</Heading>
              <p>
                Documentation, FAQs, changelogs, and project updates are
                published here to keep contributors and users aligned on what is
                shipping and what is changing.
              </p>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
