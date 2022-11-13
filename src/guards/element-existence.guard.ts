import { SourceElementModel } from "../render/render.model";

export const elementShouldNotExistGuard = (selector: string) => (target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any) {
    const url = new URL(location.href)

    if (document.querySelector(selector) === null) {
      console.log("Проверка отсутствия элемента... Элемента нет... ОК");
      originalMethod.apply(this, args);
    } else {
        console.log("Проверка отсутствия элемента... Элемент есть... Плохо");
        return;
    }
  };

  return descriptor;
};

export const elementShouldExistGuard = (element: SourceElementModel) => (target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any) {
    const url = new URL(location.href)

    if (element !== null) {
      console.log("Проверка наличия элемента... Элемент есть... ОК");
      originalMethod.apply(this, args);
    } else {
        console.log("Проверка наличия элемента... Элемента нет. Плохо");
        return;
    }
  };

  return descriptor;
};