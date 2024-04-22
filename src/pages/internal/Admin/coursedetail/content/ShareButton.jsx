import React from 'react';
import { useLocation } from 'react-router-dom';
import shareIcon from '../../../../../assets/share-icon.png';

const ShareButton = () => {
  const location = useLocation();
  const currentUrl = window.location.href;

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Share this page',
          url: currentUrl,
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        copyUrlToClipboard(currentUrl);
        alert('Link copied to clipboard');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  const copyUrlToClipboard = (url) => {
    const el = document.createElement('textarea');
    el.value = url;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <button
      className="lg:flex gap-2 w-28 border-2 items-center px-3 border-[rgba(2, 38, 176, 0.4)] rounded-md bg-white text-[#0027BA] h-12"
      onClick={handleShare}
    >
      <img src={shareIcon} alt="share icon img" />
      Share
    </button>
  );
};

export default ShareButton;