import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='logogray.svg' width={54} height={54} priority alt=''></Image>
    </Link>
  )
}

export default Logo
