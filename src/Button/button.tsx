import React, {
  ReactNode,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  ReactElement,
  CSSProperties,
} from 'react';
import {BasedButton} from './styles';
import {SHAPE} from './constants';

export type Shape = keyof typeof SHAPE;

export type ReactButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonPropsT = {
  text?: string;
  className?: string;
  children?: ReactNode;
  customStyles?: CSSProperties;
  shape?: Shape;
  isLoading?: boolean;
  isActive?: boolean;
  disabled?: boolean;
  iconPre?: ReactNode;
  iconEnd?: ReactNode;
  onClick?: () => void;
} & ReactButtonProps;

function Button({
  text,
  type = 'button',
  className,
  customStyles,
  shape = 'default',
  children,
  isLoading = false,
  isActive = false,
  disabled = false,
  iconPre,
  iconEnd,
  onClick,
}: ButtonPropsT): ReactElement {
  return (
    <BasedButton
      type={type}
      onClick={onClick}
      className={[className, shape].join(' ')}
      style={customStyles}
      {...{
        isLoading,
        disabled,
        iconPre,
        iconEnd,
        isActive,
      }}
    >
      {iconPre && iconPre}
      {text && <span>{text}</span>}
      {children || ''}
      {isLoading && <p>Spinner here</p>}
      {iconEnd && iconEnd}
    </BasedButton>
  );
}

// const ForwardedButton = React.forwardRef<ButtonPropsT, HTMLButtonElement>(
//   (props: ButtonPropsT, ref) => <Button forwardedRef={ref} {...props} />
// );
// ForwardedButton.displayName = 'Button';
// export default ForwardedButton;
export default Button;
