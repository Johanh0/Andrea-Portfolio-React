import behanceLogo from '../assets/icons/behance.svg'
import pinterestLogo from '../assets/icons/pinterest.svg'
import drileLogo from '../assets/icons/drile.svg'
import terramarkLogo from '../assets/icons/terramark.svg'


const LogosCompanies = () => {
  return (
    <div id='logos-companies'>
        <img src={behanceLogo} alt="Behance Logo" />
        <img src={pinterestLogo} alt="Pinterest Logo" />
        <img src={drileLogo} alt="Drille Logo" />
        <img src={terramarkLogo} alt="Terramark Logo" />
    </div>
  )
}

export default LogosCompanies