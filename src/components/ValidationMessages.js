export const GetValidationMessages = (elem) => {
  let errors = [];
  if(!elem.checkValidity()) {
    if(elem.validity.valueMissing) {
      errors.push("Value required");
    }

    if(elem.validity.tooShort) {
      errors.push("Value is too short");
    }

    if(elem.validity.rangeUnderFlow) {
      errors.push("Value is too small");
    }
  }

  return errors;
}