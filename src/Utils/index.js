import money from "../assets/icon-money.png";
import chat from "../assets/icon-chat.png";
import security from "../assets/icon-security.png";

/**
 * If the src string includes the word "money", return the money image, if it includes the word
 * "security", return the security image, and if it includes the word "chat", return the chat image
 * @param {String} src - The source of the image.
 * @returns the image that matches the src.
 */
export function checkImage(src) {
  if (src.includes("money")) {
    return money;
  }
  if (src.includes("security")) {
    return security;
  }
  if (src.includes("chat")) {
    return chat;
  }
}
