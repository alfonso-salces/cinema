export type ChipClasses = 'block' | 'inline-block';

export type FabColors = 'background--add' | 'background--remove' | 'background--edit';

export interface FabConfig {
    backgroundColor: FabColors;
    icon: string;
}