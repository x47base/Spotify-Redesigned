import React from 'react';
import SpotifySmallIcon from '@/components/brand/small-icon';

interface SpotifyLoginButtonProps {
  onClick: () => void;
}

const SpotifyLoginButton: React.FC<SpotifyLoginButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-spotify-white font-bold py-2 px-4 rounded inline-flex items-center"
    >
      <SpotifySmallIcon size={32}/>
      Login with Spotify
    </button>
  );
};

export default SpotifyLoginButton;
