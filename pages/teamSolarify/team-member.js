import React from "react";
import styled, { keyframes } from "styled-components";

class TeamMember extends React.Component {
    render() {
        const spin = keyframes`
            0% {
                transform: rotate(360deg);
            }
            100% {
                transform: rotate(0deg);
            }
        `;

        const Member = styled.div`
            width: 50px;
            height: 50px;
            background-color: blue;
            animation: ${spin} 4s linear infinite;
            transform-origin: center;
            position: absolute;
            top: 50%;
            left: 50%;
        `;

        return (
            <Member />
        );
    }
}

export default TeamMember;