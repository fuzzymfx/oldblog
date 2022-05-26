import React from 'react'
import Markdown from 'markdown-to-jsx'
import Nav from '../md/Nav.md'
import { marked } from 'marked';

function parsemd(Nav) {
	fetch(Nav)
		.then(response => {
			return response.text()
		})
		.then(text => {
			const html = marked.parse(text)
			document.getElementById('nav').innerHTML = html;
		})
}
export default function Blog() {
		parsemd(Nav)
	return (
	<div className="" style={{ alignItems: 'center', maxWidth:'50%', margin:'auto', }} >
		<p id='nav' className=" p-0">

		</p>
		
	</div>)
}
