import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * MainLayout - A functional component that serves as the main layout structure for the website,
 * including the header, footer, and main content area.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The content to be displayed within the main area of the layout.
 *
 * @returns {JSX.Element} The JSX markup for the MainLayout component, wrapping the main content with a header and footer.
 *
 * @example
 * <MainLayout>
 *   <p>This is the main content area.</p>
 * </MainLayout>
 *
 * @description
 * This component provides a consistent layout structure for the website, including a `Header` at the top,
 * a `Footer` at the bottom, and a `main` section in the middle for displaying the page's main content.
 * The `children` prop is used to pass content into the `main` area.
 */
const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
