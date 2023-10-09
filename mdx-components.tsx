import type { MDXComponents } from 'mdx/types'
 
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
 
// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 className="text-blue-500 text-center">{children}</h1>,
    // h2: ({children}) => <h2 className="text-gray-800">{children}</h2>,
    // img: ({ src, alt, ...props }) => <div className="w-full"><img src={src} alt={alt} {...props} className="w-4/12 text-center mx-auto" /></div>,
    ...components,
  }
}