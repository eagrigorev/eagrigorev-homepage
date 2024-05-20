import styles from './MarkdownWrapper.module.scss';
import React from 'react';
import Markdown from 'markdown-to-jsx';
import ImageWithCaption from '../ImageWithCaption/ImageWithCaption';

const MarkdownWrapper = ({ layout, content }) => {
  return (
    <Markdown
      options={{
        wrapper: React.Fragment,
        overrides: {
          p: {
            props: {
              className: `${styles[layout]} paragraph--regular`,
            },
          },
          h2: {
            props: {
              className: `${styles[layout]} heading--h2`,
            },
          },
          h3: {
            props: {
              className: `${styles[layout]} heading--h3`,
            },
          },
          h4: {
            props: {
              className: `${styles[layout]} heading--h4`,
            },
          },
          ImageWithCaption: {
            component: ImageWithCaption,
          },
        },
      }}
    >
      {content}
    </Markdown>
  );
};

export default MarkdownWrapper;
