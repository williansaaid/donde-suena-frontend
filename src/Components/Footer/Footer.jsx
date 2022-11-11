import React from "react";

export default function Footer() {
  return (<footer class="p-4 bg-white  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-customGray mt-40">
  <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">DONDE SUENA LOGOt™</a>
  </span>
  <ul class="flex flex-wrap items-center">
    <li> <img src="https://www.iconsdb.com/icons/preview/black/instagram-xxl.png" alt="instagram logo" /></li>
    <li> <img src="https://www.iconsdb.com/icons/preview/black/instagram-xxl.png" alt="twitter logo" /></li>
    <li> <img src="https://www.iconsdb.com/icons/preview/black/instagram-xxl.png" alt="facebook logo" /></li>
  </ul>
  <ul class="flex flex-wrap items-center mt-3 text-sm text-white-500 dark:text-gray-400 sm:mt-0">
  
      <li>
          <a href="#" class="hover:underline">Sobre Nosotros</a>
      </li>
  </ul>
</footer>
)
}
