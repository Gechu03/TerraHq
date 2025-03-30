import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Templates/Header';
import Hero from '../components/Templates/Hero';
import BlogSection from '../components/Templates/BlogSection';
import TimeLineSection from '../components/Templates/TimeLineSection';

type FlexibleContentProps = {
  url: string;
  firstLoad?: boolean;
};
const FlexibleContent = ({ url }: FlexibleContentProps) => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    const callData = async () => {
      let visitCount = localStorage.getItem('visitCount');
      visitCount = visitCount ? parseInt(visitCount) : 0;
      const responseData = await GetData({
        url: url,
        firstLoad: visitCount === 0,
      });
      localStorage.setItem('visitCount', (visitCount + 1).toString());
      setResponse(responseData);
    };
    callData();
  }, []);
  return (
    <Fragment>
      {response.map((element) => {
        if (element.element === 'Header') {
          return <Header key="header" {...element} />;
        }
        if (element.element === 'Hero') {
          return <Hero key="hero" {...element} />;
        }
        if (element.element === 'BlogSection') {
          return <BlogSection key="blogSection" {...element} />;
        }
        if (element.element === 'TimelineSection') {
          return <TimeLineSection key="TimeLineSection" {...element} />;
        }
      })}
    </Fragment>
  );
};

const GetData = async ({ url, firstLoad }: FlexibleContentProps) => {
  const response = await fetch(url).then((res) => res.json());

  let convertedData = [];

  convertedData.push({
    element: 'Header',
    logo: response.navbar.logo,
    menuItems: [
      response.navbar.menu_item_1,
      response.navbar.menu_item_2,
      response.navbar.menu_item_3,
    ],
  });

  convertedData.push({
    element: 'Hero',
    title: firstLoad
      ? response.hero.title.first_time_accessing
      : response.hero.title.second_time_accessing,
    backgroundImage: {
      src: response.hero.bg_image,
      alt: 'Hero Background',
    },
    hasDecorators: true,
    desc: response.hero.subtitle,
    button: {
      variant: firstLoad ? 'primary' : 'secondary',
      label: firstLoad
        ? response.hero.button_label.first_time_accessing
        : response.hero.button_label.second_time_accessing,
      href: response.hero.button_link,
    },
  });

  convertedData.push({
    element: 'BlogSection',
    twoColumnsCard: {
      title: response.intro_card.title,
      desc: response.intro_card.subtitle,
      image: { src: response.intro_card.image, alt: 'Card Intro alt' },
      pill: response.intro_card.pill,
    },
    cardsRow: {
      title: response.blog.title,
      cards: [
        {
          image: {
            src: response.blog.posts.post_1.image,
            alt: 'Blog Image',
          },
          title: response.blog.posts.post_1.date,
          desc: response.blog.posts.post_1.title,
          pill: response.blog.posts.post_1.type,
        },
        {
          image: {
            src: response.blog.posts.post_2.image,
            alt: 'Blog Image',
          },
          title: response.blog.posts.post_2.date,
          desc: response.blog.posts.post_2.title,
          pill: response.blog.posts.post_2.type,
        },
        {
          image: {
            src: response.blog.posts.post_3.image,
            alt: 'Blog Image',
          },
          title: response.blog.posts.post_3.date,
          desc: response.blog.posts.post_3.title,
          pill: response.blog.posts.post_3.type,
        },
        {
          image: {
            src: response.blog.posts.post_4.image,
            alt: 'Blog Image',
          },
          title: response.blog.posts.post_4.date,
          desc: response.blog.posts.post_4.title,
          pill: response.blog.posts.post_4.type,
        },
      ],
      button: {
        label: response.blog.button_label,
        href: response.blog.button_href,
        variant: 'primary',
      },
    },
  });

  convertedData.push({
    element: 'TimelineSection',
    timeline: {
      title: response.timeline.title,
      start: {
        label: response.timeline.initial_item.label,
        number: response.timeline.initial_item.data,
      },
      end: {
        label: response.timeline.final_item.label,
        number: response.timeline.final_item.data,
      },

      percentage: response.timeline.percentage,
    },
    card: {
      title: response.cta.title,
      desc: response.cta.subtitle,
      image1: response.cta.image_1,
      image2: response.cta.image_2,
      chip: response.cta.pill,
    },
  });

  return convertedData;
};

export default FlexibleContent;
