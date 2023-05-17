import Image from 'next/image';
import logo from '@/images/wunderdocs-logo.png';

export function Logo(props) {
  return (
    <Image
      src={logo}
      aria-hidden="true" 
      {...props}
    />
  )
}
