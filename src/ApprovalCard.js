import React from 'react';

//must reference props.children here to add divs at index.js, won't show up otherwise.

//functional components - simple logic
const ApprovalCard = props => {
  return (
    <div className="ui card">
      <div>{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
