import { SourceElementModel } from "../render/render.model";

export const elementShouldNotExistGuard = (selector: string) => (target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any) {
    const url = new URL(location.href)

    console.log("Проверка отсутствия элемента...");

    if (document.querySelector(selector) === null) {
      console.log("Элемента нет... ОК");
      originalMethod.apply(this, args);
    } else {
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

    console.log("Проверка наличия элемента...");

    if (element !== null) {
      console.log("Элемент есть... ОК");
      originalMethod.apply(this, args);
    } else {
        return;
    }
  };

  return descriptor;
};