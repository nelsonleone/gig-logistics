import getServicesPortfolioData from "@/helperFns/getServicesPortfolioData"

export default async function ServicesPortfolioPage(){

    const servicePortfolioData = await getServicesPortfolioData()

    return(
        <main>
            <section>
                <h1>Services Portfolio</h1>
            </section>
        </main>
    )
}