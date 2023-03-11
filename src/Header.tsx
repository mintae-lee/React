import React, { VFC } from 'react';
import { css } from '@emotion/react';

const Header: VFC = () =>
{
  return (
    <div css={ styles.slant_bg }>
      <h2>Header</h2>
    </div>
  )
}

const styles = {
  slant_bg: css`
      h2 {
        font-size: 3rem;
        margin: 14px auto;
        text-align: center;
      }
  `,
}

export default Header
