import IcoMoon, { IconProps as IconInterface } from 'react-icomoon';
import iconSet from './selection.json';
import { TColors } from '@theme';

export function Icon(props: IconInterface): JSX.Element {
  return (
    <IcoMoon
      iconSet={iconSet}
      {...props}
    />
  );
}

type TIcon = 'icon-nav-home' | 'icon-category-movie' | 'icon-category-tv' | 'icon-bookmark-full';

export interface IconProps {
  icon: TIcon;
  size: number;
  color: TColors;
}
