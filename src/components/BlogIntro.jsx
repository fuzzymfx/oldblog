import React from 'react'
import '../assets/css/blog.css';
import Search from './Search';


export default function BlogIntro() {
	return (
		<div style={{ textAlign: 'center', width: '100%' }}>
			<h1 className="mx-5" id='head' style={{ color: '#6c63ff', fontFamily: 'Smooch', fontSize: '100px' }}>
				BLOGS
			</h1>
			<Search />

		</div>
	)
}
