export interface AlertModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    message?: string;
    okButtonText?: string;
    cancelButtonText?: string;
    onOk: () => void;
}