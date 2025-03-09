import Footer from "../components/Footer";
import Header from "../components/Header";

function PresetPage() {
	return (
		<>
			<Header />
			<section className="content4 cid-spapLhO2J3" id="content4-9" style={{ "margin": "1%" }}>
				<div className="container-fluid">
					<div className="row justify-content-center">
						<div className="title col-md-12 col-lg-10">
							<h4 className="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-5"> </h4>
							<div className="row" style={{ "marginBottom": "2%" }}>
								<img alt="Lightroom logo" style={{ "width": "15%" }} 
									src="data:image/png;base64,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" />
							</div>
							<h2>How to install preset in Adobe Lightroom Mobile</h2>
							<ul>
								<li> Create a new album in the Lightroom Mobile App. Click on the (+) icon in the Album section (right on your screen).</li>
								<li> Load all the presets in the new album. To add presets, click on the “+ & picture icon” at the right bottom of the screen. Select your mobile presets and add all the DNG files.</li>
								<li> Open any preset that you just loaded to a new album in Lightroom and then click on the three dots icon at the top right select Create Preset.</li>
								<li> Give your preset a name & save it. You can also choose to put under a new group</li>
								<li> Now open any of your photos.</li>
								<li> Find the Presets icon in the menu at the bottom of the screen and tap on it.</li>
								<li> Now browse through your presets and apply them to your photos.</li>
							</ul>

							<div id="container-presets" style={{ "marginTop": "3%" }} className="container-fluid">

								<h2>Free Banff Mobile preset</h2>

								<p>
									LINK: <a href="https://creativetacos.com/banff-lightroom-presets/">https://creativetacos.com/banff-lightroom-presets/</a>

								</p>

								<h2>Urban tone Mobile preset</h2>

								<p>
									LINK: <a href="https://raghaveditz.com/urban-lightroom-mobile-preset-free/">https://raghaveditz.com/urban-lightroom-mobile-preset-free/</a>
								</p>

								<h2>India Mobile preset</h2>

								<p>
									LINK: <a href="https://presetsgalore.com/product/free-india-mobile-lightroom-preset/">https://presetsgalore.com/product/free-india-mobile-lightroom-preset/</a>
								</p>

							</div>

						</div>
					</div>
				</div>
				<hr className="separator" />
				<div className="container-fluid">
					<div className="row justify-content-center">
						<div className="title col-md-12 col-lg-10">
							<h4 className="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-5"> </h4>
							<h2>Free courses around the web</h2>

							<ul>

								<li>
									<h4>Introductory Photography Course</h4>
									<p>
										The fastest way to get off 'Auto' mode and unlock the creative potential of your camera - FREE<br />
										AUTHOR: Chris Bray
										LINK: <a href="https://www.udemy.com/course/free-photography-course-for-beginners/#overview" target="_blank" rel="noreferrer">Click here to see</a>
									</p>
								</li>
								<li>
									<h4>Photoshop Fundamentals</h4>
									<p>
										The power of the digital art standard at your finger tips - FREE<br />
										AUTHOR: Hardy Fowler
										LINK: <a href="https://www.udemy.com/course/photoshop-fundamentals-in-one-hour/" target="_blank" rel="noreferrer">Click here to see</a>
									</p>
								</li>
								<li>
									<h4>Lightroom 5 Photographer Workflow</h4>
									Master Lightroom 5. Learn how to bring your photos into Lightroom 5, get them organized, edit them and export your work - FREE<br />
									AUTHOR: Jerad Hill
									LINK: <a href="https://www.udemy.com/course/lightroom-5-photographer-workflow/" target="_blank" rel="noreferrer">Click here to see</a>

								</li>
							</ul>


						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default PresetPage;