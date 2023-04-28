import { Typography, TypographyProps } from "@mui/material";

type Props = {
  children: React.ReactNode;
} & TypographyProps

export const Text = ({ children, ...props}: Props) => <Typography { ...props}>{children}</Typography>;
