
export type FeaturedEventData = {
    bannerIcon: IBannerIcon,
    eventPageLink: Slug,
    textContent: string,
}

export type HighlightedService = {
    serviceImageIcon: string,
    serviceHighlightHeading: string,
    isNewService: boolean,
    serviceDescription: string,
    iconImageAlt: string,
    _id: string,
    slug: string
}