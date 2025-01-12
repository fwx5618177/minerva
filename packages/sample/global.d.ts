/// <reference types="@minerva/lib-web-components" />

declare module "*.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.css" {
  const classes: { [key: string]: string };
  export default classes;
}
