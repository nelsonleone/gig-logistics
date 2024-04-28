import { PT_ServiceName } from '@/enums';
import Link from 'next/link';

interface IProps {
    serviceName: PT_ServiceName
}

function PTServiceContentLinkContainer({ serviceName }:IProps) {
  return (
    <div className="flex items-center gap-8 my-6 lg:my-8">
        {
            serviceName === PT_ServiceName.domesticLogistics ?
        <>
                <Link href="/app-panel/ship-now" className="pt-service-cta bg-red-600 text-[#FFFFFF]">Ship Now</Link>
                <Link href="/app-panel/get-a-qoute/local" className="pt-service-cta bg-[#E5E7EB] text-red-600">Get A Quote</Link>
            </>
            :
            serviceName === PT_ServiceName.corporateLogistics ?
            <Link href="" className="pt-service-cta bg-red-600 text-[#FFFFFF] w-auto px-3">Sign up as a corporate</Link>
            :
            serviceName === PT_ServiceName.ecommerceLogistics ?
            <Link href="" className="pt-service-cta bg-red-600 text-[#FFFFFF] w-auto px-3">Sign up as a merchant</Link>
            :
            serviceName === PT_ServiceName.overseasShipping ?
            <>
                <Link href="/app-panel/overseas-shipping" className="pt-service-cta bg-red-600 text-[#FFFFFF]">Ship Now</Link>
                <Link href="/app-panel/get-a-qoute/international" className="pt-service-cta bg-[#E5E7EB] text-red-600">Get A Quote</Link>
            </>
            :
            null
        }
    </div>
  )
}

export default PTServiceContentLinkContainer;