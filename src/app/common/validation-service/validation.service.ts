export class ValidationService {
    static trimSpace(input) {
        if(!input.value || input.value.trim().length > 0) {
          return null;
        } else {
          return { 'invalidAddress': true };
        }
      }
}