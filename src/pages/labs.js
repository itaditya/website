import { useState, useEffect, useRef } from 'react';
import Script from 'next/script'

import SiteHead from '_components/SiteHead';
import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';
import SocialBar from '_components/SocialBar';
import cn from '_utils/classnames';

function CodePenEmbed(props) {
  const { id, title, size, className = '' } = props;
  return (
    <div
      className={cn({
        'shadow-lg rounded-md overflow-hidden': true,
        'sm:w-[400px]': size === 'xs',
        [className]: true,
      })}
    >
      <p
        className="codepen flex items-center justify-center h-[640px] my-4 p-4 box-border"
        data-height="640"
        data-theme-id="dark"
        data-default-tab="result"
        data-user="itaditya"
        data-slug-hash={id}
        data-preview="true"
        data-pen-title={title}
      >
        <span>
          See the Pen <a href={`https://codepen.io/itaditya/pen/${id}`}>{title}</a>
        </span>
      </p>
    </div>
  );
}

function CodeSandboxEmbed(props) {
  const { id, title, size, className = '' } = props;
  return (
    <div
      className={cn({
        'shadow-lg rounded-md overflow-hidden h-full': true,
        'sm:w-[460px]': size === 'xs',
        [className]: true,
      })}
    >
      <iframe
        className="iframe-codesandbox w-full h-full"
        src={`https://codesandbox.io/embed/${id}?codemirror=1&fontsize=14&hidenavigation=1&theme=dark&view=preview&hidedevtools=1&runonclick=1&moduleview=0`}
        loading="lazy"
        title={title}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
}

const Labs = () => {
  const refObserverCodeSandbox1 = useRef();
  const refObserverCodeSandbox2 = useRef();
  const [stateSeenCodeSandbox, setStateSeenCodeSandbox] = useState({
    v8oz87lq03: 'unseen',
    z6047rj9vx: 'unseen',
  });

  useEffect(() => {
    function callBack(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const { csbId } = entry.target.dataset;
          setStateSeenCodeSandbox((oldState) => ({
            ...oldState,
            [csbId]: 'seen',
          }));
        }
      });
    }

    const observer = new IntersectionObserver(callBack);
    observer.observe(refObserverCodeSandbox1.current);
    observer.observe(refObserverCodeSandbox2.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="relative min-h-screen py-8 bg-gray-100 font-body px:4 sm:px-24 lg:px-32 xl:px-40 grid grid-cols-12 grid-rows-main-fill">
      <SiteHead pageName="Labs" />
      <Script src="https://static.codepen.io/assets/embed/ei.js" strategy="lazyOnload" />
      <SiteNavbar />
      <main className="px-4 col-span-12 row-auto">
        <section className="justify-between mt-16 md:flex">
          <div className="mt-16">
            <CodePenEmbed id="VwLMeYV" title="Squeeze Animation in Sidebar" size="xs" />
          </div>
          <div className="flex-1 mt-16 md:ml-20">
            <CodePenEmbed id="bvJRrb" title="Animation for a logo" />
          </div>
        </section>
        <section className="justify-between md:flex">
          <div className="flex-1 mt-16 md:mr-20">
            <CodePenEmbed id="madMKg" title="CSS Grid is not just tables" />
          </div>
          <div className="mt-16">
            <CodePenEmbed id="ajLMve" title="Music App Concept" size="xs" />
          </div>
        </section>
        <section className="justify-between md:flex">
          <div className="flex-1 h-[640px] mt-16 md:mr-20">
            <CodeSandboxEmbed id="xstate-otp-animated-5two5" title="Otp Verification with XState" />
          </div>
          <div className="h-[640px] mt-16">
            <CodeSandboxEmbed id="2p52nx3wnj" title="Shake or Tap for jokes" size="xs" />
          </div>
        </section>
        <section className="justify-between md:flex">
          <div className="mt-16">
            <CodePenEmbed id="MZWWmM" title="Juicy Link Animation" size="xs" />
          </div>
          <div className="flex-1 mt-16 md:ml-20">
            <CodePenEmbed id="JjdLVmE" title="Responsive Timeline" />
          </div>
        </section>
        <section className="justify-between md:flex">
          <div className="flex-1 mt-16 md:mr-20">
            <CodePenEmbed id="LBjmOJ" title="Parallax Card Scrolling" />
          </div>
          <div className="mt-16">
            <CodePenEmbed id="vaeeGo" title="Open Door with CSS" size="xs" />
          </div>
        </section>
        <section className="justify-between md:flex">
          <div className="h-[640px] mt-16" ref={refObserverCodeSandbox1} data-csb-id="v8oz87lq03">
            {stateSeenCodeSandbox['v8oz87lq03'] === 'seen' && (
              <CodeSandboxEmbed id="v8oz87lq03" title="Ball Resizer" size="xs" />
            )}
          </div>
          <div
            className="flex-1 h-[640px] mt-16 md:ml-20"
            ref={refObserverCodeSandbox2}
            data-csb-id="z6047rj9vx"
          >
            {stateSeenCodeSandbox['z6047rj9vx'] === 'seen' && (
              <CodeSandboxEmbed id="z6047rj9vx" title="Clip Animations" />
            )}
          </div>
        </section>
      </main>
      <SocialBar />
      <SiteFooter />
    </div>
  );
};

export default Labs;
