import React from 'react'
import office from '../assets/img/office.svg'
import '../assets/css/dashboard.css'
export default function Dashboard() {
	return (
		<>
			<section className=" p-5 cdin  ">
				<div className="container ">

					<div className="d-sm-flex align-items-center justify-content-between mainc">
						<div className="img-home">
							<h1>SHITPOST<span className="text-secondary">.IN</span> </h1>
							<p className="lead my-4">
								Hi I am Anubhav , a CS undergrad pursuing software engineering who likes to break and build things ;) Besides that I love music, watch a lot of TV, read, eat and drink a lot. I like photography and love to play the guitar, and I am trying to learn how to do them properly.
							</p>
							<p className="lead my-4">
							Here I random shitpost on my daily drivers, chill outs & research thingys. I work with software development and engineering. You can find most of my work on my github. I am into fantasy, fiction and science fiction. I love to read and talk about it. I am also a big fan of crime thriller and watch a lot of thrillers. I also love fantasy, scifi, action and heartwarming movies and tv shows. I try to be an honest critic but I get attached to a character too soon ;)
							</p>
							<a href="https://anubhavp.me">
								<button className="btn btn-sm prbt">Profile</button>
							</a>
						</div>
						<img className="img-fluid w-50 d-none d-sm-block" src={office} alt="" />
					</div>
				</div>
			</section>
		</>
	)
}
