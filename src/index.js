import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const createReactTag = (tagName = 'application') => {
  const reactTag = document.createElement('div');
  reactTag.id = tagName;
  document.body.appendChild(reactTag);
  return reactTag;
}

document.addEventListener('DOMContentLoaded', () => {
  const reactTag = createReactTag()
  ReactDOM.createRoot(reactTag).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})