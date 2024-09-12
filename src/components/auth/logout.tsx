import React from 'react';

interface SpotifyLoginButtonProps {
  onClick: () => void;
}

const SpotifyLogoutButton: React.FC<SpotifyLoginButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-spotify-white bg-spotify-green font-bold py-2 px-4 rounded-lg inline-flex items-center"
    >
      Logout
    </button>
  );
};

export default SpotifyLogoutButton;
