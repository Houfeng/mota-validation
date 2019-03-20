import { useState, useEffect, useLayoutEffect } from "react";
import { utils } from "mota";
import { Validation } from "./Validation";
import { IValidationOptions } from "./IValidationOptions";

export function useValidation(model: any, options?: IValidationOptions) {
  const [owner] = useState<{ validation?: Validation }>({});
  if (!owner.validation) {
    options = { ...options };
    owner.validation = new Validation(utils.getModelState(model), options);
  }
  useLayoutEffect(() => {
    options = { ...options };
    if (!owner.validation || options.initial !== true) return;
    owner.validation.test();
  }, []);
  useEffect(
    () => () => {
      if (!owner.validation) return;
      owner.validation.distory();
    },
    []
  );
  return owner.validation;
}
