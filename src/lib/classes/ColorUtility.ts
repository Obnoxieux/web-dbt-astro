export class ColorUtility {
    // Tailwind needs full class names in source to generate CSS, can be in comments though
    // text-primary text-secondary text-accent text-warning
    // fill-primary fill-secondary fill-accent fill-warning

    static determineColor(language: string): string {
        switch (language) {
            case "Swift":
                return "accent"
            case "Kotlin":
                return "secondary"
            case "Svelte":
                return "primary"
            case "TypeScript":
                return "primary"
            case "PHP":
                return "warning"
            default:
                return "warning"
        }
    }
}