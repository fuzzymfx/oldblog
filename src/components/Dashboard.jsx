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
								Here I random shitpost on my daily drivers, chill outs & research thingys. I work with software development and engineering. You can find most of my work on my github. I usually try to write about whatever I find interesting enough. I am into fantasy, fiction and science fiction. I love to read and talk about it. I am also a big fan of suspense drama, crime thrillers and watch a lot of thrillers. I also love action, adventure and heartwarming movies and tv. I try to be an honest critic but at times I get attached too to a character too soon ;)
							</p>
							<a href="https://anubhavp.me">
								<button className="btn btn-sm prbt">Profile</button>
							</a>
						</div>
						<img className="img-fluid w-50 d-none d-sm-block" src={office} alt="in office" />
					</div>
				</div>
			</section>
		</>
	)
}
