'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'




const VehiclesNav = () => {

    const pathname = usePathname()

    return (
        <div className="pb-6">
        <ul className="nav nav-lt-tab" id="pills-tab" role="tablist">
            <li className="nav-item">
                <Link className={`nav-link ${pathname === '/vehicles' ? 'active' : ''}`} href="/vehicles">
                    <span className="text-nowrap">Pending for Service</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className={`nav-link ${pathname === '/serviced' ? 'active' : ''}`} href="/serviced">
                    <span className="text-nowrap">Service Completed</span>
                </Link>
            </li>
            
        </ul>
    </div>
    )
}

export default VehiclesNav