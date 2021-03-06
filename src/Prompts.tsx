export interface DialogPromptOptions {
  initialValue?: string;
  placeholder?: string;
  required?: boolean;
}

/**
 * The class to represent prompt options
 */
export class DialogPrompt {
  initialValue?: string
  placeholder?: string
  required?: boolean

  constructor (options: DialogPromptOptions = {}) {
    const {initialValue, placeholder, required} = options
    this.initialValue = initialValue
    this.placeholder = placeholder
    this.required = required
  }
}

/**
 * The class to represent text prompt options
 */
export class TextPrompt extends DialogPrompt {
}

/**
 * The class to represent passowrd prompt options
 */
export class PasswordPrompt extends DialogPrompt {
}
