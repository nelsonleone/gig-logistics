export const handleScrollIntoView = () => {
    const trackArea = document.getElementById('#track')

    if(trackArea){
        const yOffset = -120;
        const y = trackArea.getBoundingClientRect().top +  window.scrollY + yOffset ;
        window.scrollTo({ top: y, behavior: 'smooth' })
    }
}