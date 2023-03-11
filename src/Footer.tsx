import React, { VFC } from 'react';
import { css } from '@emotion/react';

const Footer: VFC = () =>
{
  return (
    <div css={ styles.slant_bg }>
      <div>footer</div>
    </div>
  )
}

const styles = {
  slant_bg: css`
      font-size: 1.2rem;
      margin: 0 auto;
      padding: 24px 0;
      text-align: center;
      color: #fff;
      background-color: #2e2e2e; 
  `,
}

export default Footer
