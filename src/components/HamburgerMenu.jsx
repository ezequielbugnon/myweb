import { useState } from 'preact/hooks';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    {isOpen ? <h1>HOla</h1>: <h1>HOla2</h1>}
    <nav >
      <button
        class="p-2 rounded-md bg-gray-800 text-white flex items-center gap-2"
        onClick={() => {
          console.log("dardo")
          setIsOpen(prevState => !prevState)}}
        aria-label="Toggle menu"
      >
        Menú
      </button>

      <div class={`absolute top-12 right-0 w-48 bg-white shadow-lg rounded-md transition-transform duration-300 ${
        isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
      }`}>
        <ul class="flex flex-col p-2 space-y-2 text-gray-800">
          <li><a href="#" class="block p-2 hover:bg-gray-100">Inicio</a></li>
          <li><a href="#" class="block p-2 hover:bg-gray-100">Servicios</a></li>
          <li><a href="#" class="block p-2 hover:bg-gray-100">Contacto</a></li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default HamburgerMenu;
