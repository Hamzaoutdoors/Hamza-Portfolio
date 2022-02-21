import { css } from 'styled-components';

export const mobile = (props) => css`
        @media only screen and (max-width: 991px) {
        ${props};
        }
    `;

export const phone = (props) => css`
        @media only screen and (max-width: 768px) {
        ${props};
        }
`;

export const desktop = (props) => css`
        @media only screen and (min-width: 992px) {
        ${props};
        }
    `;
