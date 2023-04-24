import React from "react";
import TeamMember from "./team-member";
import styled, { keyframes } from "styled-components";

class TeamSolarify extends React.Component {
    buildCircle(initialRotation, member) {
        function move(initialRotation) {
            return keyframes`
                0% {
                    transform: translateX(-50%) translateY(-50%) rotate(${initialRotation}deg);
                }
                100% {
                    transform: translateX(-50%) translateY(-50%) rotate(${initialRotation + 360}deg);
                }
            `;
        }

        const size = 300

        const Circle = styled.div`
            position: absolute;
            top: 50%;
            left: 50%;
            width: ${size}px;
            height: ${size}px;
            animation: ${move(initialRotation)} 4s linear infinite;
        `;

        return (
            <Circle>
                <TeamMember color="black" initialRotation={initialRotation} member={member} />
            </Circle>
        )
    }

    render() {
        let teamMembers = [
            {
                "image": "https://picsum.photos/20/300",
                "name": "Basel"
            },
            {
                "image": "https://picsum.photos/20/30",
                "name": "Norhan"
            },
            {
                "image": "https://picsum.photos/200/30",
                "name": "Mohammed"
            },
            {
                "image": "https://picsum.photos/200/300",
                "name": "Hadeel"
            },
        ]

        return (
            <div>
                {teamMembers.map((member, index) => (
                    this.buildCircle(
                        index * 360 / teamMembers.length,
                        member,
                    )
                ))}
            </div>
        );
    }
}

export default TeamSolarify;