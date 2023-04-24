import React from "react";
import TeamMember from "./team-member";
import styled, { keyframes } from "styled-components";

class TeamSolarify extends React.Component {
    render() {
        const move = keyframes`
            0% {
                transform: translateX(-50%) translateY(-50%) rotate(0deg);
            }
            100% {
                transform: translateX(-50%) translateY(-50%) rotate(360deg);
            }
        `;

        const Circle = styled.div`
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100px;
            height: 100px;
            margin-top: -50px;
            margin-left: -50px;
            background-color: red;
            border-radius: 50%;
            animation: ${move} 4s linear infinite;
        `;

        return (
            <Circle>
                <TeamMember/>
            </Circle>
        );
    }
}

export default TeamSolarify;