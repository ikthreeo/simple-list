const modules = import.meta.glob('./*svg', {
    query: '?raw',
    import: 'default',
    eager: true
});

export const icons = Object.fromEntries(
    Object.entries(modules).map(([path, svg]) => {
        const name = path.split('/').pop()?.replace('.svg', '') ?? '';
        return [name, svg];
    })
);