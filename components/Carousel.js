import ImageGallery from 'react-image-gallery';

export default function ResponsiveCarousel() {
  const images = [
    {
      original: '/gallery/img1.webp',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: '/gallery/img2.webp',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: '/gallery/img3.webp',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: '/gallery/img4.webp',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: '/gallery/img5.webp',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  return (
    <ImageGallery items={images} showThumbnails={false} autoPlay={true} showPlayButton={false} slideInterval={5000}/>
  );
}
