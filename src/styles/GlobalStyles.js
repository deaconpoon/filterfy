import { createGlobalStyle } from "styled-components";
import modernNormalize from "styled-modern-normalize";

const GlobalStyle = createGlobalStyle`
    
    // Import normalize.css
    ${modernNormalize}

    * {
        box-sizing: border-box;
    }

    html {
        width: 100%;
        height: 100%;
    }

    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: #ffffff;
        color: ${({ theme }) => theme.colors.text};
        font-size: 1rem;
        font-family: ${({ theme }) => theme.fonts.primary};
        line-height: 1.5rem;
        font-weight: 400;
        text-rendering: optimizeLegibility;
        &.blur {
            overflow: hidden;
            #___gatsby #main-content > * {
            filter: blur(5px) ;
            transition: all .3s ease-out;
            pointer-events: none;
            user-select: none;
            }
            }
        }
        &.splashScreen {
            position: fixed;
            overflow: hidden;
        }

    a {
        display: inline-block;
        color: inherit;
        cursor: pointer;
        &:hover,
        &:focus {
            outline: 0;
        }
    }

    h1 {
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.375rem;
        color: ${({ theme }) => theme.colors.primary};
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
            font-size: 2.625rem;
            line-height: 4rem;
        }
    }

    h2 {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.5rem;
        color: ${({ theme }) => theme.colors.primary};
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
            font-size: 2rem;
            line-height: 3rem;
        }
    }

    h3 {
        font-weight: 700;
        font-size: 1.75rem;
        line-height: 2.25rem;
        color: ${({ theme }) => theme.colors.primary};

    }

    h4 {
        font-size: 1rem;
        font-weight: 400;
    }

    hr {
        margin: 3rem auto;
        border-width: .05rem;
        color: ${({ theme }) => theme.colors.tertiary};
        opacity: 0.1;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    .layout {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap; 
    }
    .body {
        padding: 2em;
        overflow: auto;
        min-height: 2em;
        max-width: 1400px;
        margin: 0 auto;
    }
    .grid {

        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: 1em;
            grid-template-columns: repeat(4, 1fr);
        }
        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: 1em;
            grid-template-columns: repeat(5, 1fr);
        }
        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: 1em;
            grid-template-columns: repeat(6, 1fr) ;
        
        }
        @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: 1em;
            grid-template-columns: repeat(8, 1fr) ;
        
        }
    }

    .hide {
        display: none;
    }

    .capitalize {
        text-transform: capitalize;
    }
`;

export default GlobalStyle;
