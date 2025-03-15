"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean); // Tách các phần của đường dẫn

  return (
    <nav className="text-gray-600 text-sm">
      <ul className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-black hover:underline">
            Trang chủ   /   Tài nguyên  /   Blog
          </Link>
        </li>
        {paths.map((path, index) => {
          const href = "/" + paths.slice(0, index + 1).join("/");
          const isLast = index === paths.length - 1;

          return (
            <li key={href} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-gray-500">{path}</span>
              ) : (
                <Link href={href} className="text-blue-500 hover:underline">
                  {path}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
