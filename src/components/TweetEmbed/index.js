import React, {useEffect, useRef} from 'react';

let twitterScriptPromise;

function loadTwitterScript() {
  if (typeof window === 'undefined') {
    return Promise.resolve(null);
  }

  if (window.twttr?.widgets) {
    return Promise.resolve(window.twttr);
  }

  if (!twitterScriptPromise) {
    twitterScriptPromise = new Promise(resolve => {
      const existingScript = document.querySelector(
        'script[src="https://platform.twitter.com/widgets.js"]',
      );

      if (existingScript) {
        existingScript.addEventListener('load', () => resolve(window.twttr), {
          once: true,
        });
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      script.onload = () => resolve(window.twttr);
      script.onerror = () => resolve(null);
      document.body.appendChild(script);
    });
  }

  return twitterScriptPromise;
}

export default function TweetEmbed({tweetUrl, lang = 'en', theme = 'light'}) {
  const containerRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    loadTwitterScript().then(() => {
      if (!isMounted || !containerRef.current) {
        return;
      }

      containerRef.current.innerHTML = `
        <blockquote class="twitter-tweet" data-lang="${lang}" data-theme="${theme}" data-dnt="true">
          <a href="${tweetUrl}"></a>
        </blockquote>
      `;

      window.twttr?.widgets?.load(containerRef.current);
    });

    return () => {
      isMounted = false;
    };
  }, [tweetUrl, lang, theme]);

  return <div ref={containerRef} />;
}
