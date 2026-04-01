import React from 'react';
import styled from 'styled-components';
import Footer from '../common/Footer';
import Header from '../common/Header';
import type { Theme } from '../../style/theme';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <LayoutStyle>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutStyle>
  );
}

const LayoutStyle = styled.div<{ theme: Theme }>`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};
  padding: 20px 0;
`;

export default Layout;
