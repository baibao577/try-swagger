/**
* @example {
*  "message": "hello world",
*  "arm": 2,
*  "legs": 99
* }
*/

export interface PingReq {
  message: string;
  arm: number;
  legs: number;

  /**
   * @example "Happy"
   */
  head?: string;
}