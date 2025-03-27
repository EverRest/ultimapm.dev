export function generateFlatColor(): string {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 31) + 20;
    const lightness = Math.floor(Math.random() * 31) + 40;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

export function generateFlatColors(count: number): string[] {
    const colors: string[] = [];
    for (let i = 0; i < count; i++) {
        colors.push(generateFlatColor());
    }
    return colors;
}