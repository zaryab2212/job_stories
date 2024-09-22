import React from "react";

const JobCard = ({item}) => {
  
  
  return (<>
    <div className="mainCard">
      <h5 className={`${item.url ? "clickAble": "cardHeading"}`}>{item.title }</h5>
     <div className="cardSpan">
        <span>by {item.by} </span>
        <span>{new Date(item.time*1000).toLocaleString()} </span>
      </div> 
    </div>
    </>);
};

export default JobCard;
