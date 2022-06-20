import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <Paper style={{
			borderRadius: '13px',
			padding: '2px 10px',
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
				style={{
					marginLeft: '10px',
					textColor: '#565656',
					flex: 1,
				}}
			/>
			<Divider style={{ width: 1, height: 28, margin: 4 }} />
			<IconButton aria-label="search" style={{ color: '#6c63ff'}}>
				<SearchIcon />
			</IconButton>
		
		</Paper>
	);
}
			
 