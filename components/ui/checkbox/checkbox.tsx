"use client";

import { forwardRef, useState } from 'react';
import styles from './checkbox.module.css';

interface CheckboxProps {
    label?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    error?: boolean;
    className?: string;
    id?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
    label,
    checked,
    defaultChecked,
    onChange,
    disabled = false,
    error = false,
    className = '',
    id,
    ...props
}, ref) => {
    const [isChecked, setIsChecked] = useState(defaultChecked || false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = event.target.checked;
        // If component is controlled, only call onChange
        if (checked !== undefined) {
            onChange?.(newChecked);
        } else {
            // If component is uncontrolled, update internal state
            setIsChecked(newChecked);
            onChange?.(newChecked);
        }
    };

    return (
        <label
            className={`
        ${styles.checkboxWrapper}
        ${disabled ? styles.disabled : ''}
        ${error ? styles.error : ''}
        ${className}
      `}
        >
            <input
                type="checkbox"
                ref={ref}
                checked={checked !== undefined ? checked : isChecked}
                onChange={handleChange}
                disabled={disabled}
                className={styles.checkboxInput}
                id={id}
                {...props}
            />
            <span className={styles.checkmark} />
            {label && <span className={styles.label}>{label}</span>}
        </label>
    );
});

Checkbox.displayName = 'Checkbox';
export { Checkbox };