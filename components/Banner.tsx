import React from 'react';

export default function Banner(): JSX.Element {
  return (
    <div className="flex justify-center space-x-1 bg-zinc-100 p-2 text-xs dark:bg-zinc-900 md:text-sm lg:text-base">
      <span className="text-zinc-800 dark:text-zinc-200">
        Si te interesa nuestro contenido podes seguirnos en este
      </span>
      <a
        href="https://linktr.ee/ututolinux"
        target="_blank"
        className="text-yellow-500 underline dark:text-yellow-300"
      >
        link
      </a>
      .
    </div>
  );
}
