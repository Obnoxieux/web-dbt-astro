export class OpenGraphDefaults {
  static readonly title = 'David Battefeld - Web Developer';
  static readonly description = 'Personal website of David Battefeld, web developer from Berlin, Germany.';
  static readonly ogImageName = '/og-image.png';

  static getOpenGraphObject(url: URL | string, title: string, description: string) {
    const urlString = typeof url === 'string' ? url : url.toString();
    
    return {
      url: urlString,
      type: 'website',
      title: title,
      description: description,
      images: [
        {
          url: `${urlString}${this.ogImageName}`,
          alt: 'Code in an IDE on a dark background'
        },
      ],
      siteName: 'web-dbt'
    };
  }
}