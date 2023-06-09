import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/pixelpen-logo.svg'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='flex items-center justify-between space-x-2 font-bold px-5 py-5'>
            <div className='flex items-center space-x-2 select-none'>
                <Link href='/'>
                    <Image
                        className='rounded-full'
                        src={Logo}
                        alt='pixelpen logo'
                        width={50}
                        height={50}
                    />
                </Link>
                <h1>PixelPen</h1>
            </div>

            <div>
                <Link 
                    href='https://www.github.com/aviralj02'
                    className='px-5 py-2 text-sm md:text-base bg-[#080202] text-[#ffab62] flex items center rounded-full text-center'
                >
                    Made with ❤️ by Aviral
                </Link>
            </div>
        </header>
    )
}

export default Header