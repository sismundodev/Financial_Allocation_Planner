// File: components/Header.tsx

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
      <div className="text-sm font-black tracking-tight text-black w-24">
        {title}
      </div>
      <div className="flex items-center space-x-1.5">
        <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
          <svg
            className="w-2.5 h-2.5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18L9 11.25l4.306 4.307L21.75 6.75M21.75 6.75H16.5M21.75 6.75v5.25"
            />
          </svg>
        </div>
        <span className="text-xs font-bold text-black tracking-tight">
          Allocate
        </span>
      </div>
      <div className="w-24 flex justify-end">
        <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-700">
          S
        </div>
      </div>
    </header>
  );
}
