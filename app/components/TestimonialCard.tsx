"use client";

import { Avatar, Blockquote, Card } from "flowbite-react";
import { ptSans, ptSerif } from "../fonts";

interface TestimonialCardProps {
  img: string;
  name: string;
  content: string;
}

export function TestimonialCard({ img, name, content }: TestimonialCardProps) {
  return (
    <Card href="#" className="mb-8 md:mb-0 lg:mx-auto w-full">
      <figure className="mx-auto max-w-screen-md text-center">
        <svg
          className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <Blockquote>
          <div className={ptSans.className}>
            <p className="text-lg italic text-gray-900 dark:text-white">
              {content}
            </p>
          </div>
        </Blockquote>
        <figcaption className="mt-6 flex items-center justify-center space-x-3">
          <Avatar rounded size="xs" img={img} alt="profile picture" />
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <div className={ptSans.className}>
              <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                {name}
              </cite>
            </div>
          </div>
        </figcaption>
      </figure>
    </Card>
  );
}
