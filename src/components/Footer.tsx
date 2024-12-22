import Image from 'next/image';

export const Footer = () => (
  <footer className="bg-white shadow-md p-4 mt-8">
    <div className="container mx-auto text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Pulppo. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);
