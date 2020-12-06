import { useState, useEffect, useRef } from 'react';

import SiteHead from '_components/SiteHead';
import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';
import SocialBar from '_components/SocialBar';
import cn from '_utils/classnames';

function CodePenEmbed(props) {
  const { id, title, className } = props;
  return (
    <div className={cn({ 'embed-codepen shadow-lg rounded-md overflow-hidden': true, [className]: true })}>
      <p
        className="codepen"
        data-height="640"
        data-theme-id="dark"
        data-default-tab="result"
        data-user="itaditya"
        data-slug-hash={id}
        data-preview="true"
        data-pen-title={title}
        style={{
          height: '640px',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '1em 0',
          padding: '1em',
        }}
      >
        <span>
          See the Pen <a href={`https://codepen.io/itaditya/pen/${id}`}>{title}</a>
        </span>
      </p>
    </div>
  );
}

function CodeSandboxEmbed(props) {
  const { id, title, className } = props;
  return (
    <div className={cn({ 'embed-codesandbox shadow-lg rounded-md overflow-hidden h-full': true, [className]: true })}>
      <iframe
        className="iframe-codesandbox"
        src={`https://codesandbox.io/embed/${id}?codemirror=1&fontsize=14&hidenavigation=1&theme=dark&view=preview&hidedevtools=1&runonclick=1&moduleview=0`}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
        }}
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
    if (window.__CPEmbed) {
      window.__CPEmbed();
    }

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
    <div
      className="relative min-h-screen py-8 bg-gray-100 font-body px:4 sm:px-24 lg:px-32 xl:px-40 grid grid-cols-12"
      style={{ gridTemplateRows: 'auto 1fr auto' }}
    >
      <SiteHead pageName="Labs">
        <script key="codepen-script" async src="https://static.codepen.io/assets/embed/ei.js"></script>
      </SiteHead>
      <SiteNavbar />
      <main className="px-4 col-span-12 row-auto">
        <section className="justify-between mt-16 md:flex">
          <div className="mt-16">
            <CodePenEmbed className="codepen-xs" id="VwLMeYV" title="Squeeze Animation in Sidebar" />
          </div>
          <div className="flex-1 mt-16 md:ml-20">
            <CodePenEmbed className="codepen-md" id="bvJRrb" title="Animation for a logo" />
          </div>
        </section>
        <section className="justify-between md:flex">
          <div className="flex-1 mt-16 md:mr-20">
            <CodePenEmbed className="codepen-md" id="madMKg" title="CSS Grid is not just tables" />
          </div>
          <div className="mt-16">
            <CodePenEmbed className="codepen-xs" id="ajLMve" title="Music App Concept" />
          </div>
        </section>
        <section className="justify-between md:flex">
          <div className="flex-1 mt-16 md:mr-20" style={{ height: '640px ' }}>
            <CodeSandboxEmbed id="xstate-otp-animated-5two5" title="Otp Verification with XState" />
          </div>
          <div className="mt-16" style={{ height: '640px ' }}>
            <CodeSandboxEmbed className="codesandbox-xs" id="2p52nx3wnj" title="Shake or Tap for jokes" />
          </div>
        </section>
        <section className="justify-between md:flex">
          <div className="mt-16">
            <CodePenEmbed className="codepen-xs" id="MZWWmM" title="Juicy Link Animation" />
          </div>
          <div className="flex-1 mt-16 md:ml-20">
            <CodePenEmbed className="codepen-md" id="JjdLVmE" title="Responsive Timeline" />
          </div>
        </section>
        <section className="justify-between md:flex">
          <div className="flex-1 mt-16 md:mr-20">
            <CodePenEmbed className="codepen-md" id="LBjmOJ" title="Parallax Card Scrolling" />
          </div>
          <div className="mt-16">
            <CodePenEmbed className="codepen-xs" id="vaeeGo" title="Open Door with CSS" />
          </div>
        </section>
        <section className="justify-between md:flex">
          <div className="mt-16" ref={refObserverCodeSandbox1} data-csb-id="v8oz87lq03" style={{ height: '640px ' }}>
            {stateSeenCodeSandbox['v8oz87lq03'] === 'seen' && (
              <CodeSandboxEmbed className="codesandbox-xs" id="v8oz87lq03" title="Ball Resizer" />
            )}
          </div>
          <div
            className="flex-1 mt-16 md:ml-20"
            ref={refObserverCodeSandbox2}
            data-csb-id="z6047rj9vx"
            style={{ height: '640px ' }}
          >
            {stateSeenCodeSandbox['z6047rj9vx'] === 'seen' && (
              <CodeSandboxEmbed id="z6047rj9vx" title="Clip Animations" />
            )}
          </div>
        </section>
      </main>
      <SocialBar />
      <SiteFooter />
      <style>
        {`
            .embed-codepen .cp_embed_wrapper {
              width: 100%;
            }

            @media screen and (min-width: 640px) {
              .embed-codepen.codepen-xs {
                width: 400px;
              }

              .embed-codesandbox.codesandbox-xs  {
                width: 460px;
              }
            }
          `}
      </style>
    </div>
  );
};

export default Labs;
