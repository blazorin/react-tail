import Logo from './svg/Logo';

const NavBar = (props: any) => {
	return (
		<nav className={'bg-color-main opacity-75 p-7 w-full rounded-b-2xl'}>
			<div className={'flex'}>
				{/* Logo */}
				<div className={'justify-start logo'}>
					<Logo width={300} height={300} style={{ maxHeight: '40px', width: 'auto' }} />
				</div>

				<div className={'flex-1 '}>
					<button>Login</button>
					<button>Apply</button>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
