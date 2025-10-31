import React, { useState } from 'react';
import CategoriesPage from './CategoriesPage';
import ToolsListPage from './ToolsListPage';
import ToolDetailPage from './ToolDetailPage';

export default function ToolsHub() {
  const [currentPage, setCurrentPage] = useState('categories');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTool, setSelectedTool] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage('tools-list');
  };

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
    setCurrentPage('tool-detail');
  };

  const handleBackToCategories = () => {
    setCurrentPage('categories');
    setSelectedCategory(null);
  };

  const handleBackToToolsList = () => {
    setCurrentPage('tools-list');
    setSelectedTool(null);
  };

  return (
    <>
      {currentPage === 'categories' && <CategoriesPage onCategoryClick={handleCategoryClick} />}
      {currentPage === 'tools-list' && (
        <ToolsListPage
          category={selectedCategory}
          onToolClick={handleToolClick}
          onBack={handleBackToCategories}
        />
      )}
      {currentPage === 'tool-detail' && (
        <ToolDetailPage tool={selectedTool} onBack={handleBackToToolsList} />
      )}
    </>
  );
}

