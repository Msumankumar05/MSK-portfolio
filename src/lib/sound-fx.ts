// Sound FX Engine (Disabled per user request)

export const isSoundEnabled = (): boolean => false;
export const toggleSound = (): boolean => false;
export const subscribeSound = (_callback: (enabled: boolean) => void): (() => void) => () => {};
export const initAudio = (): void => {};
export const playHoverSound = (): void => {};
export const playClickSound = (): void => {};
export const playThemeSound = (): void => {};
export const playTerminalBeep = (): void => {};
export const playSuccessSound = (): void => {};
export const playModalSound = (_isOpen?: boolean): void => {};
export const playMatrixSound = (): void => {};
export const playEagleSound = (): void => {};
