import React from 'react'
import undraw_programming_2svr from '../assets/img/undraw_programming_2svr.svg'

export default function Dashboard() {
	return (
		<>
			<section className="bg-dark text-light p-5  ">
				<div className="container">

					<div className="d-sm-flex align-items-center justify-content-between">
						<div className="img-home">
							<h1>SHITPOST<span className="text-secondary">.IN</span> </h1>
							<p className="lead my-4">
								Hi I am Anubhav , a CS undergrad pursuing software engineering who likes to break and build things ;)
							</p>
							<p className="lead my-4">
								Here I random shitpost on my daily drivers, chill outs & research thingys.
							</p>
							<a href="https://anubhavp.me">
								<button className="btn btn-primary btn-sm" style={{
									backgroundColor: '#1a1a1a',
									borderColor: '#6c63ff',
								}}>Profile</button>
							</a>
						</div>
						<img className="img-fluid w-50 d-none d-sm-block" src={undraw_programming_2svr} alt="" />
					</div>
				</div>
			</section>
		</>
	)
}
