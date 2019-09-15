export function sealed(value: string) {
    return function (constructor: Function) {
        console.log(`Sealing the constructor ${value}`);
        Object.seal(constructor.prototype);
        Object.seal(constructor);
    }
}

export function logger<TFunction extends Function>(constructor: TFunction): TFunction {
    let newConstructor: Function = function () {
        console.log(`Creating new instance`, constructor.name);
        this.age = 30;
    };
    newConstructor.prototype = Object.create(constructor.prototype);
    newConstructor.prototype.printLibrarian = function () {
        console.log(`Librarian name: ${this.name}, Librarian age: ${this.age}`);
    };
    return <TFunction>newConstructor;
}

export function writable(isWritable: boolean) {
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = isWritable;
    }
}

export function timeout(ms: number) {
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
        let newDescriptor = Object.create(descriptor);
        newDescriptor.value = function (...args) {
            setTimeout(() => {
                descriptor.value.apply(this, args);
            }, ms);
        };
        return newDescriptor;
    }
}

export function logParameter(target: Object, propertyKey: string, parameterIndex: number) {
    let params_indexes: string = `${propertyKey}_decor_params_indexes`;

    if (Array.isArray(target[params_indexes])) {
        target[params_indexes].push(parameterIndex);
    }
    else {
        target[params_indexes] = [parameterIndex];
    }
}


export function logMethod(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;
    let newDescriptor = Object.create(descriptor);
    newDescriptor.value = function (...args) {
        let params_indexes: string = `${propertyName}_decor_params_indexes`;
        if (Array.isArray(target[params_indexes])) {
            for (let i = 0; i < args.length; i++) {
                if (target[params_indexes].indexOf(i) !== -1) {
                    console.log(`Method: ${propertyName}, ParamIndex: ${i}, ParamValue: ${args[i].toString()}`);
                }
            }
            return originalMethod.apply(this, args);
        }
    };
    return newDescriptor;
}

export function format(pref: string = 'Mr./Mrs.') {
    function makeProperty<T>(
        prototype: any,
        propertyName: string,
        getTransformer: (value: any) => T,
        setTransformer: (value: any) => T
      ) {
        const values = new Map<any, T>();
        Object.defineProperty(prototype, propertyName, {
          set(firstValue: any) {
            Object.defineProperty(this, propertyName, {
              get() {
                if (getTransformer) {
                  return getTransformer(values.get(this));
                } else {
                  values.get(this);
                }
              },
              set(value: any) {
                if (setTransformer) {
                  values.set(this, setTransformer(value));
                } else {
                  values.set(this, value);
                }
              },
              enumerable: true
            });
            this[propertyName] = firstValue;
          },
          enumerable: true,
          configurable: true
        });
      }

    return function (target: Object, propertyName: string) {
        makeProperty(target, propertyName, value => `${pref} ${value}`, value => value);
    };
}


export function positiveInteger(target: Object, propertyName: string, descriptor: PropertyDescriptor) {
    const setter = descriptor.set;
    descriptor.set = function(value: number) {
        if (value < 1 || Math.floor(value) !== value) {
            throw new Error(`Value ${value} is invalid`);
        }
        setter.call(this, value);
    };
}