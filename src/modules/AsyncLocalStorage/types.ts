export type Preferences = {
    colorMode?: 'light' | 'dark' | null;
};

export type LocalStore = {
    preferences: Preferences;
};
