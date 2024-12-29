export interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "outlined" | "shadow" | "elevated" | "filled";
  type?: "default" | "noHeader" | "noFooter" | "noHeaderFooter";
  className?: string;
}

export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  textColor?: string;
}

export interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  textColor?: string;
  animation?: "fadeIn" | "slideIn" | "zoomIn";
}

export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  textColor?: string;
}
