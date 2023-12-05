import styled, { createGlobalStyle } from 'styled-components';

export const font = {
    family: "Yaldevi",
};

export const color = {
    primary: '#313444',
    secondary: '#242532',
    text: '#CFD2DD',
    textInactive: 'rgba(255, 255, 255, .5)',
    accent: '#EDBB54',
    itemBg: '#404354'
}

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body {
        font-family: ${font.family};
        color: ${color.text};
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    section {
        background-color: ${color.primary};
    }

    section:not(first-child) {
        padding: 8rem 0;
    }
`;

export const SectionWrapper = styled.div`
    width: ${({ width }) => width ? width : '80%'};
    height: ${({ height }) => height};
    max-width: ${({ maxwidth }) => maxwidth ? maxwidth : '770px'};
    margin: 0 auto;

    display: ${({ display }) => display};
    flex-direction: ${({ flexdirection }) => flexdirection};
    justify-content: ${({ justifycontent }) => justifycontent};
    align-items: ${({ alignitems }) => alignitems};
    gap: ${({ gap }) => gap};
    flex-wrap: ${({flexWrap}) => flexWrap};
`;

export const Button = styled.button`
    width: 205px;
    height: 62px;
    background: ${color.accent};
    color: ${color.secondary};
    font-size: 20px;
    font-weight: 600;
    border: none;
    cursor: pointer;
`;

export const SectionTitle = styled.div`
    color: ${color.textInactive};
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;