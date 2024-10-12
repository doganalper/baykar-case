import {
  BorderedButton,
  type BorderedButtonProps,
} from "@/components/ui/bordered-button";

export function SignupButton(props: Omit<BorderedButtonProps, "href">) {
  return (
    <BorderedButton {...props} href="#">
      Sign up now
    </BorderedButton>
  );
}
