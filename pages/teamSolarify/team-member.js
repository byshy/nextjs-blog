import React from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

class TeamMember extends React.Component {
  buildMember() {
    let initialRotation = this.props.initialRotation;

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

    const memberSize =
      this.props.memberSize === "default" ? 100 : this.props.memberSize;

    const Member = styled.div`
      width: ${memberSize}px;
      height: ${memberSize}px;
      animation: ${spin} 4s linear infinite;
      transform-origin: center;
      position: absolute;
    `;

    const member = this.props.member;

    return (
      <>
        <Member>{this.props.children}</Member>
      </>
    );
  }

  render() {
    return this.buildMember();
  }
}

export default TeamMember;
