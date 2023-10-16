import React from 'react';
import './styles/App.css';
import NavBar from './components/NavBar';

const App = () => {
	return (
		<main className={'relative'}>
			<NavBar />
			<section className={'wide:padding-r padding-b'}>Hero</section>
			<section className={'padding'}>Popular Products</section>
			<section className={'padding'}>Quality</section>
			<section className={'padding-x py-8'}>Services</section>
			<section className={'padding'}>Offer</section>
			<section className={'padding bg-blue-50'}>Reviews</section>
			<section className={'padding-x sm:py-32 py-16 w-full'}>Subscribe</section>
			<section className={'padding-t pb-8 bg-black'}>Footer</section>
		</main>
	);
};

export default App;
