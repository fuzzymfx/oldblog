import React, { useEffect } from 'react'
import Nav from './Nav.md'
import '../assets/css/nav.css'
import hljs from 'highlight.js';
import string from 'string'
import markdownItAnchor from 'markdown-it-anchor'
import Search from './Search'
import 'bootstrap/dist/css/bootstrap.min.css'

const slugify = s => string(s).slugify().toString()
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
}).use(markdownItAnchor, { slugify });;

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
			// console.log(renderedHTML)
			setHtml(renderedHTML)
		})()
	}, [])

	return (<>
		<h1 className="mx-5 head" id='intro' style={{ textAlign: 'center', fontSize: '100px', fontFamily: 'Smooch' }}>
			BLOGS
		</h1>

		<Search />
		<div style={{ alignItems: 'center', maxWidth: '70%', margin: 'auto', marginTop: '20px', paddingTop: '10px' }} >
			<p id="nav" className='markdown-body' dangerouslySetInnerHTML={{ __html: html }}>
			</p>
		</div>
	</>)
}
