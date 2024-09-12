import Image from 'next/image';
import React from 'react';

interface SpotifyIconProps {
  size: number;
}

const SpotifySmallIcon: React.FC<SpotifyIconProps> = ({ size }) => {
  const padding = size / 2;

  return (
    <div className="flex items-center justify-center" style={{ width: size + 2 * padding, height: size + 2 * padding, padding: padding }}>
      <div className="bg-transparent rounded-full p-1" style={{ width: size, height: size }}>
        <Image
          src="/assets/2024-spotify-logo-icon/Spotify_Primary_Logo_RGB_Green.png"
          alt="Spotify Logo"
          width={size}
          height={size}
          priority={true}
          className="bg-transparent"
        />
      </div>
    </div>
  );
};

export default SpotifySmallIcon;
