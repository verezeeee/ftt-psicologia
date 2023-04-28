import * as EmailValidator from 'email-validator';
 
export const validarEmail = (value: string) => EmailValidator.validate(value);