'use client';

import { useState } from 'react';

export default function MessengerButton({ pageId = "112646488531022" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={`https://www.facebook.com/vistaline.store/`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: isHovered ? 'auto' : '60px',
        height: '60px',
        borderRadius: '30px',
        backgroundColor: '#1877F2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: isHovered ? '0 20px' : '0',
        boxShadow: isHovered 
          ? '0 6px 20px rgba(16, 185, 129, 0.4)' 
          : '0 4px 12px rgba(0, 0, 0, 0.15)',
        zIndex: 9999,
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      }}
    >
      {/* Messenger Icon */}
      <svg width="28" height="28" viewBox="0 0 36 36" fill="white">
        <path d="M18 0C7.8 0 0 7.2 0 16.8c0 5.1 2.4 9.6 6.3 12.6V36l6.3-3.6c1.8.6 3.6.9 5.4.9 10.2 0 18-7.2 18-16.8S28.2 0 18 0zm1.8 22.5l-4.5-4.8-9 4.8 9.9-10.5 4.5 4.8 9-4.8-9.9 10.5z"/>
      </svg>
      
      {/* Text on hover */}
      {isHovered && (
        <span style={{
          color: 'white',
          fontWeight: '600',
          fontSize: '14px',
          whiteSpace: 'nowrap',
        }}>
          Бидэнтэй чатлах
        </span>
      )}
    </a>
  );
}