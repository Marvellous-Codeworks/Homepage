import React, {useEffect, useRef} from 'react';
import {init} from '@waline/client';
import {useColorMode} from '@docusaurus/theme-common';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

import '@waline/client/style';

const WALINE_SERVER_URL = 'https://comments.marvellouscode.works';

export default function WalineComments({path}) {
  const containerRef = useRef(null);
  const walineRef = useRef(null);
  const {colorMode} = useColorMode();

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) {
      return undefined;
    }

    walineRef.current = init({
      el: containerRef.current,
      serverURL: WALINE_SERVER_URL,
      path,
      dark: 'html[data-theme="dark"]',
      meta: ['nick', 'mail', 'link'],
      requiredMeta: [],
      reaction: false,
    });

    return () => {
      walineRef.current?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  useEffect(() => {
    walineRef.current?.update({dark: colorMode === 'dark'});
  }, [colorMode]);

  return <div ref={containerRef} />;
}
