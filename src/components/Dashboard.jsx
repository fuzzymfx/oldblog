import React from 'react'
import undraw_programming_2svr from '../assets/img/undraw_programming_2svr.svg'

export default function Dashboard() {
	return (
		<>
			<section className="bg-dark text-light p-5  ">
				<div className="container">

					<div className="d-sm-flex align-items-center justify-content-between">
						<div className="img-home">
							<h1>Become a <span className="text-secondary">Web Developer</span> </h1>
							<p className="lead my-4">
								Hi I am Anubhav Patnaik, An CS undergrad who likes to break and build things ;), pursuing B.Tech in Computer Science and Engineering focusing on Software engineering. Interested in problem solving and software development.
							</p>
							<a href="https://anubhavp.me">
								<button className="btn btn-primary btn-sm">GitHub</button>
							</a>
						</div>
						<img className="img-fluid w-50 d-none d-sm-block" src={undraw_programming_2svr} alt="" />
					</div>
				</div>
			</section>
		</>
	)
}
