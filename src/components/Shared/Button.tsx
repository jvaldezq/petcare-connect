import {cn} from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: ButtonVariant;
    children: React.ReactNode;
}

export enum ButtonVariant {
    primary = 'primary',
    secondary = 'secondary',
    outline = 'outline',
    link = 'link',
}

const variantClasses = {
    [ButtonVariant.primary]: 'border-2 border-primary bg-primary text-tertiary hover:bg-primary/[0.8] hover:border-primary/[0.8]',
    [ButtonVariant.secondary]: 'border-2 border-secondary bg-secondary text-tertiary hover:bg-secondary/[0.8] hover:border-secondary/[0.8]',
    [ButtonVariant.outline]: 'border-2 border-primary text-primary hover:bg-primary hover:text-tertiary',
    [ButtonVariant.link]: 'text-primary underline hover:text-gray-700',
}

const baseClasses = 'px-4 py-2 font-semibold rounded-lg transition-all duration-500 ease-in-out focus:outline-none';

export const Button = (props: ButtonProps) => {
    const { children, variant = ButtonVariant.primary } = props;
    return <button className={cn(
        baseClasses,
        variantClasses[variant],
        props.className,
    )} {...props}>{children}</button>
};