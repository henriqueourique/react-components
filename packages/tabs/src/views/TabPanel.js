/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import TabStyles from '@zendeskgarden/css-tabs';
import { retrieveTheme } from '@zendeskgarden/react-theming';

/**
 * Accepts all `<div>` props
 */
const TabPanel = styled.div.attrs({
  className: TabStyles['c-tab__panel']
})`
  ${props => retrieveTheme('tabs.tab_panel', props)};
`;

/** @component */
export default TabPanel;
