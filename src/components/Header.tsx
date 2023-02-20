import { Menu } from '@components';

export function Header(): JSX.Element {
  return (
    <header className='bg-secondary flex justify-between items-center'>
      <div>
        <img
          alt=''
          src='../../assets/icons/logo.svg'
        />
      </div>
      <Menu />
      <div>
        <img
          alt='avatar'
          src='../../assets/image-avatar.png'
        />
      </div>
    </header>
  );
}
