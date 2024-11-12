import { cn } from '@/lib/utils';
import { SquareDashedMousePointer } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Logo({ 
    fontSize = "text-2xl", 
    iconSize = 20 
}: { 
    fontSize?: string; 
    iconSize?: number; 
}) {
  return (
    <Link 
      href="/" 
      className={cn(
        "flex items-center gap-2 font-extrabold", 
        fontSize 
      )}
    >
      <div className="rounded-xl bg-gradient-to-r
      from-emerald-500 to bg-emerald-600 p-2">
        <SquareDashedMousePointer size={iconSize}
        className="stroke-white" />
      </div>
      <div>
        <span className="bg-gradient-to-r from bg-emerald-500
        to-emerald-600 bg-clip-text text-transparent">
            Scrape
        </span>
        <span className="text-stone-700 dark:text-stone-300">
            Flow
        </span>
      </div>
    </Link>
  );
}

export default Logo;
