import "./intro.scss"

export default function Intro() {
	return (
		<div className="intro" id="intro">
			<div className="wrapper">
				<div className="container">
					<p className="logo">
						annhe.
					</p> 
				</div>
				<div className="container">
					<p className="intro1">
						Annie He is an architecture student at the Cooper Union for the Advancement of Science and Art. This website displays a collection of works spanning architectural design, interaction design, graphic design, game design, fabrication, computer programming, etc.
					</p>  
				</div>
				<div className="container">
					<a href="/about" className="intro2">
						view curriculum vitae
					</a>
				</div>
			</div>
		</div>
  )
}
