import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Projects from '../pages/Projects';

const basePath = process.env.PUBLIC_URL

/**
 * AppRoutes - A functional component that defines the main routing structure for the application.
 *
 * @returns {JSX.Element} The JSX markup for the AppRoutes component, setting up routes for different pages
 * within the application and wrapping each route's content with the MainLayout.
 *
 * @example
 * <AppRoutes />
 *
 * @description
 * This component uses React Router's `Routes` and `Route` components to define the application's routing.
 * Each route is wrapped in the `MainLayout` component to ensure a consistent layout across all pages.
 * The routes include:
 * - "/" for the Home page
 * - "/projects" for the Projects page
 * - "/hobbies" for the Hobbies page
 * - "/contact" for the Contact page
 * - "*" as a catch-all for undefined routes
 */
const AppRoutes = () => {
  return (
    <Routes>
      <Route path={`${basePath}`} element={<MainLayout><Home/></MainLayout>} />
      <Route path={`${basePath}/projects`} element={<MainLayout><Projects/></MainLayout>} />
      <Route path={`${basePath}/hobbies`} element={<MainLayout><div/></MainLayout>} />
      <Route path={`${basePath}/contact`} element={<MainLayout><div/></MainLayout>} />
      <Route path="*" element={<MainLayout><div/></MainLayout>} />
    </Routes>
  );
};

export default AppRoutes;