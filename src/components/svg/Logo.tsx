import { CSSProperties } from 'react';

interface ILogoProps {
	width?: number;
	height?: number;
	white?: boolean;
	style?: CSSProperties | undefined;
}

const Logo = (props: ILogoProps) => {
	return (
		<svg
			width={props.width}
			height={props.height}
			viewBox={`0 0 ${props.width} ${props.height}`}
			style={props.style}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<rect width={props.width} height={props.height} rx='150' fill='#1B76DE' />
			<path
				d='M238.697 133.708V65.3223H218.192V97.721L190.908 65.3223H170.364V133.708H190.908V99.0539L219.012 133.708H238.697Z'
				fill='white'
			/>
			<path
				d='M97.7378 133.666C119.25 133.666 135.306 121.268 135.306 99.4429C135.306 77.618 119.25 65.3223 97.6349 65.3223H62.9847V133.666H97.7378ZM97.6349 115.632H83.4879V83.356H97.7378C108.854 83.356 114.206 90.2211 114.206 99.4429C114.206 108.05 108.031 115.632 97.6349 115.632Z'
				fill='white'
			/>
			<path
				d='M124.681 235.678L134.826 167.334H114.323L111.012 194.586L107.593 167.334H87.0902L83.6748 194.586L79.9372 167.334H59.4875L70.0594 235.678H90.5091L97.3418 206.235L104.178 235.678H124.681Z'
				fill='white'
			/>
			<path
				d='M238.708 235.678V217.644H190.854V208.34H238.708V194.671H190.854V185.368H238.708V167.334H170.364V235.678H238.708Z'
				fill='white'
			/>
		</svg>
	);
};

export default Logo;
