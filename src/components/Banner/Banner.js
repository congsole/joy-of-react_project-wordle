import React from 'react';

function Banner({ userStatus, answer, tryNum, handleRestart }) {
  const classNm = `${userStatus === 'won' ? 'happy' : 'sad'} banner`;
  const happyBannerContent = (
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {tryNum} guesses</strong>.
      </p>
  );

  const sadBannerContent = (
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  );

  return (
    <div className={classNm}>
      {userStatus === 'won' ? happyBannerContent : sadBannerContent}

        <button className={"btn restart"} onClick={handleRestart}>Restart</button>
    </div>
  );
}

export default Banner;
