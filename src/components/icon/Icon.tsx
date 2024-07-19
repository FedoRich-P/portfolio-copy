import React from 'react';
import IconSprote from '../../assets/icons/sprite.svg';

type IconPropertyType = {
  width?: string;
  height?: string;
  viewBox?: string;
  iconId: string;
};

export function Icon(props: IconPropertyType) {
  return (
    <svg
      height={props.height || '50'}
      width={props.width || '50'}
      viewBox={props.viewBox || '0 0 50 50'}
    >
      <use xlinkHref={`${IconSprote}#${props.iconId}`}></use>
    </svg>
  );
}
