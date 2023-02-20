import { Icon, IconProps } from '@components';
import { EColors } from '@theme';

const menu: IconProps[] = [
  { icon: 'icon-nav-home', size: 20, color: EColors.Accent, },
  { icon: 'icon-category-movie', size: 20, color: EColors.Accent, },
  { icon: 'icon-category-tv', size: 20, color: EColors.Accent, },
  { icon: 'icon-bookmark-full', size: 20, color: EColors.Accent, },
];

export const Menu = (): JSX.Element => {
  const renderMenu = menu.map(({ icon, size, color, }) => <Icon key={icon} icon={icon} size={size} color={color} />);

  return (
    <nav className='flex items-center gap-4'>
      {renderMenu}
    </nav>
  );
};
