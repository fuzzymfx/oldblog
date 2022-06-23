import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import search from '../assets/search.json';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';


async function searchdata(searchquery, json) {
	// console.log(json.length);
	var key = 0;
	var results = [];

	for (key in json) {
		if (json[key]["Content"].toLowerCase().includes(searchquery.toLowerCase())) {
			results.push(json[key]["Link"]);
			// console.log(json[key]["Link"]);
		}

	}
	// console.log(results);
	// DisplaySearch(results);
	return results;
}


function DisplaySearch(props) {
	var arr = props.arr
	// console.log(arr)
	if (arr.length < search.length && arr.length > 0) {
		arr.map((item) => {
			return (
				console.log("This is from displaysearch " + item))
		});

		return (
			<div className="row justify-content-center mx-1" >
				<Card sx={{ minWidth: 275, maxWidth:275, textAlign:'center' }}>
				{arr.map((prop) => (
					<CardContent>
						<Typography variant="body2">
							<a href={prop}>Here's the link</a>
						</Typography>
						</CardContent>
				)
				)}
				</Card>
				</div>
		);

	}
}

export default function Search() {

	const [results, setResults] = useState([]);
	const handleChange = (e) => {
		searchdata(e.target.value, search).then((result) => {
			setResults(result);
		}
			, [results]);

	}

	return (
		<>
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
					// value={query}
					onChange={(e) => handleChange(e)}
					style={{
						marginLeft: '10px',
						textColor: '#565656',
						flex: 1,
					}}
				/>
			</Paper>

			<DisplaySearch arr={results} />


		</>);
}

