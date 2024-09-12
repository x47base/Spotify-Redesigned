import Image from 'next/image';
import React from 'react';

interface SpotifyLogoProps {
  iconSize: number;
}

const SpotifyFullIcon: React.FC<SpotifyLogoProps> = ({ iconSize }) => {
  const padding = iconSize / 2;
  return (
    <div className="flex items-center justify-center" style={{ padding: padding }}>
      <div className="flex items-center bg-transparent rounded-full p-1">
        <Image
          src="/assets/2024-spotify-full-logo/Spotify_Full_Logo_RGB_Green.png"
          alt="Spotify Icon"
          width={iconSize}
          height={iconSize}
          priority={true}
        />
      </div>
    </div>
  );
};

export default SpotifyFullIcon;
