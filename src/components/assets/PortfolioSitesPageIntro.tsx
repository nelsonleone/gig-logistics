interface IProps {
    introHeading: string,
    introText: string
}

function PortfolioSitesPageIntro({ introHeading, introText }:IProps){
  return (
    <div className="text-center">
        <h1 className="text-3xl font-roboto-slab my-4 font-bold lg:tracking-wide lg:mt-8">{introHeading}</h1>
        <p className="text-base">{introText}</p>
    </div>
  )
}

export default PortfolioSitesPageIntro;