//import Logo from './svg/Logo';
import LogoLV from '../assets/images/logo-vectoriel-louvre.jpg';

const NavBar = (props: any) => {
	const buttonColor: string = '#1b76de';

	return (
		<nav className={'bg-color-main opacity-75 p-7 w-full rounded-b-2xl'}>
			<div className={'flex'}>
				{/* Logo */}
				<div className={'flex justify-start logo space-x-5 items-center cursor-zoom-in'}>
					{/*<Logo width={300} height={300} style={{ maxHeight: '40px', width: 'auto' }} />*/}

					<img
						src={LogoLV}
						alt={'Louvre'}
						className={'flex-grow-0'}
						style={{ height: '45px' }}></img>

					<p className={'text-3xl font-black'}>Gallery</p>
				</div>

				<div className={'flex justify-end flex-1 space-x-4 nav-buttons'}>
					<button
						className={`bg-blue-200 text-md rounded-md font-extrabold px-5 py-2 hover:`}>
						Login
					</button>

					<button
						className={`bg-blue-600 text-sm rounded-md font-extrabold px-5 py-2 !text-white`}>
						Apply
					</button>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
