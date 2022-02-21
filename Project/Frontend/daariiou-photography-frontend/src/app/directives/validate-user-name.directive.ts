import { Directive, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomvalidationService } from '../services/custom-validation.service';

@Directive({
  selector: '[appValidateUserName]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => ValidateUserNameDirective), multi: true }]

})
export class ValidateUserNameDirective implements Validator {

  constructor(private customValidator: CustomvalidationService) { }

  validate(control: AbstractControl): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> {
    return this.customValidator.userNameValidator(control);
  }
}