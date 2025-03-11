function Header () {
    return (
        <section className="menu menu3 cid-spaizPbfoR" once="menu" id="menu3-7">

        <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
            <div className="container">
                <div className="navbar-brand">
                    <span className="navbar-logo">
                        <a href="/">
                            <img src="logo.png" alt="passion4pics" style={{"height": "5rem"}} />
                        </a>
                    </span>
                    <span className="navbar-caption-wrap"><a className="navbar-caption text-black display-7"
                            href="/">passion4pics</a></span>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                        <li className="nav-item"><a className="nav-link link text-black display-4" href="#">
                                About us</a></li>
                        <li className="nav-item"><a className="nav-link link text-black display-4"
                                href="presets">Presets</a></li>
                        <li className="nav-item"><a className="nav-link link text-black display-4" href="filters">Filters</a>
                        </li>
                    </ul>
                    <div className="icons-menu">
                        <a className="iconfont-wrapper"
                            href="https://www.facebook.com/_passion4pics-110868584418609/about/?ref=page_internal"
                            target="_blank" rel="noreferrer">
                            <span className="p-2 mbr-iconfont socicon-facebook socicon"></span>
                        </a>
                        <a className="iconfont-wrapper" href="https://www.instagram.com/_passion4pics/" target="_blank" rel="noreferrer">
                            <span className="p-2 mbr-iconfont socicon-instagram socicon"></span>
                        </a>
                        <a className="iconfont-wrapper" href="https://github.com/pierpaolo1989/passion-4-pics" target="_blank" rel="noreferrer">
                            <span className="p-2 mbr-iconfont socicon-github socicon"></span>
                        </a>
        
                    </div>
        
                </div>
            </div>
        </nav>
        </section>
    );
}

export default Header;