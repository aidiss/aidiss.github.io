export function useMDXComponents(components) {
  console.log(components);
  return {
    // h1: ({ children }) => <h1 className="font-black font-4xl ">{children}</h1>,
    // h2: ({ children }) => <h2 className="pt-4 font-black">{children}</h2>,
    article: ({ children }) => <article className="prose">{children}</article>,
    ...components,
  };
}
