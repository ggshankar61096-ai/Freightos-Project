import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

/**
 * Main application layout wrapper
 * Provides consistent structure and styling across pages
 */
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200">
      <header className="py-6 px-4 text-center bg-rickBg bg-center bg-contain shrink-0 bg-no-repeat opacity-85">
        <h1 className="text-6xl font-bold drop-shadow-lg">Rick & Morty Characters</h1>
      </header>
      <main className="body-inner">{children}</main>
    </div>
  );
};

export default MainLayout;
