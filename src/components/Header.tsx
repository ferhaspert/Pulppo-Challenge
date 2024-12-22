import Image from 'next/image';

export const Header = () => (
  <header className="bg-white shadow-md p-4">
    <div className="container mx-auto">
      <Image
        src={`/logo.png`}
        className="h-10 object-contain"
        alt="Pulppo"
        width={256}
        height={54}
      />
    </div>
  </header>
);
