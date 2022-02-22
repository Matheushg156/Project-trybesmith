import { Error } from '../interfaces/ErrorsInterface';

const validateUserName = (userName: string): Error | false => {
  if (!userName) {
    return { code: 400, error: 'Username is required' };
  }
  if (typeof userName !== 'string') {
    return { code: 422, error: 'Username must be a string' };
  }
  if (userName.length < 3) {
    return { code: 422, error: 'Username must be longer than 2 characters' };
  }
  return false;
};

const validateClasse = (classe: string): Error | false => {
  if (!classe) {
    return { code: 400, error: 'Classe is required' };
  }
  if (typeof classe !== 'string') {
    return { code: 422, error: 'Classe must be a string' };
  }
  if (classe.length < 3) {
    return { code: 422, error: 'Classe must be longer than 2 characters' };
  }
  return false;
};

const validateLevel = (level: number): Error | false => {
  if (!level) {
    return { code: 400, error: 'Level is required' };
  }
  if (typeof level !== 'number') {
    return { code: 422, error: 'Level must be a number' };
  }
  if (level < 1) {
    return { code: 422, error: 'Level must be greater than 0' };
  }
  return false;
};

export default {
  validateUserName,
  validateClasse,
  validateLevel,
};