import React from 'react';
export interface LandingProps {
  messageToDisplay?: string;
}
export const Landing: React.FC<LandingProps> = ({ messageToDisplay }) => {
  return (
    <h1 className="display-4" data-testid="messageToDisplay" id="message-to-display">
      {messageToDisplay}
    </h1>
  );
};
