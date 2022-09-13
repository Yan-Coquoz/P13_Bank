import money from "../assets/icon-money.png";
import chat from "../assets/icon-chat.png";
import security from "../assets/icon-security.png";

/**
 * Si la chaîne src inclut le mot "money", renvoie l'image de l'argent, si elle inclut le mot
 * "security", renvoie l'image de sécurité, et si elle inclut le mot "chat", renvoie l'image du chat
 * @param {String} src - La source de l'image.
 * @returns l'image qui correspond au src.
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

/**
 * Si la chaîne n'est pas vide, Convertit le premier caractère d'une chaîne en majuscule et le reste en minuscule.
 * @param {String} str - Chaîne à convertir.
 * @returns {String} Le premier caractère de la chaîne est converti en majuscule et le reste de la chaîne est
 * converti en minuscule.
 */
export function fromLowerToUpperCase(str) {
  if (str.length > 0) {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
  }
}

/**
 * Il renvoie vrai si l'adresse e-mail est valide et faux si ce n'est pas le cas
 * @param {String} email - L'adresse e-mail à tester.
 * @returns {Boolean} Une valeur booléenne.
 */
export function checkEmail(email) {
  const testEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]{2,}[.][A-Z]{2,4}$/gim;
  return !!testEmail.test(email);
}

/**
 * Il vérifie si le mot de passe comporte entre 8 et 15 caractères, contient au moins une lettre
 * minuscule, une lettre majuscule et un chiffre
 * @param {String} password - Le mot de passe à tester.
 * @returns {Boolean} Une valeur booléenne.
 */
export function checkPassword(password) {
  const testPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Z\d$@!%*?&_]{8,15}$/gim;
  return !!testPassword.test(password);
}

/**
 * Il prend quatre arguments et renvoie un objet avec quatre propriétés
 * @param {String} date - La date de la transaction
 * @param {String} description - Le descriptif de l'opération
 * @param {number} amount - Le montant d'argent qui a été dépensé ou reçu.
 * @param {number} balance - Le solde du compte après la transaction.
 * @returns Un objet avec les propriétés date, description, montant et solde.
 */
export function createData(date, description, amount, balance) {
  return {
    date,
    description,
    amount,
    balance,
  };
}
