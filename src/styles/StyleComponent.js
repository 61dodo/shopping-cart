// src/styles/StyleComponent.js
import styled from '@emotion/styled';

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.gap || 0}px;
    padding: ${(props) => props.padding || 0}px;
`;
