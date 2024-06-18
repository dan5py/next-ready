import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8">
        <Image
          className="dark:invert"
          src="/logo.svg"
          alt="Next Ready logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-center font-mono text-sm sm:text-left">
          <li className="mb-2">
            Get started by editing{' '}
            <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]">
              app/page.tsx
            </code>
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            className="flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent bg-foreground px-4 text-sm text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] sm:h-12 sm:px-5 sm:text-base"
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdan5py%2Fnext-ready&project-name=next-ready&repository-name=next-ready"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="flex h-10 items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:h-12 sm:min-w-44 sm:px-5 sm:text-base"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Next.js docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <span className="text-sm">
          Template by{' '}
          <a
            className="bg-gradient-to-r from-[#ff0080] to-[#7928ca] bg-clip-text font-medium text-transparent transition-all hover:text-xl"
            href="https://github.com/dan5py"
            target="_blank"
            rel="noopener noreferrer"
          >
            dan5py
          </a>
        </span>
      </footer>
    </div>
  );
}
