import Expansion from 'game/Expansion';
import React from 'react';

interface Props {
  boss: {
    background?: string;
    backgroundPosition?: string;
  } | null;
  expansion: Expansion;
}

const getFallbackImage = (expansion: Expansion) => {
  switch (expansion) {
    case Expansion.TheBurningCrusade:
      return '/img/headertbc.jpg';
    default:
      return '/img/header.jpg';
  }
};

const HeaderBackground = ({ boss, expansion }: Props) => {
  const backgroundImage = boss?.background ?? getFallbackImage(expansion);
  const backgroundPosition = boss?.backgroundPosition ?? 'center';

  return (
    <div className="background">
      <div
        className="img"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: backgroundPosition,
        }}
      />
    </div>
  );
};

export default HeaderBackground;
