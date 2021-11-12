import logo from '../assets/logo.png'

function Banner() {
    var titre = "La maison jungle";
    return (
      <div className="lmj-banner">
      <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1 className="lmj-title">{titre}</h1>
      </div>
    )
}

export default Banner;