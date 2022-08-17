import React, { useRef, useState } from "react";
import IdleTimer from "react-idle-timer";

import { useDispatch } from "react-redux";
import { logoutAsync } from "../slices/auth";

// import SessionTimeoutDialog from "./SessionTimeoutDialog";

const SessionTimeout = () => {
  let countdownInterval;
  let timeout;
  const idleTimer = useRef(null);
  const dispatch = useDispatch();

  const [timeoutModalOpen, setTimeoutModalOpen] = useState(false);
  const [timeoutCountdown, setTimeoutCountdown] = useState(0);

  const clearSessionTimeout = () => {
    clearTimeout(timeout);
  };

  const clearSessionInterval = () => {
    clearInterval(countdownInterval);
  };

  const handleLogout = async (isTimedOut = false) => {
    try {
      setTimeoutModalOpen(false);
      clearSessionInterval();
      clearSessionTimeout();
      dispatch(logoutAsync());
    } catch (err) {
      console.error(err);
    }
  };
  const handleContinue = () => {
    setTimeoutModalOpen(false);
    clearSessionInterval();
    clearSessionTimeout();
  };
  const onActive = () => {
    if (!timeoutModalOpen) {
      clearSessionInterval();
      clearSessionTimeout();
    }
  };
  const onIdle = () => {
    const delay = 1000 * 1;
    if (window.sessionStorage.getItem("accessToken")) {
      timeout = setTimeout(() => {
        let countDown = 10;
        // setTimeoutModalOpen(true);
        setTimeoutCountdown(countDown);
        countdownInterval = setInterval(() => {
          if (countDown > 0) {
            setTimeoutCountdown(--countDown);
          } else {
            handleLogout(true);
          }
        }, 1000);
      }, delay);
    }
  };
  return (
    <>
      <IdleTimer
        ref={idleTimer}
        onActive={onActive}
        onIdle={onIdle}
        debounce={250}
        timeout={300000}
        // timeout={5000}
      />
    </>
  );
};
export default SessionTimeout;
