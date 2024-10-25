import { forwardRef } from 'react';
import styles from './button.module.css';
import { ButtonProps } from './button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    fullWidth = false,
    leftIcon,
    rightIcon,
    loadingText,
    iconSpacing = 8,
    className,
    disabled,
    type = 'button',
    ...props
}, ref) => {
    const contentStyles = {
        gap: `${iconSpacing}px`,
    };

    return (
        <button
            ref={ref}
            type={type}
            className={`
        ${styles.button}
        ${styles[variant]}
        ${styles[size]}
        ${fullWidth ? styles.fullWidth : ''}
        ${isLoading ? styles.loading : ''}
        ${className || ''}
      `}
            disabled={disabled || isLoading}
            {...props}
        >
            <span
                className={styles.content}
                style={contentStyles}
            >
                {isLoading && (
                    <span className={styles.loader}>
                        <span className={styles.loaderDot} />
                    </span>
                )}
                {!isLoading && leftIcon && (
                    <span className={styles.icon}>{leftIcon}</span>
                )}
                <span className={styles.text}>
                    {isLoading ? loadingText || children : children}
                </span>
                {!isLoading && rightIcon && (
                    <span className={styles.icon}>{rightIcon}</span>
                )}
            </span>
        </button>
    );
});

Button.displayName = 'Button';
export { Button };