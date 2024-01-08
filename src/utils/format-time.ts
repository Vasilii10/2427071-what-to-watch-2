import {SEC_PER_HOUR, SEC_PER_MINUTE} from '../constants/time';

export const formatRunTime = (runTime: number) => {
  const hours = Math.floor(runTime / SEC_PER_HOUR);
  const minutes = Math.floor((runTime % SEC_PER_HOUR) / SEC_PER_MINUTE);
  const seconds = Math.floor(runTime % SEC_PER_MINUTE);

  const preparedHours = String(hours).padStart(2, '0');
  const preparedMinutes = String(minutes).padStart(2, '0');
  const preparedSeconds = String(seconds).padStart(2, '0');

  return `${preparedHours}:${preparedMinutes}:${preparedSeconds}`;
};

export function calcRemainingTime(duration: number, currentTime: number) {
  const time = duration - currentTime;
  const hours = Math.floor(time / SEC_PER_HOUR);
  const minutes = Math.floor((time % SEC_PER_HOUR) / SEC_PER_MINUTE);
  const seconds = Math.floor(time - hours * SEC_PER_HOUR - minutes * SEC_PER_MINUTE);

  return hours > 0
    ? `-${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    : `-${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
