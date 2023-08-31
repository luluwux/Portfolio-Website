import Link from "next/link";

function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3 border-gray-500">
      <div className="text-gray-500">
      © 2022-2023 All Rights Reserved {" "}
      
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0 text-gray-500">
        <h2 className="fill-gray-500 group-hover:fill-gray-300">Developed with 💚 by 
        <a className="px-1 text-white" href="https://github.com/luluwux">
        Lulu</a></h2>
      </div>
    </footer>
  );
}

export default Footer;
