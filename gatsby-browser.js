/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import { UserAgentProvider } from '@quentin-sommer/react-useragent'


export const wrapRootElement = ({ element }) => {
  return (
    <UserAgentProvider ua={window.navigator.userAgent}>{element}</UserAgentProvider>
  );
}