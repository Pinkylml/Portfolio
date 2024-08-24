import {Link} from 'react-router-dom'
import MountainIcon from './Icons/MountainIcon'

const Header =()=>{
    <header className='px-4 lg:px-6 h-14  flex items-center'>
        <Link to="#" className="flex items-center justify-center">
         <MountainIcon className="h-6 w-6" />
         <span className='sr-only'>AI Developer Portfolio</span>
        </Link>

    </header>
}