import React, { useEffect } from 'react'
import Nav from '../md/Nav.md'
import '../assets/css/github-markdown.css'
import hljs from 'highlight.js';

const md = require('markdown-it')({
	html: true,
	linkify: true,
	typographer: true,
	highlight(str, language) {
		if (language && hljs.getLanguage(language)) {
			try {

				return hljs.highlight(str, { language: language }).value;
			} catch (err) {
				console.log(err)
			}
		}

		return null;
	}
});

async function parsemd(Nav) {
	const response = await fetch(Nav)
	const text = await response.text()
	const html = md.render(text)
	return html
}

export default function Blog() {
	const [html, setHtml] = React.useState('')

	useEffect(() => {
		(async () => {
			const renderedHTML = await parsemd(Nav)
			console.log(renderedHTML)
			setHtml(renderedHTML)
		})()
	}, [])

	return (
		<div style={{ alignItems: 'center', maxWidth: '70%', margin: 'auto', }} >
			<p id="nav" className='markdown-body' dangerouslySetInnerHTML={{__html: html}}>
			</p>
		</div>)
}
