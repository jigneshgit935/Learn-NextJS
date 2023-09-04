import Image from 'next/image';
import ImageOpt from './lon.jpg';
export default function Home() {
  return (
    <>
      <main
        style={{
          textAlign: 'center',
          padding: '10px 0px',
          border: '1px solid black',
        }}
      >
        <h1>Image Optimization</h1>
        <Image width={900} height={900} src={ImageOpt} alt="image-test" />
      </main>
    </>
  );
}
