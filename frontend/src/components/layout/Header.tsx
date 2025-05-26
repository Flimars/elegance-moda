'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaSearch, FaShoppingBag, FaBars, FaTimes, FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [buscaAberta, setBuscaAberta] = useState(false);
  const [termoBusca, setTermoBusca] = useState('');
  
  const pathname = usePathname();
  
  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
    if (buscaAberta) setBuscaAberta(false);
  };
  
  const toggleBusca = () => {
    setBuscaAberta(!buscaAberta);
    if (menuAberto) setMenuAberto(false);
  };
  
  const handleBusca = (e: React.FormEvent) => {
    e.preventDefault();
    if (termoBusca.trim()) {
      // Em um ambiente real, isso redirecionaria para a página de resultados
      console.log(`Buscando por: ${termoBusca}`);
      // window.location.href = `/busca?q=${encodeURIComponent(termoBusca)}`;
      setBuscaAberta(false);
      setTermoBusca('');
    }
  };
  
  const menuItems = [
    { label: 'Início', href: '/' },
    { label: 'Blusas', href: '/produtos?categoria=blusas' },
    { label: 'Saias', href: '/produtos?categoria=saias' },
    { label: 'Conjuntos', href: '/produtos?categoria=conjuntos' },
    { label: 'Vestidos', href: '/produtos?categoria=vestidos' },
    { label: 'Blazer / Casaco', href: '/produtos?categoria=blazer-casaco' },
    { label: 'Acessórios', href: '/produtos?categoria=acessorios' },
    { label: 'Promoções', href: '/promocoes' },
    { label: 'Plus Size', href: '/produtos?categoria=plus-size' },
  ];
  
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-sm">
      {/* Barra superior */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Busca (Mobile) */}
          <div className="lg:hidden">
            <button 
              onClick={toggleBusca}
              className="p-2 text-gray-500 hover:text-rose-400"
              aria-label="Buscar"
            >
              <FaSearch />
            </button>
          </div>
          
          {/* Logo */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <Link href="/" className="block">
              <Image 
                src="/images/logo.png" 
                alt="Elegance Moda" 
                width={150} 
                height={60} 
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>
          
          {/* Busca (Desktop) */}
          <div className="hidden lg:flex items-center relative max-w-xs">
            <form onSubmit={handleBusca} className="relative w-full">
              <input
                type="text"
                placeholder="Buscar"
                value={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-rose-300"
              />
              <button 
                type="submit" 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                aria-label="Buscar"
              >
                <FaSearch />
              </button>
            </form>
          </div>
          
          {/* Login e Carrinho */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/login" 
              className="hidden md:flex items-center text-gray-700 hover:text-rose-400"
            >
              <span className="text-sm">Login / Cadastre-se</span>
            </Link>
            
            <Link 
              href="/carrinho" 
              className="flex items-center text-gray-700 hover:text-rose-400 relative"
              aria-label="Carrinho"
            >
              <FaShoppingBag className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-rose-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Link>
            
            {/* Menu Toggle (Mobile) */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-500 hover:text-rose-400"
              aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            >
              {menuAberto ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Barra de navegação */}
      <nav className="hidden lg:block border-b border-gray-100">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link 
                  href={item.href}
                  className={`block py-4 text-sm transition-colors ${
                    isActive(item.href) 
                      ? 'text-rose-400 font-medium' 
                      : 'text-gray-700 hover:text-rose-400'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      
      {/* Menu Mobile */}
      {menuAberto && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-b border-gray-100"
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    className={`block py-2 transition-colors ${
                      isActive(item.href) 
                        ? 'text-rose-400 font-medium' 
                        : 'text-gray-700'
                    }`}
                    onClick={() => setMenuAberto(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/login"
                  className="block py-2 text-gray-700"
                  onClick={() => setMenuAberto(false)}
                >
                  Login / Cadastre-se
                </Link>
              </li>
            </ul>
            
            {/* Redes sociais no menu mobile */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-rose-100 text-gray-600 hover:text-rose-400 p-2 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-rose-100 text-gray-600 hover:text-rose-400 p-2 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-rose-100 text-gray-600 hover:text-rose-400 p-2 rounded-full transition-colors"
                  aria-label="TikTok"
                >
                  <FaTiktok />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-rose-100 text-gray-600 hover:text-rose-400 p-2 rounded-full transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Busca Mobile */}
      {buscaAberta && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-b border-gray-100"
        >
          <div className="container mx-auto px-4 py-4">
            <form onSubmit={handleBusca} className="relative">
              <input
                type="text"
                placeholder="O que você procura?"
                value={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-rose-300"
                autoFocus
              />
              <button 
                type="submit" 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                aria-label="Buscar"
              >
                <FaSearch />
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </header>
  );
}






// ============= CÓDIGO ALTERADO PARA O FRONTEND DO PROJETO ELEGANCE MODA =============
// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';

// const Header = () => {
//   return (
//     <header className="w-full bg-white">
//       {/* Barra superior */}
//       <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//         {/* Campo de busca */}
//         <div className="relative w-48">
//           <input
//             type="text"
//             placeholder="Buscar"
//             className="w-full pl-8 pr-4 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-rose-200"
//           />
//           <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//         </div>

//         {/* Logo */}
//         <div className="flex-grow flex justify-center">
//           <Link href="/">
//             <div className="relative h-16 w-40">
//               <Image 
//                 src="/images/logo.png" 
//                 alt="Elegance Moda" 
//                 fill
//                 style={{ objectFit: 'contain' }}
//                 priority
//               />
//             </div>
//           </Link>
//         </div>

//         {/* Login e Carrinho */}
//         <div className="flex items-center space-x-4">
//           <Link href="/login" className="flex items-center text-gray-700 hover:text-rose-400 transition-colors">
//             <FaUser className="mr-1" />
//             <span className="text-sm">Login / Cadastre-se</span>
//           </Link>
//           <Link href="/carrinho" className="flex items-center text-gray-700 hover:text-rose-400 transition-colors">
//             <FaShoppingBag className="mr-1" />
//             <span className="text-sm">Carrinho (0)</span>
//           </Link>
//         </div>
//       </div>

//       {/* Menu de navegação */}
//       <nav className="border-t border-b border-gray-200">
//         <div className="container mx-auto px-4">
//           <ul className="flex justify-center space-x-8 py-3">
//             <li>
//               <Link href="/" className="text-gray-700 hover:text-rose-400 transition-colors">
//                 Início
//               </Link>
//             </li>
//             <li className="group relative">
//               <Link href="/produtos?categoria=blusas" className="text-gray-700 hover:text-rose-400 transition-colors flex items-center">
//                 Blusas
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </Link>
//               <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block z-10">
//                 <div className="py-2">
//                   <Link href="/produtos?subcategoria=camisetas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50">
//                     Camisetas
//                   </Link>
//                   <Link href="/produtos?subcategoria=regatas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50">
//                     Regatas
//                   </Link>
//                   <Link href="/produtos?subcategoria=cropped" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50">
//                     Cropped
//                   </Link>
//                 </div>
//               </div>
//             </li>
//             <li className="group relative">
//               <Link href="/produtos?categoria=saias" className="text-gray-700 hover:text-rose-400 transition-colors flex items-center">
//                 Saias
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </Link>
//               <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block z-10">
//                 <div className="py-2">
//                   <Link href="/produtos?subcategoria=midi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50">
//                     Midi
//                   </Link>
//                   <Link href="/produtos?subcategoria=longa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50">
//                     Longa
//                   </Link>
//                   <Link href="/produtos?subcategoria=curta" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50">
//                     Curta
//                   </Link>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <Link href="/produtos?categoria=conjuntos" className="text-gray-700 hover:text-rose-400 transition-colors">
//                 Conjuntos
//               </Link>
//             </li>
//             <li className="group relative">
//               <Link href="/produtos?categoria=vestidos" className="text-gray-700 hover:text-rose-400 transition-colors flex items-center">
//                 Vestidos
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </Link>
//               <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block z-10">
//                 <div className="py-2">
//                   <Link href="/produtos?subcategoria=casual" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50">
//                     Casual
//                   </Link>
//                   <Link href="/produtos?subcategoria=festa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50">
//                     Festa
//                   </Link>
//                 </div>
//               </div>
//             </li>
//             <li className="group relative">
//               <Link href="/produtos?categoria=blazer" className="text-gray-700 hover:text-rose-400 transition-colors flex items-center">
//                 Blazer / Casaco
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </Link>
//               <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block z-10">
//                 <div className="py-2">
//                   <Link href="/produtos?subcategoria=blazer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50">
//                     Blazer
//                   </Link>
//                   <Link href="/produtos?subcategoria=casaco" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50">
//                     Casaco
//                   </Link>
//                 </div>
//               </div>
//             </li>
//             <li className="group relative">
//               <Link href="/produtos?categoria=acessorios" className="text-gray-700 hover:text-rose-400 transition-colors flex items-center">
//                 Acessórios
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </Link>
//               <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block z-10">
//                 <div className="py-2">
//                   <Link href="/produtos?subcategoria=bolsas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50">
//                     Bolsas
//                   </Link>
//                   <Link href="/produtos?subcategoria=bijuterias" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50">
//                     Bijuterias
//                   </Link>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <Link href="/promocoes" className="text-gray-700 hover:text-rose-400 transition-colors">
//                 Promoções
//               </Link>
//             </li>
//             <li>
//               <Link href="/produtos?categoria=plus-size" className="text-gray-700 hover:text-rose-400 transition-colors">
//                 Plus Size
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
