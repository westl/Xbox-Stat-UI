import React from 'react';
import './ProfileDisplay.scss';
export interface ProfileDisplayProps {
  initialMessage?: string;
  profile?: any;
}
export const ProfileDisplay: React.FC<ProfileDisplayProps> = ({
  initialMessage,
  profile
}) => {
  if (!profile) return null;
  const messageToDisplay = !profile && initialMessage;
  return (
    <div className="profile-display">
      <div className="row">
        <div className="col-sm-12">
          <div
            className="row"
            style={{
              backgroundColor: `#${profile.preferredColor.primaryColor}`
            }}
          >
            <div className="col-sm-12 col-md-4">
              <div data-testid="initialMessage">{messageToDisplay}</div>
              <div className="pic-container my-3">
                <img className="avatar" src={profile.displayPicRaw} />
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              Achievements and Gamerscore
            </div>
            <div className="col-sm-12 col-md-4">Current game details</div>
          </div>
        </div>
      </div>
    </div>
  );
};
