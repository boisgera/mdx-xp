// src/vite-env.d.ts
/// <reference types="vite/client" />

declare module '*.civet' {
  const component: any
  export default component
}

declare module '*.mdx' {
  import type { MDXProps } from 'mdx/types'
  const MDXComponent: (props: MDXProps) => JSX.Element
  export default MDXComponent
}