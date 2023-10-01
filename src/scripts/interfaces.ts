export default interface Project {
    title: string;
    description: string;
    status: string;
    statuscolor: string;
    categories: string[];
    languages: { [key: string]: number };
    gh_api: string;
    version: string;
    backgroud: string; // It seems there is a typo in the property name ("backgroud"), it should be corrected to "background" if intended.
    links: {
        GH: string;
        WB: string;
        MR: string;
    };
    visible: string;
    last_update: string;
}

export default interface LanguageColors {
    JavaScript: string;
    HTML: string;
    CSS: string;
    Python: string;
    Java: string;
    'C++': string;
    C: string;
    Rust: string;
    Svelte: string;
    TypeScript: string;
    Shell: string;
    PHP: string;
    Ruby: string;
    Go: string;
    Dart: string;
    Kotlin: string;
    Swift: string;
    Scala: string;
    'Objective-C': string;
    Lua: string;
    Perl: string;
    CoffeeScript: string;
    PowerShell: string;
    Haskell: string;
    Clojure: string;
    TeX: string;
    Elixir: string;
    R: string;
    'Vim script': string;
    Assembly: string;
    D: string;
    OCaml: string;
    'Emacs Lisp': string;
    Crystal: string;
    Vue: string;
    Julia: string;
    Nim: string;
}
