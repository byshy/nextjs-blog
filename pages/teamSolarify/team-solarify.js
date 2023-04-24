import React from "react";
import TeamMember from "./team-member";
import styled, { keyframes } from "styled-components";

class TeamSolarify extends React.Component {    
    buildCircle(initialRotation) {
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

        const Circle = styled.div`
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            animation: ${move(initialRotation)} 4s linear infinite;
        `;

        return (
            <Circle>
                <TeamMember color="black" initialRotation={initialRotation}/>
            </Circle>
        )
    }

    render() {
        let teamMembers = [
            'https://picsum.photos/20/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
        ]

        return (
            <div>
                {teamMembers.map((member, index) => (
                    this.buildCircle(index * 360 / teamMembers.length)
                ))}
            </div>
        );
    }
}

export default TeamSolarify;