import React from "react";
import styled, { keyframes } from "styled-components";
import Image from 'next/image';

class TeamMember extends React.Component {
    buildMember() {
        let initialRotation = this.props.initialRotation

        function spin() {
            return keyframes`
                0% {
                    transform: rotate(${360 - initialRotation}deg);
                }
                100% {
                    transform: rotate(${initialRotation * -1}deg);
                }
            `;
        }

        let size = 100

        const Member = styled.div`
            width: ${size}px;
            height: ${size}px;
            background-color: ${this.props.color};
            animation: ${spin} 4s linear infinite;
            transform-origin: center;
            border-radius: 50%;
            position: absolute;
            overflow: hidden;
        `;

        let member = this.props.member

        return (
            <Member>
                <div color="black">
                    <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill" objectFit="cover"
                    />
                </div>
            </Member>
        )
    }

    render() {
        return (
            this.buildMember()
        );
    }
}

export default TeamMember;