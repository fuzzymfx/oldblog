import React from 'react'
import '../assets/css/blog.css';
import Search from './Search';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import read from '../assets/img/read.svg';
import react from '../assets/img/react.svg';
import movie from '../assets/img/movie.svg';

export default function BlogIntro() {

	return (
		<div style={{  width: '100%' }}>
			<h1 className="mx-5" id='head' style={{ textAlign: 'center', color: '#6c63ff', fontFamily: 'Smooch', fontSize: '100px' }}>
				BLOGS
			</h1>
			<Search />
			<div>
				<div >
					<div className="row justify-content-center mx-1" >
					<div className="col-auto py-4">
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="230"
									image={react}
									alt="react js"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Tech	
									</Typography>
									<Typography variant="body2" color="text.secondary">
										I work with react, flutter, firebase, golang and some other tech stuff. You can find most of my work on my github. I write tech stuff about my projects and all here. I'll be adding more stuff here soon. 

									</Typography>
								</CardContent>
								<CardActions>
									
									<Button size="small">Learn More</Button>
								</CardActions>
							</Card>

						</div>
						<div className="col-auto py-4 ">
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="230"
									image={read}
									alt="green iguana"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Books
									</Typography>
									<Typography variant="body2" color="text.secondary">
									I am into fantasy, fiction and science fiction. I love to read and write about it. You can find about all the books I have read on my here. I mostly write about what I liked and didn't like here.
									</Typography>
								</CardContent>
								<CardActions >
									
									<Button size="small" href="https://anubhavp.me/">Learn More</Button>
								</CardActions>
							</Card>
						</div>
						
						<div className="col-auto py-4">
							<Card sx={{ maxWidth: 335 }}>
								<CardMedia
									component="img"
									height="230"
									image={movie}
									alt="green iguana"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Music/ Movies & TV
									</Typography>
									<Typography variant="body2" color="text.secondary">
									I am a big fan of crime thriller and watch a lot of thrillers. I also love fantasy, scifi, action and heartwarming movies and tv shoes. You can find about all the movies and tv shows I have watched on. I'll try to be an honest critic.
									</Typography>
								</CardContent>
								<CardActions>
									
									<Button size="small">Learn More</Button>
								</CardActions>
							</Card>

						</div>

					</div>
				</div>
				
			</div>
		</div>

	)
}
