import React from 'react'
import office from '../assets/img/office.svg'
import ScrollReveal from 'scrollreveal'

export default function Dashboard() {

const srr = ScrollReveal({
    origin: 'top',
    distance: '6px',
    duration: 2000
        // reset: true
})
	React.useEffect(() => {
		srr.reveal('.cdin',{
			delay: 200,
			
		})
		}, [srr]);
	return (
		<>
			<section className="text-light p-5 cdin ">
				<div className="container ">

					<div className="d-sm-flex align-items-center justify-content-between">
						<div className="img-home">
							<h1>SHITPOST<span className="text-secondary">.IN</span> </h1>
							<p className="lead my-4">
								Hi I am Anubhav , a CS undergrad pursuing software engineering who likes to break and build things ;) Besides that I love music, watch a lot of TV, read, eat and drink a lot. I like photography and love to play the guitar, and I am trying to learn how to do them properly.
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
						<img className="img-fluid w-50 d-none d-sm-block" src={office} alt="" />
					</div>
				</div>
			</section>
		</>
	)
}
