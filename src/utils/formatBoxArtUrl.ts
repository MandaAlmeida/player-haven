export const formatBoxArtUrl = (url: string, width: number, height: number): string => {
    return url.replace('{width}', String(width)).replace('{height}', String(height));
};