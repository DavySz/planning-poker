import { Header } from "../header/header";
import { IPageTemplate } from "./page-template.types";

export const PageTemplate: React.FC<IPageTemplate> = ({
  children,
  ...rest
}) => {
  return (
    <div className="flex flex-col">
      <Header {...rest} />
      <div className="p-8">{children}</div>
    </div>
  );
};
