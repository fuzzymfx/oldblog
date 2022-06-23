import React from 'react'

export default function Footer() {
	return (
		<div>
			<footer id='footer'>

				<div className=" py-3 mx-1 " style={{ textAlign: 'center' }}>
					<div className='icons' >

						<a href="http://github.com/codebotx" className="  p-2 text-decoration-none text-secondary ">
							<i className="bi bi-github"></i>
						</a>

						<a href="http://instagram.com/anubhavclicks" className="p-2 text-decoration-none text-secondary">
							<i className="bi bi-instagram"></i>
						</a>

						<a href="mailto:anubhabr50@gmail.com" className="p-2 text-decoration-none text-secondary">
							<i className="bi bi-envelope-open-fill"></i>
						</a>

						<a href="https://www.linkedin.com/in/anubhabpatnaik0530/" className="p-2 text-decoration-none text-secondary">
							<i className="bi bi-linkedin"></i>
						</a>

					</div>
					<div>
						Copyright © 2022 <a className='foot' style={{ textDecoration: 'none' }} href="https://github.com/codebotx/blog/"> Anubhab Patnaik </a>. All rights reserved.

					</div>
				</div>
			</footer>
		</div>

	)
}