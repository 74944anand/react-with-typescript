import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onChange: () => void;
}

const Alert = ({ children, onChange }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible" onClick={onChange}>
      {children}
    </div>
  );
};

export default Alert;
