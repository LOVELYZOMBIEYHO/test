import { useState, useEffect } from "react";

export default function BtnSwitchComment({
  switchRelatedVideos,
  setSwitchRelatedVideos,
  switchComment,
  setSwitchComment,
}) {
  //   const [switchComment, setSwitchComment] = useState(false);

  const clickSwitchComments = (e) => {
    e.preventDefault();
    setSwitchRelatedVideos(false);
    setSwitchComment(true);
  };

  const clickSwitchRelatedVideos = (e) => {
    e.preventDefault();
    setSwitchRelatedVideos(true);
    setSwitchComment(false);
  };

  return (
    // CSS prevent a button with user-select: none from selecting outer text on mobile
    <div className="noSelect">
      <button onClick={clickSwitchRelatedVideos} className="p-3">
        相關影片
      </button>
      <button onClick={clickSwitchComments} className="p-3">
        留言
      </button>
    </div>
  );
}
