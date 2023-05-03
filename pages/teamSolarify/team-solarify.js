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
                    transform: translateX(-50%) translateY(-50%) rotate(${
                      initialRotation + 360
                    }deg);
                }
            `;
    }

    const circleSize =
      this.props.circleSize === "default" ? 300 : this.props.circleSize;
    const Circle = styled.div`
      border: 1px solid red;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      width: ${circleSize}px;
      height: ${circleSize}px;
      animation: ${move(initialRotation)} 4s linear infinite;
    `;

    const memberSize = this.props.memberSize;
    return (
      <>
        <Circle>
          <TeamMember
            color="black"
            initialRotation={initialRotation}
            member={member}
            memberSize={memberSize}
          />
        </Circle>
        {this.props.children}
      </>
    );
  }

  render() {
    const teamMembers = this.props.teamMembers;

    return (
      <div>
        {teamMembers.map((member, index) =>
          this.buildCircle((index * 360) / teamMembers.length, member)
        )}
      </div>
    );
  }
}

export default TeamSolarify;
