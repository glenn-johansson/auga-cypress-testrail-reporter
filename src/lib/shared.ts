/**
 * Search for all applicable test cases
 * @param title
 * @returns {any}
 */
export function titleToCaseIds(title: string): number[] {
  let caseIds: number[] = [];

  let testCaseIdRegExp: RegExp = /\bT?C(\d+)\b/g;
  let m;
  while ((m = testCaseIdRegExp.exec(title)) !== null) {
    let caseId = parseInt(m[1]);
    caseIds.push(caseId);
  }
  return caseIds;
}

/**
 * Get Testrail elapsed string from duration
 * @param duration
 * @returns {any}
 */
export function durationToElapsed(duration: number): string {
  let elapsed = '';

  const millis = 1000;
  const minMillis = 60 * millis;
  const hrsMillis = 60 * minMillis;

  let hrs = Math.floor(duration / hrsMillis);
  if (hrs > 0) {
    elapsed += `${hrs}h `;
    duration -= hrs * hrsMillis;
  }

  let mins = Math.floor(duration / minMillis);
  if (mins > 0) {
    elapsed += `${mins}m `;
    duration -= mins * minMillis;
  }

  let sec = Math.round(duration / millis);
  if (sec > 0) {
    elapsed += `${sec}s `;
  }
  return elapsed.trim();
}