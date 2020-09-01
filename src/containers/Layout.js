import React from 'react';
import styled from 'styled-components';

import DndWrapper from './Dnd/DndWrapper';

const Layout = () => {
  return (
    <LayoutWrapper>
				<DndWrapper />
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
	background: #F5F9FF;
	padding: 20px 20px 20px 20px;
`

export default Layout;