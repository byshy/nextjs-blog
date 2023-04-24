import React from "react";
import styled, { keyframes } from "styled-components";

class TeamMember extends React.Component {
    buildMember(initialRotation) {
        function spin(initialRotation) {
            return keyframes`
                0% {
                    transform: rotate(${360 - initialRotation}deg);
                }
                100% {
                    transform: rotate(${initialRotation * -1}deg);
                }
            `;
        }

        const Member = styled.div`
            width: 50px;
            height: 50px;
            background-color: ${this.props.color};
            animation: ${spin(initialRotation)} 4s linear infinite;
            transform-origin: center;
            position: absolute;
        `;

        return (
            <Member>
                <div color="black">
                    {initialRotation}
                </div>
            </Member>
        )
    }

    render() {
        return (
            this.buildMember(this.props.initialRotation)
        );
    }
}

export default TeamMember;