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
								Here I random shitpost on my daily drivers, chill outs & research stuff. I work with software development and engineering. You can find most of my work on my github. I like tech, science and engineering and also fantasy, fiction and science fiction.</p>
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
