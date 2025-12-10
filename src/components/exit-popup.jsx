"use client"

import React, { useCallback, useEffect, useState } from 'react'

export default function ExitPopup({
  discountCode = 'WELCOME10',
  discountPercent = 10,
  onEmailSubmit,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  // Check if popup was already shown (stored in localStorage)
  useEffect(() => {
    const popupShown = localStorage.getItem('exitPopupShown');
    const popupDismissed = localStorage.getItem('exitPopupDismissed');

    if (popupShown || popupDismissed) {
      setHasShown(true);
    }
  }, []);

  // Detect exit intent (mouse leaving viewport at top)
  const handleMouseLeave = useCallback(
    (e) => {
      if (hasShown) return;

      // Only trigger when mouse leaves from top of page
      if (e.clientY <= 0) {
        setIsVisible(true);
        setHasShown(true);
        localStorage.setItem('exitPopupShown', 'true');
      }
    },
    [hasShown]
  );

  // Detect back button / tab close on mobile
  useEffect(() => {
    // Desktop: mouse leave detection
    document.addEventListener('mouseleave', handleMouseLeave);

    // Mobile: detect scroll up quickly (potential exit)
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (hasShown) return;

      const currentScrollY = window.scrollY;
      const scrollDiff = lastScrollY - currentScrollY;

      // If user scrolls up quickly from top area
      if (scrollDiff > 100 && currentScrollY < 200) {
        setIsVisible(true);
        setHasShown(true);
        localStorage.setItem('exitPopupShown', 'true');
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleMouseLeave, hasShown]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('exitPopupDismissed', 'true');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return;

    // Call your email submission handler
    if (onEmailSubmit) {
      onEmailSubmit(email);
    }

    // Send to your API
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'exit_popup' }),
      });
    } catch (error) {
      console.error('Email subscription error:', error);
    }

    setIsSubmitted(true);

    // Close popup after 3 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  // Copy discount code to clipboard
  const copyCode = () => {
    navigator.clipboard.writeText(discountCode);
    alert('Код хуулагдлаа!');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 50,
          backdropFilter: 'blur(4px)',
        }}
      />

      {/* Popup */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 50,
          width: '100%',
          maxWidth: '420px',
          padding: '0 16px',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#9CA3AF',
              zIndex: 10,
            }}
          >
            ✕
          </button>

          {!isSubmitted ? (
            <>
              {/* Header */}
              <div
                style={{
                  background: 'linear-gradient(to right, #10B981, #14B8A6)',
                  padding: '32px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '60px', marginBottom: '8px' }}>🎁</div>
                <h2
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 0,
                  }}
                >
                  Түр хүлээгээрэй!
                </h2>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <p style={{ color: '#6B7280', marginBottom: '8px' }}>
                    Явахынхаа өмнө бэлэг аваарай!
                  </p>
                  <div
                    style={{
                      fontSize: '36px',
                      fontWeight: 'bold',
                      color: '#10B981',
                    }}
                  >
                    {discountPercent}% ХӨНГӨЛӨЛТ
                  </div>
                  <p style={{ color: '#9CA3AF', fontSize: '14px', marginTop: '8px' }}>
                    Эхний захиалгадаа
                  </p>
                </div>

                {/* Email Form */}
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="И-мэйл хаягаа оруулна уу"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '8px',
                      fontSize: '16px',
                      marginBottom: '12px',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      backgroundColor: '#10B981',
                      color: 'white',
                      fontWeight: '600',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: 'none',
                      fontSize: '16px',
                      cursor: 'pointer',
                    }}
                  >
                    Хөнгөлөлт авах 🎉
                  </button>
                </form>

                <p
                  style={{
                    textAlign: 'center',
                    color: '#9CA3AF',
                    fontSize: '12px',
                    marginTop: '16px',
                  }}
                >
                  Спам илгээхгүй. Зөвхөн онцгой санал, хямдрал.
                </p>
              </div>
            </>
          ) : (
            /* Success State */
            <div style={{ padding: '32px', textAlign: 'center' }}>
              <div style={{ fontSize: '60px', marginBottom: '16px' }}>✅</div>
              <h2
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#1F2937',
                  marginBottom: '8px',
                }}
              >
                Баярлалаа!
              </h2>
              <p style={{ color: '#6B7280', marginBottom: '24px' }}>
                Таны хөнгөлөлтийн код:
              </p>

              {/* Discount Code Box */}
              <div
                onClick={copyCode}
                style={{
                  backgroundColor: '#F3F4F6',
                  border: '2px dashed #10B981',
                  borderRadius: '8px',
                  padding: '16px',
                  cursor: 'pointer',
                }}
              >
                <span
                  style={{
                    fontSize: '24px',
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    color: '#10B981',
                  }}
                >
                  {discountCode}
                </span>
                <p style={{ fontSize: '14px', color: '#6B7280', marginTop: '4px' }}>
                  👆 Дарж хуулах
                </p>
              </div>

              <p style={{ color: '#6B7280', fontSize: '14px', marginTop: '16px' }}>
                Checkout хийхдээ ашиглаарай!
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}