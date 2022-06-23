import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import search from '../assets/search.json';

// console.log(searchdata('Anubhab'));
// console.log(search.jsondata);
// const searcharray = JSON.parse(search)
// console.log(searcharray);

async function searchdata(searchquery) {
	for (var key in search.key) {
		if (await (search.jsondata[key].name) === searchquery) {
			console.log(search.jsondata[key]);
			return search.jsondata[key];
		}
	}
}


function displaySearch( results) {
	if (results.length > 0) {
		return (
			<Paper style={{
				borderRadius: '13px',
				padding: '4px 10px',
				display: 'flex',
				alignItems: 'center',
				width: '60%',
				margin: '0 auto',
				marginTop: '10px',
				marginBottom: '10px',
				backgroundColor: '#f5f5f5',
				border: '1px solid #e0e0e0',
				boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
				transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
				'&:hover': {
					boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
					backgroundColor: '#e0e0e0',
					border: '1px solid #e0e0e0',
				},
			}}>
				<InputBase
					value={
						results.map((result) => {
							return (
								<div key={result.name}>
									<p>{result.name}</p>
									<p>{result.description}</p>
								</div>
							);
						}
							, [results])
					}
					style={{
						marginLeft: '10px',
						textColor: '#565656',
						flex: 1,
					}}
				/>
			</Paper>
		);
	}
}

export default function Search() {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState([]);

	// searchdata(query);
	return (
		<Paper style={{
			borderRadius: '13px',
			padding: '4px 10px',
			display: 'flex',
			alignItems: 'center',
			width: '60%',
			margin: '0 auto',
			marginTop: '10px',
			marginBottom: '10px',
			backgroundColor: '#f5f5f5',
			border: '1px solid #e0e0e0',
			boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
			transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
			'&:hover': {
				boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
				backgroundColor: '#e0e0e0',
				border: '1px solid #e0e0e0',
			},
		}}>
			<InputBase
				placeholder="Search…"
				inputProps={{ 'aria-label': 'search blogs' }}
				value={query}
				onChange={(e) => setQuery(e.target.value) & setResults(searchdata(query)) & console.log(results) & displaySearch(results)}

				style={{
					marginLeft: '10px',
					textColor: '#565656',
					flex: 1,
				}}
			/>
		</Paper>

	);
}

