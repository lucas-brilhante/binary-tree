export const getOnlyNumbers = (value: string) => {
    return value.replace(/\D/g, '');
}