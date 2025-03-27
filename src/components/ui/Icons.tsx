import { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 2L2 19.7778H22L12 2Z" fill="currentColor" />
    </svg>
  );
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.5 3a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM1 8.5a7.5 7.5 0 1113.307 4.746l4.693 4.694-1.414 1.414-4.694-4.693A7.5 7.5 0 011 8.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 2a3 3 0 100 6 3 3 0 000-6zM8 5a2 2 0 114 0 2 2 0 01-4 0z"
        fill="currentColor"
      />
      <path d="M10 9a5 5 0 00-5 5v4h10v-4a5 5 0 00-5-5z" fill="currentColor" />
    </svg>
  );
}

export function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.293 4.293a1 1 0 011.414 0l.707.707A1 1 0 114.293 6.42l-.707-.707a1 1 0 010-1.414zm11.414 0a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM10 6a4 4 0 100 8 4 4 0 000-8zm-6 4a6 6 0 1112 0 6 6 0 01-12 0zm-2 0a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm14 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM4.293 13.58a1 1 0 011.414 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707zm11.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 111.414-1.414zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2v12a6 6 0 100-12z"
        fill="currentColor"
      />
    </svg>
  );
}
