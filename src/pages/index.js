import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Slider from "react-slick";
import { motion } from "framer-motion"

// Bribe Slider
function BribeVideoSlider() {
  const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
  };
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const videos = siteConfig.customFields;
return (
    <section id="bribeVideos">      
      <h1 className="hero__title">{videos.videoTile} </h1>
      <Slider {...settings}> 
      {videos.yTubeVideos.map((props, idx) => (        
          <div key={idx}><iframe src={props.url} /></div>
      ))}                   
    </Slider>
    </section>
);
}

const features = [
  {
    title: <>Technology Concepts Simplified</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <>Focus on What Matters (Roadmaps)</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Trending Blogs</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;  
  
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header style={{ backgroundImage: `url(${siteConfig.themeConfig.bannerImg})` }} className={clsx('hero hero--primary', styles.heroBanner)}>         
        <div className="row headerWrap">
          <div className="col col--12">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
          </div> 
          
        </div>
      </header>
      <BribeVideoSlider />
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
