import { template } from '../settings';

export function getPath(path: string): string {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    // Remove base from the beginning if it's already there
    const pathWithoutBase = cleanPath.startsWith(template.base.slice(1)) 
        ? cleanPath.slice(template.base.length - 1)
        : cleanPath;
    // Combine base and path
    return `${template.base}/${pathWithoutBase}`.replace(/\/+/g, '/');
}
